const api = {
    key: "8c219e8a3a806d2598c75d0fe36d86e4",
    baseurl: "https://api.openweathermap.org/data/3.0/",
};

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery)

function setQuery(e) {
    if (e.keyCode == 13) {
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
}

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((weather) => {
            return weather.json();
        })
        .then(dispayResults);
}

function dispayResults(weather) {
    console.log(weather);
}
