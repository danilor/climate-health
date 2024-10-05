// Initialize and add the map
let map;
const mapID = 'mapObj';
const initialZoom = 15;
const mapDiv = 'map';
const mapObj = document.getElementById(mapDiv);
// let lat = 9.958449722316873;
// let lng = -84.22577892597153;
let lat = 0;
let lng = 0;
let marker = null;

async function initMap() {
    // 9.958449722316873, -84.22577892597153
    const position = { lat: lat, lng:lng };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(mapObj, {
        zoom: initialZoom,
        center: position,
        mapId: mapID,
    });

    // The marker, positioned at Uluru
    marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Current Position",
    });
}



function start(){
    if ("geolocation" in navigator) {
        /* geolocation is available */
        navigator.geolocation.getCurrentPosition((position) => {
            // doSomething(position.coords.latitude, position.coords.longitude);
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            initMap();
        });
    } else {
        /* geolocation IS NOT available */
        initMap();
    }
}

start();