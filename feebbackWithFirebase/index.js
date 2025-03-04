// //   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import { } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyBTaWx1n7pmlR3wmQfxEkLCmlcLh-RYJuk",
  authDomain: "hackathon-2-9a452.firebaseapp.com",
  databaseURL: "https://hackathon-2-9a452-default-rtdb.firebaseio.com",
  projectId: "hackathon-2-9a452",
  storageBucket: "hackathon-2-9a452.appspot.com",
  messagingSenderId: "642250590302",
  appId: "1:642250590302:web:432a20285c701f36d24ccf",
  measurementId: "G-PRD5BYCM8R",
};

//   initialise firebasw
firebase.initializeApp(firebaseConfig);

//   reference your db
var feedbackdb = firebase.database().ref("feedback");

document.getElementById("Feedbackform").addEventListener("submit", Submitform);

function Submitform(e) {
  e.preventDefault();
  var name = getElement("name");
  var email = getElement("email");
  var message = getElement("message");
  savedata(name, email, message);
}

const savedata = (name, email, message) => {
  var newfeedback = feedbackdb.push();
  newfeedback.set({
    name: name,
    email: email,
    message: message,
  }); 
};

const getElement = (id) => {
  return document.getElementById(id).value;
};
