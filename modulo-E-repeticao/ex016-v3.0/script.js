function contar() {
    // dados do usuarios e declaracao de variaveis
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')
    //validacao se todos os campos foram preenchidos
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        res.style.textAlign = 'center'
        alert('Preencha todos os campos!')
    } else {
        //preparar os dados do usuario
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        // corrigir passo invalido ZERO
        if (p <= 0) {
            alert('Passo Invalido! Considerando passo 1.')
        }
        // limpar tela
        res.innerHTML = 'Contando: <br>'
        // Contagem crescente
        if (i < f) {
            for(let c = i; c <= f; c += p)
                res.innerHTML += `${c} 👉 `
        } else {
            for(let c = i; c >= f; c -= p)
                res.innerHTML += `${c} 👉 ` 
        }
        res.innerHTML += `🎈`
    }
}