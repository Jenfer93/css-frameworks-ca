import { load } from "../../storage/index.mjs";
import { API_URL } from "../constants.mjs";

import { tokenAuth } from "../tokenFetch.mjs";

const action = "/profiles";


export async function readProfile (name) {
  
  if(!name) {
    throw new Error("Requires a name");
  }

  const readProfileURL = `${API_URL}${action}/${name}`;

  const response = await tokenAuth (readProfileURL)
  
  return await response.json();
}