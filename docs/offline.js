// Determines if the browser has lost connection
// https://mxb.at/blog/youre-offline/
let isOffline = false;

window.addEventListener('load', checkConnectivity);

// Listen for future changes in connection when the page has finished loading
function checkConnectivity() {
  updateStatus();
  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);
}

// Check if we're online, set a class on `<html>` if not
function updateStatus() {
  if (typeof navigator.onLine !== 'undefined') {
    isOffline = !navigator.onLine;
    document.documentElement.classList.toggle('is-offline', isOffline);
  }
}


const links = document.querySelectorAll('a[href]');

Array.from(links).forEach((link) => {
  caches.match(link.href, { ignoreSearch: true }).then((response) => {
    if (response) {
      link.classList.add('is-cached');
    }
  });
});
