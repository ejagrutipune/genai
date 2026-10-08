const homeButton = document.querySelector('#home-button');
const careerButton = document.querySelector('#career-roadmap-button');
const aiButton = document.querySelector('#ai-button');
const machineLearningButton = document.querySelector('#machine-learning-button');
const deepLearningButton = document.querySelector('#deep-learning-button');
const statisticsButton = document.querySelector('#statistics-button');
const careerActions = document.querySelector('#career-actions');
const aiActions = document.querySelector('#ai-actions');
const machineLearningTiles = document.querySelector('#machine-learning-tiles');
const deepLearningTiles = document.querySelector('#deep-learning-tiles');
const deepLearningViewer = document.querySelector('#deep-learning-viewer');
const deepLearningNav = document.querySelector('#deep-learning-nav');
const deepLearningStage = document.querySelector('#deep-learning-stage');
const deepLearningTitle = document.querySelector('#deep-learning-title');
const deepLearningBreadcrumb = document.querySelector('#deep-learning-breadcrumb');
const deepLearningProgress = document.querySelector('#deep-learning-progress');
let deepLearningLoaded = false;
let deepLearningMenu = null;
let deepLearningLessons = [];
let currentDeepLearningLesson = 0;
const supervisedAlgorithms = document.querySelector('#supervised-algorithms');
const supervisedAlgorithmsLink = document.querySelector('#supervised-algorithms-link');
const unsupervisedAlgorithms = document.querySelector('#unsupervised-algorithms');
const unsupervisedAlgorithmsLink = document.querySelector('#unsupervised-algorithms-link');
const slrPrerequisiteButton = document.querySelector('#slr-prerequisite-button');
const slrCoreConceptsButton = document.querySelector('#slr-core-concepts-button');
const slrCaseStudiesButton = document.querySelector('#slr-case-studies-button');
const mlrPrerequisiteButton = document.querySelector('#mlr-prerequisite-button');
const mlrCoreButton = document.querySelector('#mlr-core-button');
const mlrCaseStudyButton = document.querySelector('#mlr-case-study-button');
const kmeansPrerequisiteButton = document.querySelector('#kmeans-prerequisite-button');
const kmeansCoreButton = document.querySelector('#kmeans-core-button');
const kmeansUnderstandingButton = document.querySelector('#kmeans-understanding-button');
const kmeansProblemsButton = document.querySelector('#kmeans-problems-button');
const prerequisiteViewer = document.querySelector('#slr-prerequisite-viewer');
const coreViewer = document.querySelector('#slr-core-viewer');
const coreButtons = [...document.querySelectorAll('[data-core-image]')];
const coreImage = document.querySelector('#core-concept-image');
const coreProgress = document.querySelector('#core-progress');
let currentCore = 0;
const caseStudiesViewer = document.querySelector('#slr-case-studies-viewer');
const caseStudyButtons = [...document.querySelectorAll('[data-case-image]')];
const caseStudyImage = document.querySelector('#case-study-image');
const caseStudyProgress = document.querySelector('#case-study-progress');
const caseGroupButtons = [...document.querySelectorAll('[data-case-group]')];
const caseStudy1Downloads = document.querySelector('#case-study-1-downloads');
const caseStudy2Downloads = document.querySelector('#case-study-2-downloads');
let currentCaseStudy = 0;
const mlrCaseStudyViewer = document.querySelector('#mlr-case-study-viewer');
const mlrPrerequisiteViewer = document.querySelector('#mlr-prerequisite-viewer');
const mlrPrerequisiteButtons = [...document.querySelectorAll('[data-mlr-prerequisite-image]')];
const mlrPrerequisiteImage = document.querySelector('#mlr-prerequisite-image');
const mlrPrerequisiteProgress = document.querySelector('#mlr-prerequisite-progress');
let currentMlrPrerequisite = 0;
const mlrCoreViewer = document.querySelector('#mlr-core-viewer');
const mlrCaseButtons = [...document.querySelectorAll('[data-mlr-case-image]')];
const mlrCaseGroupButtons = [...document.querySelectorAll('[data-mlr-case-group]')];
const mlrCase3Downloads = document.querySelector('#mlr-case-3-downloads');
const mlrCaseImage = document.querySelector('#mlr-case-study-image');
const mlrCaseProgress = document.querySelector('#mlr-case-progress');
let currentMlrCase = 0;
const kmeansPrerequisiteViewer = document.querySelector('#kmeans-prerequisite-viewer');
const kmeansCoreViewer = document.querySelector('#kmeans-core-viewer');
const kmeansUnderstandingViewer = document.querySelector('#kmeans-understanding-viewer');
const kmeansProblemsViewer = document.querySelector('#kmeans-problems-viewer');
const kmeansCoreButtons = [...document.querySelectorAll('[data-kmeans-core-image]')];
const kmeansCoreImage = document.querySelector('#kmeans-core-image');
const kmeansCoreProgress = document.querySelector('#kmeans-core-progress');
let currentKmeansCore = 0;
const kmeansUnderstandingButtons = [...document.querySelectorAll('[data-kmeans-understanding-image]')];
const kmeansUnderstandingImage = document.querySelector('#kmeans-understanding-image');
const kmeansUnderstandingProgress = document.querySelector('#kmeans-understanding-progress');
let currentKmeansUnderstanding = 0;
const lessonButtons = [...document.querySelectorAll('[data-lesson-image]')];
const lessonImage = document.querySelector('#lesson-image');
const lessonProgress = document.querySelector('#lesson-progress');
let currentLesson = 0;
const statisticsViewer = document.querySelector('#statistics-viewer');
const statisticsButtons = [...document.querySelectorAll('[data-stat-image]')];
const statisticsImage = document.querySelector('#statistics-image');
const statisticsProgress = document.querySelector('#statistics-progress');
let currentStatistic = 0;
const careerImage = document.querySelector('#career-roadmap-image');
const aiImage = document.querySelector('#ai-content-image');
const imageDialog = document.querySelector('#image-dialog');
const dialogImage = document.querySelector('#dialog-image');
const dialogTitle = document.querySelector('#dialog-title');
const dialogClose = document.querySelector('#dialog-close');

function clearActiveButtons(container) {
  container.querySelectorAll('button').forEach((button) => button.classList.remove('active'));
}

function clearMainMenu() {
  document.querySelectorAll('.ejmenu .menu-button').forEach((button) => button.classList.remove('active'));
}

