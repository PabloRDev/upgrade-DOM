// Iteración #1

// Dado el siguiente HTML:
//  1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

let showMe = document.querySelector(".showme");

console.log(showMe);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

let pillado = document.querySelector("#pillado");

console.log(pillado);

// 1.3 Usa querySelector para mostrar por consola todos los p

let paragraphs = document.querySelectorAll('p')

console.log(paragraphs)

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

let pokemon = document.querySelectorAll(".pokemon")

console.log(pokemon)

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo
// data-function="testMe".

let testMe = document.querySelectorAll(`[data-function*="testMe"]`)

console.log(testMe)
