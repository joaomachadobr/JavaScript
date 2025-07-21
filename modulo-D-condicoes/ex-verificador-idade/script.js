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
    res.innerHTML = `Idade ${idade} e sexo ${fsex}`
}


}