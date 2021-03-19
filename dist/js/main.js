const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 150) {
	    $(".nav").css("background" , "rgb(39 39 39 / 86%)");
	    $(" .menu-nav__link").css("font-size" , "1.2rem");
	    $(".menu-nav__link").css("padding" , "1.5rem 0");
	  }

	  else{
      $(".nav").css("background" , "transparent");
	    $(" .menu-nav__link").css("font-size" , "1.5rem");
	    $(".menu-nav__link").css("padding" , "2rem 0");	
	  }
  })
})