import { load } from "../storage/index.mjs"

const profileName = document.querySelector(".profile-name");
const profileUserName = document.querySelector(".profile-user-name");
const profileDate = document.querySelector(".profile-date");
const profileImage = document.querySelector(".profile-picture");

export function profileTemplate(profileData){
  const profileName = load.name ;
  console.log("hello");

  return profileData; 
}