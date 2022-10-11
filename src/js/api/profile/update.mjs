import { API_URL } from "../constants.mjs";
import { tokenAuth } from "../tokenFetch.mjs";

const action = "/profiles";
const method = "put";

export async function updateProfile (profileData) {

  if(!profileData.name) {
    throw new Error("Requires a name");
  }
  const updateProfileURL = `${API_URL}${action}/${profileData.name}/media`;

  const response = await tokenAuth (updateProfileURL, {
    method,
    body: JSON.stringify(profileData)
    
  })

  const profile = await response.json();
  
  return await response.json();
}
