var agora = new Date()
var diaSem = agora.getDay()
/*
0 sunday
1 monday
2 tuesday
3 wednesday
4 thursday
5 friday
6 saturday
*/
switch (diaSem) {
    case 0:
        console.log('Sunday')
        break;
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thrusday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    default:
        console.log('[ERROR] invalid day')
        break;
}