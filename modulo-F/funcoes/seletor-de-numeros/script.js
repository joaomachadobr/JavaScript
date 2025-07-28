function adicionar() {
    let n = document.querySelector('#txtn').value
    let numero = Number(n)
    let adicionados = document.querySelector('#txtad')
    if(numero < 1 || numero > 100 || n.length == 0) {
        alert('Numero invalido! Por favor, digite um numero entra 1 e 100.')
    } else {
        let item = document.createElement('option')
        item.text = `Numero Adicionado: ${numero}`
        adicionados.appendChild(item)
    }
    
}