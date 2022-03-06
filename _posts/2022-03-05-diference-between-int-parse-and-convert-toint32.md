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

**A principal diferença** entre int.Pase e Convert.ToInt32 é que **passar um valor nulo para int.Parse lancará um ArgumentNullException, enquanto passar valores nulos para o Convert.ToInt32 retornará zero.**

## O que é int.Parse?
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
			output = int.Parse(output);
			Console.WriteLine(output.ToString();
			Console.ReadLine();
		}
	}
}
```

>O trecho de codigo acima, ***output*** armazena a string "12" e utilizando o int.Parse() a string é convertida para int.
> **Se a string for null, ela lancará um ArgumentNullException.**
>Voçê pode tester escrevendo o seguinte bloco de código.

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
				output = int.Parse(output);
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

Cono já dissemos anteriormente 
## O que é Convert.ToInt32?

## Quais as semenhanças entre int.Parse e Convert.Int32 em C#?

## Qual é a diferençã entre int.Parse e Convert.Int32 em C#