use strict';

function appendEl(container, el){
    container.appendChild(el);
}

function createEl(text){
    console.log(text);
    const el = document.createElement('p');
    el.innerText = text;
    return el;
}

// NAVIGATOR
const navigatorSect = document.querySelector('#js-navigation');

appendEl(navigatorSect, createEl('Nom de navigateur :' ${window.navigator.userAgent}));

appendEl(navigatorSect, createEl('Langue :' ${window.navigator.language}));

appendEl(navigatorSect, createEl('Plateforme :' ${window.navigator.platform}));

appendEl(navigatorSect, createEl('Cookies activés ?' : ${window.navigator.cookieEnabled}));


// SCREEN
const screenSect = document.querySelector('#js-screen');

appendEl(screenSect, createEl('Largeur nav :' ${window.screen.width}));

appendEl(screenSect, createEl('Hauteur nav :' ${window.screen.height}));

appendEl(screenSect, createEl('Orientation nav :' ${window.screen.orientation}));

// WINDOW
const windowsSect = document.querySelector('#js-window');

appendEl(windowsSect, createEl("Largeur de la fenêtre d'affichage de votre navigateur :" ${window.outerWidth}));

appendEl(windowsSect, createEl("hauteur de la fenêtre d'affichage de votre navigateur :" ${window.outerHeight}));

appendEl(windowsSect, createEl('largeur de votre navigateur :' ${window.innerWidth}));
appendEl(windowsSect, createEl('longueur de votre navigateur :' ${window.innerHeight}));

// LOCATION
const locationSect = document.querySelector('#js-location');
var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
appendEl(locationSect, createEl('URL :' ${newURL}));

appendEl(locationSect, createEl("Nom d'hote :" ${window.location.host}));

appendEl(locationSect, createEl('Protocole :' ${window.location.protocol}));
