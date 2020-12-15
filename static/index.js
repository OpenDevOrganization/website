console.log("This is working")
window.onscroll = function() {scroll()}
function scroll(){
    var s = window.pageYOffset;
    document.getElementById("a").style.top = ((s/(window.outerHeight+200))*100)+"%";
}
