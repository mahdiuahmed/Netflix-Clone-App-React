const API_KEY = "0cd2502d4988f654b534d616d8f3754c";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
};

export default requests;

// fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
// fetchActionMovies :/discover/movie ?api_key=${API_KEY}&
// with_genres=28,
// fetchComedyMovies : /discover/movie ?api_key=${API_KEY}&
// with_gen res=35,
// fetchHorrorMovies:/discover/movie ?api_key=${API_KEY}&
// with_gen res=27,
// fetchRomanceMovies :/discover/movie?api_key=${API_KEY}&
// with_genres=10749


// https://api.themoviedb.org/3/trending/all/week?api_key=0cd2502d4988f654b534d616d8f3754c&language=en-US