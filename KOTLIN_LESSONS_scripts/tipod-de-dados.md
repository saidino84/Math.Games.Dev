# Tipos de Dados em Kotlin
Kotlin, como uma linguagem de programação moderna e concisa, oferece uma rica variedade de tipos de dados para lidar com diferentes tipos de informações. Compreender esses tipos e suas características é fundamental para escrever código eficiente e robusto.

## Tipos Numéricos

Kotlin fornece os seguintes tipos para representar números:

*   **Byte**: Armazena inteiros de 8 bits.
    *   **PROS**: Usa menos memória.
    *   **CONTRAS**: Faixa de valores muito limitada (-128 a 127).
    *   **USO**: Ideal para dados que se encaixam em uma pequena faixa, como bytes de dados brutos.
    *   **Exemplo**:
        ```kotlin
        val byteValue: Byte = 100
        ```

*   **Short**: Armazena inteiros de 16 bits.
    *   **PROS**: Mais eficiente em memória que `Int` para valores menores.
    *   **CONTRAS**: Faixa de valores limitada (-32768 a 32767).
    *   **USO**: Quando você precisa de um inteiro maior que `Byte` mas não tão grande quanto `Int`.
    *   **Exemplo**:
        ```kotlin
        val shortValue: Short = 20000
        ```

*   **Int**: Armazena inteiros de 32 bits.
    *   **PROS**: Tipo inteiro padrão e mais comum, bom equilíbrio entre faixa de valores e uso de memória.
    *   **CONTRAS**: Pode ser excessivo para valores muito pequenos, ou insuficiente para valores muito grandes.
    *   **USO**: A maioria dos casos de uso de inteiros, como contadores, índices de array.
    *   **Exemplo**:
        ```kotlin
        val intValue: Int = 1_000_000
        ```

*   **Long**: Armazena inteiros de 64 bits.
    *   **PROS**: Pode armazenar números inteiros muito grandes.
    *   **CONTRAS**: Ocupa mais memória que `Int`.
    *   **USO**: Para valores que excedem a capacidade de `Int`, como timestamps, IDs de banco de dados.
    *   **Exemplo**:
        ```kotlin
        val longValue: Long = 9_000_000_000L
        ```

*   **Float**: Armazena números de ponto flutuante de precisão simples (32 bits).
    *   **PROS**: Usa menos memória que `Double`.
    *   **CONTRAS**: Menor precisão, pode levar a erros de arredondamento em cálculos complexos.
    *   **USO**: Quando a precisão não é crítica e a economia de memória é importante, como em gráficos 2D.
    *   **Exemplo**:
        ```kotlin
        val floatValue: Float = 3.14f
        ```

*   **Double**: Armazena números de ponto flutuante de precisão dupla (64 bits).
    *   **PROS**: Maior precisão para cálculos matemáticos.
    *   **CONTRAS**: Usa mais memória que `Float`.
    *   **USO**: Cálculos científicos, financeiros ou onde a precisão é essencial.
    *   **Exemplo**:
        ```kotlin
        val doubleValue: Double = 3.141592653589793
        ```

## Tipos de Caracteres e Texto

*   **Char**: Representa um único caractere Unicode.
    *   **PROS**: Simples e eficiente para manipulação de caracteres individuais.
    *   **CONTRAS**: Não armazena strings.
    *   **USO**: Processamento de caracteres, validação de entrada.
    *   **Exemplo**:
        ```kotlin
        val letter: Char = 'A'
        ```

*   **String**: Sequência de caracteres.
    *   **PROS**: Manipulação poderosa de texto, suporte a templates e expressões.
    *   **CONTRAS**: Imutável, pode consumir muita memória em textos grandes.
    *   **USO**: Armazenamento e manipulação de textos, logs, mensagens.
    *   **Exemplo**:
        ```kotlin
        val message: String = "Olá, Kotlin!"
        ```

## Tipos Booleanos

