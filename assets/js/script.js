'use strict';



/**
 * Add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAV TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

navToggler.addEventListener("click", toggleNavbar);



/**
 * HEADER
 * 
 * active header when window scrolled to 50px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);
/**
 * TYPING ANIMATION - Continuous Loop
 */

const typedTextElement = document.getElementById('typed-text');

if (typedTextElement) {
  const textToType = "👋, My name is Aneesa\n\nI'm a DevOps Engineer\n\nBased in Bangalore, India.";
  let charIndex = 0;
  const typingSpeed = 80; // milliseconds per character
  const pauseBeforeRestart = 3000; // pause for 3 seconds before restarting

  function typeText() {
    if (charIndex < textToType.length) {
      typedTextElement.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      // Animation complete, wait then restart
      setTimeout(() => {
        typedTextElement.textContent = '';
        charIndex = 0;
        typeText();
      }, pauseBeforeRestart);
    }
  }

  // Start typing after a short delay
  setTimeout(typeText, 500);
}

