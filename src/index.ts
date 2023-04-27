import { Genre, Movie } from "./index.types"
import customData from './db.json';

export const getFilteredMovies = ({ genres }: { genres: Genre[] }): Movie[] => {

  const result = customData.movies.filter(movie =>
    movie.genres.every(genre => genres.includes(genre as Genre))
  );
  
  result.sort((a, b) => b.genres.length - a.genres.length);
  
  if (result.length === 0) {
    return [customData.movies[0]];
  }
  
  return result
}
/**
 * The time complexity of getFilteredMovies can be calculated as follows:

The filter function loops through every movie in customData.movies and keeps only those whose genres are a subset of the input genres array. The time complexity of this step is O(n x m) where n is the number of movies and m is the average number of genres per movie.

The sort function sorts the resulting subset by the length of each movie's genres array. The time complexity of this step is O(n log n), where n is the number of elements in the sorted array.

So, the overall time complexity of getFilteredMovies is O(n x m + n log n).
*/

