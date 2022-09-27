const base_url ='https://nf-api.onrender.com';

//Form inputs
const signInForm = document.getElementById('signin-form');
const email = document.getElementById('email-field');
const name = document.getElementById('name-field');
const password = document.getElementById('password-field');

//On submit register user

    signInForm.addEventListener("submit", event => {
      event.preventDefault();
      
      const user = {
        name: name.value,
        email: email.value, 
        password: password.value,
      };
      console.log(user);
    
      registerUser(`${base_url}/api/v1/social/auth/register`, user);
    });  
//POST to the API:

    async function registerUser(url, user){
        try {
          const postData = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          };
          
          const response = await fetch(url, postData);
          console.log(response);
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.log(error);
        };
    };



