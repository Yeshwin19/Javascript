'use strict';

document.cookie = 'lang=fr'


document.cookie = 'lang2=fr';expires=${new Date('2019-02-12')};

docCookies.setItem('test1', 'test', new Date('2019-12-31'));

docCookies.setItem('userID', 123);
console.log(docCookies.getItem('userID'));


docCookies.setItem('userID', 321);


console.log(docCookies.getItem('lang'));
console.log(docCookies.getItem('previewSeen'));
console.log(docCookies.getItem('userID'));
console.log(docCookies.getItem('studentID'));

// STORE AN OBJECT
docCookies.setItem('testObject', JSON.stringify{id:1});

// GET AN OBJECT
const myObj = docCookies.getItem('testObject');
console.log('myObj', myObj);
console.log('myObj parsed', JSON.parse(myObj));

//SUPPRIMER LE COOKIE TEST
docCookies.removeItem('test');
docCookies.setItem('test', '', new Date('2000-01-01'));


// LOCAL STORAGE  
//Vérifiez si l'objet LocalStorage est supporté par le navigateur.
if (localStorage){

//Créez une entrée greeting égale à 'Hello World'. 
    localStorage.setItem('greeting', 'Hello World');


//Créez une entrée adIds égale à l'objet {top: 1, bottom: 2}. 
localStorage.setItem('adIds', JSON.stringify({top: 1, bottom: 2}));


//Récupérez greeting. 
console.log (localStorage.getItem('greeting'));


//Modifiez cette entrée à 'Welcome'. 
localStorage.setItem('greeting', 'Welcome');


//Supprimez greeting du LocalStorage.
localStorage.removeItem('greeting');

// DELETE ALL ENTRIES.
localStorage.clear();
}





