package org.example.project.graphics.ninja

import androidx.lifecycle.ViewModel

enum class GameStatus{
    Idle,
    Started,
    Over
}
enum class  MoveDirection{
    LEFT,RIGHT,NONE
}
data class Game(
    val status: GameStatus = GameStatus.Idle,
    val score :Int =0,
    val settings:GameSettings=GameSettings()
)
data class GameSettings(
    val ninjaSpeed: Float =15f,
    val weaponSpeed:Float =20f,
    val targetSpeed: Float =30f
)
class GameController: ViewModel(){

}