# 1) Fibonacci
A sequência de fibonacci é super famosa na computação, ela começa com [1, 1] e os próximos elementos são a soma dos dois anteriores. Portanto os 10 primeiros números da sequência de fibonnaci são:

```javascript
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```

## a) Faça uma função recursiva que receba um número N e retorne o N-ésimo número de fibonacci.
Exemplos de chamadas:
```javascript
f(0) // 1
f(1) // 1
f(2) // 2
f(3) // 3
f(4) // 5
```

## b) Faça pelo menos 3 casos de teste para essa função.

## c) Dê uma pesquisada sobre memoização/memoization (outro conceito mega conhecido) e aplique nesta função recursiva. PS.: Os testes precisam continuar passando.

## d) Re-escreva a função para não ser recursiva. PS.: Os testes precisam continuar passando.




# 2) Número que mais repete
Dada uma array de números ordenada, que pode ter números repetidos, exemplo:
```javascript
[5, 8, 8, 8, 12, 12, 15, 15, 15, 30, 30, 30, 30, 65]
```

Faça uma função que retorne o número que mais repete e a quantidade de repetições, em caso de empate você deve retornar o maior número.
Exemplos de chamada:
```javascript
f([])                     // {n: 0, repetitions: 0}
f([5])                    // {n: 5, repetitions: 1}
f([5, 5])                 // {n: 5, repetitions: 2}
f([2, 5, 5, 8])           // {n: 5, repetitions: 2}
f([2, 5, 5, 6, 8, 8, 10]) // {n: 8, repetitions: 2}
```

## a) Tente fazer os testes antes. Faça pelo menos 3 casos de teste e veja os testes falharem.

## b) Implemente a função.




# 3) Todos os números que repetem k vezes
Dada uma array de números ordenada, que pode ter números repetidos (igual a do problema anterior).

Faça uma função que receba essa array ordenada e um número k, e retorne uma array com todos os números que repetem k vezes.
Exemplos de chamada:
```javascript
f([], 0)                    // []
f([], 5)                    // []
f([1, 2, 3, 4, 5], 0)       // []
f([1, 2, 2, 2, 3, 3, 3], 2) // []
f([1, 2, 2, 2, 3, 3, 3], 3) // [2, 3]
f([1, 2, 2, 2, 3, 3, 3], 1) // [1]
```

## a) Tente fazer os testes antes. Faça pelo menos 3 casos de teste e veja os testes falharem.

## b) Implemente a função.


# 4) Todos os números que repetem k vezes (array não ordenada)
Mesmo problema do anterior, mas a array não precisa estar ordenada.
Exemplos de chamada:
```javascript
f([], 0)                    // []
f([], 5)                    // []
f([1, 2, 5, 4, 3], 0)       // []
f([2, 2, 3, 1, 3, 2, 3], 2) // []
f([2, 2, 3, 1, 3, 2, 3], 3) // [2, 3]
f([2, 2, 3, 1, 3, 2, 3], 1) // [1]
```

## a) Tente fazer os testes antes. Faça pelo menos 3 casos de teste e veja os testes falharem.

## b) Implemente a função.