*   **Boolean**: Representa valores lógicos `true` ou `false`.
    *   **PROS**: Simples, essencial para controle de fluxo.
    *   **CONTRAS**: Não armazena outros tipos de dados.
    *   **USO**: Condicionais, flags, validações.
    *   **Exemplo**:
        ```kotlin
        val isActive: Boolean = true
        ```

## Tipos Avançados

*   **Array**: Estrutura para armazenar múltiplos valores do mesmo tipo.
    *   **PROS**: Acesso rápido por índice.
    *   **CONTRAS**: Tamanho fixo após criação.
    *   **USO**: Coleções de dados homogêneos.
    *   **Exemplo**:
        ```kotlin
        val numbers: Array<Int> = arrayOf(1, 2, 3, 4)
        ```

*   **List, Set, Map**: Coleções imutáveis ou mutáveis.
    *   **PROS**: Estruturas flexíveis para manipulação de dados.
    *   **CONTRAS**: Overhead de abstração.
    *   **USO**: Listas ordenadas, conjuntos únicos, pares chave-valor.
    *   **Exemplo**:
        ```kotlin
        val list: List<String> = listOf("A", "B", "C")
        val set: Set<Int> = setOf(1, 2, 3)
        val map: Map<String, Int> = mapOf("um" to 1, "dois" to 2)
        ```

*   **Any**: Supertipo de todos os tipos não-nulos.
    *   **PROS**: Permite armazenar qualquer valor.
    *   **CONTRAS**: Perde-se a segurança de tipo.
    *   **USO**: APIs genéricas, manipulação dinâmica.
    *   **Exemplo**:
        ```kotlin
        val value: Any = "Texto ou número ou objeto"
        ```

*   **Unit**: Tipo de retorno de funções que não retornam valor útil (semelhante ao `void` em outras linguagens).
    *   **PROS**: Indica ausência de valor significativo.
    *   **CONTRAS**: Não pode ser usado para armazenar dados.
    *   **USO**: Funções utilitárias, callbacks.
    *   **Exemplo**:
        ```kotlin
        fun printMessage(msg: String): Unit {
            println(msg)
        }
        ```

*   **Nothing**: Representa ausência de valor, usado em funções que nunca retornam (ex: lançam exceção).
    *   **PROS**: Útil para controle de fluxo avançado.
    *   **CONTRAS**: Não pode ser instanciado.
    *   **USO**: Funções que sempre lançam exceção.
    *   **Exemplo**:
        ```kotlin
        fun fail(message: String): Nothing {
            throw IllegalArgumentException(message)
        }
        ```

Esses tipos cobrem desde usos básicos até cenários avançados, permitindo que você escolha o mais apropriado para cada situação em Kotlin.

## Coleções em Kotlin

Kotlin oferece uma API poderosa e flexível para trabalhar com coleções, que são estruturas de dados para armazenar múltiplos valores. As principais coleções são:

- **List**: Uma lista ordenada de elementos, que pode ser imutável (`List`) ou mutável (`MutableList`).
    ```kotlin
    val listaImutavel: List<Int> = listOf(1, 2, 3)
    val listaMutavel: MutableList<String> = mutableListOf("A", "B", "C")
    listaMutavel.add("D")
    ```

- **Set**: Um conjunto de elementos únicos, sem ordem garantida. Pode ser imutável (`Set`) ou mutável (`MutableSet`).
    ```kotlin
    val conjunto: Set<String> = setOf("maçã", "banana", "laranja")
    val conjuntoMutavel: MutableSet<Int> = mutableSetOf(1, 2, 3)
    conjuntoMutavel.add(4)
    ```

- **Map**: Uma coleção de pares chave-valor, também disponível nas versões imutável (`Map`) e mutável (`MutableMap`).
    ```kotlin
    val mapa: Map<String, Int> = mapOf("um" to 1, "dois" to 2)
    val mapaMutavel: MutableMap<String, String> = mutableMapOf()
    mapaMutavel["chave"] = "valor"
    ```

### Características das Coleções Kotlin

