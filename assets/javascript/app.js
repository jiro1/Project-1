var config = {
    apiKey: "AIzaSyDwS4xQfgKS5DAseUeQ7umkQOO3SaJGhbU",
    authDomain: "fitness-tracker-bce35.firebaseapp.com",
    databaseURL: "https://fitness-tracker-bce35.firebaseio.com",
    projectId: "fitness-tracker-bce35",
    storageBucket: "fitness-tracker-bce35.appspot.com",
    messagingSenderId: "725491096361"
  };

firebase.initializeApp(config);

<<<<<<< HEAD
var currentUser;

$("#sign-up-btn").on("click", function(event){

    event.preventDefault();

    var email = $("#inputEmail4").val().trim();
    var firstName = $("#firstName").val().trim();
    var lastName = $("#lastName").val().trim();
    var username = $("#userName").val().trim();
    var password = $("#password").val().trim();
    var confirmPass = $("#passwordConfirm").val().trim();

    console.log(email, firstName, lastName, username, password, confirmPass);

    if(email && username && firstName && lastName && password && confirmPass && confirmPass === password){
        
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
        });


        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              currentUser = user;
              console.log(user);
            } else {
              console.log("Log In Failed");
            }
          });

        window.location.href = "createprofile.html";
        

    } else {

        console.log("Create user failed");
    }
    
});

$("#login-btn").on("click", function(event){

    console.log("Log In Button Clicked");

    event.preventDefault();

    var email = $("#email-login").val().trim();
    var password = $("#password-login").val().trim();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
        
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          currentUser = user;
          console.log(user);
        } else {
          console.log("Log In Failed");
        }
    });

    window.location.href = "dashboard.html";
});
=======

>>>>>>> 315b02f847f3ae37b04105ea4285e424f17cc1c8

