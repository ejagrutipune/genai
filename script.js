document.querySelector('#logout-link').addEventListener('click', () => {
  sessionStorage.removeItem('userEmail');
  sessionStorage.removeItem('userName');
});

const homeButton = document.querySelector('#home-button');
const careerButton = document.querySelector('#career-roadmap-button');
const aiButton = document.querySelector('#ai-button');
const machineLearningButton = document.querySelector('#machine-learning-button');
const statisticsButton = document.querySelector('#statistics-button');
const careerActions = document.querySelector('#career-actions');
const aiActions = document.querySelector('#ai-actions');
const machineLearningTiles = document.querySelector('#machine-learning-tiles');
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
