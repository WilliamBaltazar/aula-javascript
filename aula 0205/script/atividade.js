//variaveis para IF 
var idade = parseFloat(prompt("digite a sua idade:  "));
if (idade >=18){
    var x = parseFloat(prompt("Digite a função de 1 á 8: "));
    var a = parseFloat(prompt("Digite o valor Desejado: "));
    var b = parseFloat(prompt("Digite o segundo valor: ")) ; 
}else{
    alert("sistema indisponivel para menores de idade");
}

//funções
function soma(){
    soma = a + b;
    alert("o valor da soma é:  "+ soma);
}
function sub(){
    sub = a - b;
    alert("o valor da subtração é:  "+ sub);
}
function multi(){
    multi = a * b;
    alert("o valor da multiplicação é:  "+ multi);
}
function div(){
    div = a / b;
    alert("o valor da dvisão é :  "+ div);
}
function quad(){
    quad = a * a
    alert("a area do quadrado é:  " + quad);
}
function tri(){
    tri = (a * b)/2
    alert(" o area do triangulo é: " + tri);
}
//estrutura IF ELSE
if (x == 1){
soma()
}else if (x == 2){
sub()
}else if (x == 3){
multi()
}else if (x== 4){
div()
}else if(x== 5){
quad()  
}else if(x== 6){
tri()
}else{
alert("função não encontrada");
}