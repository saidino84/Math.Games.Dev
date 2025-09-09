package org.example.project.graphics.utils

import androidx.compose.ui.input.pointer.AwaitPointerEventScope
import androidx.compose.ui.input.pointer.positionChangeIgnoreConsumed
import org.example.project.graphics.ninja.GameStatus

suspend fun AwaitPointerEventScope.detectMoveGesture(
    gameStatus: GameStatus,
    onLeft:()-> Unit,
    onRight:()-> Unit,
    onFingerLifted:()-> Unit
){
    while (gameStatus == GameStatus.Started){
        val downEvent =awaitPointerEvent()
        val initialDown =downEvent.changes.firstOrNull{
            it.pressed
        }
        if (initialDown ==null) continue
        var primaryPointerId =initialDown.id
        var previousPosition =initialDown.position
        while (true) {
            val event = awaitPointerEvent()
            val change = event.changes.firstOrNull { it.id == primaryPointerId }

            //if the finger is lifteed it menas the user stoped touching the screen
            if (change == null || !change.pressed){
                onFingerLifted()
                break
            }
            val currentPosition = change.position
            val deltaX = currentPosition.x - previousPosition.x
            if(deltaX < 0){
                onLeft()
            }else if(deltaX >0){onRight()        }
            previousPosition = currentPosition
            change.consume()


    }
}}