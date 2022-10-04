import * as constants from "./api/constants.mjs";
import { registerUserForm } from "../js/handlers/registers.mjs";
import { loginUserForm } from "../js/handlers/login.mjs";
import * as post from "./api/posts/index.mjs";
import { readPost } from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/login/login.html") {
  loginUserForm(); 
} else if (path === "/profile/register/signin.html") {
  registerUserForm(); 
}

//post.createPost()
//post.deletePost()
//post.updatePost()
//post.readPosts()
//post.readPost()



