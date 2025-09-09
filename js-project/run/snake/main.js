
import {snake} from "./snake.js"


let lastRenderTime = 0

console.log('main')

function main(currentTime){
    requestAnimationFrame(main)
    const secondsSinceLasRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLasRender < 1 / snake.SNAKE_SPEED) return
    lastRenderTime = currentTime
    draw()
    update()
    console.log('drawing')
}

function update(){
    snake.update()
}

function draw(){
    console.log('draw')
    snake.draw()

}
requestAnimationFrame(main)