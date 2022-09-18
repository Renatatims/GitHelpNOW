//Geolocation - Coordinates//

var pastLat = JSON.parse(localStorage.getItem("latitude"));
var pastLong = JSON.parse(localStorage.getItem("longitude"));

var y = document.getElementById("lastCoords");
y.innerHTML = "Your last recorded latitude: " + pastLat +
"<br>Your last recorded longitude: " + pastLong;

var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Current latitude: " + position.coords.latitude +
  "<br>Current longitude: " + position.coords.longitude;
  localStorage.setItem("latitude", position.coords.latitude);
  localStorage.setItem("longitude", position.coords.longitude);
}

getLocation();

//end of Geolocation//



//timer//
//waits until the user shares location or not to refresh, generating an updated map

// timeLeft = 7;
// var timer = setInterval(function() {
//     timeLeft--;
//     var updatedLatitude = JSON.parse(localStorage.getItem("latitude"))
//     console.log(timeLeft);
//     if (timeLeft === 0 && typeof updatedLatitude == 'number' && pastLat == null) {
//         clearInterval(timer);
//         window.location.reload();
//     }
//     else if (timeLeft === 0) {
//         console.log("not refreshing");
//         clearInterval(timer);
//     }
// }, 1000);

//end of timer//




"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initAutocomplete() {
    if (typeof pastLat == 'number') {
        var map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: pastLat, lng: pastLong },
            zoom: 12,
            mapTypeId: "roadmap",
        });
    }
    else {
        var map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 39.966596, lng: -100.432987 },
            zoom: 5,
            mapTypeId: "roadmap",
        });
    }
    // Create the search box and link it to the UI element.
    var input = document.getElementById("pac-input");


    //************Input User's value*********************//
    var inputVal = document.getElementById("pac-input").value;
    console.log(inputVal);
    //************Input User's value*********************//

    var inputVal = document.getElementById("pac-input").value;
    var shelterBtnEl = document.getElementById ("shelterBtn");


    var foodBanksBtnEl = document.getElementById ("foodBanksBtn");

    function userChoiceShelter(){
        shelterBtnEl.addEventListener("click",  function (event){
            event.preventDefault();
            input.value = "shelter";
            
        })
    
    }

    userChoiceShelter();

    function userChoiceFoodBanks(){
        foodBanksBtnEl.addEventListener("click",  function (event){
            event.preventDefault();
            input.value = "foodbanks";

        })
    
    }

    userChoiceFoodBanks();

    var womenShelterEl = document.getElementById ("womenShelterBtn");

    function userChoiceWomenShelter(){
        womenShelterEl.addEventListener("click",  function (event){
            event.preventDefault();
            input.value = "Women Shelter";

        })
    
    }

    userChoiceWomenShelter();

    var womenShelterEl = document.getElementById ("MentalBtn");
    function mentalHealth(){
        womenShelterEl.addEventListener("click",  function (event){
            event.preventDefault();
            input.value = "Mental Health Facilities";
            

        })
    
    }

    mentalHealth()

//************************* //

    var searchBox = new google.maps.places.SearchBox(input);
    console.log(searchBox);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", function () {
        searchBox.setBounds(map.getBounds());
    });
    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", function () {
        var places = searchBox.getPlaces();
        console.log(places);
        if (places.length == 0) {
            return;
        }
        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];
        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };
            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location,
            }));
            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            }
            else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}
window.initAutocomplete = initAutocomplete;