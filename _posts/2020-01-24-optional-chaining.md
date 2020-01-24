---
layout: post
title:  "Optional Chaining"
author: klaid
featured: true
hidden: false
categories: [ JavaScript ]
tags: [TypeScript, ES6] 
image: assets/images/optional-chaining.png
beforetoc: "" 
toc: true
comment: false
---
Optional chaining essencialmente, permite escrever um código em que podemos parar imediatamente de executar algumas expressões se encontrarmos null ou undefined. Podemos identifica-lo pela novo operador opcional a propriedade **?**.


# O problema
Por ser muito dinâmico o JavaScript, um objeto pode ter uma estrutura encadeada de objetos diferente:
- JSON remotos;
- Props opcionais;
- Objetos de configuração;
Essa flexibilidade para que o objeto possa ter diversas formas cobra seu preço na recuperação de seus valores. 
Por exemplo podemos imaginar um objeto **fullObject** que é retornado em tempo de execução conforme abaixo:
## Exemplo
```js
// Uma versão de fullObject
const fullObject = {
  // ...
  prop1: {
    //...
    prop2: {
      // ...
      value: 'Some value'
    }
  }
};

// Outra versão de fullObject
const fullObject = {
  // ...
  prop1: {
    // Nothing here   
  }
};
```

Agora para acessar seus valores primeiramente você precisa verificar se a propriedade existe, ex:
```js
if (fullObject && 
    fullObject.prop1 && 
    fullObject.prop1.prop2) {
  console.log(fullObject.prop1.prop2.value);
}
```
>Isso é muita verificação para recuperar um simples valor, e se o tamanho do objeto for maior o tamanho do teste aumenta proporcionalmente.

# Usando Optional Chaining
Vamos como o Optional Chaining ajuda a resolver o problema reduzindo a quantidade de código.

```js
const user1 = {
    github: 'usertest',
    twitter: 'user-test',
    name: 'Jhon Crist',
    expert: {name: 'Front-End'},
    skills: [{name:'JavaScript'},{name: 'React'}]
}
const user2 = {
    github: 'usertest-2',
    twitter: 'user-test-2',
    name: 'Jhonatha Perrie'
}
```

Vamos escrever a função que retorne os valor de expert da forma convencional com suas respectivas verificações:

## Função sem Optional Chaining
```js
function getUserExpert(user) {
    if (user &&
        user.expert &&
        user.expert.name
    )
    return user.expert.name;
}
getUserExpert(user1);//Front-End
getUserExpert(user2);//undefined
```

Tivemos que checar se o usuário não é **null** ou **undefined** depois verificar se a propriedade **expert** está presente e ainda, como se não bastasse, verificar se dentro de expert existe a propriedade **name**. Caso contrário o JavaScript lançaria um erro **TypeError: Cannot read property '<nome da propriedade>' of undefined.**

Agra vamos escrever a mesma função utilizando Optional Chaining:

## Função sem Optional Chaining
```js
function getUserExpert(user) {
    return user?.expert?.name;
}
getUserExpert(user1);//Front-End
getUserExpert(user2);//undefined
```

# Não sabe oque é TypeScript?

<p><iframe src="https://channel9.msdn.com/Events/Build/2017/B8088/player" width="960" height="540" allowFullScreen frameBorder="0" title="What's new in TypeScript? - Microsoft Channel 9 Video"></iframe></p>