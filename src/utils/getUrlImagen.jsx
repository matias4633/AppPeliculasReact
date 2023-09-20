import error from '../imagenes/error.jpg';

export function getUrlImagen(movie , ancho){
    let url;
    try {
        url = movie.poster_path ? `https://image.tmdb.org/t/p/w${ancho}${movie.poster_path}` : error;
    } catch (error) {
        console.log(movie);
        console.log('no esta el objeto');
    }
    
    return url;
}

export function getUrlImagenBanner(movie,ancho){
    let url;
    try {
        url = movie.backdrop_path ? `https://image.tmdb.org/t/p/w${ancho}${movie.backdrop_path}` : error;
    } catch (error) {
        console.log(movie);
        console.log('no esta el objeto');
    }
    
    return url;
}

// const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;