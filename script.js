// _____ETAPE 1_____
function decoupeChaine(string) {
    let result = string[0] // initialisation au 1er caractère
    for (let i = 1; i < string.length; i++) { // commence au 2e caractère pour ne pas doubler l'itération
        if (string[i] !== string[i - 1]) {  // compare au caractère précédent
            result += " " // ajoute un espace si la condition est remplie !
        }
        result += string[i]  //concaténation du résult avec le caractère du string
    }
    return result // valeur de retour
}

console.log(decoupeChaine("ab"));
console.log(decoupeChaine("aabbca"));
//_____ETAPE 2_____ 

function decritChaine(string) {
    let result = ""
    let count = 1
    for (let i = 1; i < string.length; i++) {
        if (string[i] === string[i - 1]) {
            count++
        }
        else {
            result += count + string[i - 1]
            count = 1
        }
    }
    result += count + string[string.length - 1]
    return result
}
console.log(decritChaine("ab"));
console.log(decritChaine("aabbca"));


decritChaine("ab")      // renvoie "1a1b"
decritChaine("aabbca")  // renvoie "2a2b1c1a"
//______ETAPE 3_____