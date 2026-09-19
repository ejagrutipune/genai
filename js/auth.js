// GitHub Pages browser login gate. Static files remain publicly accessible.
window.genaiAuth = (() => {
  const clientId = '55241675267-vh1gcsn07uq3cbeir7vj57l58h0h2c0d.apps.googleusercontent.com';
  const tokenKey = 'genai.googleCredential';
  const decode = value => Uint8Array.from(atob(value.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
  const json = value => JSON.parse(new TextDecoder().decode(decode(value)));

  function clear() {
    [tokenKey, 'userEmail', 'userName', 'attemptedEmail'].forEach(key => sessionStorage.removeItem(key));
  }

  async function verify(credential) {
    if (typeof credential !== 'string') throw new Error('Please sign in with Google.');
    const parts = credential.split('.');
    if (parts.length !== 3) throw new Error('Invalid Google sign-in. Please try again.');
    const header = json(parts[0]);
    const claims = json(parts[1]);
    if (header.alg !== 'RS256' || !header.kid ||
        !['https://accounts.google.com', 'accounts.google.com'].includes(claims.iss) ||
        claims.aud !== clientId || !claims.sub ||
        !Number.isFinite(claims.exp) || claims.exp * 1000 <= Date.now()) {
      throw new Error('Your Google sign-in is invalid or expired. Please sign in again.');
    }
    const response = await fetch('https://www.googleapis.com/oauth2/v3/certs');
    if (!response.ok) throw new Error('Unable to verify Google sign-in. Please try again.');
    const { keys } = await response.json();
    const jwk = keys.find(key => key.kid === header.kid);
    if (!jwk) throw new Error('Unable to verify Google sign-in. Please sign in again.');
    const key = await crypto.subtle.importKey('jwk', jwk,
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
    const valid = await crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, decode(parts[2]),
      new TextEncoder().encode(parts[0] + '.' + parts[1]));
    if (!valid) throw new Error('Invalid Google sign-in. Please try again.');
    if (claims.email_verified !== true || typeof claims.email !== 'string' ||
        !claims.email.toLowerCase().endsWith('@gmail.com')) {
      throw new Error('Please use a verified Gmail account.');
    }
    const usersResponse = await fetch('resources/userslist.json', { cache: 'no-store' });
    if (!usersResponse.ok) throw new Error('Unable to check approved accounts. Please try again.');
    const users = await usersResponse.json();
    const user = Object.entries(users).find(([, email]) =>
      typeof email === 'string' && email.trim().toLowerCase() === claims.email.toLowerCase());
    if (!user) throw new Error('Your Gmail account is not approved. Please contact the administrator.');
    return { email: claims.email, name: user[0], expires: claims.exp * 1000 };
  }

  async function signIn(credential) {
    clear();
    const user = await verify(credential);
    sessionStorage.setItem(tokenKey, credential);
    sessionStorage.setItem('userEmail', user.email);
    sessionStorage.setItem('userName', user.name);
    return user;
  }

  if (document.documentElement.dataset.authPage === 'protected') {
    let expiryTimer;
    const leave = () => {
      document.documentElement.removeAttribute('data-authenticated');
      clear();
      window.location.replace('index.html');
    };
    const guard = async () => {
      document.documentElement.removeAttribute('data-authenticated');
      clearTimeout(expiryTimer);
      try {
        const user = await verify(sessionStorage.getItem(tokenKey));
        if (user.expires <= Date.now()) return leave();
        document.documentElement.setAttribute('data-authenticated', 'true');
        expiryTimer = setTimeout(leave, Math.min(user.expires - Date.now(), 2147483647));
      } catch {
        leave();
      }
    };
    document.querySelector('#logout-link').addEventListener('click', event => {
      event.preventDefault();
      leave();
    });
    window.addEventListener('pageshow', event => { if (event.persisted) guard(); });
    window.addEventListener('pagehide', () => document.documentElement.removeAttribute('data-authenticated'));
    guard();
  }

  return { verify, signIn, clear };
})();
