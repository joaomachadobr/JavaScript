function contar() {
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        res.style.textAlign = 'center'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Invalido! Considerando PASSO 1')
            P = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c+= p) {
                res.innerHTML += `${c} >> `  
            }
            res.innerHTML += '\u{1F3C1}'
        } else {
            for(let c = i; c >= f; c-=p ) {
                res.innerHTML += `${c} << `
            }
        }
    } 
}