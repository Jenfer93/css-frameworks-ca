import {readPost, updatePost } from "../api/posts/index.mjs";

/**
 * Function for the listener for the editpost form
 */

export async function editPostListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if(form){

    const button = form.querySelector("button");
    button.disabled = true; 


    button.disabled = false; 

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target; 
        const formData = new FormData(form)
        const post = Object.fromEntries(formData.entries())
        post.id = id; 
        if(post.media === ""){
          delete post.media
        }
        
        //send it to API
        updatePost(post)
        location.reload();
    })
  }
};