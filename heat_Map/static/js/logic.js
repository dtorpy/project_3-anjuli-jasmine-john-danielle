var myMap = L.map("map", {
  center: [31.3915, -99.1707],
  zoom: 13
});
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

function createMarkers(response) {

  // Pull the "wells" property from response.data. columns
  var wells = response

var arrays = [];

for (var index = 0; index < wells.length; index++) {
    var well = wells[index];
  // loop through the wells array, create a new marker, and push it to the wellMarkers array
  
  var array = L.marker(well.Latitude, well.Longitude)
  .bindPopup("<h1>" + well.WellName + "</h1><h2>" + well.OperatorName + "</h2>");
 
  // Add the marker to the wellMarkers array.
  arrays.push(array);
}

  var heat = L.heatLayer(arrays, {
    radius: 20,
    blur: 35
  }).addTo(myMap);


  // Create a layer group that's made from the well markers array, and pass it to the createMap function.
  createMap(L.layerGroup(heat));
}

// Perform an API call to the Citi well API to get the station information. Call createMarkers when it completes.
//d3.json("Data/Project3Data.json").then(createMarkers);
d3.json("Data/TexasWells.json").then(createMarkers)