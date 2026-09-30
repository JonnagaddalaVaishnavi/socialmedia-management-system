const BASE_URL = "http://localhost:8080";

//create API using fetch() with method as post , content-type as json and
export async function RegisterAuth(user) {
  let response = await fetch(BASE_URL + "/signUp1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.text();
}

export async function LoginAuth(userLogin) {
  let res = fetch(BASE_URL + "/logIn1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userLogin),
  });
  return (await res).json();
}
