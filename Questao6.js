let pessoas = [];

for (let i = 0; i < 5; i++) {
    const nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
    const idade = parseInt(prompt(`Digite a idade de ${nome}:`));
    pessoas.push({ nome: nome, idade: idade });
}

function verificarMaiorDeIdade() {
    console.log("Pessoas maiores de 18 anos:");
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade > 18) {
            console.log(pessoas[i].nome);
        }
    }
}

verificarMaiorDeIdade();
