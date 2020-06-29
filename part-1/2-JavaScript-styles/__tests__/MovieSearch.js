import find from '../api/Api';

let canAccessConstructor = true;

export default class Search {
  constructor() {
    if (canAccessConstructor)
      throw new Error(
        'Classes from Search must be initialized as (await) Search.init(movieObject), rather than new Search()'
      );
  }

  static init(options) {
    return (async function () {
      canAccessConstructor = false;
      let search = new Search();
      await search.build(options);
      return search;
    })();
  }

  async build(options) {
    const response = await find(options);
    const res = await response.json();
    this.search = await res.Search;
    this.options = options;
  }
  findByYear(year) {
    return this.search.filter((item, index, array) => {
      return parseInt(item.Year) > year; //tell about +
    });
  }
}
