hideAll();

function hide(id) {
    var el = document.getElementById(id);
    el.style.display = "none";
}

function hideAll() {
    var pages = Array.from(document.querySelectorAll(".page"));
    pages.forEach(function(page){
        hide(page.id);
    })
}
function show(id) {
    var pageToshow = document.getElementById(id);
    pageToshow.style.display = "";
}

 function showPage(id) {
    hideAll();
    show(id);
 }

//  function listenMenuClicks(){
//      document.addEventListener("click", function(e){
//          var link = e.target;
//          if(link.matches("#menu a")) {
//             console.log("click", link.innerHTML.toLowerCase());
//             var id = link.innerHTML.toLowerCase();
//             console.log("id" , id)
//             showPage(id)
//          }
//      });
//  }
//  listenMenuClicks()