export function postTemplate(postData){
  const post = document.createElement("div");
  post.classList = "post card p-4 m-auto mb-3 text-bg-info";
  
  //Post header
  const postHeader = document.createElement ("div");
  postHeader.classList = "card-header d-inline-flex p-2 justify-content-between";
  post.append(postHeader);

  const postTitle = document.createElement ("h3");
  postTitle.innerText = postData.title;
  postHeader.append(postTitle);

  // post body 
  const postBodyContainer = document.createElement ("div");
  postBodyContainer.classList = "card-body";
  post.append(postBodyContainer)

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

export function renderPostTemplate(postData, parent) {

  parent.append(postTemplate(postData))
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate))
}