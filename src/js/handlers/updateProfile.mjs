import { readProfile, updateProfile  } from "../api/profile/index.mjs";
import { load } from "/src/js/storage/index.mjs";

export async function editProfileListener() {
  const form = document.querySelector("#editProfile");
  

  if(form){
    
    const { name, email } = load("profile")
    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector("button");
    button.disabled = true; 
  
    const profile = await readProfile(name);
    form.banner.value = profile.banner;
    form.avatar.value = profile.avatar;

    button.disabled = false; 

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target; 
        const formData = new FormData(form)
        const profile = Object.fromEntries(formData.entries())

        profile.name = name; 
        profile.email = email; 
        
        //send it to API
        updateProfile(profile)

    })
  }
};