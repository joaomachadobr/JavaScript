// Fiz assisitindo a aula e usando o GPT

let num = document.querySelector('#num')
//para adicionar o numero com o botao enter do teclado
num.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})
let lista = document.querySelector('#numAD') // Declarei para poder mostrar na tela
let res = document.querySelector('#res')

let valores = [] //numeros adicionados

function isNumero(n) {  // A função isNumero(n) recebe como parâmetro o valor de num.value.
    if(Number(n) >= 1 && Number(n) <= 100) { // number transforma o n em numero
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}

// function inLista(n, l) {
//     return l.includes(Number(n))
// }

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) //guardar o numero dentro do array(valores)
        let item = document.createElement('option') // cria um <option>
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item) // colocar esse <option> dentro da lista (que e o meu <select>)
        res.innerHTML = '' //limpa a res quando adicionar um numero novo

    } else {
        alert('Numero Invalido ou ja adicionado!')
    }
    
    num.value = '' // limpa o campo do input
    num.focus() //volta o cursor para o campo do input
}

function finalizar(){
    //console.log('valores existe?', valores)
    if (valores.length == 0) {
        alert('Por favor, Adicione um numero antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0] // maior recebe o maior valor que ate entao e o primeiro valor do vetor
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos] // soma cada valor do array
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        // Você calcula todos os dados no for, e só depois mostra os resultados uma vez só. dentro do else fora do for
        media = soma / tot
        res.innerHTML += `<p>Total de numeros adicionados: ${tot}</p>`
        res.innerHTML += `<p>Maior valor: ${maior}</p>`  
        res.innerHTML += `<p>Menor valor: ${menor}</p>`
        res.innerHTML += `<p>Soma entre os valores: ${soma}</p>`
        res.innerHTML += `<p>Media dos valores: ${media.toFixed(2)}</p>`
    }
}

function limparTela() {
    lista.innerHTML = ''
    res.innerHTML = ''
    valores = []
}