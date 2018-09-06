//Aufgabe 1) Implementieren Sie eine JavaScript Funktion die einen String umkehrt. Z.B. das Wort "javascript".

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('javascript');

// ------------------------------------------------------------------------------

/* Aufgabe 2) Implementieren Sie eine JavaScript Funktion, welche erkennt, ob ein Jahr ein Schaltjahr ist. Sie erkennen ein Schaltjahr anhand der folgenden Regeln:
1.Die durch 4 ganzzahlig teilbaren Jahre sind Schaltjahre.
2.Jahre, die ein Jahrhundert abschliessen (z. B. 1800, 1900, 2100 und 2200) sind keine Schaltjahre.
3.Die durch 400 ganzzahlig teilbaren Jahre sind doch Schaltjahre.
Bspw. ist 1996 ein Schaltjahr, aber 1997 nicht. 2000 ist ein Schaltjahr, 1900 nicht. */

function schaltjahr(jahr) {
    if (jahr % 400 === 0) {
        return true;
    }
    if (jahr % 100 === 0) {
        return false;
    }
    if (jahr % 4 === 0) {
        return true;
    }
    return false;
}
schaltjahr("hier schreiben wir das Jahr");

// -----------------------------------------------------------------------------

/*Aufgabe 3) Schreiben Sie eine JavaScript Funktion, die erkennt, ob ein Satz ein Pangramm ist. Ein Pangramm ist ein Satz, welcher jeden Buchstaben des Alphabets mind. einmal benutzt. Das bekannteste Pangramm im Englischen ist:

The quick brown fox jumps over the lazy dog.

Das Alphabet benutzt nur die ASCII-Zeichen a-z. Gross-/Kleinschreibung muss nicht unterschieden werden.

Ich habe meinen Code korrigiert und durch das "https://jsconsole.com/" für Uppercase und Lowercase getestet. Ich hoffe dass es jetzt gut ist, auch im Js Datei.*/

function isPangram(index) {
    // create the alphabet as a string
    let alpha = "abcdefghigklmnopqrstuvwxyz";
    // convert everything to Lowercase in the input, so that Uppercase Letters are also accepted and we dont need to write the alphabet twice in lower and upper case letters.
    index = index.toLowerCase();
    //go through the alphabet one by one
    for (let i = 0; i < alpha.length; i++) {
        // check if each letter exists in the input, if it doesnt exist (any of the letters) it will give us a negative 1 (-1) and thats how it will know its not a Pangram
        if (index.indexOf(alpha.charAt(i)) === -1) {
            return false;
        }
    }
//otherwise it will know it is a Pangram and it will return true
    return true;
}

isPangram("The quick brown fox jumps over the lazy dog.");

//------------------------------------------------------------------------------


// Meine Repository in GitLab lautet: https://git.ffhs.ch/theologos.baxevanos/JavaScript.git



// Baxevanos Theologos, Martikelnummer: 18-866-905