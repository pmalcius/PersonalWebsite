// script.js

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var navbar = document.getElementById("navbar");

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-50px"; /* Adjust the height of your navbar */
    }

    // Add or remove a class to change the background color of the navbar
    if (currentScrollPos > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    prevScrollpos = currentScrollPos;
};
