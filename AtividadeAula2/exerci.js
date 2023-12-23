/*10 exercícios de lógica de programação voltados para JavaScript, envolvendo operadores
aritméticos e variáveis:

*Observação: Não precisa pedir o numero dos usuários. Pode criar variáveis estáticas

1. Soma Simples: Crie um programa que recebe dois números como entrada e exibe a soma
deles.
*/

var num1 = 20 ;

var num2 = 30;

var soma = num1 + num2;

comsole.log(soma);


/*Calculadora de Juros: Crie um programa que calcule o montante de um investimento após
um determinado período de tempo, dado o valor principal, a taxa de juros e o número de
anos.*/

var montante = 1000;
var tempoInvest = 6;
var taxa = 0.03;

var investimento = montante * tempoInvest * taxa;

comsole.log(ivestimento);

/*3. Conversor de Temperatura: Faça um programa que converta uma temperatura em graus
Celsius para Fahrenheit. A fórmula é: F = (C * 9/5) + 32.*/


var c = 30;

var f = ((c * 1.8) + 32);

console.log(f);

/*4. Cálculo de Média: Escreva um programa que calcula a média de três notas e determina se
o aluno foi aprovado (média >= 7) ou reprovado (média < 7).*/

var nota1 = 6;
var nota2 = 8;
var nota3 = 7;

var media = ((nota1 + nota2 + nota3)/3);

if(media >= 7){
    console.log("Aluno Aprovado");
} else{
    console.log("Alunos reprovados");
}

/*5. Calculadora de IMC: Crie um programa que calcula o Índice de Massa Corporal (IMC)
com base no peso (em kg) e na altura (em metros) inseridos pelo usuário*/

var altura = 1.77;
var peso = 80;

var imc = (peso / (altura * altura));

console.log(imc);




/* 6. Divisão e Resto: Solicite dois números e exiba o resultado da divisão e o resto da divisão
entre eles.*/

n1 = 12;

n2 = 3;

var div = n1 /n2;

var div2 = n1 % n2;

console.log( div + " e" + div2);



/* 7. Calculadora de Desconto: Faça um programa que calcule o preço com desconto de um
produto, considerando o valor original e a porcentagem de desconto fornecida. */

var valorNormal = 100;

var desconto = 10;

var valorDesconto = (valorNormal * (desconto/100));

var valorFinal= valorFinal - valorDesconto;

console.log(valorFinal);


/* 8. Conversor de Moeda: Crie um programa que converta um valor em dólar para outra
moeda (por exemplo, Real brasileiro), considerando uma taxa de câmbio.  */


var valorDola = 500;

var taxareal= 5.18;

var valorReal = valorDola * taxareal;

console.log = (valorReal);

/* 9. Tabuada: Peça ao usuário para inserir um número e exiba a tabuada desse número de 1 a
10. */

valortabuada = 2;

valor1 = valortabuada *1;
valor2 = valortabuada *2;
valor3 = valortabuada *3;
valor4 = valortabuada *4;
valor5 = valortabuada *5;
valor6 = valortabuada *6;
valor7 = valortabuada *7;
valor8 = valortabuada *8;
valor9 = valortabuada *9;
valor10 = valortabuada*10;

console.log(valor1 + "/" + valor2 + "/" + valor3  + "/" + valor4 + "/" + valor5 + "/" +  valor6 + "/" +  valor7 + "/" + valor8 + "/" + valor9 + "/" + valor10);

/* 10.Cálculo de Fatorial: Escreva um programa que calcula o fatorial de um número inserido
pelo usuário. O fatorial de um número é o produto de todos os números inteiros positivos de
1 até esse número. */

var fatorial = 5;

var valor= ((((5 * (fatorial -1)) * (5 * (fatorial -2))) * (5 * (fatorial - 3))) * (5 * (fatorial -4)));







