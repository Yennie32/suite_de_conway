// _____ETAPE 1_____
function decoupeChaine(string) {
  let result = string[0]; // initialisation au 1er caractère
  for (let i = 1; i < string.length; i++) {
    // commence au 2e caractère pour ne pas doubler l'itération
    if (string[i] !== string[i - 1]) {
      // compare au caractère précédent
      result += " "; // ajoute un espace si la condition est remplie !
    }
    result += string[i]; //concaténation du résult avec le caractère du string
  }
  return result; // valeur de retour
}

// console.log(decoupeChaine("ab"));
// console.log(decoupeChaine("aabbca"));
//_____ETAPE 2_____

function decritChaine(string) {
  let result = "";
  let count = 1;
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      count++;
    } else {
      result += count + string[i - 1];
      count = 1;
    }
  }
  result += count + string[string.length - 1];
  return result;
}
// console.log(decritChaine("ab"));
// console.log(decritChaine("aabbca"));

decritChaine("ab"); // renvoie "1a1b"
decritChaine("aabbca"); // renvoie "2a2b1c1a"
//______ETAPE 3_____
function suite_de_conway(carac, n) {
  // onn crée deux variables
  const array = [carac]; // array représente un tableau avec comme premier caractère "carac" exemple:"a";
  let suite = carac; // suite initialise le début de la suite suite="a";

  // On itère n fois exemple n = 3;
  for (let i = 1; i < n; i++) {
    // On écrase la valeur de suite avec la nouvelle valeur de retour de la fonction decritChaine(str);
    suite = decritChaine(suite);
    // On push dans le tableau array la nouvelle valeur de suite;
    array.push(suite);
  }
  // On retourne le tableau array;
  return array;
}

// console.log(suite_de_conway("a", 3));
// console.log(suite_de_conway("1", 3));

function ask_user (){
    let caracter = prompt("Feed me a letter !");
    let number = parseInt(prompt("How high ?"));
    const content = suite_de_conway(caracter, number);
    return content
}

// Création du contenu HTML
const body = document.querySelector("body");

const content = ask_user();
content.forEach((item) => {
  const para = document.createElement("p");
  para.style.textAlign = "center";
  para.textContent = item;

  body.appendChild(para);
});
