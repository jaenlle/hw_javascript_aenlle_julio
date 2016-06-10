//howdy

function howdy() {
    console.log('Julio', 'Aenlle', 'says sup!');
}

howdy();


//numba
var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length > 7) {
        console.log('I’m sorry, but that’s too many to count.');
    } else {
        console.log('7, what a perfect choice!');
    }
};
(numba('7'));
(numba('seventy'));
(numba('university'));


//inception
var movie = function inception(display, favMovie) {
    return display + favMovie;
};

var film = movie('Jurassic Park', ' is a fantastic movie.');
console.log(film);
