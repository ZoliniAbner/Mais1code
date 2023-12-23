/*Questão 1: Verificação de Idade
Crie um programa que pede a idade do usuário. Se a idade for maior ou igual a 18, exiba "Você é
maior de idade". Caso contrário, exiba "Você é menor de idade".*/

var idade = 20;

if(idade >= 18){
 console.log("você émaior de idade");
}else{
    console.log("Você é menor de idade");
}


/*Questão 2: Dia da Semana
Peça ao usuário para inserir um número de 1 a 7 que representa um dia da semana. Use um
switch para exibir o nome do dia correspondente (por exemplo, 1 é domingo, 2 é segunda-feira,
etc.). Se o número estiver fora desse intervalo, exiba "Dia da semana inválido".*/

 var dia = 7;

 switch(dia >=1 && dia <=7 ){
    case '1':
    console.log("Domingo");
    break;

    case '2':
    console.log("Segunda");
    break;

    case '3':
    console.log("Terça");
    break;

    case '4':
    console.log("Quarta");
    break;    

    case '5':
    console.log("Quinta");
    break;

    case '6':
    console.log("Sexta");
    break;

    case '7':
    console.log("sábado");
    break;
 }



/*Questão 3: Verificação de Número Par ou Ímpar
Crie um programa que pede ao usuário para inserir um número. Use uma estrutura if para
determinar se o número é par ou ímpar e exiba a mensagem correspondente.*/


var num = 5;

var cal = num % 2;

if(cal == 0){
    cconsole.log("o número é par ");
}else{
    console.log("o número é ímpar ");
}

/*Questão 4: Cálculo de Desconto
Peça ao usuário para inserir o preço de um produto e a quantidade comprada. Calcule o total. Se o
total for maior ou igual a 100, aplique um desconto de 10%. Caso contrário, não aplique desconto.
Exiba o valor total a ser pago.*/

 var produto = 20;

 var quant = 6;

 var total = produto * quant;

 
 if(total >= 100){

    var valorDesconto = (total * (10/100));

 }

 var valorFinal= total - valorDesconto;

console.log(valorFinal);


/*Questão 5: Verificação de Número Positivo ou Negativo
Solicite ao usuário que insira um número. Use uma estrutura if para determinar se o número é
positivo, negativo ou zero. Exiba a mensagem correspondente.*/

var numero = 10;

if(numero > 0){
    console.log("Numero positivo");
} else if (numero == 0) {
    console.log("Número zero");
} else{
    console.log("Número negativo");
}