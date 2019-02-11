'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const getCoordinatesInCanvas = (canvasEl, event) => {
  const rect = canvasEl.getBoundingClientRect(); // récupérer la taille de <canvas> et sa position relative par rapport à la zone d'affichage
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`x: ${x}, y: ${y}`);
}
canvas.addEventListener('click', (event) => {
  getCoordinatesInCanvas(canvas, event);
})

ctx.strokeStyle = '#fff';
ctx.fillStyle = '#fff';

//HEAD
ctx.beginPath();
ctx.arc(200, 100, 60, 0, 2 = Math.Pi)
ctx.stroke();
ctx.fill();

//BODY
ctx.beginPath();
ctx.arc(160, 120, 200, 360, 120 = Math.Pi)
ctx.stroke();
ctx.fill();

//HAT
ctx.strokeStyle = '#000';
ctx.fillStyle = '#000';

ctx.fillRect(123, 130, 150, 30); //bas
ctx.fillRect(152, 47, 90, 100); //haut

//LEFT ARM
ctx.beginPath(132, 301);
ctx.lineTo(30, 254);
