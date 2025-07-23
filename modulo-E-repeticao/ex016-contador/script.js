function contar() {
var ini = Number(document.querySelector('#ini').value)
var fim = Number(document.querySelector('#fim').value)
var pas = Number(document.querySelector('#pas').value)

if (pas <= 0) { // protecao contra passo invalido
    alert('Passo invalido! Usando passo 1.')
    pas = 1
}

if (ini === '' || fim === '') {
    res.innerHTML = 'Impossivel contar'
}

res.innerHTML = 'Contando: '


if (ini < fim) {
    for (var c = ini; c <= fim; c += pas) {
        res.innerHTML += `${c} 👉 `

    }
    res.innerHTML += '🏁'
} else {
    res.innerHTML += '🏁'
    for (var c = ini; c >= fim; c -= pas) {
        res.innerHTML += `${c} 👈 `
    } 
}



// var res = document.getElementById('res')
// res.innerHTML = (`inicio ${ini}, fim ${fim}, passo ${pas}`)

}