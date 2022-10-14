
import { API_URL } from "../constants.mjs";
import { tokenAuth } from "../tokenFetch.mjs";
import { load } from "../../storage/index.mjs"

const action = "/profiles";


export async function readProfile (name) {
  
  if(!name) {
    throw new Error("Requires a name");
  }

  const readProfileURL = `${API_URL}${action}/${name}`;

  const response = await tokenAuth (readProfileURL)
  
  return await response.json();
}


export function getProfileInfo(){
  
  const userName = document.querySelector(".profile-name");
  const userEmail = document.querySelector(".profile-email");
  const img = document.querySelector(".profile-picture");
  const editButton = document.querySelector(".editProfileButton");

  const userData = load("profile");
  const { name, email, avatar } = userData;

  userName.innerHTML = name; 
  userEmail.innerText = email; 

    if (!avatar) {
      img.src = "/css-frameworks-ca-ressurses/profile-picture-pug.jpg";
      img.alt = "Default profile picture";
    } else {
     img.src = avatar; 
      img.alt = `${name} profile picture`;
    }
    
  return getProfileInfo;
}

/**
 * Function to redirect a user to their edit profile page 
 */
export function editProfileRedirect(){
  const userData = load("profile");
  const { name } = userData;
  const editButton = document.querySelector(".editProfileButton")
  editButton.addEventListener("click", () => editButton.href =`/profile/edit/index.html?name=${name}`);
}
