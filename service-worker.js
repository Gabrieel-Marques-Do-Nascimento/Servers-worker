/*
o service-worker tem que estar na rais do projeto, pois somente na rais do projeto ele tem acesso a todos os arquivos
*/
const CachName = "offline";
const recousersToPrecache = [
  "/", // a rais do projeto
  "/index.html",
  "/script.js",
  "/style.css",
  "/Imagens/github.png",
  ];
  
  // referencia o service-worker
  self.addEventListener("install",  (event) => {
    event.waitUtil(
      caches.open(CachName).then(
        cache => (cache.addAll(recousersToPrecache))
        ),
      );
  });