function clearCanvas() {
  careerActions.hidden = true;
  aiActions.hidden = true;
  machineLearningTiles.hidden = true;
  deepLearningTiles.hidden = true;
  deepLearningViewer.hidden = true;
  supervisedAlgorithms.hidden = true;
  unsupervisedAlgorithms.hidden = true;
  prerequisiteViewer.hidden = true;
  coreViewer.hidden = true;
  caseStudiesViewer.hidden = true;
  mlrCaseStudyViewer.hidden = true;
  mlrPrerequisiteViewer.hidden = true;
  mlrCoreViewer.hidden = true;
  kmeansPrerequisiteViewer.hidden = true;
  kmeansCoreViewer.hidden = true;
  kmeansUnderstandingViewer.hidden = true;
  kmeansProblemsViewer.hidden = true;
  statisticsViewer.hidden = true;
  careerImage.hidden = true;
  aiImage.hidden = true;
  careerButton.setAttribute('aria-expanded', 'false');
  aiButton.setAttribute('aria-expanded', 'false');
  machineLearningButton.setAttribute('aria-expanded', 'false');
  deepLearningButton.setAttribute('aria-expanded', 'false');
  statisticsButton.setAttribute('aria-expanded', 'false');
  clearActiveButtons(careerActions);
  clearActiveButtons(aiActions);
}

function openSection(activeButton, activeSection, activeImage, inactiveButton, inactiveSection) {
  const willOpen = activeSection.hidden;

  activeSection.hidden = !willOpen;
  inactiveSection.hidden = true;
  statisticsViewer.hidden = true;
  coreViewer.hidden = true;
  caseStudiesViewer.hidden = true;
  mlrCaseStudyViewer.hidden = true;
  mlrPrerequisiteViewer.hidden = true;
  mlrCoreViewer.hidden = true;
  kmeansPrerequisiteViewer.hidden = true;
  kmeansCoreViewer.hidden = true;
  kmeansUnderstandingViewer.hidden = true;
  kmeansProblemsViewer.hidden = true;
  statisticsButton.setAttribute('aria-expanded', 'false');
  activeImage.hidden = !willOpen;
  activeButton.setAttribute('aria-expanded', String(willOpen));
  inactiveButton.setAttribute('aria-expanded', 'false');
  clearActiveButtons(activeSection);
  clearMainMenu();
  if (willOpen) activeButton.classList.add('active');
}

homeButton.addEventListener('click', () => {
  clearCanvas();
  clearMainMenu();
  homeButton.classList.add('active');
});

careerButton.addEventListener('click', () => {
  machineLearningTiles.hidden = true;
  supervisedAlgorithms.hidden = true;
  machineLearningButton.setAttribute('aria-expanded', 'false');
  careerImage.src = 'images/tracks/1_Different_Tracks.png';
  careerImage.alt = 'AI career roadmap showing different tracks, roles and career progression';
  openSection(careerButton, careerActions, careerImage, aiButton, aiActions);
});

aiButton.addEventListener('click', () => {
  machineLearningTiles.hidden = true;
  supervisedAlgorithms.hidden = true;
  machineLearningButton.setAttribute('aria-expanded', 'false');
  aiImage.src = 'images/AI/1_AI_Ecosystems.png';
  aiImage.alt = 'Artificial Intelligence ecosystem overview';
  openSection(aiButton, aiActions, aiImage, careerButton, careerActions);
});

machineLearningButton.addEventListener('click', () => {
  const willOpen = machineLearningButton.getAttribute('aria-expanded') === 'false';

  clearCanvas();
  clearMainMenu();
  machineLearningTiles.hidden = !willOpen;
  machineLearningButton.setAttribute('aria-expanded', String(willOpen));
  if (willOpen) machineLearningButton.classList.add('active');
});

function deepLearningLabel(value) {
  return String(value).replace(/\.(png|jpe?g|xlsx|ejagruti)$/i, '').replace(/^\d+(?:\.\d+)?[_ -]*/, '').replace(/[_-]+/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').trim();
}
function deepLearningPath(trail) { return `images/Deep_Learning/${trail.map((part) => String(part).replace(/\s+/g, '_')).join('/')}`; }
function showDeepLearningFile(file, trail, button) {
  document.querySelectorAll('.deep-learning-file').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const path = deepLearningPath([...trail, file]);
  const title = [...trail, deepLearningLabel(file)].map(deepLearningLabel).join(' · ');
  deepLearningStage.innerHTML = `<h3>${title}</h3>`;
  if (/\.(png|jpe?g|gif|webp|svg)$/i.test(file)) {
    const image = document.createElement('img'); image.src = path; image.alt = title; deepLearningStage.appendChild(image); return;
  }
  const message = document.createElement('p'); message.textContent = 'This learning resource is available as a download.';
  const download = document.createElement('a'); download.className = 'deep-learning-download'; download.href = path; download.download = file; download.textContent = `Download ${file.split('.').pop().toUpperCase()} resource`;
  deepLearningStage.append(message, download);
}
function createDeepLearningBranch(value, trail) {
  const fragment = document.createDocumentFragment();
  if (Array.isArray(value)) {
    value.forEach((file) => { const button = document.createElement('button'); button.type = 'button'; button.className = 'deep-learning-file'; button.textContent = deepLearningLabel(file); button.addEventListener('click', () => showDeepLearningFile(file, trail, button)); fragment.appendChild(button); });
    return fragment;
  }
  Object.entries(value).forEach(([name, children]) => { const group = document.createElement('details'); group.open = trail.length < 1; const summary = document.createElement('summary'); summary.textContent = deepLearningLabel(name); group.append(summary, createDeepLearningBranch(children, [...trail, name])); fragment.appendChild(group); });
  return fragment;
}
async function loadDeepLearningContents() {
  if (deepLearningLoaded) return;
  try { const response = await fetch('resources/menu.json'); if (!response.ok) throw new Error(); const menu = await response.json(); if (!menu['Deep Learning']) throw new Error(); deepLearningTree.replaceChildren(createDeepLearningBranch(menu['Deep Learning'], [])); deepLearningLoaded = true; }
  catch { deepLearningTree.innerHTML = '<p class="deep-learning-loading">Unable to load the Deep Learning course contents.</p>'; }
}
async function openDeepLearning() {
  // Hide every other canvas section directly. This keeps the Deep Learning menu
  // independent from the setup required by the other course viewers.
  document.querySelectorAll('.ejcanvas > section').forEach((section) => {
    if (section !== deepLearningViewer) section.hidden = true;
  });
  clearMainMenu();
  deepLearningViewer.hidden = false;
  deepLearningButton.setAttribute('aria-expanded', 'true');
  deepLearningButton.classList.add('active');
  await loadDeepLearningContents();
}

function findDeepLearningGroup(path) {
  return path.reduce((group, key) => group && group[key], deepLearningMenu);
}

function collectDeepLearningLessons(group, trail, lessons = []) {
  if (Array.isArray(group)) {
    group.forEach((file) => lessons.push({ file, trail }));
    return lessons;
  }
  Object.entries(group).forEach(([name, child]) => collectDeepLearningLessons(child, [...trail, name], lessons));
  return lessons;
}

function showDeepLearningLesson(index) {
  currentDeepLearningLesson = (index + deepLearningLessons.length) % deepLearningLessons.length;
  const lesson = deepLearningLessons[currentDeepLearningLesson];
  [...deepLearningNav.children].forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === currentDeepLearningLesson));
  deepLearningStage.innerHTML = '';
  const path = deepLearningPath([...lesson.trail, lesson.file]);
  if (/\.(png|jpe?g|gif|webp|svg)$/i.test(lesson.file)) {
    const image = document.createElement('img'); image.src = path; image.alt = deepLearningLabel(lesson.file); deepLearningStage.appendChild(image);
  } else {
    const download = document.createElement('a'); download.className = 'deep-learning-download'; download.href = path; download.download = lesson.file; download.textContent = `Download ${lesson.file.split('.').pop().toUpperCase()} resource`; deepLearningStage.appendChild(download);
  }
  deepLearningProgress.textContent = `${currentDeepLearningLesson + 1} of ${deepLearningLessons.length}`;
}

