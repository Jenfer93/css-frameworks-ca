import { API_URL } from "../constants.mjs";

import { tokenAuth } from "../tokenFetch.mjs";

import * as postTemplates from "../../templates/index.mjs";


const action = "/posts";
const author = "?_author=true";

export async function readPosts () {

  const getPostURL = `${API_URL}${action}${author}`;

  const response = await tokenAuth (getPostURL)
  
  return await response.json();
}

export async function readPost (id) {
  
  if(!id) {
    throw new Error("Requires ID");
  }

  const readPostURL = `${API_URL}${action}/${id}${author}`;

  const response = await tokenAuth (readPostURL)
  
  return await response.json();
}

/**
 * Function that shows the posts on the homepage
 */

export async function showPosts() {
  const posts = await readPosts();
  const container = document.querySelector("#postsList");
  postTemplates.renderPostTemplates(posts, container);
  }

  /**
 * Function that shows a single post
 */

  export async function showPost(){ 
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

   const post = await readPost(id); 
   const singlePostContainer = document.querySelector("#singlePost");
   postTemplates.renderPostTemplate(post, singlePostContainer)
  } 
  /**
   * The function that gets the searched posts
   */

export async function getPostsSearch() {
  const posts = await readPosts();
  const container = document.querySelector("postsList");

}
  