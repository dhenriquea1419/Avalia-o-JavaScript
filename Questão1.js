function calculadora(num1, num2, operacao) {
    let resultado;

    if (operacao === "soma") {
        resultado = num1 + num2;
    } else if (operacao === "subtração") {
        resultado = num1 - num2;
    } else if (operacao === "multiplicação") {
        resultado = num1 * num2;
    } else if (operacao === "divisão") {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            return "Erro: Divisão por zero não é permitida.";
        }
    } else {
        return "Operação inválida.";
    }

    return resultado;
}


console.log(calculadora(10, 5, "soma")); 
console.log(calculadora(10, 5, "subtração")); 
console.log(calculadora(10, 5, "multiplicação")); 
console.log(calculadora(10, 5, "divisão")); 
console.log(calculadora(10, 0, "divisão"));
