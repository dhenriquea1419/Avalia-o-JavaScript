const aluno = {
    nome: "João",
    notas: [],
    media: function() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
};


for (let i = 0; i < 3; i++) {
    const nota = parseFloat(prompt(`Digite a nota ${i + 1} do ${aluno.nome}:`));
    aluno.notas.push(nota);
}

console.log(`A média de ${aluno.nome} é ${aluno.media()}.`);
