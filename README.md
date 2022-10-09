### Jenny_Feragen-JS2-ca

Link to Trello:
https://trello.com/invite/b/paTJD0lP/3d2cbf024ef710eb6fdc2e3468eb0393/js2-ca

## Goal

To apply knowledge of JavaScript techniques to implement the front end functionality for a social media application.

## API

The API you are using for this project can be found under Social EndPoints at the Noroff API documentation.

## Brief

You have been tasked with producing a new JavaScript front end client for an existing social media platform. The client application must be attractive and responsive, but you have an otherwise blank slate in terms of theme design language.

Using the provided API and API documentation, create a functioning user interface that allows for viewing, posting, editing and deleting social media content.

Social API routes require authorization via JWT (JSON Web Tokens). You will need to register an account and login to access your token.

In order to complete the required features you will also need to make use of GET, POST, PUT, and DELETE HTTP methods.

Using localStorage is highly recommended, especially for storing JWT tokens.

A finished project fulfills the requirements below with an easy to use and error-free user interface.

## Required Features

The following user stories are required for a passing submission:

- User with @noroff.no or @stud.noroff.no email can register profile
- Registered user can login
- User can view a post content feed
- User can filter the post content feed
- User can search the post content feed
- User can view a post content item by ID
- User can create a post content item
- User can update a post content item
- User can delete a post content item

## Restrictions

Required functionality must be implemented in original, pure JavaScript.
A CSS Framework may be used to build the application UI.
A .gitignore file must be provided including node_modules. This folder must be untracked.
Content posted on the API is public and associated with your identity. Be appropriate and respectful.##

<!--
Innlogging:
email
:
"JenFer13301@stud.noroff.no"
name
:
"Jenny_Feragen"
password
:
"mittpassord"






<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Don't miss out on your friends barks at the feed!">
  <title>Doggos</title>
  <link rel="stylesheet" href="dist/css/styles.css">
</head>
<body>
  <header class="p-3 m-auto mb-3 border-bottom">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="./profile/user/profile.html" class="nav-link px-2 link-secondary">Profile</a></li>
          <li><a href="#contacts" class="nav-link px-2 link-dark">Contacts</a></li>
          <li><a href="./profile/login/login.html" class="nav-link px-2 link-dark">Login</a></li>
          <li><a href="./profile/register/signin.html" class="nav-link px-2 link-dark">Signin</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control m-auto" placeholder="Search..." aria-label="Search">
        </form>

        <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/css-frameworks-ca-ressurses/profile-picture-pug.jpg" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small">
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="./profile/user/profile.html">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="./profile/login/login.html">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <main class="m-auto">

      <h1 class="text-center .fs-3 mb-4">Welcome to AppFriends!</h1>
      <div class="d-flex justify-content-around flex-wrap">
        <div class="p-2 justify-content-center">
          <div class="m-auto mb-4">
            <label for="exampleFormControlTextarea1" class="form-label">Tell us what's on your mind</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button type="submit" class="btn btn-primary m-2">Post mind</button>
          </div>

          <!--Cards of posts This part will be dynamically created in JS
          <div class="card text-bg-info mb-3">
            <div class="card-header d-inline-flex p-2 justify-content-between">
              <p class="userName"></p>
              <a href="./profile/user/profile.html">
                <img src="/css-frameworks-ca-ressurses/profile-picture-bordercollie.jpg" alt="mdo" width="32" height="32" class="rounded-circle">
              </a>
            </div>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>



        <!--Contactlist
        <div class="list-group w-auto p-3">
          <h3 id="contacts">Contacts</h3>
          <!--This will be created in JS
          <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
            <img src="/css-frameworks-ca-ressurses/profile-picture-chowchow.jpg" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0">
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 class="mb-0">Chowchow</h6>
                <p class="mb-0 opacity-75">Last active</p>
              </div>
              <small class="opacity-50 text-nowrap">now</small>
            </div>
          </a>
        </div>
      </div>
  </main>
  <div class="container">
    <footer class="d-flex py-3 my-4 border-top">
      <div>
        <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
      </div>
    </footer>
  </div>
  <script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script type="module" src="/src/js/main.mjs"></script>
</body>
</html>-->
