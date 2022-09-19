const base_url ='https://nf-api.onrender.com';

//POST to the API:
async function registerUser(url, data){
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
      console.log(json);
    } catch (error) {
      console.log(error);
    }
}
//my user info
const user = {
  name: 'jenny_feragen_1', 
  email: 'JenFer13301@noroff.no',
  password: 'my-password2',
};

registerUser(`${base_url}/api/v1/social/auth/register`, user);


//Log in user
const userLogin = {
  email: 'JenFer13301@noroff.no',
  password: 'my-password2',
};

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
    console.log(json);
    return json;
  } catch(error) {
    console.log(error);
  }
}

loginUser(`${base_url}/api/v1/social/auth/login`, user);

export {registerUser, loginUser};

