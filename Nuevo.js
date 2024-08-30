
// /**Ejercicio 1 */
function edadVote(age){
if(age >= 18){
    console.log("Puedes votar")
} else{
    console.log("No puedes votar aun")
}
}
edadVote(18)
edadVote(47)
edadVote(14)
// /**Ejercicio 2 */
function additionCalifications(c1, c2, c3, c4){
let average = (c1+c2+c3+c4)/4;
 if (average >= 7){
    console.log("Calificación aprobatoria")
 } else{
    console.log("Calificación reprobatoria")
 }
}
additionCalifications(7,8,9,6)
additionCalifications(5,5,6,5)
additionCalifications(6,8,9,5)
additionCalifications(10,10,9,10)
// /**Ejercicio 4 */
function divisible(v){

if (v % 7 == 0 && v % 8 == 0){
    console.log(` ${v} is True`)
} else{
    console.log(` ${v} is False`)
}
}
divisible(56)
divisible(7)
divisible(8)
divisible(0)
divisible(224)
divisible(73)
/**Ejercicio 5 */
function divisible9O4(numRandom){

if (numRandom%9 == 0 || numRandom%4 == 0){
    console.log("Verdadero")
} else{
    console.log("Falso")
}
}
divisible9O4(81)
divisible9O4(22)
divisible9O4(120)
divisible9O4(331)
// /**Ejercicio 6 */
let Operation= prompt(`Selecciona tu operación deseada
    1.Suma
    2.Resta
    3.Multipliación
    4.División`)
    Operation=Number(Operation)
let num1 = prompt("Primer valor numérico")
num1=Number(num1)
let num2 = prompt("Segundo valor numérico")
num2=Number(num2)
let total=0
total=Number(total)
calculator(num1, num2, Operation, total)

function calculator(num1, num2, Operation, total){
switch(Operation){
    case 1:
        total= num1 + num2
        console.log(`El total de la suma de " ${num1}+${num2} me da como resultado ${total}`)
        break
    case 2:
        total= num1 - num2
        console.log(`El total de la resta de " ${num1}-${num2} me da como resultado ${total}`)
        break
    case 3:
        total= num1 * num2
        console.log(`El total de la multiplicación de " ${num1}*${num2} me da como resultado ${total}`)
        break
    case 4:
        total= num1 / num2
        console.log(`El total de la división entre " ${num1}/${num2} me da como resultado ${total}`)
        break
    default:
        console.log("CERO")
        break    
}
}

/**Ejercicio 7 */
let filmGenre = prompt ("Introduce el género de película")
switch (filmGenre){
    case "Acción":
    console.log("MadMax")
    break;
    case "Drama":
    console.log("La cura")
    break;
    case "Comedia":
    console.log("Shrek")
    break;
    case "Romance":
    console.log("Call me by your name")
    break;
    case "Suspenso":
    console.log("Te veo")
    break;
    case "Terror":
    console.log("Pearl")
    break;
    default:
    console.log("Si no eliges uno de estos géneros mejor vamos al parque")
    break
}
/**Ejercicio 8 */
let select = prompt (`Seleccione la operación que desea realizar
    1.Retirar dinero
    2.Transferencia
    3.Deposito
    4.Pago de servicios`)
    if (select == 1){
        console.log(`Retiro de efectivo
    Seleccione cantidad a retirar`)
    } else if (select == 2){
        console.log(`Transferencia por cajeros automáticos`)
    } else if (select == 3){
        console.log(`Seleccione la opción deseada
            deposito con efectivo
            deposito con cheque`)
    } else if (select == 4){
        console.log(`Selecciona tu servicio:
            Agua
            Luz
            Gas`)
    } else{
        console.log("Por favor introduce un valor de función valido")
    }    