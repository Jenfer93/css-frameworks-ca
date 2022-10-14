import { API_URL } from "../constants.mjs";
import { tokenAuth } from "../tokenFetch.mjs";

const action = "/posts";
const method = "delete";

/**
 * Function to remove post
 * @param {number} id 
 * @returns 
 */
export async function removePost (id) {

  if(!id) {
    throw new Error("Requires ID");
  }
  const updatePostURL = `${API_URL}${action}/${id}`;

  const response = await tokenAuth (updatePostURL, {
    method
  })

  const post = await response.json();
  
  return await response.json();
}

