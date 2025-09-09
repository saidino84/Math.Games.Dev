package org.example.project.graphics.ninja

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.DrawStyle
import androidx.compose.ui.graphics.drawscope.Fill
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.text.drawText
import jumpingkt.composeapp.generated.resources.Res
import jumpingkt.composeapp.generated.resources.alien_planet_game_background_free_vector
import jumpingkt.composeapp.generated.resources.allDrawableResources
import org.example.project.graphics.utils.detectMoveGesture
import org.jetbrains.compose.resources.painterResource


@Composable
fun NinjaGameScreen(){
val game = remember { Game() }
    val moveDirection by remember { mutableStateOf(MoveDirection.NONE) }
    var canvass_size by mutableStateOf(Pair<Float, Float>(0f,0f))

    Box(modifier = Modifier.fillMaxSize()
        .pointerInput(Unit) {
            awaitPointerEventScope {
                detectMoveGesture(
                    gameStatus = game.status,
                    onLeft = {},
                    onRight = {},
                    onFingerLifted = {},
                )

            }
        }
    ){

        Image(
            modifier = Modifier.fillMaxSize(),
            painter = painterResource(Res.drawable.alien_planet_game_background_free_vector),contentDescription = null,
            contentScale = ContentScale.FillBounds
            )

        Canvas(modifier = Modifier.fillMaxSize()
            .onGloballyPositioned { size ->
                canvass_size = Pair(
                    size.size.width.toFloat(), size.size.height.toFloat()
                )
            }){

            drawCircle(
                color = Color(0xFF4CCAF50),
                radius = 25f,
                center=Offset(120f,250f),
                style = Fill
            )
        }
    }
}