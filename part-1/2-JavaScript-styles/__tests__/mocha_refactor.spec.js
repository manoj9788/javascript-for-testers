import fetch from 'node-fetch';

import Search from './MovieSearch';

import { forEachAsync } from '../utils/helper';
var expect = require('chai').expect;

describe('Movie Details', () => {
  it('User Should be able to see the Movie details', async () => {
    const movies = await Search.init({
      s: 'Press+1+for+Tamil',
      apiKey: 'c9079b0f',
      page: 1,
      type: 'movie',
    });

    const series = await Search.init({
      s: 'Tamil',
      apiKey: 'c9079b0f',
      page: 1,
      type: 'series',
      plot: 'full',
    });

    const foundMovies = movies.findByYear(2011);
    const foundSeries = series.findByYear(2012);

    expect(foundMovies).to.have.lengthOf.at.least(1);
    expect(foundSeries).to.have.lengthOf.at.least(1);

    /* TODO Create a Map with Series and Movies */
    let moviesMap = new Map();
    moviesMap.set('series', foundSeries);
    moviesMap.set('movies', foundMovies);
    // TODO Get Movie details from using the imdbID http://www.omdbapi.com/?i=id&apikey= and Assert

    const seriesList = moviesMap.get('series');

    /* Async in ForLoop */
    await forEachAsync(seriesList, async (el) => {
      const movieDetail = await fetch(
        `http://www.omdbapi.com/?i=${el.imdbID}&apikey=c9079b0f`
      );
      await movieDetail.json();
    });

    /* ToDO Promise All */
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

    /* TODO Assign default values to Ratings when its empty and Assert the default values are added to the Ratings */

    let defaultValues = {};

    movieDetailsResults.forEach((detail) => {
      let [prop] = detail.Ratings;
      if (prop === undefined) prop = Object.assign({}, defaultValues, prop);
      let { Source = 'Internet Movie Database', Value = 'N/A' } = prop;
      console.log(Source, Value);
    });
  });
});

function getMovieData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
}
