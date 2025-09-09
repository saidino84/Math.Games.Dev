const cnv =document.getElementById( "cnv")
const ctx =cnv.getContext( "2d")
const _debug =document.getElementById( 'res2')

const scoreText =document.getElementById( 'res')
const resetbtn =document.getElementById( 'r-btn')



let intervalID;
let ballspeed =1


let player_01 ={
    speed:50,
    score:0,
    color:"#ff7466",
    width:25,
    height:100,
    x:25,
    y:0,
    up_k:87,//w
    down_k:90,//z
}

let player_02 ={
    speed:50,
    score:0,
    color:"#ffd400",
    width:25,
    height:100,
    x:cnv.width -100,
    y:cnv.height-100,
    up_k:38,//8
    down_k:40
}

let ball ={
    color: '#07cc66',
    radius:30,
    y:cnv.height/2,
    x:cnv.width/2,
    speed:0,
    ball_velx:(Math.round(Math.random()) ==1)?1.5:-1.5,
    ball_vely:(Math.round(Math.random()==1)?1.5:-1.5)

}

let game ={
    move_ball:function(){},
    game_start:function(){
        this.creat_ball()
        this.next_tick()
    },
    reset_game:function(){},
    next_tick:function(){

        intervalID=setTimeout(() => {
            this.clear_board()
           this.move_ball()
           this.draw_ball()
           this.draw_paddles()
           this.check_collision()
           this.upadte_score()
           this.next_tick()
        }, 10);
    },
    clear_board:function(){
        ctx.fillStyle = "rgb(21, 129, 223)"
        ctx.fillRect(0,0,cnv.width,cnv.height)
        ctx.fill()
    },

    draw_paddles:function(){

        ctx.strokeStyle = `${player_01.color}`
        ctx.fillStyle = player_01.color
        ctx.fillRect(player_01.x,player_01.y,player_01.width,player_01.height)
        ctx.strokeRect(player_01.x,player_01.y,player_01.width,player_01.height)
        ctx.fill()

        ctx.strokeStyle = player_02.color
        ctx.fillStyle = player_02.color
        ctx.fillRect(player_02.x,player_02.y,player_02.width,player_02.height)
        ctx.strokeRect(player_02.x,player_02.y,player_02.width,player_02.height)
        ctx.fill()

    },
    creat_ball:function(){
        ball.velx=Math.round(Math.random())==1?1.8:-1.8
        ball.vely=Math.round(Math.random())==1?1.8:-1.9



        console.log( `ball_velx:${ball.velx}`)
    },
    move_ball:function(){
        ball.velx +=(ball.speed * ball.velx)
        ball.vely +=(ball.speed * ball.vely)

        ball.x += ball.velx
        ball.y += ball.vely

    },
    draw_ball:function(){
        ctx.fillStyle =ball.color
        ctx.beginPath()
        ctx.arc(ball.x,ball.y,ball.radius,0,2*Math.PI)
        ctx.fill()
        ctx.closePath()
//        res.innerText = `${ball.x} | ${ball.y}`

    },
    check_collision:function(){
        //check collision on bottom & top sides
        if(ball.y+ball.radius >=cnv.height){ ball.vely *= -1}
        if(ball.y-ball.radius < 0){ ball.vely *= -1}

        if(ball.x+ball.radius>= cnv.width){
            ball.velx *=-1
//            game.creat_ball()
            player_02.score -= 1
          }
        if(ball.x-ball.radius< 0){
            ball.velx *=-1;
//            game.creat_ball()
            player_01.score -=1
        }

        //collission with padles
        if(ball.x <= (player_01.x + player_01.width +ball.radius)){
            if(ball.y > player_01.y && ball.y < player_01.y+player_01.height){
                ball.velx *=-1
//                ballspeed += 1;
//                ball.speed +=1
                player_01.score +=1
            }
        }

//        if(ball.x >(player_02.x -player_02.width)){
//            if(ball.y > player_02.y && ball.y < player_02.y + player_02.height){
//                ball.velx *= -1
////                ball.speed += 1
////                ballspeed += 1
//                    player_02.score +=1
//            }

//        }


_debug.innerText= `B.x:${ball.x} b.y:${ball.y} \n P2.X:${player_02.x} p2.y:${player_02.y} P2.Y+HE":${player_02.x+player_02.height}"`



    },
    change_direction:function(keyEvent){
        const keycode =keyEvent.keyCode
        res.innerText= keycode
        console.log( `P1.Y${player_01.y}:cnv.h:${cnv.height} `)
        switch(keycode){
            case player_01.down_k:
                //move only if p1.y < cnv.h -p1.h
                if(player_01.y<cnv.height-player_01.height){
                player_01.y+=player_01.speed
                }
                break
            case player_01.up_k:
               if(player_01.y>0){
                   player_01.y -= player_01.speed

               }
                break
            case player_02.up_k:
                if(player_02.y>0){
                    player_02.y -= player_02.speed
                }
                break
            case player_02.down_k:
                if(player_02.y<cnv.height-player_02.height){
                    player_02.y+=player_02.speed
                    }
                break
          }

    },
    upadte_score:function(){

        let colorp1 =(player_01.score<1)?"red": "white" ;
        let colorp2 =(player_02.score<1)?"red": "white" ;

        res.innerHTML= `
                    <span style=  "color:${colorp1}">${player_01.score } </span> |
                    <span style=  "color:${colorp2}">${player_02.score } </span>
`
    }

}
window.addEventListener( 'keydown',game.change_direction);
resetbtn.addEventListener( 'click',game.reset_game)
game.game_start()

