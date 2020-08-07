var currentVisibleElement = "";

const classMap = {
    "home-content": "home-nav",
    "experience-content": "experience-nav",
    "project-content": "projects-nav"
}


document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let buffer = [];

    checkVisbleElements();

    document.addEventListener('keydown', event => {
        const inputs = ['arrowup', 'arrowright', 'arrowdown', 'arrowleft', 'b', 'a', 'enter']
        const コナミコマンド = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a', 'enter']
        const key = event.key.toLowerCase();

        if (inputs.indexOf(key) === -1) return;
        buffer.push(key);
        if (buffer[buffer.length - 1] !== コナミコマンド[buffer.length - 1]) buffer = [];
        else if (buffer.length === 11 && buffer[buffer.length - 1] === 'enter') {
            alert("do something cool")
        }
    });

    document.addEventListener('scroll', event => {
        checkVisbleElements();
    })


});

function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView();
}


function checkVisbleElements() {
    const homeElement = document.getElementById("home-content");
    const expElement = document.getElementById("experience-content");
    const projElement = document.getElementById("project-content");

    const elements = [homeElement, expElement, projElement]

    const visibleElement = testViewportElements(elements);

    if (currentVisibleElement !== "" && (currentVisibleElement.id !== visibleElement.id)) {
        const oldElement = document.getElementById(classMap[currentVisibleElement.id])
        const newElement = document.getElementById(classMap[visibleElement.id])

        removeClass(oldElement, "nav-active");
        addClass(newElement, "nav-active");
        currentVisibleElement = visibleElement;
        // todo instead of hard coding background colors, set background-color on the body based on the current visible section


    } else if (currentVisibleElement === "") {
        const oldElement = document.getElementById(classMap[visibleElement.id])
        currentVisibleElement = visibleElement;
        addClass(oldElement, "nav-active");
    }

}

function isInViewPort(elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function testViewportElements(elements) {
    var id = "";
    for (el of elements) {
        if (isInViewPort(el)) {
            id = el;
            break;
        }
    }
    return id;
}

function addClass(element, className) {
    var arr;
    arr = element.className.split(" ");
    if (arr.indexOf(className) === -1) {
        element.className += " " + className;
    }
}

function removeClass(element, className) {
    var arr;
    arr = element.className.split(" ");
    let classIndex = arr.indexOf(className);
    if (classIndex !== -1) {
        arr[classIndex] = "";
        let classStr = "";
        for (c of arr) {
            classStr += c;
            classStr += " ";
        }
        element.className = classStr;
    }
}
