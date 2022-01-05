var colorcito = "green";
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var dibujar;

dibujarLinea(colorcito, 1,1,1,499, papel);
dibujarLinea(colorcito, 1,499,499,499, papel);
dibujarLinea(colorcito, 2499,1,1,1, papel);
dibujarLinea(colorcito, 499,499,499,1, papel);

document.addEventListener("mousedown", dibujarMouse_down);
document.addEventListener("mousemove", dibujarMouse_move);
document.addEventListener("mouseup", dibujarMouse_up);

function dibujarMouse_down(evento)
{
  ClientX = evento.layerX;
  ClientY = evento.layerY;
  dibujar = true;
}
function dibujarMouse_move(evento)
{
  if (dibujar)
  {
    var ScreenX = evento.layerX;
    var ScreenY = evento.layerY;
    dibujarLinea("red", ScreenX, ScreenY, ClientX, ClientY, papel);
    ClientX = ScreenX + 0;
    ClientY = ScreenY + 0;
    dibujar = true;
  }
}

function dibujarMouse_up()
{
  dibujar= false;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
