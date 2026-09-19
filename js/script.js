// Called by the Google Identity Services sign-in button.
window.handleCredentialResponse = async function(response) {
  const status = document.getElementById('login-status');
  status.textContent = 'Verifying your Google account…';
  try {
    await window.genaiAuth.signIn(response && response.credential);
    window.location.replace('homepage.html');
  } catch (error) {
    window.genaiAuth.clear();
    status.textContent = error.message || 'Sign-in failed. Please try again.';
  }
};
