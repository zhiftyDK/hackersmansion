var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      loadAuthenticatedPageChanges(user.displayName, user.photoURL, user.email);
    }
    else {
        //User is signed out
        document.getElementById("googleSigninButton").style.display = "block";
    }
});

function signIn(){
    firebase.auth().signInWithRedirect(provider);
    firebase.auth()
    .getRedirectResult()
    .then((result) => {
        if (result.credential) {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // ...
        }
        // The signed-in user info.
        var user = result.user;
        // ...
        loadAuthenticatedPageChanges(user.displayName, user.photoURL, user.email);
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        document.getElementById("googleSigninButton").style.display = "block";
    });
}

function loadAuthenticatedPageChanges(displayName, photoURL, email){
    document.getElementById("userMenuName").innerHTML = displayName;
    document.getElementById("userMenuPhoto").src = photoURL;
    document.getElementById("googleSigninButton").style.display = "none";
    document.getElementById("userMenu").style.display = "block";
}

function signOut(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "../index.html";
    }).catch((error) => {
        // An error happened.
    });
}