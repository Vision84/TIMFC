let currentPage;

if (localStorage.getItem("currentPage") === null) {
    currentPage = "home";
} else {
    currentPage = localStorage['currentPage'];
}

document.addEventListener('DOMContentLoaded', (event) => {
    const contents = document.querySelectorAll(".main-content");

    for (let page = 0; page < contents.length; page++) {
        if (contents[page].id !== currentPage) {
            contents[page].style.display = "none";
        }
    }

    for (let page = 0; page < contents.length; page++) {
        if (contents[page].id === currentPage) {
            unfade(contents[page]);
        }
    }
});

async function loadPage(activePage) {
    const contents = document.querySelectorAll(".main-content");

    if (document.querySelector(".main-navigation-toggle").checked) {
        document.querySelector(".main-navigation-toggle").checked = false;
    }

    for (let page = 0; page < contents.length; page++) {
        
        if (contents[page].id !== activePage) {
            await fade(contents[page]);
        }
    }

    await new Promise(resolve => setTimeout(resolve, 450));

    for (let page = 0; page < contents.length; page++) {
        
        if (contents[page].id === activePage) {
            await unfade(contents[page]);
        }
        currentPage = activePage;
        localStorage['currentPage'] = currentPage;
    }

}

async function unfade(element) {
    var op = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 1);
}

async function fade(element) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 1);
}