function openDeepLearningGroup(path) {
  deepLearningLessons = collectDeepLearningLessons(findDeepLearningGroup(path), path);
  deepLearningTiles.hidden = true;
  deepLearningViewer.hidden = false;
  deepLearningBreadcrumb.textContent = `Deep Learning · ${deepLearningLabel(path[0])}`;
  deepLearningTitle.textContent = path.slice(1).map(deepLearningLabel).join(' · ');
  deepLearningNav.innerHTML = '';
  deepLearningLessons.forEach((lesson, index) => {
    const button = document.createElement('button'); button.type = 'button';
    button.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span>${deepLearningLabel(lesson.file)}`;
    button.addEventListener('click', () => showDeepLearningLesson(index)); deepLearningNav.appendChild(button);
  });
  showDeepLearningLesson(0);
}

async function loadDeepLearningMenu() {
  if (deepLearningLoaded) return true;
  const response = await fetch('resources/menu.json');
  const menu = await response.json();
  deepLearningMenu = menu['Deep Learning'];
  deepLearningLoaded = Boolean(deepLearningMenu);
  return deepLearningLoaded;
}

deepLearningButton.addEventListener('click', () => {
  const willOpen = deepLearningTiles.hidden;
  clearCanvas(); clearMainMenu();
  deepLearningTiles.hidden = !willOpen;
  deepLearningButton.setAttribute('aria-expanded', String(willOpen));
  if (willOpen) deepLearningButton.classList.add('active');
});
document.querySelectorAll('[data-deep-path]').forEach((button) => button.addEventListener('click', async () => {
  try { if (await loadDeepLearningMenu()) openDeepLearningGroup(button.dataset.deepPath.split('|')); }
  catch { deepLearningTitle.textContent = 'Unable to load course content'; deepLearningViewer.hidden = false; }
}));
document.querySelector('#previous-deep-learning').addEventListener('click', () => showDeepLearningLesson(currentDeepLearningLesson - 1));
document.querySelector('#next-deep-learning').addEventListener('click', () => showDeepLearningLesson(currentDeepLearningLesson + 1));
document.querySelector('#back-to-deep-learning').addEventListener('click', () => { deepLearningViewer.hidden = true; deepLearningTiles.hidden = false; });

function showStatistic(index) {
  currentStatistic = (index + statisticsButtons.length) % statisticsButtons.length;
  statisticsButtons.forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === currentStatistic));
  statisticsImage.src = statisticsButtons[currentStatistic].dataset.statImage;
  statisticsImage.alt = `${statisticsButtons[currentStatistic].textContent.trim()} statistics lesson`;
  statisticsProgress.textContent = `${currentStatistic + 1} of ${statisticsButtons.length}`;
}

statisticsButton.addEventListener('click', () => {
  const willOpen = statisticsButton.getAttribute('aria-expanded') === 'false';
  clearCanvas();
  clearMainMenu();
  statisticsViewer.hidden = !willOpen;
  statisticsButton.setAttribute('aria-expanded', String(willOpen));
  if (willOpen) {
    statisticsButton.classList.add('active');
    showStatistic(0);
  }
});

statisticsButtons.forEach((button, index) => button.addEventListener('click', () => showStatistic(index)));
document.querySelector('#previous-statistics').addEventListener('click', () => showStatistic(currentStatistic - 1));
document.querySelector('#next-statistics').addEventListener('click', () => showStatistic(currentStatistic + 1));

document.querySelectorAll('[data-about-image]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const card = link.closest('.learning-card');
    dialogImage.src = link.href;
    dialogImage.alt = `About ${card.querySelector('strong').textContent.trim()}`;
    dialogTitle.textContent = card.querySelector('strong').textContent.trim();
    imageDialog.showModal();
  });
});

supervisedAlgorithmsLink.addEventListener('click', (event) => {
  event.preventDefault();
  machineLearningTiles.hidden = true;
  unsupervisedAlgorithms.hidden = true;
  supervisedAlgorithms.hidden = false;
  coreViewer.hidden = true;
  caseStudiesViewer.hidden = true;
  mlrCaseStudyViewer.hidden = true;
});

unsupervisedAlgorithmsLink.addEventListener('click', (event) => {
  event.preventDefault();
  machineLearningTiles.hidden = true;
  supervisedAlgorithms.hidden = true;
  unsupervisedAlgorithms.hidden = false;
});

function showLesson(index) {
  currentLesson = (index + lessonButtons.length) % lessonButtons.length;
  lessonButtons.forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === currentLesson));
  lessonImage.src = lessonButtons[currentLesson].dataset.lessonImage;
  lessonImage.alt = `${lessonButtons[currentLesson].textContent.trim()} prerequisite lesson`;
  lessonProgress.textContent = `${currentLesson + 1} of ${lessonButtons.length}`;
}

slrPrerequisiteButton.addEventListener('click', () => {
  supervisedAlgorithms.hidden = true;
  coreViewer.hidden = true;
  caseStudiesViewer.hidden = true;
  prerequisiteViewer.hidden = false;
  showLesson(0);
});

function showCoreConcept(index) {
  currentCore = (index + coreButtons.length) % coreButtons.length;
  coreButtons.forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === currentCore));
  coreImage.src = coreButtons[currentCore].dataset.coreImage;
  coreImage.alt = `${coreButtons[currentCore].textContent.trim()} Simple Linear Regression lesson`;
  coreProgress.textContent = `${currentCore + 1} of ${coreButtons.length}`;
}

slrCoreConceptsButton.addEventListener('click', () => {
  supervisedAlgorithms.hidden = true;
  prerequisiteViewer.hidden = true;
  caseStudiesViewer.hidden = true;
  coreViewer.hidden = false;
  showCoreConcept(0);
});

coreButtons.forEach((button, index) => button.addEventListener('click', () => showCoreConcept(index)));
document.querySelector('#previous-core').addEventListener('click', () => showCoreConcept(currentCore - 1));
document.querySelector('#next-core').addEventListener('click', () => showCoreConcept(currentCore + 1));
document.querySelector('#back-from-core').addEventListener('click', () => {
  coreViewer.hidden = true;
  supervisedAlgorithms.hidden = false;
});

function showCaseStudy(index) {
  const visibleButtons = caseStudyButtons.filter((button) => !button.hidden);
  currentCaseStudy = (index + visibleButtons.length) % visibleButtons.length;
  caseStudyButtons.forEach((button) => button.classList.remove('active'));
  visibleButtons[currentCaseStudy].classList.add('active');
  caseStudyImage.src = visibleButtons[currentCaseStudy].dataset.caseImage;
  caseStudyImage.alt = `${visibleButtons[currentCaseStudy].textContent.trim()} solved case study`;
  caseStudyProgress.textContent = `${currentCaseStudy + 1} of ${visibleButtons.length}`;
}

function selectCaseGroup(group) {
  caseGroupButtons.forEach((button) => button.classList.toggle('active', button.dataset.caseGroup === group));
  caseStudyButtons.forEach((button) => {
    button.hidden = !button.dataset.caseImage.includes(`/${group}/`);
  });
  caseStudy1Downloads.hidden = group !== 'Case-Study-1';
  caseStudy2Downloads.hidden = group !== 'Case-Study-2';
  showCaseStudy(0);
}

slrCaseStudiesButton.addEventListener('click', () => {
  supervisedAlgorithms.hidden = true;
  prerequisiteViewer.hidden = true;
  coreViewer.hidden = true;
  caseStudiesViewer.hidden = false;
  mlrCaseStudyViewer.hidden = true;
  selectCaseGroup('Case-Study-1');
});

caseGroupButtons.forEach((button) => button.addEventListener('click', () => selectCaseGroup(button.dataset.caseGroup)));
caseStudyButtons.forEach((button) => button.addEventListener('click', () => {
  const visibleButtons = caseStudyButtons.filter((item) => !item.hidden);
  showCaseStudy(visibleButtons.indexOf(button));
}));
document.querySelector('#previous-case-study').addEventListener('click', () => showCaseStudy(currentCaseStudy - 1));
document.querySelector('#next-case-study').addEventListener('click', () => showCaseStudy(currentCaseStudy + 1));
document.querySelector('#back-from-case-studies').addEventListener('click', () => {
  caseStudiesViewer.hidden = true;
  supervisedAlgorithms.hidden = false;
});

function showMlrCaseStudy(index) {
  const visibleButtons = mlrCaseButtons.filter((button) => !button.hidden);
  currentMlrCase = (index + visibleButtons.length) % visibleButtons.length;
  mlrCaseButtons.forEach((button) => button.classList.remove('active'));
  visibleButtons[currentMlrCase].classList.add('active');
  mlrCaseImage.src = visibleButtons[currentMlrCase].dataset.mlrCaseImage;
  mlrCaseImage.alt = `${visibleButtons[currentMlrCase].textContent.trim()} MLR case study lesson`;
  mlrCaseProgress.textContent = `${currentMlrCase + 1} of ${visibleButtons.length}`;
}

function selectMlrCaseGroup(group) {
  mlrCaseGroupButtons.forEach((button) => button.classList.toggle('active', button.dataset.mlrCaseGroup === group));
  mlrCaseButtons.forEach((button) => { button.hidden = !button.dataset.mlrCaseImage.includes(`/${group}/`); });
  mlrCase3Downloads.hidden = group !== 'Case-Study-3';
  showMlrCaseStudy(0);
}

function showMlrPrerequisite(index) {
  currentMlrPrerequisite = (index + mlrPrerequisiteButtons.length) % mlrPrerequisiteButtons.length;
  mlrPrerequisiteButtons.forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === currentMlrPrerequisite));
  mlrPrerequisiteImage.src = mlrPrerequisiteButtons[currentMlrPrerequisite].dataset.mlrPrerequisiteImage;
  mlrPrerequisiteImage.alt = `${mlrPrerequisiteButtons[currentMlrPrerequisite].textContent.trim()} MLR prerequisite`;
  mlrPrerequisiteProgress.textContent = `${currentMlrPrerequisite + 1} of ${mlrPrerequisiteButtons.length}`;
}

mlrPrerequisiteButton.addEventListener('click', () => {
  supervisedAlgorithms.hidden = true;
  mlrPrerequisiteViewer.hidden = false;
  showMlrPrerequisite(0);
});
mlrPrerequisiteButtons.forEach((button, index) => button.addEventListener('click', () => showMlrPrerequisite(index)));
document.querySelector('#previous-mlr-prerequisite').addEventListener('click', () => showMlrPrerequisite(currentMlrPrerequisite - 1));
document.querySelector('#next-mlr-prerequisite').addEventListener('click', () => showMlrPrerequisite(currentMlrPrerequisite + 1));
document.querySelector('#back-from-mlr-prerequisite').addEventListener('click', () => { mlrPrerequisiteViewer.hidden = true; supervisedAlgorithms.hidden = false; });

mlrCoreButton.addEventListener('click', () => { supervisedAlgorithms.hidden = true; mlrCoreViewer.hidden = false; });
document.querySelector('#back-from-mlr-core').addEventListener('click', () => { mlrCoreViewer.hidden = true; supervisedAlgorithms.hidden = false; });

mlrCaseStudyButton.addEventListener('click', () => {
  supervisedAlgorithms.hidden = true;
  prerequisiteViewer.hidden = true;
  coreViewer.hidden = true;
  caseStudiesViewer.hidden = true;
  mlrCaseStudyViewer.hidden = false;
  selectMlrCaseGroup('Case-Study-1');
});

mlrCaseGroupButtons.forEach((button) => button.addEventListener('click', () => selectMlrCaseGroup(button.dataset.mlrCaseGroup)));
mlrCaseButtons.forEach((button) => button.addEventListener('click', () => {
  const visibleButtons = mlrCaseButtons.filter((item) => !item.hidden);
  showMlrCaseStudy(visibleButtons.indexOf(button));
}));
document.querySelector('#previous-mlr-case').addEventListener('click', () => showMlrCaseStudy(currentMlrCase - 1));
document.querySelector('#next-mlr-case').addEventListener('click', () => showMlrCaseStudy(currentMlrCase + 1));
document.querySelector('#back-from-mlr-case-study').addEventListener('click', () => {
  mlrCaseStudyViewer.hidden = true;
  supervisedAlgorithms.hidden = false;
});

function openKmeansViewer(viewer) {
  unsupervisedAlgorithms.hidden = true;
  [kmeansPrerequisiteViewer, kmeansCoreViewer, kmeansUnderstandingViewer, kmeansProblemsViewer].forEach((section) => { section.hidden = section !== viewer; });
}

function showKmeansCore(index) {
  currentKmeansCore = (index + kmeansCoreButtons.length) % kmeansCoreButtons.length;
  kmeansCoreButtons.forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === currentKmeansCore));
  kmeansCoreImage.src = kmeansCoreButtons[currentKmeansCore].dataset.kmeansCoreImage;
  kmeansCoreImage.alt = `${kmeansCoreButtons[currentKmeansCore].textContent.trim()} K-Means concept`;
  kmeansCoreProgress.textContent = `${currentKmeansCore + 1} of ${kmeansCoreButtons.length}`;
}

function showKmeansUnderstanding(index) {
  currentKmeansUnderstanding = (index + kmeansUnderstandingButtons.length) % kmeansUnderstandingButtons.length;
  kmeansUnderstandingButtons.forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === currentKmeansUnderstanding));
  kmeansUnderstandingImage.src = kmeansUnderstandingButtons[currentKmeansUnderstanding].dataset.kmeansUnderstandingImage;
  kmeansUnderstandingImage.alt = `${kmeansUnderstandingButtons[currentKmeansUnderstanding].textContent.trim()} K-Means lesson`;
  kmeansUnderstandingProgress.textContent = `${currentKmeansUnderstanding + 1} of ${kmeansUnderstandingButtons.length}`;
}

kmeansPrerequisiteButton.addEventListener('click', () => openKmeansViewer(kmeansPrerequisiteViewer));
kmeansCoreButton.addEventListener('click', () => { openKmeansViewer(kmeansCoreViewer); showKmeansCore(0); });
kmeansUnderstandingButton.addEventListener('click', () => { openKmeansViewer(kmeansUnderstandingViewer); showKmeansUnderstanding(0); });
kmeansProblemsButton.addEventListener('click', () => openKmeansViewer(kmeansProblemsViewer));
kmeansCoreButtons.forEach((button, index) => button.addEventListener('click', () => showKmeansCore(index)));
kmeansUnderstandingButtons.forEach((button, index) => button.addEventListener('click', () => showKmeansUnderstanding(index)));
document.querySelector('#previous-kmeans-core').addEventListener('click', () => showKmeansCore(currentKmeansCore - 1));
document.querySelector('#next-kmeans-core').addEventListener('click', () => showKmeansCore(currentKmeansCore + 1));
document.querySelector('#previous-kmeans-understanding').addEventListener('click', () => showKmeansUnderstanding(currentKmeansUnderstanding - 1));
document.querySelector('#next-kmeans-understanding').addEventListener('click', () => showKmeansUnderstanding(currentKmeansUnderstanding + 1));
document.querySelectorAll('[data-back-from-kmeans]').forEach((button) => button.addEventListener('click', () => {
  [kmeansPrerequisiteViewer, kmeansCoreViewer, kmeansUnderstandingViewer, kmeansProblemsViewer].forEach((section) => { section.hidden = true; });
  unsupervisedAlgorithms.hidden = false;
}));

lessonButtons.forEach((button, index) => button.addEventListener('click', () => showLesson(index)));
document.querySelector('#previous-lesson').addEventListener('click', () => showLesson(currentLesson - 1));
document.querySelector('#next-lesson').addEventListener('click', () => showLesson(currentLesson + 1));
document.querySelector('#back-to-algorithms').addEventListener('click', () => {
  prerequisiteViewer.hidden = true;
  supervisedAlgorithms.hidden = false;
});

dialogClose.addEventListener('click', () => imageDialog.close());

imageDialog.addEventListener('click', (event) => {
  if (event.target === imageDialog) imageDialog.close();
});

document.querySelectorAll('[data-empty-menu]').forEach((button) => {
  button.addEventListener('click', () => {
    const wasActive = button.classList.contains('active');
    clearCanvas();
    clearMainMenu();
    if (!wasActive) button.classList.add('active');
  });
});

document.querySelectorAll('[data-track-image]').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('active')) {
      button.classList.remove('active');
      careerImage.hidden = true;
      return;
    }
    careerImage.src = button.dataset.trackImage;
    careerImage.alt = button.dataset.trackAlt;
    careerImage.hidden = false;
    clearActiveButtons(careerActions);
    button.classList.add('active');
  });
});

document.querySelectorAll('[data-content-image]').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('active')) {
      button.classList.remove('active');
      aiImage.hidden = true;
      return;
    }
    aiImage.src = button.dataset.contentImage;
    aiImage.alt = button.dataset.contentAlt;
    aiImage.hidden = false;
    clearActiveButtons(aiActions);
    button.classList.add('active');
  });
});

const topicMenu = document.querySelector('#topic-menu');
const topicsBrowser = document.querySelector('#topics-browser');
const topicsBack = document.querySelector('#topics-back');
const topicsBreadcrumb = document.querySelector('#topics-breadcrumb');
const topicFolderGrid = document.querySelector('#topic-folder-grid');
const topicFileList = document.querySelector('#topic-file-list');
const topicsStatus = document.querySelector('#topics-status');
let topicManifest = [];
let currentTopicPath = [];
const topicPreview = document.querySelector('#topic-preview');
const topicPreviewImage = document.querySelector('#topic-preview-image');
const topicPreviewError = document.querySelector('#topic-preview-error');
const topicDownloads = document.querySelector('#topic-downloads');
const topicDownloadList = document.querySelector('#topic-download-list');
const topicOrder = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
let activeTopicImages = [];
let activeTopicImageIndex = 0;
const libraryPrevious = document.querySelector('#library-previous');
const libraryNext = document.querySelector('#library-next');
const librarySize = document.querySelector('#library-image-size');
const librarySidebarToggle = document.querySelector('#topic-sidebar-toggle');

function moveTopicImage(offset) {
  const file = activeTopicImages[activeTopicImageIndex + offset];
  if (!file) return;
  const button = [...topicFileList.querySelectorAll('[data-image-path]')]
    .find((item) => item.dataset.imagePath === file.path);
  showTopicImage(file, button);
}
libraryPrevious.addEventListener('click', () => moveTopicImage(-1));
libraryNext.addEventListener('click', () => moveTopicImage(1));
librarySize.addEventListener('click', () => {
  const original = topicPreview.classList.toggle('original-size');
  librarySize.setAttribute('aria-pressed', String(original));
  librarySize.textContent = original ? 'Fit image' : 'Original size';
});
librarySidebarToggle.addEventListener('click', () => {
  const collapsed = topicsBrowser.classList.toggle('sidebar-collapsed');
  librarySidebarToggle.setAttribute('aria-expanded', String(!collapsed));
});

function isTopicImage(file) {
  return /\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)$/i.test(file.name);
}

function isTopicPreviewable(file) {
  return isTopicImage(file) || /\.(pdf|csv|txt)$/i.test(file.name);
}

let topicPreviewRequest = 0;

function parseTopicCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  text = text.replace(/^\uFEFF/, '');
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '"') {
      if (quoted && text[i + 1] === '"') { field += '"'; i++; }
      else quoted = !quoted;
    } else if (char === ',' && !quoted) { row.push(field); field = ''; }
    else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && text[i + 1] === '\n') i++;
      row.push(field); rows.push(row); row = []; field = '';
    } else field += char;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function orderedTopicItems(items) {
  return [...items].sort((a, b) => topicOrder.compare(a.name, b.name));
}

function topicThumbnail(folder) {
  const learningTypes = {
    'Supervised Machine Learning': 'supervised',
    'Unsupervised Machine Learning': 'unsupervised',
    'Reinforcement Machine Learning': 'reinforcement',
  };
  const learningType = learningTypes[folder.name];
  if (learningType && folder.path.startsWith('topics/Machine Learning/')) {
    return { name: `${learningType}.svg`, path: `images/ml-types/${learningType}.svg` };
  }
  return { name: 'topic-illustration.svg', path: topicIllustration(folder) };
}

function topicIllustration(folder) {
  const path = folder.path.toLowerCase();
  const name = folder.name.toLowerCase();
  const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[char]));
  const motifs = {
    network: '<path d="M160 95L290 75L425 105M160 95L290 145L425 105M160 195L290 75M160 195L290 145L425 195M160 95L290 215L425 195M160 195L290 215"/><g fill="#7dd3fc"><circle cx="160" cy="95" r="13"/><circle cx="160" cy="195" r="13"/><circle cx="290" cy="75" r="13"/><circle cx="290" cy="145" r="13"/><circle cx="290" cy="215" r="13"/><circle cx="425" cy="105" r="13"/><circle cx="425" cy="195" r="13"/></g>',
    chart: '<path d="M150 65V220H455M175 200L220 165L265 170L310 115L365 100L425 65"/><g fill="#7dd3fc"><circle cx="185" cy="185" r="7"/><circle cx="235" cy="185" r="7"/><circle cx="275" cy="142" r="7"/><circle cx="335" cy="130" r="7"/><circle cx="395" cy="75" r="7"/></g>',
    clusters: '<g fill="#7dd3fc"><circle cx="185" cy="90" r="9"/><circle cx="215" cy="110" r="9"/><circle cx="180" cy="135" r="9"/><circle cx="220" cy="155" r="9"/></g><g fill="#f4c95d"><circle cx="365" cy="85" r="9"/><circle cx="400" cy="115" r="9"/><circle cx="375" cy="145" r="9"/></g><g fill="#a7e3c1"><circle cx="275" cy="180" r="9"/><circle cx="315" cy="200" r="9"/><circle cx="280" cy="220" r="9"/></g>',
    matrix: '<path d="M185 65H165V220H185M410 65H430V220H410"/><g fill="#7dd3fc" stroke="none">'+Array.from({length:12},(_,i)=>`<rect x="${200+i%4*50}" y="${80+Math.floor(i/4)*50}" width="28" height="28" rx="5" opacity="${.4+(i%3)*.25}"/>`).join('')+'</g>',
    code: '<rect x="140" y="55" width="320" height="175" rx="14"/><path d="M140 90H460M220 125L190 150L220 175M380 125L410 150L380 175M320 115L280 190"/><circle cx="160" cy="73" r="3"/><circle cx="177" cy="73" r="3"/>',
    document: '<path d="M210 55H345L395 105V230H210ZM345 55V105H395M240 140H365M240 170H365M240 200H325"/>',
    roadmap: '<path d="M170 210V170H255V125H340V80H425"/><circle cx="170" cy="210" r="12"/><circle cx="255" cy="170" r="12"/><circle cx="340" cy="125" r="12"/><path d="M425 60V105M425 60H465L425 85"/>',
    setup: '<rect x="165" y="60" width="270" height="150" rx="12"/><path d="M265 210V235H335V210M235 235H365M275 120L295 140L330 100"/>',
    language: '<rect x="145" y="65" width="210" height="95" rx="16"/><path d="M175 160V185L210 160M180 95H315M180 125H280"/><rect x="310" y="145" width="145" height="65" rx="12"/><path d="M340 170H425M340 190H405"/>',
    vision: '<rect x="155" y="65" width="290" height="155" rx="12"/><path d="M190 100H220M190 100V125M410 100H380M410 100V125M190 185H220M190 185V160M410 185H380M410 185V160"/><circle cx="300" cy="143" r="38"/><circle cx="300" cy="143" r="14"/>',
    book: '<path d="M300 85Q235 45 155 75V215Q235 185 300 225Q365 185 445 215V75Q365 45 300 85V225M180 110L270 120M180 145L270 155M330 120L420 110M330 155L420 145"/>',
    task: '<rect x="190" y="60" width="220" height="180" rx="12"/><path d="M220 105L230 115L250 90M270 105H375M220 155L230 165L250 140M270 155H375M220 205L230 215L250 190M270 205H350"/>',
    loop: '<rect x="145" y="105" width="110" height="80" rx="12"/><rect x="345" y="105" width="110" height="80" rx="12"/><path d="M200 95V65H400V95M400 195V230H200V195M390 85L400 95L410 85M190 205L200 195L210 205"/>',
    curve: '<path d="M145 65V225H455M165 205Q230 210 270 145T435 85"/>',
  };
  let motif = 'book', caption = 'Explore concepts and learning resources';
  if (/prerequisite/.test(name)) { motif='book'; caption='Build the foundations'; }
  else if (/task|providesolutions/.test(name)) { motif='task'; caption='Practice and solve problems'; }
  else if (/case.?study/.test(name)) { motif='document'; caption='Work through a real example'; }
  else if (/setup/.test(path)) { motif='setup'; caption='Prepare your development workspace'; }
  else if (/career/.test(path)) { motif='roadmap'; caption='Plan your learning journey'; }
  else if (/sample_data|handwritten/.test(path)) { motif='matrix'; caption='Explore datasets and examples'; }
  else if (/opencv|cnn|unet/.test(path)) { motif='vision'; caption='Images, features and visual patterns'; }
  else if (/nlp|transformer/.test(path)) { motif='language'; caption='Language, context and attention'; }
  else if (/numpy|linear_algebra/.test(path)) { motif='matrix'; caption='Arrays, matrices and vector operations'; }
  else if (/pandas/.test(path)) { motif='matrix'; caption='Organize and analyze tabular data'; }
  else if (/visualization|statistics/.test(path)) { motif='chart'; caption='Understand data and distributions'; }
  else if (/sample_code|python/.test(path)) { motif='code'; caption='Learn through working code'; }
  else if (/calcul/.test(path)) { motif='curve'; caption='Change, slopes and derivatives'; }
  else if (/kmeans|knn/.test(path)) { motif='clusters'; caption=/knn/.test(path)?'Learn from nearby examples':'Discover groups in data'; }
  else if (/logistic/.test(path)) { motif='curve'; caption='Predict class probabilities'; }
  else if (/mlr|slr/.test(path)) { motif='chart'; caption='Model relationships and predict values'; }
  else if (/rnn|lstm/.test(path)) { motif='loop'; caption='Learn from sequences and memory'; }
  else if (/machine learning/.test(path)) { motif='chart'; caption='Learn patterns and make predictions'; }
  else if (/deep_learning|ann|\/ai$/.test(path)) { motif='network'; caption='Connected intelligence and learning'; }
  const label = topicLabel(folder.name);
  const size = label.length > 32 ? 15 : 20;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="600" height="300"><rect width="600" height="300" rx="20" fill="#102944"/><g fill="none" stroke="#f4c95d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${motifs[motif]}</g><rect width="600" height="42" fill="#102944"/><g font-family="Arial,sans-serif" text-anchor="middle"><text x="300" y="30" fill="#edf3fa" font-size="${size}" font-weight="bold">${escape(label)}</text><text x="300" y="278" fill="#a9b9cc" font-size="14">${escape(caption)}</text></g></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function createTopicTile(folder, path) {
  const tile = document.createElement('button');
  tile.type = 'button';
  tile.className = 'topic-folder-tile';
  tile.setAttribute('aria-label', `Open ${topicLabel(folder.name)} folder`);
  const thumbnail = topicThumbnail(folder);
  if (thumbnail) {
    const image = document.createElement('img');
    image.src = topicAssetUrl(thumbnail.path);
    image.alt = '';
    image.loading = 'lazy';
    image.addEventListener('error', () => image.replaceWith(createTopicPlaceholder()));
    tile.appendChild(image);
  } else {
    tile.appendChild(createTopicPlaceholder());
  }
  const label = document.createElement('span');
  label.className = 'topic-tile-label';
  label.textContent = topicLabel(folder.name);
  tile.appendChild(label);
  const detail = document.createElement('small');
  detail.textContent = `${folder.folders.length} folders · ${folder.files.length} files`;
  tile.appendChild(detail);
  tile.addEventListener('click', () => renderTopicContents(folder, path));
  return tile;
}

function createTopicPlaceholder() {
  const placeholder = document.createElement('span');
  placeholder.className = 'topic-tile-placeholder';
  placeholder.textContent = 'Folder';
  return placeholder;
}

function resetTopicResources() {
  topicPreviewRequest++;
  document.querySelector('#topic-document-preview')?.remove();
  topicFileList.replaceChildren();
  topicDownloadList.replaceChildren();
  topicDownloads.hidden = true;
  topicPreview.hidden = true;
  topicPreviewImage.removeAttribute('src');
  topicPreviewError.hidden = true;
}

async function showTopicImage(file, selectedButton) {
  const request = ++topicPreviewRequest;
  document.querySelector('#topic-document-preview')?.remove();
  topicPreview.dataset.filePath = file.path;
  librarySize.hidden = !isTopicImage(file);
  if (!isTopicImage(file)) topicPreview.classList.remove('original-size');
  activeTopicImageIndex = activeTopicImages.findIndex((item) => item.path === file.path);
  document.querySelector('#library-lesson-title').textContent = topicLabel(file.name);
  document.querySelector('#library-step-progress').textContent = `LESSON ${activeTopicImageIndex + 1} OF ${activeTopicImages.length}`;
  libraryPrevious.disabled = activeTopicImageIndex <= 0;
  libraryNext.disabled = activeTopicImageIndex >= activeTopicImages.length - 1;
  const stage = document.querySelector('#library-image-stage');
  stage.scrollTop = 0;
  stage.scrollLeft = 0;
  topicFileList.querySelectorAll('[data-image-path]').forEach((button) => {
    const active = button === selectedButton;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  topicPreviewError.hidden = true;
  topicPreviewImage.hidden = !isTopicImage(file);
  topicPreview.hidden = false;
  if (!isTopicImage(file)) {
    topicPreviewImage.removeAttribute('src');
    const preview = document.createElement('div');
    preview.id = 'topic-document-preview';
    stage.appendChild(preview);
    if (/\.pdf$/i.test(file.name)) {
      const frame = document.createElement('iframe');
      frame.title = file.name;
      frame.src = topicAssetUrl(file.path);
      preview.appendChild(frame);
      return;
    }
    preview.textContent = 'Loading resource?';
    try {
      const response = await fetch(topicAssetUrl(file.path));
      if (!response.ok) throw new Error('Unable to load this resource. Please try again.');
      const text = await response.text();
      if (request !== topicPreviewRequest) return;
      preview.replaceChildren();
      if (/\.csv$/i.test(file.name)) {
        const table = document.createElement('table');
        table.setAttribute('aria-label', file.name);
        parseTopicCsv(text).forEach((row, index) => {
          const tr = document.createElement('tr');
          row.forEach(value => {
            const cell = document.createElement(index === 0 ? 'th' : 'td');
            if (index === 0) cell.scope = 'col';
            cell.textContent = value;
            tr.appendChild(cell);
          });
          table.appendChild(tr);
        });
        preview.appendChild(table);
      } else {
        const pre = document.createElement('pre');
        pre.textContent = text;
        preview.appendChild(pre);
      }
    } catch (error) {
      if (request === topicPreviewRequest) preview.textContent = error.message;
    }
    return;
  }
  topicPreviewImage.alt = topicLabel(file.name);
  topicPreviewImage.src = topicAssetUrl(file.path);
  topicPreview.hidden = false;
}

function renderTopicTree(root, rootPath) {
  topicFileList.replaceChildren();
  function branch(folder, path, number) {
    const group = document.createElement('details');
    group.className = 'topic-tree-branch';
    group.open = path.every((name, index) => currentTopicPath[index] === name);
    const summary = document.createElement('summary');
    const folderButton = document.createElement('button');
    folderButton.type = 'button';
    folderButton.className = 'topic-tree-folder';
    folderButton.textContent = topicLabel(folder.name);
    folderButton.classList.toggle('current-folder', path.join('/') === currentTopicPath.join('/'));
    folderButton.addEventListener('click', (event) => {
      event.preventDefault();
      renderTopicContents(folder, path);
    });
    summary.appendChild(folderButton);
    group.appendChild(summary);
    const children = document.createElement('div');
    children.className = 'topic-tree-children';
    orderedTopicItems(folder.files).filter(isTopicPreviewable).forEach((file, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'topic-file-button';
      button.dataset.imagePath = file.path;
      button.textContent = `${String(index + 1).padStart(2, '0')}. ${topicLabel(file.name)}`;
      button.title = file.name;
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => {
        if (path.join('/') !== currentTopicPath.join('/')) {
          renderTopicContents(folder, path);
        }
        const selected = [...topicFileList.querySelectorAll('[data-image-path]')]
          .find((item) => item.dataset.imagePath === file.path);
        showTopicImage(file, selected);
      });
      children.appendChild(button);
      if (path.join('/') === currentTopicPath.join('/') && topicPreview.hidden) {
        showTopicImage(file, button);
      }
    });
    orderedTopicItems(folder.folders).forEach((child, index) => {
      children.appendChild(branch(child, [...path, child.name], `${number}.${index + 1}`));
    });
    group.appendChild(children);
    return group;
  }
  topicFileList.appendChild(branch(root, rootPath, '1'));
  const selected = [...topicFileList.querySelectorAll('[data-image-path]')]
    .find((button) => button.dataset.imagePath === topicPreview.dataset.filePath);
  if (selected) {
    selected.classList.add('active');
    selected.setAttribute('aria-pressed', 'true');
  }
}

topicPreviewImage.addEventListener('error', () => {
  topicPreviewImage.hidden = true;
  topicPreviewError.hidden = false;
});

function topicLabel(value) {
  return String(value)
    .replace(/\.[^.]+$/, '')
    .replace(/^\d+(?:\.\d+)?[_ -]*/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .trim();
}

function topicAssetUrl(path) {
  if (path.startsWith('data:image/svg+xml;')) return path;
  return path.split('/').map((segment) => encodeURIComponent(segment)).join('/');
}

function findTopicFolder(path) {
  let folder = topicManifest.find((item) => item.name === path[0]);
  for (const name of path.slice(1)) {
    folder = folder?.folders.find((item) => item.name === name);
  }
  return folder;
}

function setTopicMenuActive(topicName) {
  clearMainMenu();
  topicMenu.querySelectorAll('button').forEach((button) => {
    const active = button.dataset.topicName === topicName;
    button.classList.toggle('active', active);
    button.setAttribute('aria-current', active ? 'page' : 'false');
  });
  if (!topicName) homeButton.classList.add('active');
}

function renderTopicContents(folder, path) {
  clearCanvas();
  currentTopicPath = path;
  activeTopicImages = orderedTopicItems(folder.files).filter(isTopicPreviewable);
  document.querySelector('#library-welcome').hidden = true;
  librarySidebarToggle.hidden = false;
  if (window.matchMedia('(max-width: 540px)').matches) {
    topicsBrowser.classList.add('sidebar-collapsed');
    librarySidebarToggle.setAttribute('aria-expanded', 'false');
  }
  topicFolderGrid.replaceChildren();
  resetTopicResources();
  topicsStatus.hidden = true;
  topicsBack.hidden = false;
  topicsBreadcrumb.replaceChildren();

  path.forEach((name, index) => {
    if (index) {
      const separator = document.createElement('span');
      separator.textContent = '›';
      topicsBreadcrumb.appendChild(separator);
    }
    const crumb = document.createElement('button');
    crumb.type = 'button';
    crumb.textContent = topicLabel(name);
    crumb.addEventListener('click', () => {
      const crumbPath = path.slice(0, index + 1);
      renderTopicContents(findTopicFolder(crumbPath), crumbPath);
    });
    topicsBreadcrumb.appendChild(crumb);
  });

  orderedTopicItems(folder.folders).forEach((child) => {
    topicFolderGrid.appendChild(createTopicTile(child, [...path, child.name]));
  });

  orderedTopicItems(folder.files).forEach((file) => {
    if (!isTopicPreviewable(file)) {
      const resource = document.createElement('a');
      resource.className = 'topic-download-link';
      resource.href = topicAssetUrl(file.path);
      resource.download = file.name;
      resource.textContent = `Download ${file.name}`;
      topicDownloadList.appendChild(resource);
      topicDownloads.hidden = false;
      return;
    }
  });
  renderTopicTree(findTopicFolder([path[0]]), [path[0]]);
  document.querySelector('.topics-content').scrollTop = 0;

  if (!folder.folders.length && !folder.files.length) {
    topicsStatus.textContent = 'This folder does not contain any resources yet.';
    topicsStatus.hidden = false;
  }
  topicsBrowser.hidden = false;
  setTopicMenuActive(path[0]);
}

function renderTopicsHome() {
  clearCanvas();
  currentTopicPath = [];
  activeTopicImages = [];
  document.querySelector('#library-welcome').hidden = false;
  librarySidebarToggle.hidden = true;
  topicFolderGrid.replaceChildren();
  resetTopicResources();
  topicsBreadcrumb.replaceChildren();
  topicsBack.hidden = true;
  topicsStatus.hidden = true;
  topicManifest.forEach((topic) => {
    topicFolderGrid.appendChild(createTopicTile(topic, [topic.name]));
  });
  topicsBrowser.hidden = false;
  setTopicMenuActive('');
}

async function loadTopicManifest() {
  try {
    const response = await fetch('resources/topics.json');
    if (!response.ok) throw new Error(`Manifest request failed: ${response.status}`);
    const manifest = await response.json();
    if (!Array.isArray(manifest.topics)) throw new Error('Invalid topic manifest');
    topicManifest = orderedTopicItems(manifest.topics);
    topicManifest.forEach((topic) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'menu-button';
      button.textContent = topicLabel(topic.name);
      button.dataset.topicName = topic.name;
      button.addEventListener('click', () => renderTopicContents(topic, [topic.name]));
      topicMenu.appendChild(button);
    });
    renderTopicsHome();
  } catch (error) {
    topicsBrowser.hidden = false;
    topicsStatus.textContent = 'Unable to load topics. Run the topic menu generator and refresh this page.';
    topicsStatus.hidden = false;
    console.error('Could not load topic manifest:', error);
  }
}

homeButton.addEventListener('click', renderTopicsHome);
topicsBack.addEventListener('click', () => {
  if (currentTopicPath.length <= 1) {
    renderTopicsHome();
    return;
  }
  const parentPath = currentTopicPath.slice(0, -1);
  renderTopicContents(findTopicFolder(parentPath), parentPath);
});

const menuScrollTrack = document.querySelector('#menu-scroll-track');
const menuScrollLeft = document.querySelector('#menu-scroll-left');
const menuScrollRight = document.querySelector('#menu-scroll-right');
function updateMenuArrows() {
  const maximum = menuScrollTrack.scrollWidth - menuScrollTrack.clientWidth;
  menuScrollLeft.hidden = menuScrollRight.hidden = maximum <= 1;
  menuScrollLeft.disabled = menuScrollTrack.scrollLeft <= 1;
  menuScrollRight.disabled = menuScrollTrack.scrollLeft >= maximum - 1;
}
function slideTopicMenu(direction) {
  menuScrollTrack.scrollBy({ left: direction * Math.max(120, menuScrollTrack.clientWidth * .75), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}
menuScrollLeft.addEventListener('click', () => slideTopicMenu(-1));
menuScrollRight.addEventListener('click', () => slideTopicMenu(1));
menuScrollTrack.addEventListener('scroll', updateMenuArrows, { passive: true });
menuScrollTrack.addEventListener('focusin', event => {
  if (event.target.matches('.menu-button')) event.target.scrollIntoView({ block: 'nearest', inline: 'nearest' });
});
new ResizeObserver(updateMenuArrows).observe(menuScrollTrack);
new MutationObserver(updateMenuArrows).observe(topicMenu, { childList: true });
document.fonts.ready.then(updateMenuArrows);
loadTopicManifest();
