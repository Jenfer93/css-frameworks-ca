import { updatePost } from "../api/posts/index.mjs";

export function editPostListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if(form){

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target; 
        const formData = new FormData(form)
        const post = Object.fromEntries(formData.entries())
        post.id = id; 
        
        //send it to API
        updatePost(post)

    })
  }
};