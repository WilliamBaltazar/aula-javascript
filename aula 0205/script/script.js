// primeira função
function primeirafuncao(){
    console.log("primeira função")
}
console.log("primeira função")

//manipulando função
function DizerNome(nome){
    console.log("O nome é:", nome);
}

DizerNome("testando a função Thiago");

//atribuindo valores a função

function soma(){
   
   var a = parseFloat(prompt("digite o valor de A: "))

   var b = parseFloat(prompt("digite o valor de B: "))

   var soma= a + b;
   console.log(soma);
}
    
    soma();