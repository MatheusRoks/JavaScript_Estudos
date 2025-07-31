/* Um pouco sobre os tipos de dado
segue o bom e velho principio da lógica de programação.
temos o tipo texto, caracter, numero, boolean, objeto, null e undefined.
undefined seria um dado não definido, ou seja, variável não declarada.
null é vazio, o nosso none
caracter se refere a simbolos.


COERÇÃO

a coerção é feita ainda de forma mais simples, no aspecto da variável.
os valores da variável são bem mutáveis, então se voce desejar pode 
simplesmente fazer o seguinte.

var name = "João"
name = 1.235

isso não vai causar nenhuma quebra no código (mas é aquilo, variáveis
devem ser bem declaradas para evitar comentários denecessários e devem conter
exatamente o que o nome diz conter.)

existe ainda a coerção de valores (de str para int e etc)
uma das formas de fazer a coerção de valores é a seguinte

*/
var numeroUm = '1'
var numeroDois = '2'
var numeroTres = 150.1
var resultado ="" 
resultado = +numeroUm + +numeroDois
console.log(resultado)

/* caso  a conta não tivesse o +numeroUm e +numeroDois, não seria possivel somar, ocorreria um pequeno erro. veja
 */
resultado = numeroUm + numeroDois
console.log(resultado)

/*quando não se adiciona o + antes da variável, ele concatena como se faz com str */

/*A outra forma de fazer a conversão de numeros e usando o Number.parseInt(n)/
Number.parseFloat(n).
vamos ao testes
*/
resultado = Number.parseInt(numeroUm )+ Number.parseInt(numeroDois)
console.log(resultado)
/*ainda existe o  jeito mais tranquilo de converter, CASO O TIPO NÃO SEJA 
ESSENCIAL, que é usando number */
resultado = Number(numeroUm )+ Number(numeroDois)
console.log(resultado)
/*
s.lenght sendo s a variável, conta os ccaracteres.
.toUpperCase() tudo maiusculo
.toLowerCase() tudo minusculo
document.write() é um print mas no corpo do htlm
numero.toFixed(2) determina as casas decimais
numero.toFixed(2) replace (".",",") aqui muda o . para ,
*/

console.log(numeroTres.toFixed(2) )
console.log(numeroTres.toFixed(2).replace (".",","))
console.log(numeroTres.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))