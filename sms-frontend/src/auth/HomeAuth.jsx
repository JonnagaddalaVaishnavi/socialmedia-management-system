const BASE_URL = "http://localhost:8080";

export async function GetAllPost() {
  let response = await fetch(BASE_URL + "/getAllPost");
  return response.json();
}
