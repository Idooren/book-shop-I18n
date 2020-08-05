'use strict';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function makeId(length = 4) {
  var txt = '';
  var possible = '0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

function makeLorem(size = 50) {
  var words = [ 'ido', 'oren'];
  var txt = 'bla bla';
  while (size > 0) {
    size--;
    txt += words[Math.floor(Math.random() * words.length)] + ' ';
  }
  return txt;
}

function descendingSort(books, type) {
  if (type === 'PRICE') books.sort((bookA, bookB) => bookB.price - bookA.price)
  else {
    books.sort((bookA, bookB) =>
      bookB.title.toUpperCase() < bookA.title.toUpperCase()
        ? -1
        : bookB.title.toUpperCase() > bookA.title.toUpperCase()
          ? 1
          : 0
    );
  }
}

function ascendingSort(books, type) {
  if (type === 'PRICE') books.sort((bookA, bookB) => bookA.price - bookB.price)
  else {
    books.sort((bookA, bookB) =>
      bookA.title.toUpperCase() < bookB.title.toUpperCase()
        ? -1
        : bookA.title.toUpperCase() > bookB.title.toUpperCase()
          ? 1
          : 0
    );
  }
}