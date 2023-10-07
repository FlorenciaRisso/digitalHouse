function calculadora(num1, num2, operador){

switch (operador){
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir")


}
}
calculadora(2,3,"*")

//FUNCIONANDO