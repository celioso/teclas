var teclas = {
UP: 38,
DOWN: 40,
LEFT: 37,
RIGHT: 39
};
console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);   //keyup se utiliza cuanto no quiero que el envento suceda cuando la precione si no cuando se suelte la tecla y keydown e spara cuando se preciona la tecla
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red",x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3; //esta liena se usa para el grosor de la linea cada numero son los pixel
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
//if(evento.keyCode == teclas.UP)
//{
  //console.log("vamos pa arriba");
//}
var colorcito = "green";
var movimiento = 1;
 switch(evento.keyCode)
 {
   case teclas.UP:
    dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
    y = y - movimiento;
   break;

   case teclas.DOWN:
   dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
   y = y + movimiento;
   break;

   case teclas.LEFT:
   dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
   x = x - movimiento;
   break;

   case teclas.RIGHT:
   dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
   x = x + movimiento;
   break;

   default:
   console.log("Son las flechas");
   break;
 }
  //console.log(evento.keyCode);
}
