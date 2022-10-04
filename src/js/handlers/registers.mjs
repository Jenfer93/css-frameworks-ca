import { register } from "../api/auth/register.mjs";

export function registerUserForm() {
  const form = document.querySelector("#form-to-register");

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target; 
      const formData = new FormData(form)
      const profile = Object.fromEntries(formData.entries())
  })
};