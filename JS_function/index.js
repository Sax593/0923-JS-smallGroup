//Qu'est ce qu'une fonction?

// function calculator(a, b) {
//   return alert(a + b);
//   console.log(a + b);
// }
// calculator(2, 3);
// const users = () => {};

//Creer une fonction qui calcule le prix d'impression d'un livre:
//infos a avoir: Prix d'une page, nombre de pages
//prompt nb de page
// let nbPages = parseInt(prompt("nombres de page"));
// //prompt prix unitaire
// let price = parseInt(prompt("Prix unitaire"));
// function calculator(a, b) {
//   const result = a * b;
//   alert(result);
// }
// calculator(nbPages, price);
//Function callback
//Creer une fonction qui demande le nom de l'utilisateur via un prompt et alerte l'utilisateur "Bonjour "NOM_UTILISATEUR""
function sayName(name, callback) {
  console.log("Hello " + name);
  callback();
}

function goodbye() {
  console.log("See you soon");
}

function hello() {
  console.log("How are you?");
}

sayName("Héléne", goodbye);
