import { API_URL } from "../constants.mjs";

import { tokenAuth } from "../tokenFetch.mjs";

import * as postTemplates from "../../templates/index.mjs";


const action = "/posts";

export async function readPosts () {

  const getPostURL = `${API_URL}${action}`;

  const response = await tokenAuth (getPostURL)
  
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


//Show all posts on homepage
export async function showPosts() {
  const posts = await readPosts();
  const container = document.querySelector("#postsList");
  postTemplates.renderPostTemplates(posts, container);
  }
  