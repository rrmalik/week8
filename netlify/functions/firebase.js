const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyD_gjvQVwmAu-3IJJKpYTRFy9il2LRovnE",
  authDomain: "kieiv2.firebaseapp.com",
  projectId: "kieiv2",
  storageBucket: "kieiv2.appspot.com",
  messagingSenderId: "80243302039",
  appId: "1:80243302039:web:1f7ad17b685e3ac07193d2"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase