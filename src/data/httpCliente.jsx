const API = "https://cors-anywhere.herokuapp.com/https://api.themoviedb.org";
const API_KEY = "?language=en-US&page=1&api_key=f46ff8c86688e5aadcab58619a8e41e4";
export function get(path) {
    console.log(API + path + API_KEY);
  return fetch(API + path + API_KEY, {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  }).then((result) => result.json());
}
