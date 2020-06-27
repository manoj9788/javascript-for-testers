import fetch from 'node-fetch';

describe('Movie Details', () => {
  it('User Should be able to see the Movie details', async () => {
    // TODO Get the movies from http://www.omdbapi.com/?s=MovieName&apikey=******&page=1&type="movie"&plot=full
    const movies = await fetch(
      'http://www.omdbapi.com/?s=Press+1+for+Tamil&apikey=c9079b0f&page=1&type="movie"&plot=full'
    );
    // TODO Get the series from http://www.omdbapi.com/?s=SeriesName&apikey=****&page=1&type="series"&plot=full
    const series = await fetch(
      'http://www.omdbapi.com/?s=Tamil&apikey=c9079b0f&page=1&type="series"&plot=full'
    );

    // TODO Get the response and Assert

    const movieResponse = await movies.json();
    const seriesResponse = await series.json();

    // TODO Find movies release after 2012
    const foundMovies = movieResponse.Search.filter((item, index, array) => {
      return parseInt(item.Year) > 2012; //tell about +
    });

    // TODO Find series release after 2012
    const foundSeries = seriesResponse.Search.filter((item) => {
      return parseInt(item.Year) > 2012; // tell about +
    });

    // TODO Create a Map with Series and Movies
    let moviesMap = new Map();
    moviesMap.set('series', foundSeries);
    moviesMap.set('movies', foundMovies);
    // TODO Get Movie details from using the imdbID http://www.omdbapi.com/?i=id&apikey= and Assert

    const seriesList = moviesMap.get('series');

    // Async in ForLoop
    await asyncForEach(seriesList, async (el) => {
      const movieDetail = await fetch(
        `http://www.omdbapi.com/?i=${el.imdbID}&apikey=c9079b0f`
      );
      await movieDetail.json();
    });

    //ToDO Promise All
    let seriesRequests = [];
    seriesList.forEach((el) => {
      seriesRequests.push(
        getMovieData(`http://www.omdbapi.com/?i=${el.imdbID}&apikey=c9079b0f`)
      );
    });
    const movieDetailsResults = await Promise.all(seriesRequests).then(
      (data) => {
        return data;
      }
    );

    // TODO Assign default values to Ratings when its empty and Assert the default values are added to the Ratings
    let defaultValues = {};

    movieDetailsResults.forEach((detail) => {
      let [prop] = detail.Ratings;
      if (prop === undefined) prop = Object.assign({}, defaultValues, prop);
      let { Source = 'Internet Movie Database', Value = 'N/A' } = prop;
      console.log(Source, Value);
    });
  });
});

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

function getMovieData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
}
