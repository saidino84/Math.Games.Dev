/**@type  {HTMLCanvasElement} **/
var cnv = document.getElementById("cnv")

var res = document.getElementById("res")
var res2 =document.createElement('p')
var res3 =document.createElement('p')

document.body.append(res2)



 /**  @type {CanvasRenderingContext2D}  **/
 let ctx=cnv.getContext("2d")
 // cnv.style.background = "red"
class Box{
     x;
     y;
     size={width:40,height:100};
     velx;
     vely;
 }
let STATUS ={ IDLE:true, STARTED:false, OVER:false }
let moveDirection ={LEFT:false,RIGHT:false,UP:false,DOWN:true};

let BOX ={x:cnv.width/2,y:50,vely:1.5,velx:1.5,size:{width:65,height:100}};
let game = {
     jump:false,
     gravity:2.5,
     friction:0.8,
     falling:true,
//     direction:this._get_direction,
    box:BOX,
     _get_direction:function(){},
     draw: function(){
        ctx.clearRect(0,0,cnv.width,cnv.height)
        ctx.fillStyle = "rgb(211, 126, 255)"
        ctx.fillRect(this.box.x, this.box.y,this.box.size.width,this.box.size.height)
        ctx.fill()
     },
     _apply_gravity:function(){
         this.box.vely += this.gravity
         this.box.vely *=this.friction
         this.box.y += this.box.vely
     },
     action:function(){
         game.draw()
         this._apply_gravity()
         this.check_colision()
         this.check_movements()
     },

     check_movements:function(){
         let _box =this.box
        if(moveDirection.LEFT == true){
            this.box.velx += this.gravity
        }else if(moveDirection.RIGHT ==true){
            this.box.velx -= this.gravity
        }
            this.box.velx *= this.friction
            this.box.x +=this.box.velx
        if(moveDirection.UP==true){
            this.box.vely = -10
        }
     },

     check_colision:function(){
         let _box =this.box
        //botttom collided
         if(_box.y+_box.size.height >=cnv.height){
//             jump =true
                _box.vely =0
             //TODO (AMAKE IT BOUCE)
//             _box.vely *= -_box.vely *0.5

//             console.log(_box.vely)
             if(Math.abs(_box.vely) <-0.5){
                 _box.vely=0
             }
             _box.y =cnv.height - _box.size.height
         }

         // TODO right collision
         if(_box.x>=cnv.width + _box.size.width){
//             alert( 'out of box')
            _box.x = -_box.size.width
         }

     },
     set_movedirection:function(event){
         var _get_direction=moveDirection.DOWN
         var status =event.type== "keydown"?true:false
         console.log( `${event.type} -> ${event.keyCode} ${status}`);
         switch(event.keyCode){
             case 37:
                 moveDirection.RIGHT =status
                 _get_direction = 'LEFT'
                 break
             case 39:
                 moveDirection.LEFT=status
                 _get_direction = 'RIGHT'
                 break
             case 38:
                 moveDirection.UP =status
                 break
             case 40:
                 moveDirection.DOWN =status

         }
//         this.move()

     }

 };
let game_loop=function(){
        let player1=game.action()
//        let player2=game.action(BOX())

        window.requestAnimationFrame(game_loop)

 }
 window.requestAnimationFrame(game_loop)
 window.addEventListener( 'keydown',game.set_movedirection)
 window.addEventListener( 'keyup',game.set_movedirection)