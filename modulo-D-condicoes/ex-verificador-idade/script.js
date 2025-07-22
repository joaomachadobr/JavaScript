function verificar() {
    //window.alert('ok') - teste para ver se o botao funcionou. Ir fazendo e testando aos poucos

var data = new Date()
var ano = data.getFullYear()
var anoNas = document.getElementById('txtano')
var res = document.getElementById('res')

if (anoNas.value.length == 0 || Number(anoNas.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(anoNas.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        //genero = fsex[0].value
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            //bb
            img.setAttribute('src', 'bebe-M.jpg')
        } else if (idade < 18) {
            //jovem
            img.setAttribute('src', 'jovem-M.jpg')
        } else if (idade < 60) {
            //adulto
            img.setAttribute('src', 'adulto-M.jpg')
        } else {
            // idoso
            img.setAttribute('src', 'old-M.jpg')
        }
    } else if (fsex[1].checked) {
        //genero = fsex[1].value
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //bb
            img.setAttribute('src', 'bebe-F.jpg')
        } else if (idade < 18) {
            //jovem
            img.setAttribute('src', 'jovem-F.jpg')
        } else if (idade < 60) {
            //adulto
            img.setAttribute('src', 'adulta-F.jpg')
        } else {
            // idoso
            img.setAttribute('src', 'old-F.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)

}


}