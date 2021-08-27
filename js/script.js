window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function rotateNavbarButton() {
    let navButton = document.getElementById("navbar-button");
    if (navButton.getAttribute("rotated") == "false") {
        navButton.style.transform = "rotate(180deg)";
        navButton.setAttribute("rotated", "true");
    } else {
        navButton.style.transform = "rotate(0deg)";
        navButton.setAttribute("rotated", "false");
    }
}