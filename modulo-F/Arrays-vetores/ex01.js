let num = [5, 2, 3, 9, 1]

num.sort()
num.push(7)
//num.sort() - aonde eu coloco ele influencia na sequencia de passos que o programa faz
console.log(num)
console.log(`Nosso vetor: ${num}`)
console.log(`O vetor tem ${num.length} indices`)
console.log(`O primeiro valor do vetor e ${num[0]}`) //zero e o primeiro indice.

let pos = num.indexOf(5)
if(pos == -1) {
    console.log('O valor nao foi encontrado')
} else {
    console.log(`o valor ta no indice ${pos}`)
}
