import * as constants from "./api/constants.mjs";
import * as listeners from "../js/handlers/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";

const path = location.pathname;

if (path === "/profile/login/login.html") {
  listeners.loginUserForm(); 
} else if (path === "/profile/register/signin.html") {
  listeners.registerUserForm(); 
} else if (path === "/post/create/"){
  listeners.createPostListener();
} else if(path === "/post/edit/") {
  listeners.editPostListener();
}

async function testTemplate() {
const posts = await postMethods.readPosts();
const container = document.querySelector("#createPost");
templates.renderPostTemplates(posts, container);
}

testTemplate();

//THE ID: 3676
//postMethods.createPost()
//post.deletePost()
//post.updatePost()
//post.readPosts().then(console.log)
//postMethods.readPost(3676).then(console.log)



