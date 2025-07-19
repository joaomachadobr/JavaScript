var idade = 15
console.log(`Sua idade: ${idade}`)
if (idade < 16) {
   console.log('Nao pode votar') 
// } else if (idade >= 16 && idade < 18 || idade > 65){ - idade >= 16 declaracao implicita redundante. Se idade nao e menor que 16, obviamente ela e maior que 16
} else if (idade < 18 || idade > 65){
    console.log('Voto opcional')
} else {
    console.log('Voto Obrigatorio')
}