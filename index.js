const btn = document.querySelector('#btn');
const con = document.querySelector(".container");
const ipaddress = document.querySelector('#ip-address');
const loc = document.getElementById('loc');
const timezone = document.querySelector('#timezone');
const isp = document.querySelector('#isp');
const map2 = document.querySelector('#map');
var map = L.map('map').setView([51.505, -0.09], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap<b/a> contributors'
}).addTo(map);

var marker = L.marker([0, 0]).addTo(map)

btn.addEventListener('click', e => {
    e.preventDefault();

    const ipify = document.querySelector('#anyip');

    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_aZKJmSxcLXwYXgSRCTeKA2lOFxEME&ipAddress=${ipify.value}`;
    fetch(url)
        .then(response => response.json())
        .then(response => {
            const res = response;
            ipaddress.innerHTML = res.ip;
            loc.innerHTML = `${res.location.country},  ${res.location.region}`;
            timezone.innerHTML = `UTC ${res.location.timezone}`;
            isp.innerHTML = res.isp
            marker.setLatLng([res.location.lat, res.location.lng]);
            map.setView([res.location.lat, res.location.lng], 14)
            console.log(response)
        });

})