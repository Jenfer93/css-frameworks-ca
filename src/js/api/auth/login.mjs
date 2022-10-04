import { API_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login"; 
const method = "post";

export async function login(profile) {
  const loginURL = API_URL + action; 

 const response = await fetch (loginURL, {
    headers: {
      "Content-Type": "application/json"
    }, 
    method, 
    body: JSON.stringify(profile) 
  })

  const {accessToken, ...user } = await response.json() 

 
  storage.save("token", accessToken)
  storage.save("profile", user)

  if(!accessToken){
    alert("Obs, seems like the user is not registered");
  } else {
    location.href = "/profile/user/profile.html"
  }
}