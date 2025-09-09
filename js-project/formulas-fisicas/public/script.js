const cnv = document.getElementById('cnv');
const ctx = cnv.getContext('2d');


let box = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    color: 'red',
    velX: 2,
    velY: 2
};  

let gravity_animation ={

    get_velocity: function(vel, acceleration, time){
        // apply the formula: v = v0 + at
        return vel + (acceleration * time);
    },
    get_position: function(pos, vel, time, acceleration){
        // apply the formula: s = s0 + vt + 1/2at^2
        return pos + (vel * time) + (0.5 * acceleration * (time * time));
    }
};

// this code pushed inside an object
const game ={
    box: box,
    gravity: 0.5,
    time: 1,
    gravity_animation: gravity_animation,
    update: function(){
        // update box velocity
        this.box.velY = this.gravity_animation.get_velocity(this.box.velY, this.gravity, this.time);
        // update box position
        this.box.y = this.gravity_animation.get_position(this.box.y, this.box.velY, this.time, this.gravity);
    },
    draw: function(){
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        ctx.fillStyle = this.box.color;
        ctx.fillRect(this.box.x, this.box.y, this.box.width, this.box.height);
    },
    loop: function(){
        this.update();
        this.draw();
        this.checkCollision();
        requestAnimationFrame(this.loop.bind(this));
    },
    checkCollision: function(){
        if(this.box.y + this.box.height > cnv.height){
            this.box.y = cnv.height - this.box.height;
            this.box.velY *= -0.7; // reverse velocity and apply damping
        }
    },
    reset: function(){
        this.box.x = 50;
        this.box.y = 50;
        this.box.velY = 2;
    },
    start: function(){
        this.loop();
    }           

}
game.start();