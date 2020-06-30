import fetch from 'node-fetch';

import Search from './MovieSearch';

import find from '../api/Api';

import { forEachAsync } from '../utils/helper';
var expect = require('chai').expect;

let movies;
let series;

describe('Movie Details', () => {
  beforeEach('Get Movies and Series', async () => {
    movies = await Search.init({
      s: 'Press+1+for+Tamil',
      apiKey: 'c9079b0f',
      page: 1,
      type: 'movie',
    });

    series = await Search.init({
      s: 'Tamil',
      apiKey: 'c9079b0f',
      page: 1,
      type: 'series',
      plot: 'full',
    });
  });

  it('User Should be able to see the Movie details', async () => {
    allure.description('Something!!');
    const foundMovies = movies.findByYear(2011);
    const foundSeries = series.findByYear(2012);

    expect(foundMovies).to.have.lengthOf.at.least(1);
    expect(foundSeries).to.have.lengthOf.at.least(1);
  });

  it('Create Map and find for series', async () => {
    const foundMovies = movies.findByYear(2011);
    const foundSeries = series.findByYear(2012);
    let moviesMap = new Map();
    moviesMap.set('series', foundSeries);
    moviesMap.set('movies', foundMovies);

    const seriesList = moviesMap.get('series');

    await forEachAsync(seriesList, async (el) => {
      const movieDetail = await find({
        i: el.imdbID,
        apiKey: 'c9079b0f',
      });
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
