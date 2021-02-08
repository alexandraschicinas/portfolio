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
