let x, y;

class Carro {
  constructor(alto,ancho,color,name){
    this.alto = alto;
    this.ancho = ancho;
    this.color = color;
    this.name = name;
  } 
}



function setup() {

  createCanvas(1000, 500);
  y = height - height/2;
  x = 0;
  let carro = new Carro (10,20,(red),"carro");
  
  console.log("carro ancho is: " + carro.ancho);
  console.log("carro alto is: " + carro.alto);
  console.log("Nombre de carro es: " + carro.name);
}

function draw() {
  background(79,100,113);  
  display();
  move();
  
  let carro = new Carro (10,20,(red),"carro");
  
}

function move(){
  y = y + random(-1, 1);
  
  if (x > width) {
    // Reset 
    x = 0;
    y = height - height/2;
  } else {
    x = x + 4;
  }
}

function display(){
  stroke(50);
  fill(88,47,147);
  rect(x, y, 100, 50);
  fill(0);
  rect(x,y, 50, 50);
}
