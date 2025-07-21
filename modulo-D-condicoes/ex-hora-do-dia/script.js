function carregar(){
    atualizanRelogio()//mostra o relogio na hora do carregamento
    setInterval(atualizanRelogio, 1000)//atualiza a cada segundo- medida em milesegundos
}

function atualizanRelogio() {
    var msg = document.getElementById('msg')
    //var img = document.querySelector('#img img')
    var img = document.getElementById('foto') //pra fazer desse jeito tem que colocar um id na imagem

    var agora = new Date()
    var horas = agora.getHours()
    var minutos = agora.getMinutes()
    var segundos = agora.getSeconds()

    if (minutos < 10) minutos = '0' + minutos
    if(segundos < 10) segundos = '0' + segundos


    msg.innerHTML = `${horas}:${minutos}:${segundos}`

    if (horas >= 0 && horas < 12) {
        img.src = 'morning.webp'
        document.body.style.background = '#ffbc61'
    } else if (horas >= 12 && horas < 18) {
        img.src = 'afternoon.png'
        document.body.style.background = '#71a9e2'
    } else {
        img.src = 'night.png'
        document.body.style.background = '#213242'
        document.body.style.color = 'white'
        msg.style.color = 'black'
    }

}