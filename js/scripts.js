const box1Element = document.getElementById('box-1');
const box2Element = document.getElementById('box-2');
const subtitleElement = document.getElementById('subtitle-1');
const subtitle2Element = document.getElementById('subtitle-2');

console.dir(box1Element);
console.dir(`Todos los hijos de ${box1Element.id} son: 
  ${box1Element.children[0].children[0].textContent},
  ${box1Element.children[0].children[1].textContent},
  ${box1Element.children[0].children[3].textContent}`);

console.dir(
  `El item especial es ${box1Element.children[0].children[2].textContent}`
);

//- Del div con el id box-2 imprime por consola: El textContent y las clases del h2 y el p

console.dir(box2Element);
console.dir(`El contenido del texto es ${box2Element.textContent}`);
console.dir(
  `Las clases de h2 ${box2Element.children[0].children[0].classList}`
);
console.dir(
  `Las clases del p ${box2Element.children[0].children[1].classList}`
);

// - Del h2 con el id subtitle-1 imprime por consola: Su textContent; la clase del div; el textContent y la clase del p que tiene debajo.

console.dir(`El text content del h2 es ${subtitleElement.textContent}`);
console.dir(`La clase del div es ${subtitleElement.parentElement.classList}`);
console.dir(
  `El text content de p es ${subtitleElement.nextElementSibling.textContent} y la clase es ${subtitleElement.nextElementSibling.classList}`
);

// - Del h2 con el id subtitle-2 imprime por consola: Su textContent; el textContent y la clase de los dos span que tiene.

console.dir(`El text content del h2 es ${subtitle2Element.textContent}`);
console.dir(
  `El text content del primer span es ${subtitle2Element.previousElementSibling.textContent}`
);
console.dir(
  `El text content del segundo span es ${subtitle2Element.nextElementSibling.textContent}`
);
