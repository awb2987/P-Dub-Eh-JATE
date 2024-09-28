const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Check if the browser supports the PWA installation
if ('beforeinstallprompt' in window) {
  // Logic for installing the PWA
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = 'block';
  });

  // Click event handler for the install button element
  butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        console.log('User has accepted the A2HS prompt');
      } else {
        console.log('User has dismissed the A2HS prompt');
      }
      deferredPrompt = null;
      butInstall.style.display = 'none';
    }
  });

  // Handler for the app installed event
  window.addEventListener('appinstalled', (event) => {
    console.log('App has been successfully installed');
  });
} else {
  console.log('PWA installation is not supported in this browser.');
}
