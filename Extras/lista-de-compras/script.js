// pegar os elementos do html
let inputNome = document.querySelector('#nomeItem')
let inputQtd = document.querySelector('#quantidadeItem')
const btnAdicionar = document.querySelector('#btnAdicionar')

// elemento <ul> onde a lista sera exibida
const ulLista = document.getElementById('lista')

// array principal(comeca vazio)
let listaCompras = []

function salvarLista() {
    localStorage.setItem('listaCompras', JSON.stringify(listaCompras))
}

function carregarLista() {
    const dadosSalvos = localStorage.getItem('listaCompras')
    listaCompras = dadosSalvos ? JSON.parse(dadosSalvos) : []
}

function renderizarLista() {
    //limpa a lista antes de mostrar
    ulLista.innerHTML = ''

    // percorre cada item do array
    listaCompras.forEach((item, index) => {
        const li = document.createElement('li')

        // texto: nome + quantidade
        const texto =document.createElement('span')
        texto.textContent = `${item.nome} (${item.quantidade})`

        // se ja comprado, aplica classe
        if (item.comprado) {
            texto.classList.add('comprado')
        }

        //botao "comprar"
        const btnComprar = document.createElement('button')
        btnComprar.textContent = "✔"
        btnComprar.classList.add('acao')
        btnComprar.addEventListener("click", () => {
            item.comprado = !item.comprado // alterna entre true/false
            renderizarLista() // re-rendeizar/ atualizar lista
            salvarLista()
        })

        // botao "remover"
        const btnRemover = document.createElement('button')
        btnRemover.textContent =  "🗑"
        btnRemover.classList.add('acao')
        btnRemover.addEventListener('click', () => {
            listaCompras.splice(index, 1) // remove do array
            renderizarLista() // atualiza lista
            salvarLista()
        })

        //montar a <li>
        li.appendChild(texto)
        li.appendChild(btnComprar)
        li.appendChild(btnRemover)

        //adicionar na <ul>
        ulLista.appendChild(li)
    })
}

function adicionarItem() {
    // pegar os valores do input
    let nome = inputNome.value.trim()
    let quantidade = inputQtd.value.trim()

    //validacao de campo vazio
    if (nome === "" || quantidade === "") {
        alert('Preencha o nome e a quantidade!')
        return
    }

    // criar objeto com as info do item
    let novoItem = {
        nome: nome,
        quantidade: Number(quantidade), //garante que e um numero
        comprado: false
    }

    // colocar o objeto no array
    listaCompras.push(novoItem)

    salvarLista()

    // atualiza a tela
    renderizarLista()
    
    //teste no console
    //console.log(listaCompras)

    // limpar os campos
    inputNome.value = ''
    inputQtd.value = ''
    inputNome.focus()
}

carregarLista()
renderizarLista()

// evento de clique
btnAdicionar.addEventListener("click", adicionarItem)







