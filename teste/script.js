if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker registrado:', reg))
      .catch(err => console.error('Erro no SW:', err));
  }
  