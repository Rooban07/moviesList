import english from './english.json';
import tamil from './tamil.json';
import webseries from './webseries.json';

let lists = [
  {
    name: 'Tamil Movies',
    movies: tamil.reverse().slice(0, 6),
    readMore: 'tamil',
  },

  {
    name: 'Web Series & TV Shows',
    movies: webseries.reverse().slice(0, 6),
    readMore: 'webseries',
  },

  {
    name: 'Hollywood Tamil Dubbed & English Movies',
    movies: english.reverse().slice(0, 6),
    readMore: 'english',
  },
];

export default lists;
