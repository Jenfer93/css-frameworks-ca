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
} else if(path === "/post/edit/index.html") {
  listeners.editPostListener();
  postMethods.showEditingPost();
}else if(path === "/profile/edit/index.html") {
  listeners.editProfileListener();
  profileInfo.getProfileInfo();
} else if (path === "/posts/index.html") {
  postMethods.showPosts();
  postMethods.getPostsSearch();
} else if (path === "/profile/user/profile.html") {
  profileInfo.getProfileInfo();
  postMethods.getUsersPosts();
  profileInfo.editProfileRedirect();
} else if (path === "/post/index.html") {
  postMethods.showPost();
} 


