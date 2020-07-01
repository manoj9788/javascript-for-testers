import { forEachAsync } from '../utils/helper';

import find from '../api/Api';

let imdb = new Map();

export default class MovieDetails {
  constructor(options) {
    Object.entries(options).forEach(([key, value]) => {
      imdb.set(key, value);
    });
  }

  async getInfoOf(type) {
    const details = imdb.get(type);
    let mediaDetails = [];
    await forEachAsync(details, async (el) => {
      const movieDetail = await find({
        i: el.imdbID,
        apiKey: process.env.API_KEY || 'c9079b0f',
      });
      mediaDetails.push(await movieDetail.json());
    });
    return mediaDetails;
  }

}