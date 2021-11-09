var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        document.getElementById("profilePhoto").src = user.photoURL;
        document.getElementById("profileName").value = user.displayName;
        document.getElementById("profileEmail").value = user.email;
    }
    else {
        //User is signed out
        window.location.href = "../index.html";
    }
});