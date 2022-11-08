let activePage = "home";

document.addEventListener('DOMContentLoaded', (event) => {
    loadPage(activePage);
});

function loadPage(activePage) {
    activePage = activePage;
    const contents = document.querySelectorAll(".main-content");

    for (let page = 0; page < contents.length; page++) {
        if (contents[page].id === activePage) {
            contents[page].style.display = "block";
        } else {
            contents[page].style.display = "none";
        }
    }

    if (document.querySelector(".main-navigation-toggle").checked) {
        document.querySelector(".main-navigation-toggle").checked = false;
    }
}