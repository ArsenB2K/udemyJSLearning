'use strict';

const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const   a = prompt('What was the last movie you watched?', ''),
        b = prompt('How will you rate it?', ''),
        c = prompt('What was the last movie you watched?', ''),
        d = prompt('How will you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);