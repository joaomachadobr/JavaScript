// var hora = 5
// if (hora >6 && hora < 12) {
//     console.log('Good morning')
// } else if (hora < 18){
//     console.log('Good aftenoon')
// } else if (hora < 6 && hora >= 1) {
//     console.log('Good dawn')
// } else {
//     console.log('Good evening')
// }

//pegando a hora atual

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao ${hora} horas.`)
if (hora < 6 && hora >= 0) {
    console.log('Good dawn')
} else if (hora >= 6 && hora < 12) {
    console.log('Good morning')
} else if (hora < 18){
    console.log('Good aftenoon')
} else {
    console.log('Good evening')
}