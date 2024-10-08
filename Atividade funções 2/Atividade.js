var func = parseFloat(prompt("Digita a função Desejada de 1 a 11: "));

function helloWorld(){
    alert("Bom dia, Mundo!!!");
}

function cubo(){
    var num1 = parseFloat(prompt("Digite um número:"));
    result = num1 * num1 * num1;

    alert (result);
}

function conversaoTemp(){
    var temp = parseFloat(prompt("Digite a temperatura em Fº:"));
    C = (temp - 32) * 0,5556;
    alert (" A temperatura é :" +C+ "Celsius");
}

function areaTriangulo(){
    var altura = prompt("Digite o valor da altura:");
    var comprimento = prompt("Digite o valor do comprimento: ");
    area = (altura * comprimento)/ 2;
    alert ("A área do triângulo é: " +area);
}

function perimetroCirculo(){
    var raio = parseFloat(prompt("Digite o raio: "));
    area = 3,14 * (raio **2);
    pe = (raio * 3,14) * 2;
    alert ("A área do circulo é:" +area+ " e o perimetro é: " +pe);

}

function inverterNumero (){
    var num = prompt("Digite um número: ");
    var numeroInvertido = num.split('').reverse().join('');
    alert ("Número Invertido: " +numeroInvertido);

}
function contarVogais(){
    var texto = prompt("Digite uma string para contar as vogais: ");
    var contador = 0;
    var vogais = "aeiouAEIOU"
    
    for (var i = 0; i < texto.length; i++) {
        
        // Verifica se o caractere atual é uma vogal
        if (vogais.includes(texto[i])) {
            contador++;
        }
        alert("A string '" + texto + "' contém " + contador + " vogais.");
    }
}

function Invest(){
    var mont = 0;
    var mes = parseInt(prompt("Digite Quanto Tempo de Investimento (meses): "));
    var C = parseFloat(prompt("Digite Qual o Valor inicial investido: "));
    var i = parseFloat(prompt("Digite o Valor da Taxa de Juros: "))/100; // Convertendo a taxa para decimal
    
    //A fórmula utiliza Math.pow() para calcular a potência
    var mont = C*Math.pow((1+i), mes);
    
    alert("O montante final após " + mes + " meses será: R$ " + mont.toFixed(2));
    return;
}


function Fatorial(){
    var n = parseInt(prompt("Digite o Numero desejado: "));
    var result = 1;

    for (var i = n; i > 1; i--) {
        result *= i;
    }
    alert("O fatorial de " + n + " é: " + result);
    return;
}

function contadorLetra(){
    var texto = prompt("Digite um texto de sua Escolha: ");
    var letra = prompt("Qual letra devemos contar? ");

    if (letra.length !== 1) {
        alert("Por favor, digite apenas um único caractere.");
        return;
    }

    var contador = 0;

    for(var i=0; i<texto.length; i++){
        //Verifica se a letra na posição i da string é igual a escolhida
        if(texto[i]=== letra){
            contador++;
        }
    }
    alert(" O caractere '" + letra + "' aparece " + contador + " vezes na frase " + texto);
    return;
}

function verificaPrimo(){
    var n = parseInt(prompt("Digite o numero Desejado: "));

    if (n <= 1) {
        alert(n + " não é um número primo.");
        return;
    }

    var primo = true;
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) { // Se n for divisível por i
                primo = false;
                break;
            }
        }

        if (primo) {
            alert(n + " é um número primo.");
        } else {
            alert(n + " não é um número primo.");
        }
}


if(func==1){
    helloWorld();
}else if(func==2){
    cubo();
}else if(func==3){
    conversaoTemp();
}else if(func==4){
    areaTriangulo();
}else if(func==5){
    perimetroCirculo();
}else if(func==6){
    inverterNumero();
}else if(func==7){
    contarVogais();
}else if(func==8){
    Invest();
}else if(func==9){
    Fatorial();
}else if(func==10){
    contadorLetra();
}else if(func==11){
    verificaPrimo();
}else{
    return;
}