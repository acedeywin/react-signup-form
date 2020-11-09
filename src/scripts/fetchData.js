import fetch from "isomorphic-fetch";

export const formHandler = (data) => {
  console.log("Form handler data", JSON.stringify(data));

  return fetch("https://api.raisely.com/v3/signup", {
    method: "POST",
    mode: "CORS",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .catch((error) => error.response);
};
