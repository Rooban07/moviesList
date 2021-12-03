import english from './english.json';
import other from './other.json';
import tamil from './tamil.json';
import webseries from './webseries.json';

const getLastData = arr => arr.slice().reverse().slice(0, 6);

let lists = [
  {
    name: 'Tamil Movies',
    movies: getLastData(tamil),
    readMore: 'tamil',
  },

  {
    name: 'Web Series & TV Shows',
    movies: getLastData(webseries),
    readMore: 'webseries',
  },

  {
    name: 'Hollywood & Tamil Dubbed Movies',
    movies: getLastData(english),
    readMore: 'english',
  },

  {
    name: 'Other Language Movies',
    movies: getLastData(other),
    readMore: 'other',
  },
];

export default lists;
