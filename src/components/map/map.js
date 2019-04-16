import { bind } from "decko";

class Map {
    constructor(element) {
        this.mapDiv = element.querySelector('.map__frame');
        document.addEventListener('DOMContentLoaded', this.initMap);
    }

    @bind
    initMap() {
        this.map = new google.maps.Map(this.mapDiv, {
            center: { lat: +this.mapDiv.dataset.lat, lng: +this.mapDiv.dataset.lng },
            zoom: 13.5
        });
        this.marker = new google.maps.Marker({
            position: { lat: +this.mapDiv.dataset.lat - 0.0035, lng: +this.mapDiv.dataset.lng },
            map: this.map,
            icon: 'img/red.png'
        });
    }
}

$('.map').each((index, element) => new Map(element));
