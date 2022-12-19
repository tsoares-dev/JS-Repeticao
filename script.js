//1A - Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

nota = parseInt (prompt("Digite o valor da nota (entre 0 e 10): "));
while(isNaN(nota)|| nota<0 || nota>10){
    nota = parseInt (prompt("Número Inválido! Digite o valor da nota (entre 0 e 10), por favor: "));
  }
	document.write("<em>O número digitado foi: </em>" + nota)


//1B - Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

// nome = parseInt (prompt("Digite um nome de usuário: "));
// senha = parseInt (prompt("Digite uma senha: "));
// if (nome == senha ) {
//     alert ("Digite uma senha diferente do nome!");
//     nome = parseInt (prompt("Digite um nome de usuário: "));
//     senha = parseInt (prompt("Digite uma senha: "));
//     }
// else {
//   alert ("Login aceito!");
// }


// 1C - Faça um programa que leia e valide as seguintes informações:Nome: maior que 3 caracteres;Idade: entre 0 e 150;Salário: maior que zero;Sexo: 'f' ou 'm';Estado Civil: 's', 'c', 'v', 'd';Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

// nome = parseInt (prompt("Digite o seu nome: "));
// if (nome < nome.length(3)  ) {
//   alert ("Seu nome não por contar menos que 3 caracteres!");
//   nome = parseInt (prompt("Digite o nome novamente: "));
// else { 
//     alert ("Nome aceito!"); 
//   }
// idade = parseInt (prompt("Digite a sua idade: "));
// salario = parseInt (prompt("Digite o seu salário: "));
// sexo = parseInt (prompt("Digite seu sexo (F/M): "));
// eCivil = parseInt (prompt("Digite o seu estado Civil, sendo: (s) para solteiro, (c)para casado, (v) pra viuvo ou (d) para divorciado "));


// 2A - Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.

// anos = 0
// a = 80000
// b = 200000
// taxca = 1.030
// taxcb = 1.015
// while (a < b) {
// 	document.write("<br>", "<strong>População no ano:</strong> " + anos)
// 	document.write("<br>", "População do Páis A: " +a+ " pessoas")
// 	document.write("<br>","População do Páis B: " +b+" pessoas", "<hr>")
// 	anos += 1;
// 	a *= taxca
// 	b *= taxcb
// }

// anos = 0
// // a = 80000
// // b = 200000
// // taxca = 1.030
// // taxcb = 1.015
// a = parseInt (prompt("Digite a população do País para comparação populacional (A): "));
// taxca = parseInt (prompt("Digite a taxa anual de crescimento desse país: "));
// b = parseInt (prompt("Digite a população do segundo País para comparação populacional (B): "));
// taxcb = parseInt (prompt("Digite a taxa anual de crescimento desse segundo país: "));

// while (a < b) {
// 	document.write("<br>", "<strong>População no ano:</strong> " + anos)
// 	document.write("<br>", "População do Páis A: " +a)
// 	document.write("<br>","População do Páis B: " +b, "<hr>")
// 	conta = taxca / 100;
// 	contb = taxcb / 100;
// 	anos += 1;
// 	a *= taxca
// 	b *= taxcb
// }

// // console.log( "A ultrapassa ou iguala a B em %d anos" %ano )

// 2B - Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.

// for (var y=0; y <= 20; y++){{ 
//   }
//     document.write(+y+ "<br>"); //VERTICAL
// }

// for (var y=0; y <= 20; y++){{ 
// }
// document.write(+y+ " "); //HORIZONTAL
// }



// 2C - Faça um programa que leia 5 números e informe o maior número.

// n1 = parseInt (prompt("Digite o primeiro número: "));
// n2 = parseInt (prompt("Digite o segundo número: "));
// n3 = parseInt (prompt("Digite o terceiro número: "));
// n4 = parseInt (prompt("Digite o quarto número: "));
// n5 = parseInt (prompt("Digite o quinto número: "));
// var max = Math.max(n1, n2, n3, n4, n5);
// alert ("O número maior digitado foi: " + max )


// 2D - Faça um programa que leia 5 números e informe a soma e a média dos números. 

// n1 = parseInt (prompt("Digite o primeiro número: "));
// n2 = parseInt (prompt("Digite o segundo número: "));
// n3 = parseInt (prompt("Digite o terceiro número: "));
// n4 = parseInt (prompt("Digite o quarto número: "));
// n5 = parseInt (prompt("Digite o quinto número: "));
// var soma = (n1 + n2 + n3 + n4 + n5)
// var media = ((n1 + n2 + n3 + n4 + n5) / 5)
// alert ("A soma entre os cinco números é: " + soma )
// alert ("E a média entre eles é: " + media )


// 2E - Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

// var numero = 0;
// while (numero <=50) {
//   if (numero % 2 ==1) {
//     document.write(numero + "<br>")
//   }
//   numero++;
// }


// 2F - Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.Altere o programa anterior para mostrar no final a soma dos números.

// n1 = parseInt (prompt("Digite o primeiro número: "));
// n2 = parseInt (prompt("Digite o segundo número: "));
// soma = 0
// for (i = n1; i<= n2; i++) {
//   document.write(+i+ " ")
//   soma = soma++;
// }
// alert ("A soma entre os números é: " + soma );

