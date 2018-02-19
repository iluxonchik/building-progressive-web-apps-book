// add event listener to the Service Worker. "self" refers to the service worker
// itself. All "fetch" requests are now being intercepted
self.addEventListener("fetch", function(event){
  console.log("Fetch request for:", event.request.url);
});
