import * as constants from "./api/constants.mjs";
import * as listeners from "../js/handlers/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import * as profileInfo from "./api/profile/index.mjs"

const path = location.pathname;

if (path === "/profile/login/login.html") {
  listeners.loginUserForm(); 
} else if (path === "/profile/register/signin.html") {
  listeners.registerUserForm(); 
} else if (path === "/post/create/index.html"){
  listeners.createPostListener();
} else if(path === "/post/edit/") {
  listeners.editPostListener();
}else if(path === "/profile/edit/") {
  listeners.editProfileListener();
} else if (path === "/posts/index.html") {
  postMethods.showPosts();
} else if (path === "/profile/user/profile.html") {
  profileInfo.getProfileInfo();
} 



//profileTemplate();


//THE ID: 3676
//postMethods.createPost()
//post.deletePost()
//post.updatePost()
//post.readPosts().then(console.log)
//postMethods.readPost(3676).then(console.log)



