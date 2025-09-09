/**@type  {HTMLCanvasElement} **/
var cnv = document.getElementById("cnv")

var res = document.getElementById("res")
var res2 =document.createElement('p')
var res3 =document.createElement('p')

document.body.append(res2)

let prevTime =0
animate()
function animate (){
    Window.requestAnimationFrame(animate)

    ctx.clearRect(0,0,cnv.width,cnv.height)

    let deltatime  = (performance.now()- prevTime) /1000
    let fps =1/deltatime

    prevTime =performance.now()
    console.log(fps)

}