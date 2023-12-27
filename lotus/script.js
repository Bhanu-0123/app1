 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBrLXKYzPwOzH30NIf71kK4NLHPK8g8l8E",
    authDomain: "create-26237.firebaseapp.com",
    projectId: "create-26237",
    storageBucket: "create-26237.appspot.com",
    messagingSenderId: "872545373808",
    appId: "1:872545373808:web:f1823d3d3dcfab537f2eb5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db=getDatabase(app)

  document.getElementById("submit").addEventListener('click',function(e){
    set(ref(db, 'user/' + getElementById("username").value),
    {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("pwd").value,
    });
alert("Login Successful")
  })