import error from '../imagenes/error.webp';

export function getUrlImagen(movie , ancho){
    let url = movie.poster_path ? `https://image.tmdb.org/t/p/w${ancho}${movie.poster_path}` : error;
    return url;
}

// const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;