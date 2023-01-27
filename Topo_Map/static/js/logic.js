//function to create map
function createMap(wellcount){
  // Add a tile layer.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });
  // Create an overlayMaps object to hold the earthquake layer.
  var basemaps = {
    "Topo": topo,
    "Street": street
  };
  // Create an overlayMaps object to hold the earthquake layer.
  var overlayMaps = {
    "Number of Wells": wellcount
  };
  // Create a map object.
  var map = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 3,
    layers: [topo, street, wellcount]
  });
  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(basemaps, overlayMaps, {
  collapsed: false 
  }).addTo(map);
}


 // use link to GeoJSON Data
//var link ="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

//function for Markers
function createMarkers(response) {

  // Pull the "wells" property from response.data. columns
  var wells = response;

  // Initialize an array to hold well markers.
  var wellMarkers = [];

  // Loop through the wells array.
  for (var index = 0; index < wells.length; index++) {
    var well = wells[index];

    // For each well, create a marker, and bind a popup with the Well's name.
    var wellMarker = L.marker([well.Latitude, well.Longitude])
      .bindPopup("<h3>" + well.WellName + "<h3><h3>Operator: " + well.OperatorName + "</h3>");

    // Add the marker to the wellMarkers array.
    wellMarkers.push(wellMarker);
  }

  // Create a layer group that's made from the well markers array, and pass it to the createMap function.
  createMap(L.layerGroup(wellMarkers));
}


// Perform an API call to the Citi well API to get the station information. Call createMarkers when it completes.
//d3.json("Data/Project3Data.json").then(createMarkers);
d3.json("Data/Texas2012.json").then(createMarkers);


