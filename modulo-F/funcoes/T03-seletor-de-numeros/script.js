// Tentar fazer sozinho esse

let num = document.querySelector('#num')
num.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        adicionar()
    }
})
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

function isNumber(n) { // verificar se o numero esta entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList (n, l) { // verificar se o numero ja existe na lista e no vetor
    return l.includes(Number(n))
}

function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Numero invalido ou ja adicionado!')
    }
    num.value = ''
    num.focus()  
}

function finalizar() {
    if (valores.length == 0) {
        alert('Por favor, adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if (maior < valores[pos]) {
                maior = valores[pos]
            }
            if (menor > valores[pos]) {
                menor = valores[pos]
            }
            
        }

        media = soma / tot
        
        res.innerHTML = ''
        res.innerHTML += `<p>Total de valores: <strong>${tot}</strong></p>`
        res.innerHTML += `<p>MAIOR valor: <strong>${maior}</strong></p>`
        res.innerHTML += `<p>MENOR valor: <strong>${menor}</strong></p>`
        res.innerHTML += `<p>Soma entre os valores: <strong>${soma}</strong></p>`
        res.innerHTML += `<p>Media dos valores:<strong> ${media.toFixed(2)}</strong></p>`
    }
}