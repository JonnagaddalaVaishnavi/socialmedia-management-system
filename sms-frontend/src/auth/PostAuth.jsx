const BASE_URL = "http://localhost:8080";

// export async function UpdatePost(postData) {
//   let response = await fetch(BASE_URL + "/addPost", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(postData),
//   });
//   return response.json();
// }

export async function UpdatePost(postData) {
  console.log("Sending post:", postData);

  let response = await fetch(BASE_URL + "/addPost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  console.log("Status:", response.status);

  let data = await response.text();

  console.log("Server response:", data);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${data}`);
  }

  return JSON.parse(data);
}
