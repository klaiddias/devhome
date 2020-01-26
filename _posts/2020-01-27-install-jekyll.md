---
layout: post
title:  "Instalando Jekyll no Windows 10"
author: klaid
featured: true
hidden: true
categories: [ JavaScript ]
tags: [TypeScript, ES6] 
image: assets/images/jekyll.png
beforetoc: "Jekyll é versátil, podendo ser usado para **criar blogs, landing pages, sites institucionais**, entre outros. O conteúdo é criado através de simples arquivos de texto no formato **MarkDown**." 
toc: true
comment: true
---

Jekyll é versátil, podendo ser usado para **criar blogs, landing pages, sites institucionais**, entre outros. O conteúdo é criado através de simples arquivos de texto no formato **MarkDown**.

# Introdução

Hoje vamos mostrar como instalar o **Jekyll no Windows 10**. O Jekyll é um gerador de site estático simples, com reconhecimento de blog, para sites pessoais, de projetos ou de organização. Escrito em Ruby por Tom Preston-Werner, co-fundador do GitHub, ele é distribuído sob a licença MIT de código aberto.

Abra o prompt de comando como administrador, que pode ser encontrado em **All Apps -> Windows System -> Command Prompt**. Clique com o botão direito do mouse no ícone, selecione "Run as administrator"

￼

# Comandos

Em seguida, instalaremos o Chocolatey, que é um gerenciador de pacotes para Windows:

```posh
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin 
```

Feche o prompt de comando e abra-o novamente para disponibilizar o Chocolatey; lembre-se de executá-lo como administrador.

Primeiro vamos instalar o Ruby:

choco install ruby -y 

Feche o prompt de comando e abra-o novamente para disponibilizar o Ruby, lembre-se de executá-lo como administrador:

E agora podemos instalar o Jekyll:

gem install jekyll 

Checagem final

Podemos testar o funcionamento do Jekyll, verificando a versão instalada:

jekyll -v 

￼

