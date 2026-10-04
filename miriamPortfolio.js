// miriamPortfolio.js
console.log("portfolio js is working!");

// ---------- MOBILE MENU ----------

// getting the button and the menu from the html
let menuBtn = document.getElementById("menu-btn");
let mobileMenu = document.getElementById("mobile-menu");
let menuIcon = menuBtn.querySelector("i");

// when you click the button, show or hide the menu
menuBtn.addEventListener("click", function () {
  //  hides mobileMenu, so this toggles it on and off
  mobileMenu.classList.toggle("hidden");

  // check if the menu is open now
  if (mobileMenu.classList.contains("hidden")) {
    menuBtn.setAttribute("aria-expanded", "false");
    menuIcon.className = "fas fa-bars";
  } else {
    menuBtn.setAttribute("aria-expanded", "true");
    menuIcon.className = "fas fa-times";
  }
});

// close the menu after clicking a link, otherwise it just stays open
let mobileLinks = mobileMenu.querySelectorAll("a");

for (let i = 0; i < mobileLinks.length; i++) {
  mobileLinks[i].addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
    menuBtn.setAttribute("aria-expanded", "false");
    menuIcon.className = "fas fa-bars";
  });
}

// ---------- CONTACT FORM ----------

let contactForm = document.querySelector("form");

contactForm.addEventListener("submit", function (event) {
  // stop the page from reloading
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // just checking the values show up
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Message: " + message);

  // TODO: actually send this somewhere (need a backend??)
  alert("Thanks " + name + "! Your message was received.");

  // clear the form
  contactForm.reset();
});

// ---------- FOOTER YEAR ----------

// this changes the year in the footer automatically
// var year = new Date().getFullYear();
// document.querySelector("footer p").innerHTML = "&copy; " + year + " Miriam-Leigh Adjaye. All rights reserved.";
// ^ not using this yet because i want to test it first