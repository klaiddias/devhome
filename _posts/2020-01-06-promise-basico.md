---
layout: post
title:  "Promise - Entenda-as e descubra seu poder"
author: klaid
featured: true
hidden: false
categories: [ JavaScript ]
tags: [JavaScript, Promise] 
image: assets/images/promises.jpg
beforetoc: "" 
toc: true
---

Conceitos como PROMISE me chamou bastante atenção por perceber que colegas que estavam estudando tinham dificuldade em entender ou, em algumas vezes, usavam sem saber exatamente o comportamento delas, então ao ponto.
## Entendendo PROMISE em JavaScript

Depois de 9 anos trabalhando com .Net no back-end e a forte adoção do desenvolvimento na com JavaScript, inclusive no back-end, resolvi investir mais tempo no estudo da linguagem. Muitas vezes a característica da linguagem me deixava intrigado por ter uma tipagem fraca, não que isso seja um problema para mim, durante muitos anos programei em ASP 3.0 e me sentia muito à vontade.

Promise:
É um proxy para um valor ainda não conhecido no momento que a Promise é criada, permitindo associar métodos de tratamento para eventos da ação assíncrona no caso de sucesso ou de falha e permitindo que métodos assíncronos se comportem como métodos síncronos ele não retorna um valor final e sim uma promessa que retornará um valor em algum momento.

Uma promise pode sempre estará em um desses estados:
	pending: estado inicial, nem resolvida nem rejeitada;
	fulfilled: significa que a ação foi concluída com êxito;
	rejected: significa que a operação falhou;
    
Logo, uma promessa inicia com o PromiseStatus=”pending” só pode retornar que foi concluída ou rejeitada (erro). Porém, o que temos real interesse em uma promessa é o seu retorno (PromiseValue), o valor que a função está retornando, é ele que precisamos para darmos andamento no nosso código, por exemplo, uma promise pode chamar uma API REST geralmente não queremos nos preocupar com o estado, só queremos resultado seja ele um JSON, XML, ou qualquer outro formado de retorno da API, importante saber também que quando o status da promessa está como “pending” o PromiseValue está como “undefined” logicamente a função ainda está trabalhando para obter o valor.

Exemplo simples:
```js
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest() 
    xhr.open("GET", url) 
    xhr.onload = () => resolve(xhr.responseText) 
    xhr.onerror = () => reject(xhr.statusText) 
    xhr.send() 
  });
}

myAsyncFunction('https://api.github.com/orgs/nodejs')
    .then((retorno) => console.log(retorno))
    .catch((erro) => console.log(erro));
console.log('FIM DO PROCESSAMENTO');
```
Resultado:
![exec_promise_basic]({{ site.baseurl }}/assets/images/exec_primise_basic.PNG)
>Analisando o comportamento pelo log impresso você pode estar se perguntando porque a mensagem de **FIM DO PROCESSAMENTO** apareceu antes da resposta da função **myAsyncFunction** se eu implementei a *Promise* na função? porque ele não se comportou de forma síncrona e só apresentou a mensagem no após a resposta da chamada Http?

O fato do seu método retornar uma *Promise* não quer disser que ele se comportará de maneira síncrona, a grande sacada está na chamada das funções que implementam Promise, aí você pode observar melhor o trecho de código e argumentar que implementou o **.then()** inclusive o **.catch()**

Para obtermos o retorno da mensagem de maneira síncrona com a chamada Http devemos encadear as chamadas fazendo com que o JavaScript só passe para o próximo passo após a conclusão do anterior, veremos abaixo como seria o código com tal comportamento.

```js
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest() 
    xhr.open("GET", url) 
    xhr.onload = () => resolve(xhr.responseText) 
    xhr.onerror = () => reject(xhr.statusText) 
    xhr.send() 
  });
}

myAsyncFunction('https://api.github.com/orgs/nodejs')
    .then((retorno) => console.log(retorno))
    .then(() => console.log('FIM DO PROCESSAMENTO'))
    .catch((erro) => console.log(erro));
;
```
Resultado:
![Resultado Correto]({{site.baseurl}}/assets/images/exec_primise_basic_2.PNG)

