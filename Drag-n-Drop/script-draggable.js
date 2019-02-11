'use strict';

const dropTo = document.querySelector('#js-to-drop');
const myDraggable = document.querySelector('#js-draggable');


myDraggable.addEventListener('dragstart', event => {
    console.log('e', e);
    event.dataTransfert.setData('text', event.target.id);
})