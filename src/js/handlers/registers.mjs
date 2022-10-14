import { register } from "../api/auth/register.mjs";

/**
 * Function for listener for the register form 
 */
export function registerUserForm() {
  const form = document.querySelector("#form-to-register");

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target; 
      const formData = new FormData(form)
      const profile = Object.fromEntries(formData.entries())
      if(profile.banner === ""){
        delete profile.banner
      }
      if(profile.avatar === ""){
        delete profile.avatar
      }
      console.log(profile)
      //Send to API
      register(profile);
  })
};