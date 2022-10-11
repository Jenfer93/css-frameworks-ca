
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
  const userAvatar = document.querySelector(".profile-picture");
  const img = document.querySelector(".big-profile-picture");

  const userData = load("profile");
  const { name, email, avatar } = userData;

  userName.innerHTML = name; 
  userEmail.innerText = email; 

  if(!avatar) {
    img.src = "/css-frameworks-ca-ressurses/profile-picture-pug.jpg";
    img.alt = "Default profile picture";
    userAvatar.append(img)
  } else {
    img.src = avatar; 
    img.alt = `${name} profile picture`;
    userAvatar.append(img)
  }

  return getProfileInfo;
}

