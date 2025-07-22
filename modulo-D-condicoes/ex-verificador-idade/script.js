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
    if (fsex[0].checked) {
        //genero = fsex[0].value
        genero = 'Homem'
    } else if (fsex[1].checked) {
        //genero = fsex[1].value
        genero = 'Mulher'
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

}


}