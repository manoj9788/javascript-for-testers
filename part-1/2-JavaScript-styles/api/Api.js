import fetch from 'node-fetch';

const newLocal = 'http://www.omdbapi.com/';
const baseUrl = newLocal;
export default async function find(options) {
  createUrl(options);
  const url = baseUrl + createUrl(options);
  return await fetch(url);
}

function createUrl(options) {
  let url = '?';
  Object.entries(options).forEach(([key, value]) => {
    url += `&${key}=${value}`;
  });
  return url;
}
