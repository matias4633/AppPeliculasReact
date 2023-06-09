const API = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=f46ff8c86688e5aadcab58619a8e41e4";
const pagina = '&language=en-US&page=1';
const CORS = "https://cors-anywhere.herokuapp.com/";
export function get(path) {
    // console.log(API + path + API_KEY);
  return fetch(CORS + API + path + API_KEY, {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": "Bearer f46ff8c86688e5aadcab58619a8e41e4"
    }
  }).then((result) => result.json());
}
export function getSimilarMovies(movieId){
  const path = `movie/${movieId}/similar`;
  console.log(API + path + API_KEY);
  return fetch(CORS + API + path + API_KEY, {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  }).then((result) => result.json());
}
