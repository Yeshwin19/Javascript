'use strict';

// Trouvez les balises DIV du document
const myDivs = document.getElementsByTagName('div');
console.log('myDivs', myDivs);
const myDivs2 = document.querySelectorAll('div')
console.log('myDivs2', myDivs2);
console.log();

const myParagraphs = document.getElementsByClassName('my-paragraphs');

const myParagraphs2 = document.querySelectorAll('.my-paragraph');
console.log('my-paragraphs')
const myParagraphs2 = document.querySelectorAll('.my-paragraph');
console.log('myDivs2 ')


const myUniqueEl = document.getElementById('js-unique-el');
const myUniqueEl2= document.getElementById('#js-unique-el');


const myParagraphsInDivs = document.querySelectorAllE('div p');
console.log('myParagraphsInDivs', myParagraphsInDivs)





const firstP = document.querySelector('p');
firstP.innerText = 'I am the first paragraph';
console.log('firstP > text'), firstP.innerText

const secondP = document.querySelector('.second-p');
secondP[0].innerHTML = '<span>Hello</span>'
console.log('secondP > html', secondP[0].innerHTML);


const myImg = document.querySelector('img');
myImg.setAttribute('width', '50%');
myImg.setAttribute('height', 'auto');