function ehPalindromo(palavra) {
    let palavraInvertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }

    if (palavra === palavraInvertida) {
        return `${palavra} é um palíndromo.`;
    } else {
        return `${palavra} não é um palíndromo.`;
    }
}


const palavra = prompt("Digite uma palavra:");
console.log(ehPalindromo(palavra));
