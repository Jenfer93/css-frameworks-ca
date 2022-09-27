const base_url ='https://nf-api.onrender.com';
const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email-field");
const loginPassword = document.getElementById("login-password-field");


//Log in user
loginForm.addEventListener("submit", event => {
  event.preventDefault();
  
  const userLogin = {
    email: loginEmail.value,
    password: loginPassword.value,
  };

  loginUser(`${base_url}/api/v1/social/auth/login`, userLogin);
})


async function loginUser(url, data) {
  try {
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    };

    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    const accessToken = json.accessToken;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('Users name', response.name);
    console.log(json);
    if(accessToken){
    window.location.href = "/homepage.html";
    } 
    return json;
  } catch(error) {
    console.log(error);
  }
}

