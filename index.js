let currentPage = "home";

document.addEventListener('DOMContentLoaded', (event) => {
    loadPage(currentPage);
});

function loadPage(activePage) {
    const contents = document.querySelectorAll(".main-content");

    for (let page = 0; page < contents.length; page++) {
        if (contents[page].id === activePage) {
            contents[page].style.display = "block";
        } else {
            contents[page].style.display = "none";
        }

        currentPage = activePage;
    }

    if (document.querySelector(".main-navigation-toggle").checked) {
        document.querySelector(".main-navigation-toggle").checked = false;
    }
}