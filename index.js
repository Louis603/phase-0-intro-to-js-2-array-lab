let cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat () {
    cats.push('Ralph');
}

function destructivelyPrependCat () {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    cats.splice(2)
}

function destructivelyRemoveFirstCat() {
    cats.splice(0,1)
}

function appendCat() {
    return [...cats, 'Broom']
};

function prependCat() {
    return ['Arnold', ...cats]
}

function removeLastCat() {
    return cats.slice(0,2)
}

function removeFirstCat() {
    return cats.slice(1)
}