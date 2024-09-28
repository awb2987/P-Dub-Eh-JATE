import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

// Function to load the spinner
const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
    <div class="loading-spinner"></div>
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

// Load spinner if the editor is not defined
if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // Register Workbox service worker
  const workboxSW = new Workbox('/sw.js'); // Correct path for production
  workboxSW.register().then(() => {
    console.log('Service worker registered successfully!');
  }).catch((error) => {
    console.error('Service worker registration failed:', error);
  });
} else {
  console.error('Service workers are not supported in this browser.');
}
