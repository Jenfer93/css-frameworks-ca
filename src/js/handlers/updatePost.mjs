import {readPost, updatePost } from "../api/posts/index.mjs";

export async function editPostListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if(form){

    const button = form.querySelector("button");
    button.disabled = true; 
  
   /* const post = await readPost(id);
    const { title, body, tags, media } = post; 


    form.title.value = title;
    form.body.value = body;
    form.tags.value = tags;
    form.media.value = media;*/

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