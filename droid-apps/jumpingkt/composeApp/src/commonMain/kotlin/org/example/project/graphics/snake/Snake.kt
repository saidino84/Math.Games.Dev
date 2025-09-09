package org.example.project.graphics.snake

import androidx.compose.runtime.mutableStateOf

data class Snake(val x: Int, val y: Int){
    init {
        val x = mutableStateOf(x)
        val y =mutableStateOf(y)
    }
}
