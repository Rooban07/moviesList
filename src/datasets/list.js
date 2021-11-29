import english from './english.json';
import tamil from './tamil.json';

let lists = [
  {
    name: 'Hollywood Tamil Dubbed & English Movies',
    movies: english.reverse().slice(0, 12),
    readMore: 'english',
  },
  {
    name: 'Tamil Movies & Web Series',
    movies: tamil.reverse().slice(0, 12),
    readMore: 'tamil',
  },
];

export default lists;
