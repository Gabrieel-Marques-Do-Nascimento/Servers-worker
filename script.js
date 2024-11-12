console.log("hello world");
if ("serviceWorker" in navigator){
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").then( (reg) => {
      console.log("register service worker: ", reg);
    }).catch((erro) => {
      console.log("error: ", erro)
    });
  } );
}