// ETAPE 1
function decoupeChaine (string) {
    let result = string[0] // initialisation au 1er caractère
    for (let i = 1; i < string.length; i++) { // commence au 2e caractère pour ne pas doubler l'itération
        if (string[i] !== string[i - 1]){  // compare au caractère précédent
            result += " " // ajoute un espace si la condition est remplie !
        }
        result += string[i]  //concaténation du résult avec le caractère du string
    }
    return result // valeur de retour
}

console.log(decoupeChaine("ab"));
console.log(decoupeChaine("aabbca"));

function decritChaine(string) {
    
}

decritChaine("ab")      // renvoie "1a1b"
decritChaine("aabbca")  // renvoie "2a2b1c1a"