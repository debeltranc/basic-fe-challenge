function setActiveMenuItem(id){
    var item = document.getElementById(id);
    var elems = document.querySelectorAll(".activemenu");
    [].forEach.call(elems, function(el) {
        el.classList.remove("activemenu");
        
    });
    elems = document.querySelectorAll(".activesubmenu");
    [].forEach.call(elems, function(el) {
        el.classList.remove("activesubmenu");
    });
    item.classList.add("activemenu");
    elems = document.querySelectorAll(".fader");
    [].forEach.call(elems, function(el) {
        el.classList.remove("faderonselection");
        
    });
}
/*
function setActiveSubmenuItem(id){
    var item = document.getElementById(id);
    var elems = document.querySelectorAll(".activesubmenu");
    [].forEach.call(elems, function(el) {
        el.classList.remove("activesubmenu");
    });
    item.classList.toggle("activesubmenu")
}*/

function showSubmenu(submenuid, menuid) {
    var menu = document.getElementById(menuid);
    var submenu = document.getElementById(submenuid);
    var elems = document.querySelectorAll(".activemenu");
    [].forEach.call(elems, function(el) {
        el.classList.remove("activemenu");
        
    });
    menu.classList.toggle("activemenu");
    submenu.classList.toggle("activesubmenu");
    elems = document.querySelectorAll(".fader");
    [].forEach.call(elems, function(el) {
        el.classList.toggle("faderonselection");
        
    });
}



var request = new XMLHttpRequest();
request.open("GET", "../data/nav.json", false);
request.send(null)
var navjson = JSON.parse(request.responseText);
var navhtml = "<ul class=\"listmenu\">";
for(var counter = 0; counter < navjson.items.length; counter++){
    var navitem = navjson.items[counter];
    navhtml += "<li><a";
    if(navitem.items.length > 0) navhtml += " onclick=\"showSubmenu('navsubmenu"+counter+"', 'menubutton"+counter+"')\"";
    else navhtml += " onclick=\"setActiveMenuItem('menubutton"+counter+"')\"";
    navhtml += " class=\"navbutton primaryfont\" id=\"menubutton"+counter+"\" ";
    if(navitem.items.length == 0 || navitem.items.length == null) navhtml += "href=\""+navitem.url+"\"";
    navhtml += ">"+navitem.label+"</a>";
    if(navitem.items.length > 0) navhtml += "<ul class=\"navsubmenu\" id=\"navsubmenu"+counter+"\">";
    for(var subcounter = 0; subcounter < navitem.items.length; subcounter++){
        var item = navitem.items[subcounter];
        navhtml += "<li class=\"submenubutton\"><a class=\"submenubutton secondaryfont\" href=\""+item.url+"\">"+item.label+"</a></li>";
    }
    if(navitem.items.length > 0) navhtml += "</ul>";
    navhtml += "</li>";
}
navhtml += "</ul>"
document.getElementById("headernav").innerHTML = navhtml;
