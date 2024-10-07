let tarefas = [];

for (let i = 0; i < 5; i++) {
    const tarefa = prompt(`Digite a tarefa ${i + 1}:`);
    tarefas.push(tarefa);
}


console.log("Tarefas:");
for (let i = 0; i < tarefas.length; i++) {
    console.log(`${i + 1}: ${tarefas[i]}`);
}


const tarefaConcluida = prompt("Qual tarefa deseja marcar como 'concluída'? (Digite o número)");
tarefas.splice(tarefaConcluida - 1, 1); 


console.log("Tarefas restantes:");
for (let i = 0; i < tarefas.length; i++) {
    console.log(`${i + 1}: ${tarefas[i]}`);
}
