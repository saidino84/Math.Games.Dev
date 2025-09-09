var cnv,ctx,controller,ball
/**@Type {HTMLCanvasElement} */
cnv = document.getElementById("cnv")
cnv.height=400
cnv.width=800
ctx=cnv.getContext("2d")
var up,left,right
up =document.getElementById("up")
left =document.getElementById("left")
right =document.getElementById("right")
var res =document.getElementById("res")
ball ={
 width:30,
 height:30,
 jumping:true,
 x:cnv/2-this.width,
 y:cnv.height-this.height,
 vel_x:0.0,
 vel_y:0.0,
}

controller ={
  left:false,
  right:false,
  up:false,
  keylistener:function(keyEvent){
    console.log(keyEvent.keyCode)
    var ks=document.getElementsByClassName("btn")
console.log(ks.length)
for(let i=0;i<ks.length;i++){
  ks[i].style="color:salmon;backgound: black"
}
    var key_state = (keyEvent.type =="keydown")?true:false

    switch(keyEvent.keyCode){
      case 38:
        console.log("up")
        this.up=key_state
        ks.up.style="backgound:white;color:black;"
        // up.style="color:black;backgound: salmon";
        break
      case 39:
        this.right =key_state
        ks.right.style="color:black;backgound:white"

        break
      case 37:
        ks.left.style="color:black;backgound:white"

        this.left=key_state
        break
      
    }
  },
 draw:function(){
  ctx.fillStyle="black"
  ctx.beginPath()
  ctx.fillRect(0,0,cnv.width,cnv.height)
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.fillStyle='Red'
  ctx.fillRect(ball.x,ball.y, ball.width, ball.height)
  ctx.fill()
 },
  jump:function(){
    ball.vel_y = 0
    ball.vel_x=0
    if(ball.jumping && controller.left){
      ball.vel_x *=0.5

    }


    ball.x += ball.vel_x
    ball.y += ball.vel_y

    controller.draw()
  
 }

}

loop =function(){

  controller.jump()

  ball.draw()
  Window,requestAnimationFrame(loop)
}


requestAnimationFrame(loop)


window.addEventListener("keydown",controller.keylistener)
window.addEventListener('keyup',controller.keylistener)