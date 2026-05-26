(function() {
    // Get the path of the current script to find the root folder
    const scriptSrc = document.currentScript ? document.currentScript.src : window.location.href;
    const rootPath = scriptSrc.replace(/\/assets\/manifest\.js.*/, '').replace(/\/$/, '');

    // Inject manifest
    let manifestElem = document.createElement('link');
    manifestElem.setAttribute('rel', 'manifest');
    manifestElem.setAttribute('href', rootPath + '/manifest.json');
    document.head.appendChild(manifestElem);

    // Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register(rootPath + '/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
})();
