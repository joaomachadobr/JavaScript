const { createElement } = require("react")

function clicar() {
    // dados que eu preciso coletar
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#tab')
    
    if (num.value.length == 0) {// verificar se input esta vazio
        alert('Por favor, digite um numero.')
    } else {
        let n = Number(num.value) // preparar os dados
        tab.innerHTML = '' // limpa a tela
        for (let c = 1; c <= 10; c++) {
          let item = document.createElement('option')
          item.text = `${c} x ${n} = ${c*n}`
          // item.text é uma propriedade específica de elementos <option> do HTML (usados dentro de <select>).Ela define o texto visível da opção no menu suspenso.
          tab.appendChild(item)
          item.value = `tab${c}` // cria um value que serve para outras linguagens. Nao faz muita difenreca aqui no JS
        }
    }

}