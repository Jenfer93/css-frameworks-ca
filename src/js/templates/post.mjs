/**
 * Makes the HTML for the the list of posts
 * @param {string} postData 
 * @returns 
 */

import { removePost } from "../api/posts/delete.mjs";

export function postTemplate(postData){
  const { author, id } = postData;
  const { name, avatar } = author;

  const post = document.createElement("div");
  post.classList = "post card p-4 m-auto mb-3 text-bg-info";
  
  //Post header
  const postHeader = document.createElement ("div");
  postHeader.classList = "card-header d-flex p-2";
  post.append(postHeader);

  const user = document.createElement("div");
  user.classList ="d-flex mt-3";

  const postAuthor = document.createElement ("p");
  postAuthor.classList = "ms-3 mb-4 fw-semibold"
  postAuthor.innerText = name;

  if(avatar) {
    const userAvatar = document.createElement("img");
    userAvatar.classList ="ms-3 d-flex rounded-circle";
    userAvatar.src = avatar; 
    userAvatar.alt = `${name}s Avatar`;
    userAvatar.height = "32";
    userAvatar.width = "32";
    user.append(userAvatar, postAuthor);
    postHeader.append(user);
  } else {
    const userAvatar = document.createElement("img");
    userAvatar.classList ="ms-3 d-flex justify-item-start rounded-circle";
    userAvatar.src = "https://picsum.photos/id/1003/367/267"; 
    userAvatar.alt = `default Avatar`;
    userAvatar.height = "32"; 
    userAvatar.width = "32"; 
    user.append(postAuthor, userAvatar);
    postHeader.append(user);

  }

  // post body 
  const postBodyContainer = document.createElement ("div");
  postBodyContainer.classList = "card-body";
  post.append(postBodyContainer)

 const postTitle = document.createElement ("h3");
  postTitle.innerText = postData.title;
  postBodyContainer.append(postTitle);

  const postBody = document.createElement("p");
  postBody.classList = "card-text"
  postBody.innerText = postData.body
  postBodyContainer.append(postBody);

  if (postData.media) {
    const img = document.createElement("img");
    img.classList.add("img-thumbnail")
    img.src = postData.media; 
    img.alt = `Image from ${postData.title}`;
    postBodyContainer.append(img);
  } 

  const postDate = document.createElement("small");
  postDate.innerText = new Date(postData.created).toLocaleString();
  postDate.classList = "opacity-75 text-nowrap"
  postBodyContainer.append(postDate);

  const viewPost = document.createElement("a");
  viewPost.classList = "d-flex m-3 me-5";
  viewPost.setAttribute("href", `/post/index.html?id=${id}`);
  viewPost.innerHTML = "View Post";
  postBodyContainer.append(viewPost);


  return post; 
}

/**
 * The function to show if it's you own post, and gives option to edit or delete
 * @param {string} postData gets the posts
 */
