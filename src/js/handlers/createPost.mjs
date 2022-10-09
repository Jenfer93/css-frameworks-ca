import { createPost } from "../api/posts/index.mjs";

export function createPostListener() {
  const form = document.querySelector("#createPost");

  if(form){
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target; 
        const formData = new FormData(form)
        const post = Object.fromEntries(formData.entries())
        if(post.media === ""){
          delete post.media
        }
        
        //send it to API
        createPost(post)

    })
  }
};