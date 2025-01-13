//❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ°❀⋆.ೃ࿔*:･°❀⋆.ೃCODE JAVASCRIPT ❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*


// Variables globales pour gérer le chronomètre❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*

let startTime; // Heure à laquelle le chronomètre a démarré
let elapsedTime = 0; // Temps écoulé (en ms)
let timerInterval; // Référence à l'intervalle du chronomètre

// Sélection des éléments DOM❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*
const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');
const displayMilliseconds = document.getElementById('milliseconds');
const laps = document.getElementById('laps');



// Fonction pour mettre à jour l'affichage du chronomètre ❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*

function updateTime() {
  const time = Date.now() - startTime + elapsedTime;
  
  const minutes = Math.floor(time / 60000); // Conversion en minutes
  const seconds = Math.floor((time % 60000) / 1000); // Secondes restantes
  const milliseconds = Math.floor((time % 1000) / 10); // Millisecondes
  




  // Mise à jour de l'affichage avec un format "00" ❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*
  displayMinutes.textContent = minutes.toString().padStart(2, '0');
  displaySeconds.textContent = seconds.toString().padStart(2, '0');
  displayMilliseconds.textContent = milliseconds.toString().padStart(2, '0');
}




// Événement pour démarrer le chronomètre ❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*
document.getElementById('start').addEventListener('click', () => {
  if (!timerInterval) {
    startTime = Date.now(); // Initialisation de l'heure de départ
    timerInterval = setInterval(updateTime, 10); // Mise à jour toutes les 10ms
  }
});




// Événement pour mettre le chronomètre en pause ❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*
document.getElementById('pause').addEventListener('click', () => {
  if (timerInterval) {
    clearInterval(timerInterval); // Arrêt de l'intervalle
    timerInterval = null; // Réinitialisation
    elapsedTime += Date.now() - startTime; // Cumul du temps écoulé
  }
});



// Événement pour réinitialiser le chronomètre ❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*
document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timerInterval); // Arrêt du chronomètre
  timerInterval = null; // Réinitialisation de l'intervalle
  elapsedTime = 0; // Réinitialisation du temps écoulé
  startTime = null; // Réinitialisation du point de départ

  
  // Réinitialisation de l'affichage ❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*
  displayMinutes.textContent = '00';
  displaySeconds.textContent = '00';
  displayMilliseconds.textContent = '00';
  


  // Effacement des tours ❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*
  laps.innerHTML = '';
});



// Événement pour enregistrer un tour ❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*
document.getElementById('lap').addEventListener('click', () => {
  if (timerInterval) {
    // Format du temps actuel
    const lapTime = `${displayMinutes.textContent}:${displaySeconds.textContent}:${displayMilliseconds.textContent}`;
    
    // Création d'un élément pour le tour
    const lap = document.createElement('li');
    lap.textContent = `Tour : ${lapTime}`;
    laps.appendChild(lap); // Ajout à la liste des tours
  }
});