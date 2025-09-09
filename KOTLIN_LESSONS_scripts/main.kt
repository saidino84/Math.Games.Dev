

import kotlin.collections.mutableListOf
data class Son(val name:String,val age:Int,val mother:String)
fun main(){
    println("Hello, World!")

    val data=mutableListOf(1,3,)

    data.any{it<0}
    data.any{
        it>2
    }.also { println(it) }
val name:MutableList<String> =mutableListOf("Ancha","Claudia","Jonas")
val age:MutableList<Int> =mutableListOf(9,7,3)
val mothers:MutableList<String> =mutableListOf("Abide","Saia","Esperanca")

var sons:MutableList<Son> = mutableListOf(Son(name=name[1],age=age[1],mother=mothers[1]))

// sons.also{it->
//     println(it)
// }
var age_:Int?=null;

age_?.let{
    println("[1] already assigned value")
}?:run{
    age_=3
    println("[2] Age was null now ressignin it {age_}")
}}


