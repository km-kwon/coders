const API_KEY = "6a180c4fca443233c56bff369fa6acce"


function onGeoOk(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = 
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&lang=kr`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    //응답속도 느릴땐 then
    //쉐에에에엣;;;ㅅㅂ;;;쉐에엣;;;
    //이건 백엔드의 영역이라 좀 많이 어렵네;
}

function onGeoError(){
    alert("Can't find you");
}






navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
