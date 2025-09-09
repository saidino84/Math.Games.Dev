/**@type  {HTMLCanvasElement} **/
var res = document.getElementById("res")
var cnv = document.getElementById("cnv")
var res2 =document.createElement('p')
var res3 =document.createElement('p')

document.body.append(res2)


/**  @type {CanvasRenderingContext2D}  **/
let ctx=cnv.getContext("2d")

var box={
    width:45,height:45,
    y:0,
    x:cnv.width/2,
    velx:0.0,
    vely:0.0,


}

var controller={
    left:false,
    right:false,
    up:false,
    jumping:true,
    _keylistener:function(event){

        var is_keydown = (event.type=="keydown")?true:false
        res2.innerHTML=`Move: ${is_keydown}, event type: ${event.type} ${event.keyCode}
             `
        switch(event.keyCode){
            case 38:
                controller.up = is_keydown
                break
            case 39:
                controller.right =is_keydown
                break
            case 37:
                controller.left = is_keydown
                break
        }



    },
    draw:function(){

        console.log(`box.y:${box.y}`)
        ctx.beginPath()
        ctx.fillStyle="rgb(21, 129, 223)"
        ctx.fillRect(0,0,cnv.width,cnv.height)
        ctx.fillStyle="red"
        ctx.fillRect(box.x,box.y,box.width,box.height)
        ctx.fill()
        ctx.closePath()


    },
}

var loop =function(){


    if(controller.right){
        box.velx += 2.1
    }
    if(controller.left){
        box.velx -= 2.1
    }
    res2.innerHTML=controller.up
    if(controller.up && controller.jumping){
        box.vely -= 8
    }

    box.vely += 2.5
    box.y += box.vely
    box.x += box.velx

    box.vely *= 0.8
    box.velx *= 0.8

    if(box.y + box.height > cnv.height){
        box.y =cnv.height - box.height
        box.vely =0
    }
    if(box.x> cnv.width){
        box.x = -box.width
    }else if(box.x< -box.width){
        box.x = cnv.width-box.width
    }

if(Math.ab)
    res.innerHTML =` ${box.vely}`
    

    controller.draw()

    window.requestAnimationFrame(loop)
}



window.requestAnimationFrame(loop)
// controller.draw()
window.addEventListener("keydown",controller._keylistener)
window.addEventListener("keyup",controller._keylistener)
