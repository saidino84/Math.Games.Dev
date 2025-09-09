
/**@type {HTMLCanvasElement} */
 const cnv = document.getElementById("canvas");
        var graus=0


const input =document.getElementById('slider')
const res =document.getElementById("label")
 let loop;

/**@type {CanvasRenderingContext2D} */
const ctx=cnv.getContext("2d")

ctx.canvas.height=600
ctx.canvas.width=600

console.log("Hi")
 const rectangle ={
    height:32,
    jumping:true,
    width:32,
    x:144,
    x_velocity:0.00,
    y_velocity:0.00
}

const controller={
    left:false,right:false,up:false,
    keyListener:function(event){
        var key_state=(event.type=="keydown")?true:false;
        switch(event.keyCode){
            case 37:
                controller.left=key_state;
                break
            case 38:
                controller.up=key_state;
                break
                case 39:
                    controller.right= key_state
                    break
                    
                }
            }
        }
        
 let circ ={
    x:cnv.width/2,
    y:cnv.height/2,
    radius:30,

    draw_circle:function(){
        ctx.fillStyle="red"
        // O método correto para desenhar um círculo com fillStyle é começar um path.
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fill()
    },
    draw_coordinates:function(_graus){
        ctx.clearRect(0,0,cnv.width,cnv.height)
        var gaby = cnv.height/5
        var gabx = cnv.width/5
        
        const coord_y_bottom = cnv.height/4

        ctx.fillStyle="black"
        ctx.font="20px Arial"
        ctx.fillText(`Y: ${gaby}`, gabx, gaby);
        ctx.fillText(`X: ${gabx}`, gabx, gaby);
        
        ctx.beginPath();
        ctx.strokeStyle="red"
        ctx.lineWidth=5

        ctx.moveTo(gabx, gaby);
        ctx.lineTo(gabx, cnv.height-gaby+30);
        ctx.stroke()
        ctx.closePath()
        

        ctx.strokeStyle='white'
        ctx.beginPath()
        ctx.moveTo(gabx-30,cnv.height-gaby)
        ctx.lineTo(cnv.width-gabx,cnv.height-gaby)
        ctx.lineWidth=5
        ctx.closePath();
        ctx.stroke();


        const dist=200

        let p1={x:gabx,y:cnv.height-gaby}
        var p2={x:p1.x+dist,y:p1.y-dist}
        //Animated line
        ctx.strokeStyle="blue"
        ctx.beginPath()
        ctx.arc(p1.x,p1.y,5,0,Math.PI*2,true)
        // ctx.arc(p2.x,p2.y,5,0,Math.PI*2,true)

        // ctx.arc(p3.x,p3.y,5,0,Math.PI*2,true)
        ctx.stroke()
        

        // how to rotate the green line
        // radianos: radianos = graus * Math.PI / 180.
        // let  angle_rad =-98

        let angle_radianos = _graus * Math.PI / 180;
        let x_rot=p1.x+Math.cos(angle_radianos)*dist
        let y_rot=p1.y-Math.sin(angle_radianos)*dist

        ctx.closePath()
        ctx.beginPath()
        ctx.strokeStyle="blue"
        ctx.moveTo(p1.x,p1.y)
        ctx.lineTo(x_rot,y_rot)
        ctx.stroke()
        ctx.closePath()


        ctx.beginPath()
        ctx.strokeStyle="red"
        ctx.shadowColor="black"
        ctx.shadowBlur=10
        ctx.shadowOffsetX=-5
        ctx.shadowOffsetY=5
        ctx.lineWidth=4
        ctx.arc(p1.x,p1.y,30,0,-angle_radianos,true)
        // ctx.fill()
        ctx.stroke() 
        
        ctx.beginPath()
        ctx.fillStyletyle="fcfcfccf"
        ctx.lineWidth=1
        // ctx.arc(p1.x,p1.y,30,0,-angle_radianos,true)
        // ctx.fill()
        ctx.fill() // ctx.closePath()


        
},
chage_angle:function(e){
   var label=document.getElementById('label')
        graus=e
        label.innerHTML=graus

}
}

circ.draw_circle();
circ.draw_coordinates(); // Exemplo de como chamar a função de desenho

input.addEventListener('input',function (e){
    console.log('Start')
    var value =e.target.value
    graus=Number(value)
    // console.log(value)
    circ.chage_angle(graus)
    circ.draw_coordinates(graus)
})
// circ.chage_angle()
console.log(input)
input.style.display='hiden'

//  document.addEventListener("keydown",controller.keyListener)
//  document.addEventListener("keyup",controller.keyListener)



