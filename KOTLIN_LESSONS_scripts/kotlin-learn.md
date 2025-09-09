val lista = mutableListOf(1, 2, 3)

lista
    .also { println("Antes: $it") }
    .add(4)

No Kotlin, usamos **`it`** como uma *palavra-chave implícita* quando trabalhamos com lambdas de **um único parâmetro** — especialmente em funções como `map`, `filter`, `forEach`, e outras funções de extensão da biblioteca padrão.

Aqui vai um exemplo simples com `map`:

```kotlin
val numbers = listOf(1, 2, 3)
val doubled = numbers.map { it * 2 } // 'it' representa cada número da lista
println(doubled) // [2, 4, 6]
```

Nesse caso, `it` representa cada item da lista. Como a lambda só precisa de um argumento, você não precisa nomeá-lo manualmente — o Kotlin já entende que o argumento implícito se chama `it`.

Mas se você quiser mais clareza ou estiver usando vários argumentos, pode nomeá-los explicitamente:

```kotlin
numbers.map { number -> number * 2 }
```

**Quando você não pode usar `it`:**
- Quando a lambda tem **mais de um parâmetro**, como em `forEachIndexed`, onde você tem que nomear todos os parâmetros manualmente:

```kotlin
numbers.forEachIndexed { index, value ->
    println("Index $index: Value $value")
}
```

## Usos avançados de `it` em funções de escopo

O Kotlin oferece várias funções de escopo que utilizam lambdas e o parâmetro implícito `it`. Vamos ver exemplos práticos com `let`, `apply` e `also`, além de como isso se encaixa no estilo funcional.

### 1. `let`

A função `let` executa um bloco de código com o objeto como argumento (`it`) e retorna o resultado do bloco.

```kotlin
val nome: String? = "Kotlin"
nome?.let { println("Nome em maiúsculas: ${it.uppercase()}") }
```

#### Exercícios com `let`

1. Dado um número inteiro, use `let` para imprimir o dobro apenas se ele não for nulo.
2. Use `let` para transformar uma lista de strings em uma lista de seus tamanhos.
3. Dado um objeto nulo, use `let` para evitar NullPointerException ao acessar uma propriedade.

---

### 2. `apply`

A função `apply` executa um bloco de código no contexto do objeto (usa `this` ao invés de `it`) e retorna o próprio objeto. Mas, se usar uma lambda aninhada, `it` pode aparecer.

```kotlin
val pessoa = Pessoa().apply {
    nome = "João"
    idade = 30
}
```

#### Exercícios com `apply`

1. Crie um objeto `StringBuilder` e adicione três linhas de texto usando `apply`.
2. Use `apply` para inicializar um objeto de configuração com três propriedades.
3. Crie uma lista mutável e adicione elementos usando `apply` e uma lambda aninhada que utilize `it`.

---

### 3. `also`

A função `also` executa um bloco de código com o objeto como argumento (`it`) e retorna o próprio objeto. É útil para efeitos colaterais (como logging).

```kotlin
val lista = mutableListOf(1, 2, 3)
    .also { println("Antes: $it") }
    .apply { add(4) }
    .also { println("Depois: $it") }
```

#### Exercícios com `also`

1. Use `also` para imprimir o conteúdo de uma lista antes e depois de adicionar um elemento.
2. Crie um objeto e use `also` para validar uma propriedade, lançando exceção se estiver inválida.
3. Use `also` para encadear operações em uma lista, mostrando o estado em cada etapa.

---

## Estilo funcional com lambdas

O uso de `it` em lambdas permite escrever código mais conciso e funcional, facilitando operações como `map`, `filter`, `reduce` e outras.

```kotlin
val pares = (1..10).filter { it % 2 == 0 }
val soma = pares.reduce { acc, it -> acc + it }
```

---

## Soluções dos Exercícios

### let

1. 
```kotlin
val numero: Int? = 5
numero?.let { println(it * 2) }
```
2.
```kotlin
val palavras = listOf("kotlin", "java", "python")
val tamanhos = palavras.map { it.length }
```
3.
```kotlin
val obj: Pessoa? = null
obj?.let { println(it.nome) }
```

### apply

1.
```kotlin
val sb = StringBuilder().apply {
    append("Linha 1\n")
    append("Linha 2\n")
    append("Linha 3\n")
}
```
2.
```kotlin
val config = Config().apply {
    host = "localhost"
    port = 8080
    useSSL = true
}
```
3.
```kotlin
val lista = mutableListOf<Int>().apply {
    repeat(3) { add(it) }
    this.forEach { println(it) }
}
```

### also

1.
```kotlin
val lista = mutableListOf(1, 2, 3)
    .also { println("Antes: $it") }
    .apply { add(4) }
    .also { println("Depois: $it") }
```
2.
```kotlin
val user = User("João", "")
    .also { if (it.nome.isBlank()) throw IllegalArgumentException("Nome inválido") }
```
3.
```kotlin
val lista = mutableListOf(1)
    .also { println("Inicial: $it") }
    .apply { add(2) }
    .also { println("Após adicionar: $it") }
    .apply { remove(1) }
    .also { println("Após remover: $it") }
```
