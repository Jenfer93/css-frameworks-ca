import { load } from "../../storage/index.mjs";
import { API_URL } from "../constants.mjs";
import { tokenAuth } from "../tokenFetch.mjs";

const action = "/profiles";
const method = "put";


export async function updateProfile (profileData) {
  const {name} = load ("profile");


  if(!name) {
    throw new Error("Requires a name");
  }
  const updateProfileURL = `${API_URL}${action}/${name}/media`;

  const response = await tokenAuth (updateProfileURL, {
    method,
    body: JSON.stringify(profileData)
    
  })

  //const profile = await response.json();
  
  return await response.json();
}
