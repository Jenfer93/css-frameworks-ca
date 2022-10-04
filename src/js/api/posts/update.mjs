import { API_URL } from "../constants.mjs";
import { tokenAuth } from "../tokenFetch.mjs";

const action = "/posts";
const method = "put";

export async function updatePost (postData) {

  if(!postData.id) {
    throw new Error("Requires ID");
  }
  const updatePostURL = `${API_URL}${action}/${postData.id}`;

  const response = await tokenAuth (updatePostURL, {
    method,
    body: JSON.stringify(postData)
    
  })

  const post = await response.json();
  
  return await response.json();
}
