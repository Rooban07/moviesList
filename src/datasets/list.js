import english from './english.json';
import tamil from './tamil.json';
import webseries from './webseries.json';
import other from './other.json';

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
    name: 'Hollywood & Tamil Dubbed Movies',
    movies: english.reverse().slice(0, 6),
    readMore: 'english',
  },

  {
    name: 'Other Language Movies',
    movies: other.reverse().slice(0, 6),
    readMore: 'other',
  },
];

export default lists;
