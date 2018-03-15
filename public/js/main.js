// JS Here!

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if(!event.target.matches(".activemenu")){
    var elems = document.querySelectorAll(".activesubmenu");
    [].forEach.call(elems, function(el) {
      el.classList.remove("activesubmenu");
    });
    var elems = document.querySelectorAll(".faderonselection");
    [].forEach.call(elems, function(el) {
      el.classList.remove("faderonselection");
    });
  }
  
  if(event.target.matches("#searchbutton")){
    //console.log("search");
    var headernav = document.getElementById("headernav");
    var searchbarcontainer = document.getElementById("searchbarcontainer");
    var searchbar = document.getElementById("searchbar");
    headernav.classList.toggle("hidden");
    searchbarcontainer.classList.toggle("hidden");
    searchbar.classList.toggle("hidden");
  }
}