export function postTemplateUserPost (postData){
  const { name, title, body, media, updated, id} = postData; 

  const post = document.createElement("div");
  post.classList = "post card p-4 m-auto mb-3 text-bg-info";
  
  //Post header
  const postHeader = document.createElement ("div");
  postHeader.classList = "card-header d-flex p-2";
  post.append(postHeader);

  const user = document.createElement("div");
  user.classList ="d-flex mt-3";

  const postAuthor = document.createElement ("p");
  postAuthor.classList = "ms-3 mb-4 fw-semibold"
  postAuthor.innerText = name;

  if(avatar) {
    const userAvatar = document.createElement("img");
    userAvatar.classList ="ms-3 d-flex rounded-circle";
    userAvatar.src = avatar; 
    userAvatar.alt = `${name}s Avatar`;
    userAvatar.height = "32";
    userAvatar.width = "32";
    user.append(userAvatar, postAuthor);
    postHeader.append(user);
  } else {
    const userAvatar = document.createElement("img");
    userAvatar.classList ="ms-3 d-flex justify-item-start rounded-circle";
    userAvatar.src = "https://picsum.photos/id/1003/367/267"; 
    userAvatar.alt = `default Avatar`;
    userAvatar.height = "32"; 
    userAvatar.width = "32"; 
    user.append(postAuthor, userAvatar);
    postHeader.append(user);

  }

  // post body 
  const postBodyContainer = document.createElement ("div");
  postBodyContainer.classList = "card-body";
  post.append(postBodyContainer)

 const postTitle = document.createElement ("h3");
  postTitle.innerText = title;
  postBodyContainer.append(postTitle);

  const postBody = document.createElement("p");
  postBody.classList = "card-text"
  postBody.innerText = body
  postBodyContainer.append(postBody);

  if (media) {
    const img = document.createElement("img");
    img.classList.add("img-thumbnail")
    img.src = media; 
    img.alt = `Image from ${title}`;
    postBodyContainer.append(img);
  } 

  const postDate = document.createElement("small");
  postDate.innerText = new Date(updated).toLocaleString();
  postDate.classList = "opacity-75 text-nowrap"
  postBodyContainer.append(postDate);

  const buttonsContainer = document.createElement ("div");
  buttonsContainer.classList = "d-flex justify-content-end align-items-center m-3"
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList = "btn btn-primary editButton me-3"
  editButton.href = `/post/edit?id${id}`
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList = "btn btn-primary deleteButton me-3"

  buttonsContainer.append(editButton, deleteButton);

  deleteButton.addEventListener("click", () => {
    removePost(id);
  })

  postBodyContainer.append(buttonsContainer);
  }

/**
 * Makes the HTML for the single post 
 * @param {string} postData 
 */

export function singlePostTemplate(postData){
  const { author, id } = postData;
  const { name, avatar } = author;

  const post = document.createElement("div");
  post.classList = "post card p-4 m-auto mb-3 text-bg-info";
  
  //Post header
  const postHeader = document.createElement ("div");
  postHeader.classList = "card-header d-flex p-2";
  post.append(postHeader);

  const user = document.createElement("div");
  user.classList ="d-flex mt-3";

  const postAuthor = document.createElement ("p");
  postAuthor.classList = "ms-3 mb-4 fw-semibold"
  postAuthor.innerText = name;

  if(avatar) {
    const userAvatar = document.createElement("img");
    userAvatar.classList ="ms-3 d-flex rounded-circle";
    userAvatar.src = avatar; 
    userAvatar.alt = `${name}s Avatar`;
    userAvatar.height = "32";
    userAvatar.width = "32";
    user.append(userAvatar, postAuthor);
    postHeader.append(user);
  } else {
    const userAvatar = document.createElement("img");
    userAvatar.classList ="ms-3 d-flex justify-item-start rounded-circle";
    userAvatar.src = "https://picsum.photos/id/1003/367/267"; 
    userAvatar.alt = `default Avatar`;
    userAvatar.height = "32"; 
    userAvatar.width = "32"; 
    user.append(postAuthor, userAvatar);
    postHeader.append(user);

  }

  // post body 
  const postBodyContainer = document.createElement ("div");
  postBodyContainer.classList = "card-body";
  post.append(postBodyContainer)

 const postTitle = document.createElement ("h3");
  postTitle.innerText = postData.title;
  postBodyContainer.append(postTitle);

  const postBody = document.createElement("p");
  postBody.classList = "card-text"
  postBody.innerText = postData.body
  postBodyContainer.append(postBody);

  if (postData.media) {
    const img = document.createElement("img");
    img.classList.add("img-thumbnail")
    img.src = postData.media; 
    img.alt = `Image from ${postData.title}`;
    postBodyContainer.append(img);
  } 

  const postDate = document.createElement("small");
  postDate.innerText = new Date(postData.created).toLocaleString();
  postDate.classList = "opacity-75 text-nowrap"
  postBodyContainer.append(postDate);

  return post; 
}



/**
 * Displays the single post 
 * @param {string} postData 
 * @param {string} parent 
 */


export function renderPostTemplate(postData, parent) {
  parent.append(singlePostTemplate(postData))
}

/**
 * Displays the list of posts
 * @param {string} postDataList gets the list of posts
 * @param {string} parent the container the list of posts shows in
 */

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate))
}

