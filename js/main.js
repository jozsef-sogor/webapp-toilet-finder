"use strict";

// Materialize auto initilizer
M.AutoInit();


// Loader
/*
document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');

	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});

*/


$(window).load(function() { //Do the code in the {}s when the window has loaded
  $(".preloader-background").fadeOut("fast");
  $(".preloader-wrapper").fadeOut("fast"); //Fade out the #loader div
});


//Acessing user location
var map;


//var infoWindow;
function initMap() {
    
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 15,
		disableDefaultUI: true,
    styles: mapStyling
  });
  directionsRenderer.setMap(map);

  infoWindow = new google.maps.InfoWindow;
   


  // Try HTML5 geolocation.
  //Checks if the browser has access tot the user location
  //if yes it puts the coordinates into (global) variables
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      //Puts a pop-up for testing
      infoWindow.setPosition(pos);
      infoWindow.setContent('Gotcha...');
      infoWindow.open(map);
      map.setCenter(pos);
      //calculateAndDisplayRoute(directionsService, directionsRenderer, pos); Calling the directions function

      //centers the map to the user location
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
      
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
    
}


function handleLocationError(browserHasGeolocation, infoWindow) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

// Directions function
/*
function calculateAndDisplayRoute(directionsService, directionsRenderer, pos) {
        directionsService.route(
            {
              origin: pos ,
              destination: 'Copenhagen',
              travelMode: 'WALKING'
            },
            function(response, status) {
              if (status === 'OK') {
                directionsRenderer.setDirections(response);
              } else {
                window.alert('Directions request failed due to ' + status);
              }
            });
      }


*/
var mapStyling = [{
    "elementType": "geometry",
    "stylers": [{
      "color": "#f5f5f5"
    }]
  },
  {
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#616161"
    }]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#f5f5f5"
    }]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#bdbdbd"
    }]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
      "color": "#eeeeee"
    }]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#757575"
    }]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{
      "color": "#e5e5e5"
    }]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#9e9e9e"
    }]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{
      "color": "#ffffff"
    }]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#757575"
    }]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{
      "color": "#dadada"
    }]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#616161"
    }]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#9e9e9e"
    }]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [{
      "color": "#e5e5e5"
    }]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [{
      "color": "#eeeeee"
    }]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
      "color": "#c9c9c9"
    }]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#9e9e9e"
    }]
  }
]


 //  // Your web app's Firebase configuration
 // var firebaseConfig = {
 //    apiKey: "AIzaSyB04QXJ9nEQdJa9AWTqF_GmR8SOr_KvF7c",
 //    authDomain: "public-toilet-finder-4e2f0.firebaseapp.com",
 //    databaseURL: "https://public-toilet-finder-4e2f0.firebaseio.com",
 //    projectId: "public-toilet-finder-4e2f0",
 //    storageBucket: "",
 //    messagingSenderId: "509217784069",
 //    appId: "1:509217784069:web:3a19197f49947c53f7f76c"
 //  };
 //  // Initialize Firebase
 //  firebase.initializeApp(firebaseConfig);

// add a bathroom
/*const db = firebase.firestore();
const bathroomRef = db.collection("bathroom");

function createBathroom(){
    let nameInput = document.querySelector('#bathroomName');
   let addressInput = document.querySelector('#bathroomAddress');

    let newBathroom = {
        name: nameInput.value,
        address: addressInput.value
    };
    bathroomRef.add(newBathroom);

}*/



//Acessing user location
var map, infoWindow;

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 15,
		disableDefaultUI: true,
    styles: mapStyling

  });
  infoWindow = new google.maps.InfoWindow;
  //loading geoJSON data
  // map.data.loadGeoJson('locations.json');
  // map.data.addGeoJson();
  // map.data.setMap(map);

  // Try HTML5 geolocation.
  //Checks if the browser has access tot the user location
  //if yes it puts the coordinates into (global) variables
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      //Puts a pop-up for testing
      infoWindow.setPosition(pos);
      infoWindow.setContent('Gotcha...');
      infoWindow.open(map);
      map.setCenter(pos);


      //centers the map to the user location
      map.setCenter(pos);
      //creates a div with a class centerMe and appends it too the map section 
      var div = document.createElement("div");
      div.setAttribute('class', 'centerMe');
        div.innerHTML = "Center me";

      document.getElementById("map").appendChild(div);
        
    //Adds an event listener to the div that centers the map to the users location
 document.querySelector(".centerMe").addEventListener('click', function() {
    map.setCenter(pos);
  });
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}





// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  setActiveTab(pageId);
  if (pageId === "map") {
    document.getElementById("filters").style.display = "flex";
  } else {
    document.getElementById("filters").style.display = "none";
  }
}

// sets active tabbar/ menu item
function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".tabbar a");
  for (let page of pages) {
    if (`#${pageId}` === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }

  }
}

// set default page
function setDefaultPage() {
  let page = "map";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

setDefaultPage();


//Center button

