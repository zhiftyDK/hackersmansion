function like(post){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in
            firebase.database().ref("CyberSecurityPosts/").get().then((CyberSecurityPosts_object) => {
                if (CyberSecurityPosts_object.exists()) {
                    const likes = eval(`CyberSecurityPosts_object.val().${post}.likes`);
                    const hasLiked = eval(`CyberSecurityPosts_object.val().${post}.hasLiked.users`);
                    if(!hasLiked.includes(user.displayName)){
                        firebase.database().ref("CyberSecurityPosts/").child(`${post}/`).child("hasLiked").set({
                            users: hasLiked + " " + user.displayName
                        });
                        firebase.database().ref("CyberSecurityPosts/").child(`${post}/`).update({"likes": parseInt(likes) + 1});
                    }
                    else {
                        firebase.database().ref("CyberSecurityPosts/").child(`${post}/`).child("hasLiked").set({
                            users: hasLiked.replace(` ${user.displayName}`, "")
                        });
                        firebase.database().ref("CyberSecurityPosts/").child(`${post}/`).update({"likes": parseInt(likes) - 1});
                    }
                }
            }).catch((error) => {
                console.error(error);
            });
        }
        else {
            //User is signed out
            signIn();
        }
    });
}

firebase.database().ref("CyberSecurityPosts/").on("value", function(CyberSecurityPosts_object){
    if(CyberSecurityPosts_object.numChildren() != 0){
        document.querySelectorAll("#postElements").forEach(function(element){element.remove()});
        for (let i = 1; i < Object.values(CyberSecurityPosts_object.val()).length + 1; i++) {
            const title = eval(`CyberSecurityPosts_object.val().post_${i}.title`);
            const desc = eval(`CyberSecurityPosts_object.val().post_${i}.desc`);
            const url = eval(`CyberSecurityPosts_object.val().post_${i}.url`);
            const photoUrl = eval(`CyberSecurityPosts_object.val().post_${i}.photoUrl`);
            const likes = eval(`CyberSecurityPosts_object.val().post_${i}.likes`);
            const hasLiked = eval(`CyberSecurityPosts_object.val().post_${i}.hasLiked.users`);
            const post = document.createElement("div");
            post.id = "postElements";
            post.classList = "text-center bg-light shadow p-4 rounded mb-5";
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    // User is signed in
                    if(hasLiked.includes(user.displayName)){
                        post.innerHTML = `<h2 style="color: black;">${title}</h2> <p style="color: black;">${desc}</p> <img src="${photoUrl}" style="max-width: 30vw;"> <div class="100-w m-3"></div> <a href="${url}" target="_blank"> <button class="btn btn-dark">Continue to page</button> </a> <div class="100-w mt-4"></div> <a href="javascript:like('post_${i}')" id="likeButton" style="text-decoration: none; color: blue;"><i class="fas fa-thumbs-up" style="display: inline;"></i> <p id="dcodeLikeNumber" style="display: inline;">${likes}</p></a>`;
                    }
                    else{
                        post.innerHTML = `<h2 style="color: black;">${title}</h2> <p style="color: black;">${desc}</p> <img src="${photoUrl}" style="max-width: 30vw;"> <div class="100-w m-3"></div> <a href="${url}" target="_blank"> <button class="btn btn-dark">Continue to page</button> </a> <div class="100-w mt-4"></div> <a href="javascript:like('post_${i}')" id="likeButton" style="text-decoration: none; color: black;"><i class="fas fa-thumbs-up" style="display: inline;"></i> <p id="dcodeLikeNumber" style="display: inline;">${likes}</p></a>`;
                    }
                } 
                else {
                    post.innerHTML = `<h2 style="color: black;">${title}</h2> <p style="color: black;">${desc}</p> <img src="${photoUrl}" style="max-width: 30vw;"> <div class="100-w m-3"></div> <a href="${url}" target="_blank"> <button class="btn btn-dark">Continue to page</button> </a> <div class="100-w mt-4"></div> <a href="javascript:like('post_${i}')" id="likeButton" style="text-decoration: none; color: black;"><i class="fas fa-thumbs-up" style="display: inline;"></i> <p id="dcodeLikeNumber" style="display: inline;">${likes}</p></a>`;
                }
            });
            document.getElementById("CyberSecurityPosts").appendChild(post);
        }
    }
});