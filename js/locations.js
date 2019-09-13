"use strict"


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB04QXJ9nEQdJa9AWTqF_GmR8SOr_KvF7c",
  authDomain: "public-toilet-finder-4e2f0.firebaseapp.com",
  databaseURL: "https://public-toilet-finder-4e2f0.firebaseio.com",
  projectId: "public-toilet-finder-4e2f0",
  storageBucket: "",
  messagingSenderId: "509217784069",
  appId: "1:509217784069:web:3a19197f49947c53f7f76c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const locationRef = db.collection("locations");
const tipsRef = db.collection("posts");




locationRef.onSnapshot(function(snapshotData) {
  let locations = snapshotData.docs;
  appendLocations(locations);
});

tipsRef.onSnapshot(function(snapshotData){
  let posts = snapshotData.docs;
  appendTips(posts);
});


//SafetyTips page

function appendTips(posts) {
let htmlTemplate = "";
  for (let post of posts) {
    console.log(post);
    htmlTemplate += `
      <li>${post.data().post}</li>
    `;
      }
    document.querySelector("#safetyTipsContent").innerHTML += htmlTemplate;


}

// append users to the DOM
function appendLocations(locations) {

  for (let location of locations) {
    console.log(location.id);
  //  console.log(location.data().location);
    var latitude = location.data().lat;
    console.log(latitude);
    var longtitude = location.data().lng;
    console.log(longtitude);

    var myLatLng = {lat: latitude, lng: longtitude};
console.log(myLatLng);

new google.maps.Marker({
 position: myLatLng,
 map: map
});

  };


}
