import { API_URL } from "../constants.mjs";

import { tokenAuth } from "../tokenFetch.mjs";

const action = "/posts";

export async function readPosts () {

  const createPostURL = `${API_URL}${action}`;

  const response = await tokenAuth (createPostURL)
  
  return await response.json();
}

export async function readPost (id) {
  
  if(!id) {
    throw new Error("Requires ID");
  }

  const readPostURL = `${API_URL}${action}/${id}`;

  const response = await tokenAuth (readPostURL)
  
  return await response.json();
}
