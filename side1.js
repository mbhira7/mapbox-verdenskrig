mapboxgl.accessToken = 'pk.eyJ1IjoiYmhpcmE3IiwiYSI6ImNrNTNsdWk3MjA5eXIza21ncmtqbnB2M2cifQ.GtnTmv9p_McKIpj2W9ZbxA';

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/bhira7/ck5ea71rv0e1c1imti3q4ec8n",
    zoom: 2,
    center:[1.297726, 43.262696]
});

map.setMinZoom(2)

const verdiArray = Object.values(kartData)
const keyArray = Object.keys(kartData)

const alliedPowers = "Allied Powers"
const centralPowers = "Central Powers"

const alliert = keyArray.slice(0,19)
const sentral = keyArray.slice(19,keyArray.length)

const leggTilLayer = (land,farge,landArray) => {
    map.on("load", () => {
        map.addLayer({
            id: land,
            type: "fill",
            paint: {
                "fill-color": farge,
                'fill-opacity': 0.78
            },
            source: {
                type: "vector",
                url: "mapbox://byfrost-articles.74qv0xp0"
            },
            layout:{
                "visibility":"visible"
            },
            "source-layer":"ne_10m_admin_0_countries-76t9ly"
        })

        map.setFilter(land, ["in", "ADM0_A3_IS"].concat(landArray));

    })
}

leggTilLayer(alliedPowers,"green",alliert)
leggTilLayer(centralPowers,"red",sentral)

const layerId = [alliedPowers, centralPowers];

const fjernLayer = (element) => {
    for (let i = 0; i < layerId.length; i++) {
            const id = layerId[i];
            
            const link = document.querySelector(element);

            let clickedLayer = id

            link.onclick = (evt) => {
                evt.preventDefault();
                evt.stopPropagation();
                
                const visibility = map.getLayoutProperty(clickedLayer, "visibility");
                
                if (visibility === "visible") {
                    map.setLayoutProperty(clickedLayer, "visibility", "none");
                } 
                else {
                    map.setLayoutProperty(clickedLayer, "visibility", "visible");
                }
        
            }
        const layers = document.querySelector("body");
        layers.appendChild(link);
    }
}

fjernLayer(".tekst")
fjernLayer(".boks")

const popup = new mapboxgl.Popup();

const visPopUp = (gruppe) => {
    map.on("mousemove", gruppe, async (mapElement) => {
        const landKode = mapElement.features[0].properties.ADM0_A3_IS; 
        const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${landKode}`)
        const json = await response.json();

        map.getCanvas().style.cursor = "pointer";

        const indeks = keyArray.indexOf(landKode)
        const verdi = verdiArray[indeks]

        const visInfo = `
        <div class="popup-div">
            <img class="popup-bilde" src=${json.flag} />
            <h3 class="clip-text ct2">${json.name}</h3>
        </div>
        <h3 class="mob">Total mobilized: ${verdi}</h3>
        `

        popup
            .setLngLat(mapElement.lngLat)
            .setHTML(visInfo)
            .addTo(map)
    })

    map.on("mouseleave", gruppe, () => {
        map.getCanvas().style.cursor = "";
        popup.remove();
    })
}

visPopUp(alliedPowers)
visPopUp(centralPowers)



