console.log("SW FILE IN PUBLIC FOLDER");
// To check Runing or not


var cacheName="demo-app"
var fileTochache=[
  "/",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/bundle.js",
  "index.html",
  "https://corona.lmao.ninja/v2/countries?yesterday&sort", // for Off line ke lea
  "https://corona.lmao.ninja/v2/all?yesterday",
]


self.addEventListener("activate", function(e) {
  console.log("[ServiceWorker] Activate");
});

// now save or install the file in cache
// in this we save the data in chache

self.addEventListener("install",function(e){
  console.log("[ServiceWorker] Install");
  e.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log("[ServiceWorker] Chaching App shell");
      return cache.addAll(fileTochache);
    })
  )
})

var stop=true

// if file call tu check cheche main hai ya nahi if hai tu display
// in this we call data from chahe

self.addEventListener('fetch',function(e){
  console.log("[ServiceWorker] Fetch ",e.request.url);

// SET NOTIFIACTION IF INTERNET IS NOT WORKING:
if(!navigator.onLine){
  
  if(stop){
    e.waitUntil(
      this.registration.showNotification("Internet",{
        body:"Internet Not Avaliable",
      })
    )
    stop=false;
   
  }
}
else{
  stop=true;
}

  



  e.respondWith(
    caches.match(e.request).then(function(response){
      
      return response || fetch(e.request);
    
    
    
    
    })
  )
})