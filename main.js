const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

canvas.width = innerWidth;
canvas.height = innerHeight;

class Hero {
    constructor(x, y, radius, color){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}

class Projectile {
    constructor(x, y, radius, color, velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }

    update(){
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

const x = canvas.width / 2
const y = canvas.height / 2

const hero = new Hero(x, y, 30, 'blue')

const projectiles = []


function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    hero.draw()
    projectiles.forEach(projectile => {
        projectile.update()
    })
}

addEventListener('click', (e)=>{
    const angle = Math.atan2(e.clientY - hero.x, e.clientX - hero.y)
    const velocity = {x: Math.cos(angle), y: Math.sin(angle)}
    projectiles.push(new Projectile(hero.x, hero.y, 5, 'red', velocity))
})

animate()