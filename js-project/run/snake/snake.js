import {ctx, game_board } from "./utils.js"

export const snake ={
     SNAKE_SPEED:4,
     body:[
        {x:11,y:12},
        {x:11,y:13},

    ],
     draw:function(){
        console.log('drawed')
      this.body.forEach(element => {
        const snakeElement = document.createElement('div')
                  snakeElement.style.gridColumnStart = element.x,
                  snakeElement.style.gridRowStart =element.y
                  snakeElement.classList.add('snake')
                  game_board.appendChild(snakeElement)
});
     },
     update:function(){
         console.log('moving')
        for(let i = this.body.length -1; 1>0 ; i--){
            this.body[i-1] ={...this.body[i]}
        }
        // this.body[0].x += 1
        // this.body[0].y += 0



 }
}
