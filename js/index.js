'use strict'

//Toggles the naviagation menu.
function menuClicked(){
  let dropDown = document.getElementById("drop-list");
  if(dropDown == null) return;
  if(dropDown.style.display == 'none') {
    dropDown.style.display = 'block';
    return;
 } else dropDown.style.display = "none";
}
//Called when resized.
function onResize(){
   //Sets the naviagation menu display to none if greater than 900px.
   let navMenu = document.getElementById('drop-list');
   if (navMenu && window.innerWidth > 900){
      navMenu.style.display = 'none';
   }
}

function init(){
   //Registers the naviagation menu with the menu button.
   let menuButton = document.getElementById("menu-button");
   if (menuButton != null) menuButton.addEventListener('click',menuClicked);
   //Registers the event chain for when the browser is resized.
   window.addEventListener('resize',onResize);
}
//Registers the initialization of the webpage.
addEventListener('DOMContentLoaded',init);