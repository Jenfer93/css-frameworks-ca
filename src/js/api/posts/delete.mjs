import { API_URL } from "../constants.mjs";
import { tokenAuth } from "../tokenFetch.mjs";

const action = "/posts";
const method = "delete";

export async function deletePost (id) {

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
