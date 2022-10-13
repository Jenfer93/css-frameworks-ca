import { API_URL } from "../constants.mjs";

import { tokenAuth } from "../tokenFetch.mjs";

import * as postTemplates from "../../templates/index.mjs";


const action = "/posts";
const author = "?_author=true";
const fiveHundred = "&limit=500";

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
 * The function thats gets more posts than 100 
 * @returns post
 */

export async function morePosts () {

  const getMoreURL = `${API_URL}${action}${author}${fiveHundred}`;

  const response = await tokenAuth (getMoreURL)
  
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
   * Function that shows the posts that will be edited
   */

  export async function showEditingPost(){ 
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

   const post = await readPost(id); 
   const singlePostContainer = document.querySelector("#singleEditingPost");
   postTemplates.renderPostTemplate(post, singlePostContainer)
  } 
   

  /**
   * Function that shows the users own posts on profile page
   */

  export async function getUsersPosts(){
    const posts = await morePosts();
    const container = document.querySelector("#usersPosts");
    postTemplates.renderUsersPosts(posts, container);
  }

  /**
   * The function that gets the searched posts
   */

export async function getPostsSearch() {
  const posts = await readPosts();
  const container = document.querySelector("#postsList");
  postTemplates.renderSearchedPosts(posts, container);
}
