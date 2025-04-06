const CACHE_NAME = 'offline-v2'; // Nome do cache usado para armazenar recursos offline
const FILES_TO_CACHE = [
  '/', // Página raiz
  '/index.html', // Arquivo HTML principal
  '/style.css', // Arquivo CSS
  '/script.js' // Arquivo JavaScript
];

// Evento de instalação do Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME) // Abre o cache especificado
      .then(cache => cache.addAll(FILES_TO_CACHE)) // Adiciona todos os arquivos ao cache
  );
});

// Evento de busca/requisição
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request) // Verifica se a requisição existe no cache
      .then(response => response || fetch(event.request)) // Retorna do cache ou faz nova requisição
  );
});