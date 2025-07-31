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

existe ainda a coerção de valores (de str para int e etc) mas não entendi bem
como fazer essa coerção usando os valores.
uma das formas de fazer a coerção de valores é a seguinte

*/
var numeroUm = '1'
var numeroDois = '2'
var resultado ="" 
resultado = +numeroUm + +numeroDois
console.log(resultado)

/* caso  a conta não tivesse o +numeroUm e +numeroDois, não seria possivel somar, ocorreria um pequeno erro. veja
 */
resultado = numeroUm + numeroDois
console.log(resultado)

/*quando não se adiciona o + antes da variável, ele concatena como se faz com str */



