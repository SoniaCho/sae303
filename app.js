function initMap() {
    var mymap = L.map('mapid').setView([47.38, 0.68], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap);

    var geojsonFeature = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[0.772795,47.395205]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"4","Cat\u00e9gorie":"7","Ann\u00e9e de naissance":"46","\u00e9quipement de s\u00e9curit\u00e9":"2","Motif du d\u00e9placement":"9"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.66385,47.41989]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"4","Cat\u00e9gorie":"7","Ann\u00e9e de naissance":"10","\u00e9quipement de s\u00e9curit\u00e9":"","Motif du d\u00e9placement":"2"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.6883621,47.3524895]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"4","Cat\u00e9gorie":"7","Ann\u00e9e de naissance":"32","\u00e9quipement de s\u00e9curit\u00e9":"","Motif du d\u00e9placement":"5"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.67284,47.38378]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"3","Cat\u00e9gorie":"7","Ann\u00e9e de naissance":"54","\u00e9quipement de s\u00e9curit\u00e9":"2","Motif du d\u00e9placement":"1"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.694458,47.257989]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"4","Cat\u00e9gorie":"7","Ann\u00e9e de naissance":"37","\u00e9quipement de s\u00e9curit\u00e9":"","Motif du d\u00e9placement":"1"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.806092,46.91367]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"3","Cat\u00e9gorie":"7","Ann\u00e9e de naissance":"65","\u00e9quipement de s\u00e9curit\u00e9":"","Motif du d\u00e9placement":"5"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.9694791,47.2056897]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"4","Cat\u00e9gorie":"7","Ann\u00e9e de naissance":"17","\u00e9quipement de s\u00e9curit\u00e9":"","Motif du d\u00e9placement":"5"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.6624535,47.4838875]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"3","Cat\u00e9gorie":"7","Ann\u00e9e de naissance":"37","\u00e9quipement de s\u00e9curit\u00e9":"2","Motif du d\u00e9placement":"5"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.494701,47.4261434]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"3","Cat\u00e9gorie":"7","Ann\u00e9e de naissance":"63","\u00e9quipement de s\u00e9curit\u00e9":"2","Motif du d\u00e9placement":"5"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.396783,47.15017]},"properties":{"Num\u00e9roVehicules":"","Gravit\u00e9":"2","Cat\u00e9gorie":"","Ann\u00e9e de naissance":"70","\u00e9quipement de s\u00e9curit\u00e9":"","Motif du d\u00e9placement":"3"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.771266,47.303156]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"3","Cat\u00e9gorie":"7","Ann\u00e9e de naissance":"52","\u00e9quipement de s\u00e9curit\u00e9":"4","Motif du d\u00e9placement":"1"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.70446,47.41838]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"1","Cat\u00e9gorie":"32","Ann\u00e9e de naissance":"13","\u00e9quipement de s\u00e9curit\u00e9":"","Motif du d\u00e9placement":"2"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.6031199,47.4036904]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"3","Cat\u00e9gorie":"99","Ann\u00e9e de naissance":"6","\u00e9quipement de s\u00e9curit\u00e9":"2","Motif du d\u00e9placement":"5"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.66838,47.40158]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"4","Cat\u00e9gorie":"7","Ann\u00e9e de naissance":"43","\u00e9quipement de s\u00e9curit\u00e9":"","Motif du d\u00e9placement":"5"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.2694023,47.1082121]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"3","Cat\u00e9gorie":"7","Ann\u00e9e de naissance":"16","\u00e9quipement de s\u00e9curit\u00e9":"","Motif du d\u00e9placement":"5"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.32995,47.160631]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"3","Cat\u00e9gorie":"7","Ann\u00e9e de naissance":"32","\u00e9quipement de s\u00e9curit\u00e9":"2","Motif du d\u00e9placement":"5"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.7221094,47.3949086]},"properties":{"Num\u00e9roVehicules":"1","Gravit\u00e9":"4","Cat\u00e9gorie":"7","Ann\u00e9e de naissance":"40","\u00e9quipement de s\u00e9curit\u00e9":"","Motif du d\u00e9placement":"0"}}]};



    function onEachFeature(feature, layer) {
        if (feature.properties && feature.geometry && feature.geometry.coordinates) {
            var coordinates = feature.geometry.coordinates;
            var popupContent = '<b>Coordinates:</b><br>' +
                'Latitude: ' + coordinates[1] + '<br>' +
                'Longitude: ' + coordinates[0] + '<br>';
            var grav = feature.properties.Gravit\u00e9;
            popupContent += '<b>Gravity:</b> ' + grav + '<br>'; 

            var num = feature.properties.Num\u00e9roVehicules;
            popupContent += '<b>Vehicule Number:</b> ' + num + '<br>'; 

            var age = feature.properties.Ann\u00e9edenaissance;
            popupContent += '<b>Age:</b> ' + num + '<br>'; 
/*
            var protection = feature.properties.\u00e9quipementdes\u00e9curit\u00e9;
            popupContent += '<b>Type of protection:</b> ' + protection + '<br>'; 

            var motif = feature.properties.Motifdud\u00e9placement;
            popupContent += '<b>Reason to travel:</b> ' + motif + '<br>';
  */          
            var cat = feature.properties.Cat\u00e9gorie;
            popupContent += '<b>Categorie:</b> ' + cat + '<br>'; 

            
            layer.bindPopup(popupContent);

            
        }

        
    }
    var drawnItems = new L.FeatureGroup();
    mymap.addLayer(drawnItems);
    
    var drawControl = new L.Control.Draw({
        draw: {
            polyline: false,
            polygon: true,
            circle: true,
            marker: false
        },
        edit: {
            featureGroup: drawnItems
        }
    });
    mymap.addControl(drawControl);
    
    mymap.on('draw:created', function (e) {
        var layer = e.layer;
        drawnItems.addLayer(layer);
    });
    

     var zoomSlider = document.getElementById('zoom-slider');
        zoomSlider.addEventListener('input', function () {
            mymap.setZoom(parseInt(zoomSlider.value));
        });

        mymap.on('zoomend', function () {
            zoomSlider.value = mymap.getZoom();
        });
    
    var customIcon = L.icon({
        iconUrl: 'bike.png', 
        iconSize: [38, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
    
    var myLayer = L.geoJSON(geojsonFeature, {
        onEachFeature: onEachFeature,
        pointToLayer: function(feature, latlng) {
            return L.marker(latlng, {
                icon: customIcon,
            });
        }
    }).addTo(mymap);
    
    L.Control.geocoder().addTo(mymap);
}

window.addEventListener('load', initMap);