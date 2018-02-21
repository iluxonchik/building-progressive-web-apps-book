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

var responseContent = "<html>" +
  "<body>" +
  "<style>" +
  "body {text-align: center; background-color: #333; color: #eee;}" +
  "</style>" +
  "<h1>Gotham Imperial Hotel</h1>" +
  "<p>There seems to be a problem with your connection.</p>" +
  "<p>Come visit us at 1 Imperial Plaza, Gotham City for free WiFi.</p>" +
  "</body>" +
  "</html>";

// add event listener to the Service Worker. "self" refers to the service worker
// itself. All "fetch" requests are now being intercepted
self.addEventListener("fetch", function(event){
  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response(
        responseContent,
        {headers: {"Content-Type":"text/html"}}
      );
    })
  );
});

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open("gih-cache").then(function(cache) {
            return cache.add("./index-offline.html");
        })
    );
});
