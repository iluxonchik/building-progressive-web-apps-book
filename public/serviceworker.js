/** Section for temp code used as example **/

function bootstrapInterceptSV(event) {
  if (event.request.url.includes("bootstrap.min.css")) {
    event.respondWith(
      new Response(
        ".hotel-slogan {background: green!important;} nav {display:none}",
        { headers: { "Content-Type": "text/css"}}
      )
    );
  }
}

function flippedLogo(event) {
  if (event.request.url.includes("/img/logo.png"))  {
    event.respondWith(
      fetch("/img/logo-flipped.png")
    );
  }
}
/** **/


// add event listener to the Service Worker. "self" refers to the service worker
// itself. All "fetch" requests are now being intercepted
self.addEventListener("fetch", function(event){
  flippedLogo(event);
  console.log("Fetch request for:", event.request.url);
});
