let valores = [3, 2, 7, 9, 1, 3]
// valores.sort() - so queria ver o que acontece com dois valores iguais

// // Percurso para exibicao do vetor
// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`indice ${pos} tem o valor ${valores[pos]}`)
// }

for(let pos in valores) {
    console.log(`posicao ${pos} tem o valor ${valores[pos]}`)
}