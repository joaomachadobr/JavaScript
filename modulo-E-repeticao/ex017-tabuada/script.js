function clicar() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#tab')
    if (num.value.length == 0) {
        alert('Por favor, digite um numero.')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            tab.appendChild(item)
            item.value = `tab${c}` // cria um value que serve para outras linguagens. Nao faz muita difenreca aqui no JS
        }
    }
}