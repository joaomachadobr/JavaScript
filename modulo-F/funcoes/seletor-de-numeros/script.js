let lista= []

function adicionar() {
    let input = document.querySelector('#txtn')
    let numero = Number(input.value)
    let listaSelect = document.querySelector('#txtad')
    let res = document.querySelector('#res')

    if(numero < 1 || numero > 100 || input.length == 0) {
        alert('Numero invalido! Por favor, digite um numero entre 1 e 100.')
    } else if (lista.includes(numero)) {
        alert('Numero ja adicionado!')
    } else {
        lista.push(numero)

        let item = document.createElement('option')
        item.text = `Numero Adicionado: ${numero}`
        listaSelect.appendChild(item)
    }
    
    input.value = ''
    input.focus()
}

function finalizar() {
    if (lista.length == 0) {
        alert('Por favor, adicone numeros!!!')
    }
    let res = document.querySelector('#res')
    res.innerHTML = lista
}