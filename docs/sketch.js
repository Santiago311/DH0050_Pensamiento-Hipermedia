



function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  angleMode(DEGREES);

  //Variables para el punto central de la rueda de colores
  let x = width / 2;
  let y = height / 2 + 100;
  colorWheel(x, y, 100); //diapositiva 11

  noStroke();
  pieChartPop(200, 100); //diapositiva 12
}

//**** diapositiva 12 demostración trigonométrica de gráfico circular
function pieChartPop(x, y) {
  let [total, child, young, adult, senior, elder] = [577, 103, 69,
    122, 170, 113
  ];
  let startValue = 0;
  let range = 0;

  //Rebanada de niño
  range = child / total;
  drawSlice("blue", x, y, 200, startValue, startValue + range);
  startValue += range;
  //Rebanada de joven
  range = young / total;
  drawSlice("orange", x, y, 200, startValue, startValue + range);
  startValue += range;
  //Rebanada de adulto
  range = adult / total;
  drawSlice("green", x, y, 200, startValue, startValue + range);
  startValue += range;
  //Rebanada de adulto mayor
  range = senior / total;
  drawSlice("tan", x, y, 200, startValue, startValue + range);
  startValue += range;
  //Rebanada de anciano
  range = elder / total;
  drawSlice("pink", x, y, 200, startValue, startValue + range);
  startValue += range;

}

/**
 * drawSlice - dibuja un arco basado en los porcentajes de ángulos. Diapositiva 13
 * Ajusta los ángulos para que el 0% empiece en la parte superior (de hecho, -90)
 * @param {color} fColor - color de relleno
 * @param {number} x - coordenada x del centro
 * @param {number} y - coordenada y del centro
 * @param {number} d - diámetro
 * @param {float} percent1 - porcentaje inicial
 * @param {float} percent2 - porcentaje final
 */
function drawSlice(fColor, x, y, d, percent1, percent2) {
  fill(fColor);
  arc(x, y, d, d, -90 + percent1 * 360, -90 + percent2 * 360);
}

//**** diapositiva 11 demostración de trigonometría 
function colorWheel(x, y, rad) {
  strokeWeight(10);
  strokeCap(SQUARE);

  //Itera 360 grados de lineas, 10 grados por turno
  for (let a = 0; a < 360; a += 10) {
    stroke(a, 150, 200); //hue basado en un
    //radio es 100, ángulo es un grado
    line(x, y, x + rad * cos(a),
      y + rad * sin(a));
  }
}
