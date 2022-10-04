import { API_URL } from "../constants.mjs";

const action = "/auth/register"; 
const method = "post";

export async function register(profile) {
  const registerURL = API_URL + action; 

 const response = await fetch (registerURL, {
    headers: {
      "Content-Type": "application/json"
    }, 
    method, 
    body: JSON.stringify(profile) 
  })

  const results = await response.json() 
  console.log(results) 
  return results

}