import fetch from 'node-fetch';

import Search from '../omdb/SearchMedia';
import SearchMediaDetails from '../omdb/SearchMediaDetails';


var expect = require('chai').expect;

describe('Movie Details', () => {
  beforeEach('Get Movies and Series', async () => {
    let movies = await Search.init({
      s: 'Press+1+for+Tamil',
      apiKey: 'c9079b0f',
      page: 1,
      type: 'movie',
    });

    let series = await Search.init({
      s: 'Tamil',
      apiKey: 'c9079b0f',
      page: 1,
      type: 'series',
      plot: 'full',
      Episode: 1
    });

    this.movies = movies.findByYear(2011);
    this.series = series.findByYear(2012);
  });

  it('User Should be able to see the Movie details', async () => {
    expect(this.movies).to.have.lengthOf.at.least(1);
    expect(this.series).to.have.lengthOf.at.least(1);
  });

  it('Should be able to assert movie details using forEach', async () => {
    const mediaDetails = new SearchMediaDetails({
      series: this.series,
      movies: this.movies,
      episodes: this.episodes,
    });
    const seriesResults = await mediaDetails.getInfoOf('series');
    expect(seriesResults).to.have.lengthOf.at.least(1);
  });

  it('Should be able to set default values for ratings', async () => {
    const mediaDetails = new SearchMediaDetails({
      series: this.series,
      movies: this.movies,
    });
    const seriesResults = await mediaDetails.getInfoOf('series');
    let defaultValues = {};
    seriesResults.forEach((detail) => {
      let [prop] = detail.Ratings;
      if (prop === undefined) prop = Object.assign({}, defaultValues, prop);
      let { Source = 'Internet Movie Database', Value = 'N/A' } = prop;
      console.log(Source, Value);
    });
  });
});
