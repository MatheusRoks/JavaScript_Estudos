/*
os operadores matemáticos são os mesmos, funcionam da mesma forma.
+ soma 
- subtração 
* multiplicação
/ divisão real
% modulo
** exponenciação
+= variavel recebe uma soma dela mesma + algo
-= variavel - alguma coisa
*=
/=
%=
**=
além desses elementos, temos o (a variavel será representada por x)
x++ soma um
x-- subtrai um
--x subtrai um
++x soma um

porem temos uma diferença bem grande no js. Em python, 5 e '5' são diferentes
pois um seria um inteiro e o outro uma str. Assim, se eu usasse algum operador
== para comparar o resultado seria false.

Mas em js temos dois tipos de comparação, a comparação de semelhança e a 
comparação extrita. Usamos o == para saber se são semelhantes,
ainda que um seja str e o outro um valor int.

mas, não é o fim do mundo. Caso você deseje que ambos os valores
sejam iguais e de mesmo valor, basta usar === para a comparação extrita
(será que se colocar 4 = a comparação vira, sla, quantica? kkkkkk)


! inverte o valor (not)
&& e (and)
|| ou (or)

vamos la

i !true == false
i !false == true
1 == 1 && 3 == 3 (true)
1 == 1 || 3 == 1 (true)
*/

var n1 = 1
var n2 = 2
var verdade=

n1 < n2 && n2*2 >=4 ? verdade = "deu bom" : verdade = "deu ruim"
console.log(verdade)

/*basicamente isso seria uma operação ternária.
o ? executa um caso se tudo o que está antes dele for verdadeiro.
se o valor for falso tudo que esta apos os : é executado
*/