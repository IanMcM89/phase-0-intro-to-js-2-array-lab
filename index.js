const cats = ['Milo', 'Otis', 'Garfield'];

const destructivelyAppendCat = (name) => cats.push(name);

const destructivelyPrependCat = (name) => cats.unshift(name);

const destructivelyRemoveLastCat = () => cats.pop();

const destructivelyRemoveFirstCat = () => cats.shift();

const appendCat = (name) => { const newCatsArray  = [...cats, name]; return newCatsArray };

const prependCat = (name) => { const newCatsArray = [name,...cats]; return newCatsArray };

const removeLastCat = () => { const newCatsArray = cats.slice(0,2); return newCatsArray };

const removeFirstCat = () => { const newCatsArray = cats.slice(1); return newCatsArray };