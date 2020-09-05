const buttons = document.querySelector("#buttons")
const dark = document.querySelector("#dark")
const satellite = document.querySelector("#satellite")
const feature = document.querySelector("#feature")

mapboxgl.accessToken = 'pk.eyJ1IjoiYmhpcmE3IiwiYSI6ImNrNTNsdWk3MjA5eXIza21ncmtqbnB2M2cifQ.GtnTmv9p_McKIpj2W9ZbxA';
    
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/bhira7/ck5e8zqah13vl1ik7sevb1ll3",
    bearing: -50,
    center: [2.933405, 49.933312], 
    zoom: 17.3,
    pitch: 80
});

map.addControl(new mapboxgl.NavigationControl());

const stedArray = [];

scrollToDiv = (sted) => {
    const element = document.getElementById(sted);
    element.scrollIntoView({behavior:"smooth",block: "center"});
}

for(const prop in steder) {
    const info = steder[prop];

    stedArray.push(prop)

    const div = document.createElement("div");
    div.className = "marker";

    div.onclick = () => { scrollToDiv(prop) }

    const marker = new mapboxgl.Marker(div)

    marker.setLngLat(info.center)
    marker.addTo(map)
}

window.onscroll = () => {
    stedArray.map(
        stedNavn => {
            if(sjekkElementPaaSkjerm(stedNavn)) {
                setAktivSted(stedNavn);
                return;
            }
        })
}

let aktivSted = "somme"

const setAktivSted = (stedNavn) => {
    if(stedNavn === aktivSted) {
        return;
    }
    
    map.flyTo(steder[stedNavn])

    document.getElementById(stedNavn).className = "active";
    document.getElementById(aktivSted).className = "";

    aktivSted = stedNavn;
} 

const sjekkElementPaaSkjerm = (id) => {
    const element = document.getElementById(id)
    const posisjon = element.getBoundingClientRect()
    return posisjon.top < window.innerHeight && posisjon.bottom >= 70
}

buttons.onclick = (evt) => {
    const stil = evt.target.dataset.stil
    map.setStyle("mapbox://styles/bhira7/" + stil)
}


satellite.onclick = () => {
    satellite.className = "bliTykkere"
    dark.classList.add("bliNormal")
}

dark.onclick = () => {
    dark.className = "bliTykkere"
    satellite.className = "bliNormal"
}
















/*
let i = 0;
let intervall;

const flyTil = () => {
    if(i === steder.length) {
        clearInterval(intervall)
        return;
    }
    map.easeTo(steder[i])
    i++
}

map.on("load", () => {
    flyTil()
    //intervall = setInterval(flyTil, 6500)
})*/
