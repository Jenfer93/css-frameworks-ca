import { API_URL } from "../constants.mjs";
import { tokenAuth } from "../tokenFetch.mjs";

const action = "/posts";
const method = "post";

export async function createPost (postData) {
  const createPostURL = API_URL + action;

  const response = await tokenAuth (createPostURL, {
    method,
    body: JSON.stringify(postData)
    
  })

  const post = await response.json();
  
  return await response.json();
}


