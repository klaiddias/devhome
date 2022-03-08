---
layout: post
title:  "C# - Qual é a diferença entre int.Parse e Convert.ToInt32?"
author: klaid
featured: false
hidden: true
categories: [.Net]
tags: [C#, .Net, Cast, Type Conversion, Convert, Parse] 
image: assets/images/diference-between-int-parse-and-convert-toint32.png
beforetoc: "" 
toc: true
---

**A principal diferença** entre int.Pase e Convert.ToInt32 é que **passar um valor nulo para int.Parse lançará um ArgumentNullException, enquanto passar valores nulos para o Convert.ToInt32 retornará zero.**

## O que é int.Parse()?
A finalidade do int.Parse é converter uma string em um inteiro.

```c#
using System;
namespace ConvertTo
{
	class Program
	{
		static void Main(string[] args)
		{
			int output;
			string value = "12";
			output = int.Parse(value);
			Console.WriteLine(output.ToString();
			Console.ReadLine();
		}
	}
}
```

>O trecho de código acima, ***value*** armazena a string "12" e utilizando o int.Parse() para tentar converter a string em um número inteiro.
> **Se a string for nula, ela lançará um ArgumentNullException.**
>Você pode testar escrevendo o seguinte bloco de código.

```c#
using System;
namespace ConvertTo
{
	class Program
	{
		static void Main(string[] args)
		{
			int output;
			string value = null;
			
			try
			{
				output = int.Parse(value);
			}
			catch (Exception e)
			{
				Console.writeLine(e.ToString());
			}
			
			Console.WriteLine(output.ToString();
			Console.ReadLine();
		}
	}
}

```

Cono já dissemos anteriormente int.Parse ao receber um valor nulo para converter retornará uma exceção do tipo ArgumentNullException, más, e se tentarmos converter um decimal? Ou seja, um número que não seja inteiro.
## O que é Convert.ToInt32?

## Quais as semelhanças entre int.Parse e Convert.Int32 em C#?

## Qual é a diferença entre int.Parse e Convert.Int32 em C#
