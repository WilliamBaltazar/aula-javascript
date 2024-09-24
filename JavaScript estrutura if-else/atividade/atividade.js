var func = parseFloat(prompt("Escolha a Opção desejada de 1 á 5: "));
    
    function aluno(){
        var nome = prompt("Digite o nome do aluno: ");
        var idade = parseInt(prompt("Digita a idade do aluno: "));
        var nota1 = parseFloat(prompt("Digite a nota do aluno: "));
        var nota2 = parseFloat(prompt("Digite a proxima nota: "));
        var media = (nota1+nota2)/2
    

        
        if(media >=6){
            alert("Nome: "+nome+" Idade: "+idade+" Média: "+media+" Aprovado!!")
        }else{
            alert("Nome: "+nome+" Idade: "+idade+" Média: "+media+" Reprovado")
        }
    }
    function nacionalidade(){
        var nac = prompt("Digita o numero do seu Pais: ");

        if(nac == 1){
            alert("Pais: Brasil, voce é Brasileiro!")
        }else if(nac == 2){
            alert("pais: Alemanha, voce é Estrangeiro!")
        }else if(nac == 3){
            alert("Pais: japão, voce é Estrangeiro!")
        }else{
            alert("Opção Indisponivel")
        }
    }
    
    function voto(){
        var idade = parseInt(prompt("Digite a sua Idade: "));
        
        if(idade >=18){
            alert("Voce é Maior de idade = Voto Obrigatório");
        }else if(idade>=16 & idade<=17){
            alert("Vocé tem "+idade+" de idade = Voto Opcional");
        }else{
            alert("Voce não atingiu a idade nescessaria = Voto Proibido");
        }
    }

    function velocidade(){
        var vel = parseInt(prompt("Qual é a velocidade Atual do veiculo?  "));
            alert("Voce esta á uma velocidade de:  "+vel+"/h.")
        if(vel >=60){
            alert("Você Ultrapassou a velocidade permitida, DESACELERE")
        }else if(vel>=55 & vel<=59){
            alert("Você está Proximo do limite de Velocidade permitido, ATENÇÃO.")
        }else{
            alert("Você está dentro do limite de Velocidade Permitido.")
        }
    }

    function calc(){
        var a = parseFloat(prompt("Digite o primeiro numero para ser calculado: "));
        var b = parseFloat(prompt("Digite o segundo numero para ser calculado: "));
        var fun = parseFloat(prompt("Digite o calculo desejado de 1 a 6: "));
        var total = 0;
        
        if(fun == 1){
            total = a + b;
            alert("o valor da soma é:  "+ total)
        }else if(fun == 2){
            total = a - b;
            alert("o valor da subtração é:  "+ total)
        }else if(fun == 3){
            total = a * b;
            alert("o valor da multiplicação é:  "+ total)
        }else if(fun == 4){
            total = a / b;
            alert("o valor da dvisão é :  "+ total)
        }else if(fun == 5){
            total = a * a;
            alert("a area do quadrado é:  " + total)
        }else if(fun == 6){
            total = (a*b)/2;
            alert(" o area do triangulo é: " + total)
        }else{
            alert("Opção Invalida")
        }
    }
    
    
    if(func == 1){
        aluno()
    }else if(func == 2){
        nacionalidade()
    }else if(func == 3){
        voto()
    }else if(func == 4){
        velocidade()
    }else if(func == 5){
        calc()
    }