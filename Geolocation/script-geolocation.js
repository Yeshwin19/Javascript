'use script';

if (navigator.geolocation){

    const successCallback = (position) => {
        console.log('postion', position);
        const link = document.createElement('a'); 
        link.href = 'https://www.latlong.net/c/?lat=${position.coords.latitude}&long=${position.coords.longitude}';
        
        link.innerText = 'Click to see your location';
        document.querySelector('body').appendChild(link);

    }


    const errorCallback = (error) => {
        console.log('error', error);
    }
    
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}