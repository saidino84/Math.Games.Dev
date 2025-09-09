import ctx, { cnv }  from './jump.js'
console.log('start')

let circ ={
    x:cnv.width/2,
    y:cnv.height/2,
    radius:30,

    draw:function(){
        ctx.fillStyle="red"
        // O método correto para desenhar um círculo com fillStyle é começar um path.
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fill()
    }
}

circ.draw(); // Exemplo de como chamar a função de desenho
console.log("Load")