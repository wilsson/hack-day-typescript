var Leaflet = /** @class */ (function () {
    function Leaflet() {
    }
    Leaflet.prototype.renderLeaflet = function (cordenates) {
        var lat = cordenates.lat, lng = cordenates.lng;
        var map = window.L.map('map').setView([lat, lng], 4);
        window.L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    };
    return Leaflet;
}());
var GoogleMaps = /** @class */ (function () {
    function GoogleMaps() {
    }
    GoogleMaps.prototype.renderGoogleMaps = function (cordenates) {
        var map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: cordenates
        });
    };
    return GoogleMaps;
}());
var ComponentStore = /** @class */ (function () {
    function ComponentStore() {
        this.map = new Leaflet();
    }
    ComponentStore.prototype.initialize = function () {
        var cordenates = { lat: -25.363, lng: 131.044 };
        this.map.renderLeaflet(cordenates);
    };
    return ComponentStore;
}());
function initMap() {
    var componentStore = new ComponentStore();
    componentStore.initialize();
}
