document.write('<div>\
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">\
        <div class="container-fluid">\
            <a class="navbar-brand" href="#">Film By Nand</a>\
            <button class="navbar-toggler navbar-toggle" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse"\
                    id="navbar-button" onclick="rotateNavbarButton()" rotated="false">\
                <i class="bi bi-arrow-down"></i>\
            </button>\
            <div class="blurred collapse navbar-collapse" id="navbarSupportedContent">\
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">\
                    <li class="nav-item">\
                        <a aria-current="page" class="nav-link" href="index.html">Home</a>\
                    </li>\
                    <li class="nav-item dropdown">\
                        <a aria-expanded="false" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"\
                           id="navbarDropdown"\
                           role="button">\
                            Collections\
                        </a>\
                        <ul aria-labelledby="navbarDropdown" class="dropdown-menu">\
                            <li><a class="dropdown-item" href="collections/march2020.html">March 2020</a></li>\
                            <li><a class="dropdown-item" href="collections/april2020.html">April 2020</a></li>\
                            <li><a class="dropdown-item" href="collections/june2020.html">June 2020</a></li>\
                            <li><a class="dropdown-item" href="collections/julyaugust2020.html">July-August 2020</a></li>\
                        </ul>\
                    </li>\
                </ul>\
            </div>\
        </div>\
    </nav>\
    </div>\
    \
    \
    <div class="progress-container fixed-top">\
    <div class="progress-bar" id="myBar"></div>\
    </div>\
');
let test = window.location.pathname;
test = test.split("/").pop();

if (test === "index.html") {
    document.getElementsByClassName("nav-link").item(0).classList.add("active");
    document.getElementsByClassName("nav-link").item(0).href = "#";
} else if (test === "march2020.html") {
    document.getElementsByClassName("nav-link").item(1).classList.add("active");
    document.getElementsByClassName("dropdown-item").item(0).href = "#";
} else if (test === "april2020.html") {
    document.getElementsByClassName("nav-link").item(1).classList.add("active");
    document.getElementsByClassName("dropdown-item").item(1).href = "#";
} else if (test === "june2020.html") {
    document.getElementsByClassName("nav-link").item(1).classList.add("active");
    document.getElementsByClassName("dropdown-item").item(2).href = "#";
} else if (test === "julyaugust2020.html") {
    document.getElementsByClassName("nav-link").item(1).classList.add("active");
    document.getElementsByClassName("dropdown-item").item(3).href = "#";
}
