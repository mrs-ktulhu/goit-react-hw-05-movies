export const API_KEY = 'ec73ed453538a4674e2e8f7ad6508b0a';
export const API_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${API_URL}/trending/movie/day?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const response = await fetch(`${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    const data = await response.json();
    return data.cast;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    return [];
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await fetch(`${API_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    return [];
  }
};