- **Imutabilidade**: Por padrão, as coleções são imutáveis, promovendo segurança e previsibilidade no código.
- **Funções de extensão**: Kotlin fornece várias funções utilitárias como `filter`, `map`, `forEach`, `find`, entre outras, para manipular coleções de forma funcional e concisa.
    ```kotlin
    val pares = listaImutavel.filter { it % 2 == 0 }
    val nomesMaiusculos = listaMutavel.map { it.uppercase() }
    ```
- **Interoperação com Java**: As coleções Kotlin são interoperáveis com as coleções Java, facilitando a integração em projetos existentes.

Essas coleções são fundamentais para manipulação de dados em Kotlin, permitindo operações eficientes e expressivas no dia a dia do desenvolvimento.
## Funções Lambda e Métodos das Coleções em Kotlin

Kotlin oferece diversas funções de extensão (métodos) para coleções, muitas delas aceitando lambdas como parâmetro. Essas funções tornam o código mais conciso e expressivo. Abaixo estão as principais funções, explicando o que fazem e quando são usadas:

### 1. `forEach`
Percorre todos os elementos da coleção, executando uma ação para cada um.
```kotlin
listaImutavel.forEach { println(it) }
```
**Uso:** Quando você quer realizar uma ação para cada elemento (ex: imprimir, atualizar UI).

---

### 2. `map`
Transforma cada elemento da coleção, retornando uma nova coleção com os resultados.
```kotlin
val dobrados = listaImutavel.map { it * 2 }
```
**Uso:** Quando você precisa converter ou transformar os elementos (ex: converter para maiúsculas, multiplicar valores).

---

### 3. `filter`
Retorna uma nova coleção apenas com os elementos que satisfazem a condição do lambda.
```kotlin
val pares = listaImutavel.filter { it % 2 == 0 }
```
**Uso:** Para selecionar elementos que atendem a um critério (ex: números pares, nomes que começam com "A").

---

### 4. `find` / `firstOrNull`
Retorna o primeiro elemento que satisfaz a condição, ou `null` se nenhum encontrar.
```kotlin
val primeiroPar = listaImutavel.find { it % 2 == 0 }
```
**Uso:** Quando você quer buscar um elemento específico.

---

### 5. `any` / `all` / `none`
Verificam condições sobre os elementos:
- `any`: Algum elemento satisfaz a condição?
- `all`: Todos satisfazem?
- `none`: Nenhum satisfaz?
```kotlin
val temNegativo = listaImutavel.any { it < 0 }
val todosPositivos = listaImutavel.all { it > 0 }
val nenhumZero = listaImutavel.none { it == 0 }
```
**Uso:** Para validações rápidas sobre a coleção.

---

### 6. `count`
Conta quantos elementos satisfazem a condição.
```kotlin
val quantidadePares = listaImutavel.count { it % 2 == 0 }
```
**Uso:** Quando precisa saber quantos elementos atendem a um critério.

---

### 7. `groupBy`
Agrupa elementos por uma chave definida no lambda, retornando um `Map`.
```kotlin
val agrupados = listaImutavel.groupBy { it % 2 == 0 }
```
**Uso:** Para categorizar elementos (ex: separar pares e ímpares).

---

### 8. `flatMap`
Transforma cada elemento em uma coleção e "achata" o resultado em uma única lista.
```kotlin
val palavras = listOf("a b", "c d")
val letras = palavras.flatMap { it.split(" ") }
```
**Uso:** Quando cada elemento pode gerar múltiplos resultados e você quer uma lista única.

---

### 9. `reduce` / `fold`
Acumulam valores da coleção em um único resultado.
- `reduce`: Usa o primeiro elemento como acumulador.
- `fold`: Permite definir um valor inicial.
```kotlin
val soma = listaImutavel.reduce { acc, i -> acc + i }
val somaComInicial = listaImutavel.fold(10) { acc, i -> acc + i }
```
**Uso:** Para somar, multiplicar, concatenar ou combinar todos os elementos.

---

Essas funções são amplamente usadas para manipulação funcional de coleções, tornando o código mais limpo, seguro e idiomático em Kotlin.
@