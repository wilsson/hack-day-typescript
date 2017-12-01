class Leaflet {
    public renderLeaflet(cordenates: any): void {
        let { lat, lng } = cordenates;
        var map = (<any>window).L.map('map').setView([lat, lng], 4);
        (<any>window).L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }
}

class GoogleMaps {
    public renderGoogleMaps(cordenates: object): void {
        let map = new (<any>window).google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: cordenates
        });
    }
}

class ComponentStore {
    public map: Leaflet;
    constructor() {
        this.map = new Leaflet();
    }

    public initialize(){
        let cordenates = {lat: -25.363, lng: 131.044};
        this.map.renderLeaflet(cordenates);
    }
}

function initMap() {
    let componentStore = new ComponentStore();
    componentStore.initialize();
}