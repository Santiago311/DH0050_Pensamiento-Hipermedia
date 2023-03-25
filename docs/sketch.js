let miCarro1;
let miCarro2;

let colisiones = 0;

function setup() {
  createCanvas(750, 500);
  miCarro1 = new Carro(0, 350, 100, 50, 1);
  miCarro2 = new Carro(width -200, 340, 100, 50, -1);
}

function draw() {
  background(79,100,113);  
  miCarro1.display("purple");
  miCarro2.display("black");
  miCarro1.detectCollision(miCarro2);
  textSize(25);
  fill(0);
  text("Colisiones: " + colisiones, 10, 490);

  
}

function keyPressed() {
  if (keyCode === 38) {
    miCarro2.saltar();
  }
}


class Carro {
  constructor(x, y, width, height, direction) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.direction = direction;
    this.isJumping = false;
    this.jumpForce = 12;
    this.gravity =  0.3;
    this.velocity = 80;
    this.xSpeed = 2;
    this.colisionDetectada = false;
  }

  display(color) {
    fill(color);
    rect(this.x, this.y, this.width, this.height);
    
    this.y = this.y + random(-0.60, 0.60);

    if (this.isJumping) {
      this.velocity += this.gravity;
      this.y += this.velocity;
      if (this.y >= height - this.height) {
        this.isJumping = false;
        this.y = height - this.height;
      }
    } else {
      this.x += this.direction * this.xSpeed;
      if (this.x + this.width > width || this.x < -10) {
        this.direction *= -1.1;
        this.y = 5;
      }
    }
        // Actualizamos la posición horizontal del carro en cada iteración
    this.x += this.direction * this.xSpeed;
    if (this.x + this.width > width || this.x < -10) {
      this.direction *= -1.1;
      this.y = height - 150;
    }
  }

  saltar() {
    if (!this.isJumping) {
      this.velocity = -this.jumpForce;
      this.isJumping = true;
    }
  }
  
  detectCollision(otherCar) {
    let left = this.x;
    let right = this.x + this.width;
    let top = this.y;
    let bottom = this.y + this.height;

    let otherLeft = otherCar.x;
    let otherRight = otherCar.x + otherCar.width;
    let otherTop = otherCar.y;
    let otherBottom = otherCar.y +  otherCar.height;

    if (left < otherRight && right > otherLeft && top < otherBottom && bottom > otherTop) {
      if (!this.colisionDetectada) { // verifica si la colisión ya ha sido detectada
        colisiones++; // incrementa el contador
        this.colisionDetectada = true; // establece que la colisión ya ha sido detectada
      }
      return true;
    } else {
      this.colisionDetectada = false; // establece que la colisión ya no ha sido detectada
      return false;
    }
  }
}
