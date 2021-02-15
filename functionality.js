hideAll();

function hide(id) {
    var el = document.getElementById(id);
    el.style.display = "none";
}
function hideHomePage() {
    var header = Array.from(document.getElementsByTagName("header"));
    var myEl = header.map((el) => {
        return el.children;
    })
    var elArray = Array.from(myEl[0]);
    let array = elArray.map(el => { 
        return el.id;
        });
    array.forEach(el => hide(el));
}

function hideGoogleMap() {
    var map = document.getElementById("map");
    hide(map.id);
}

function hideAll() {
    var pages = Array.from(document.querySelectorAll(".page"));
    pages.forEach(function(page) {
        hide(page.id);
    });
}
function show(id) {
    var pageToshow = document.getElementById(id);
    pageToshow.style.display = "";
}

 function showPage(id) {
    hideAll();
    hideHomePage();
    hideGoogleMap()
    show(id);

 }

 function listenMenuClicks(){
     document.addEventListener("click", function(e){
         var link = e.target;
         if(link.matches("#menu a")) {
            var id = link.getAttribute("data-id");
            showPage(id)
         }
     });
 }
 listenMenuClicks()

 function goBack() {
     location.reload();
  }