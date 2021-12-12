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
        console.log(CyberSecurityPosts_object.val(), typeof CyberSecurityPosts_object.val())
        const keys = Object.keys(CyberSecurityPosts_object.val());
        let sortPosts = [];
        keys.map(key => {
            sortPosts.push({...eval(`CyberSecurityPosts_object.val().${key}`), key});
        })
        sortPosts.sort(({likes:a}, {likes:b}) => b-a);
        
        sortPosts.forEach(element => {
            const key = element.key;
            const title = element.title;
            const desc = element.desc;
            const url = element.url;
            const photoUrl = element.photoUrl;
            const likes = element.likes;
            const hasLiked = element.hasLiked.users;
            const post = document.createElement("div");
            post.id = "postElements";
            post.classList = "text-center bg-light shadow p-4 rounded mb-5";
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    // User is signed in
                    if(hasLiked.includes(user.displayName)){
                        post.innerHTML = `<h2 style="color: black;">${title}</h2> <p style="color: black;">${desc}</p> <img src="${photoUrl}" style="max-height: 20vh; max-width: 30vw;"> <div class="100-w m-3"></div> <a href="${url}" target="_blank"> <button class="btn btn-dark">Continue to page</button> </a> <div class="100-w mt-4"></div> <a href="javascript:like('${key}')" id="likeButton" style="text-decoration: none; color: blue;"><i class="fas fa-thumbs-up" style="display: inline;"></i> <p id="dcodeLikeNumber" style="display: inline;">${likes}</p></a>`;
                    }
                    else{
                        post.innerHTML = `<h2 style="color: black;">${title}</h2> <p style="color: black;">${desc}</p> <img src="${photoUrl}" style="max-height: 20vh; max-width: 30vw;"> <div class="100-w m-3"></div> <a href="${url}" target="_blank"> <button class="btn btn-dark">Continue to page</button> </a> <div class="100-w mt-4"></div> <a href="javascript:like('${key}')" id="likeButton" style="text-decoration: none; color: black;"><i class="fas fa-thumbs-up" style="display: inline;"></i> <p id="dcodeLikeNumber" style="display: inline;">${likes}</p></a>`;
                    }
                } 
                else {
                    post.innerHTML = `<h2 style="color: black;">${title}</h2> <p style="color: black;">${desc}</p> <img src="${photoUrl}" style="max-height: 20vh; max-width: 30vw;"> <div class="100-w m-3"></div> <a href="${url}" target="_blank"> <button class="btn btn-dark">Continue to page</button> </a> <div class="100-w mt-4"></div> <a href="javascript:like('${key}')" id="likeButton" style="text-decoration: none; color: black;"><i class="fas fa-thumbs-up" style="display: inline;"></i> <p id="dcodeLikeNumber" style="display: inline;">${likes}</p></a>`;
                }
            });
            document.getElementById("CyberSecurityPosts").appendChild(post);
        });
    }
});