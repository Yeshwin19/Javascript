'use strict;'

//
 let xhttp = new XMLHttpRequest();,
    xhttp.onreadystatechange = () => {,
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log(xhttp.responseText)
        const rawValue == xhttp.responseText; //string
        const parsedValue = JSON.parse(rawValue);

        const hanSoloInfo = document.createElement('div')
        hanSoloInfo.innerText = `
        <p>Nom : ${parsedValue.name}</p>
        <p>Sexe : ${parsedValue.gender}</p>
        <p>Date de naissance : ${parsedValue.birth_year}</p>
        `
        document.body.appendChild(hanSoloInfo);
      }
    };
    xhttp.open('GET', 'https://swapi.co/api/people/14/', true);,
    xhttp.send();


//
let xhttp2 = new XMLHttpRequest();,
    xhttp2.onreadystatechange = () => {,
    if (xhttp.readyState == 4 && xhttp2.status == 200) {
        console.log(xhttp2.responseText)
        const rawValue = xhttp2.responseText; 
        const parsedValue = JSON.parse(rawValue);

        parsedValue.results.forEach(person => {
        	const personDiv = document.createElement('div');
        	personDiv.innerHTML = `
        	<hr>
            <p>Nom : ${person.name}</p>
            <p>Sexe : ${person.gender}</p>
            <p>Date de naissance : ${person.birth_year}</p>
         `
         document.body.appendChild(personDiv);
        })
        
      }
    };
    xhttp.open('GET', 'https://swapi.co/api/people/?search=skywalker', true);,
    xhttp.send();


 //

 const planets = [1,2,3,4,5];
 planets.forEach(planetID => {
 	let xhttp3 = new XMLHttpRequest();,
    xhttp3.onreadystatechange = () => {,
    if (xhttp3.readyState == 4 && xhttp3.status == 200) {
        console.log(xhttp2.responseText)
        const rawValue = xhttp2.responseText; 
        const parsedValue = JSON.parse(rawValue);

        	const planet = document.createElement('div');
        	planet.innerHTML = `
        	
            Climat : ${planets.climat}
           
         `
         document.body.appendChild(planet);
    }

};
  xhttp.open('GET', 'https://swapi.co/api/planets/'+planetID + '/', true);,
  xhttp.send();

