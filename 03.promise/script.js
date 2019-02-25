'use strict;'

//Créez une promise (promesse) qui retourne une chaîne de caractères 'Hello' immediatement. Récupérez et logguez la valeur qu'elle retourne.
const myPromise = new Promise((resolve, reject) => {
	if (5 > 3) {
		setTimeout(() => {
			resolve('Hello');

		}, 10000)
		resolve('Hello');

	} else {
		reject('Error');

	}
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));

//Créez une promise qui retourne un nombre N. Enchaînez le traitement de la promise pour effectuez les operations suivantes:

//multiplier N par 2
//ensuite soustraire 1
//ensuite decrementer de 2
//ensuite augmenter de 10. Logguez le résultat réçu.

const getNum = new Promise((resolve, reject) => {
	resolve(10);
});
getNum
  .then(num => {
  	return num * 2;
  })
  .then(num => {
  	return num - 1;
  })
  .then (res => {
  	console.log('res', res);
  })
  .catch(err => {
  	console.log('err', err);
  })


//Créez une fonction qui prend un nombre comme parametre et qui retourne une promise. Si le nombre passé est supérieur à 5 la promise est résolue avec succès, sinon la promise retourne une erreur 'Le nombre passé est trop grand'. Appelez la fonction créée et récupérez la valeur retournée par la promise.
const myprms = () => {
	return new Promise((resolve, reject) =>{
			if (5 > 3) {
		setTimeout(() => {
			resolve('Hello');

		}, 10000)
		resolve('succès');

	} else {
		reject('Le nombre passé est trop grand');

	}
   });
	myprms
  .then(result => console.log(result))
  .catch(error => console.log(error));


const getmyprms = new Promise((resolve, reject) => {
	resolve(10);
});
getmyprms
  .then(num => {
  	return num > 5;
  })
  .then(num => {
  	return num - 1;
  })
  .then (res => {
  	console.log('res', res);
  })
  .catch(err => {
  	console.log('err', err);
  })


//Placeholder API:
//Placeholder API: https://jsonplaceholder.typicode.com/
//Récupérez et affichez un article avec l'id 25, ensuite récupérez et affichez ses commentaires.

fetch('https://jsonplaceholder.typicode.com/posts/25')
 .then(reponse => reponse.json())
 .then(result => {
 	console.log('result', result)
 })


//Placeholder API:
//Placeholder API: https://jsonplaceholder.typicode.com/
//Récupérez et affichez un article avec l'id 5, ensuite récupérez et affichez ses commentaires.

fetch('https://jsonplaceholder.typicode.com/posts/5')
 .then(reponse => reponse.json())
 .then(result => {
 	console.log('result', result)
 })


//Créez un formulaire d'inscription. A la soumission du formulaire envoyez une requête pour créez un nouvel utilisateur. Sauvegardez ces données dans les cookies.
const signupData = {
	email: 'test@ynov.com',
	passwoord: 'qwerty',
	lastname: 'Toto',
}
fetch('https://reqres.in/api/register', {
	method: 'POST',
	body: JSON.stringify(signupData)
	headers: {
		'Content-Type': 'application/json'
	}
})
.then(response => response.json())
.then(result => console.log('result', result));

//Modifiez l'utilisateur avec l'Id 2 sur https://reqres.in
//PUT: https://reqres.in/api/users/2 avec l'objet

const userdata = {
	name:'myname',
	job:'étudiant',
}
fetch('https://reqres.in/api/users/2',{
	method: 'PUT',
	body: JSON.stringify(userdata)
	headers: {
		'Content-Type': 'application/json'
	}
})
.then(response => response.json())
.then(result => console.log('result', result));


//Première page
//Récuperez et affichez un gif aléatoire.
fetch('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5').
client.trending("gifs", {})
  .then((response) => {

  })
  .catch((err) => {

  })

