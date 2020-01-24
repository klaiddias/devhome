---
layout: post
title:  "Arrow functions - Tudo que você precisa saber"
author: klaid
featured: false
hidden: false
categories: [ JavaScript ]
tags: [Arrow, ES6] 
image: assets/images/ES6Arrow.png
beforetoc: "Uma arrow function apresenta uma sintaxe mais curta, bem parecida com expressões lambda, muito comuns em linguagens como JavaScript, Python, Ruby, Java e C#..." 
toc: true
comment: true
---

# Conseito básico
A versão ES6 do JavaScript incorpora novas features, uma delas e muito interessante é a possibilidade de criar uma função utilizando o operador **=>** que são chamadas de **Arrow Functions** que são uma maneira mais simples (ou menor) de construir funções anonimas, todo programador JavaScript tem que dominar a técnica pois é bastante utilizada. 

# Convertendo função para Arrow
Vamos partir de um exemplo básico e ir reduzindo o que não é realmente importante, porque é isso que uma **arrow function** permite:

```js
const printName = function printN(name) {
    console.log(name)
}
printName('Paul')
//Klaid
```
## Redução 1
Vamos **retirar o nome da função** deixando-a como uma função anônima pois o acesso a ela se dará a partir da variável que a função será atribuída, ficara conforme abaixo:
```js
const printName = function (name) {
    console.log(name)
}
printName('Paul')
//Klaid
```
## Redução 2
Vamos também retirar a o identificador function ele não será mais necessário, só que para isso temos que adicionar o operador da arrow que é o =>, ficará assim:
```js
const printName = (name) => {
    console.log(name)
}
printName('Paul')
//Klaid
```

## Redução 3
Agora será que podemos retirar as **{}**? A resposta é sim, sempre que sua função tiver apenas uma operação (linha) você poderá remover as chaves também: 
```js
const printName = (name) => console.log(name)
printName('Paul')
//Klaid
```

## Redução 4
Já que estamos reduzindo ao máximo o tamanho da função e ela recebe apenas um parâmetro também vamos remover os **()**:
```js
const printName = name => console.log(name)
printName('Paul')
//Klaid
```

# Contexto da arrow function
Um das coisas que devemos prestar muita atenção nas arrow functions é o valor **this** (escopo). Em uma função convencional a função tem como escopo o objeto onde está contida, já no caso da arrow functions não existe escopo próprio o escopo será o **this** do pai.

Vejamos o escopo de uma função tradicional:
```js
let sample = {
    func1: function(){
        console.log(this)
    }
}
sample.func1();
//{func1: ƒ}
```
Ao mandarmos imprimir o **this** o mesmo retornou o objeto que a função pertence. E se alterarmos o mesmo exemplo acima para uma arrow function? 

```js
let sample = {
    func1 : () => {console.log(this)}
}
sample.func1();
//Window {parent: Window, opener: null, top: Window, length: 2, frames: Window, …}
```
Observe que agora o this referencia window(escopo global) que é o pai, ignorando o escopo do objeto onde está contida.

# Considerações finais
Lembre-se que em uma arrow function não podemos aplicar o operador **new**, não existe escopo próprio **this**, e não possuem **prototype**  e a palavra chave yield não pode ser usada no corpo da uma arrow function, todo o resto permanece exatamente como as funções tradicionais
>Como consequência da impossibilidade da utilização da palavra chave yield nunca teremos uma arrow function utilizada como **generators** :(
