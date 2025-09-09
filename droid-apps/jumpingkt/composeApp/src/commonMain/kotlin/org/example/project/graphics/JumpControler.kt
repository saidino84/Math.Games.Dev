package org.example.project.graphics

import androidx.lifecycle.ViewModel

class JumpControler: ViewModel(){
val DIRECTION = object {

}


}


enum class Direction {
    LEFT, RIGHT, UP, DOWN
}
class Box(
    val x: Float,
    val y: Float,
    val velx: Float,
    val vely: Float,
    val WIDTH: Int,
    val HEIGHT: Int,

)