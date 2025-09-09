/**@type {HTMLCanvasElement} */
const cnv =document.getElementById("cnv")
cnv.height=180,
cnv.width=320
const _res = document.getElementById("res")
/**  @type {CanvasRenderingContext2D}  **/
const ctx =cnv.getContext("2d")

var height = 180
var width= 320
var controller,rectangle,loop

ctx.fillStyle="red"
var res = ""
// ctx.fillText(`Height:${height}   W:${width}`,width/2,height/2)
rectangle ={
    height:32,
    width:32,
    jumping:true,
    x:144, //center of the canvas
    x_velocity:0,
    y:0,
    y_velocity:0
}


controller={
    left:false,
    right:false,
    up:false,
    keyListener:function(keyEnvent){
        // /** @type {KeyboardEvent} */
        // var kenvent=keyEnvent

        //check if the keybotton has clicked 
        var key_state =(keyEnvent.type =='keydown')?true:false;
        // console.log(keyEnvent.keyCode)
        switch(keyEnvent.keyCode){
            case 37:
                controller.left = key_state
                // res="left"
                break
            case 39:
                controller.right = key_state
                // res= "right"
                break
            case 38:
                controller.up = key_state
                // alert(this.up)
                // res= "up"
                break
            case 32:
                //spacebarrs
                // alert(this.left)
                res="space"
                break
            
            // default:
            //     res="not tricked"
            //     break
                
        }
    }
}



loop =function(){
    if(controller.up && rectangle.jumping == false){
        rectangle.y_velocity  -= 20
        rectangle.jumping = true
    }
    if(controller.left){ //para atras
        // controller.right=false
        rectangle.x_velocity -= 0.5
    }
    if(controller.right){
        controller.left=false
        rectangle.x_velocity += 0.5
        
        
    }

    

    rectangle.y_velocity += 1.5  //gravity
    rectangle.x += rectangle.x_velocity
    rectangle.y += rectangle.y_velocity


    //(sem friction a velocidade fica muito rapido e sem sentido  ja que nao ha a tracao de ar)
    rectangle.x_velocity *= 0.9 //friction
    rectangle.y_velocity *= 0.9 //friction

    if(rectangle.y > 180 - 16 - 32){
        rectangle.jumping =false
        rectangle.y= 180 - 16  -32 //on the wall (the rectangle y should be set the ground coord)
        rectangle.y_velocity = 0 //i hit the ground then my velocity should be zero !
    }

    

    if(rectangle.x < -32){
        rectangle.x = 320
    }
    else if(rectangle.x > 320){
        rectangle.x = -32
    }


    ctx.fillStyle ="#202020"
    ctx.fillRect(0,0,cnv.width,cnv.height)

    ctx.fillStyle = "#ff0000"
    ctx.beginPath()
    ctx.rect(rectangle.x,rectangle.y,rectangle.width,rectangle.height)
    ctx.fill()


    res=`Vx: ${rectangle.x_velocity} \n Vy: ${rectangle.y_velocity}\n  Left:${controller.left}\n  Right:${controller.right}\n Up:${controller.up}`
    _res.innerHTML =res
    window.requestAnimationFrame(loop)
}

let code = controller.keyListener
document.addEventListener('keydown',controller.keyListener)
document.addEventListener('keyup',controller.keyListener)

window.requestAnimationFrame(loop)
