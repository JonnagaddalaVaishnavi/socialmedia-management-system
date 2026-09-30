const BASE_URL = "http://localhost:8080";

export async function UpdateProfile(profileData) {
  let res = await fetch(BASE_URL + "/saveProfile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profileData),
  });
  return res.json();
}

export async function GetPostById(userId) {
  let res = await fetch(BASE_URL + "/getUserPost/" + userId);
  return res.json();
}
