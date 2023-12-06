function traer(){
    //traemos valores del total de cada producto
var montoTotalPrimerProducto = localStorage.getItem('primerTotalGeneral')
var montoTotalSegundoProducto = localStorage.getItem('segundoTotalGeneral')
var montoTotalTercerProducto = localStorage.getItem('tercerTotalGeneral')
var montoTotalCuartoProducto = localStorage.getItem('cuartoTotalGeneral')
var montoTotalQuintoProducto = localStorage.getItem('quintoTotalGeneral')

//traemos valores de la cantidad de cada producto
var primerCantidadMostrar = localStorage.getItem('primerCantidad')
var segundaCantidadMostrar = localStorage.getItem('segundaCantidad')
var tercerCantidadMostrar = localStorage.getItem('tercerCantidad')
var cuartaCantidadMostrar = localStorage.getItem('cuartaCantidad')
var quintaCantidadMostrar = localStorage.getItem('quintaCantidad')

//primer producto - mostramos resultados
var primerTotalMostrar = document.getElementById("primerTotal")
var primerUnitarioMostrar = document.getElementById("primerUnitarioTotal")

//costo total
var primerProductoAchicar = Number(montoTotalPrimerProducto)
primerProductoAchicar = primerProductoAchicar.toFixed(4)
montoTotalPrimerProducto = primerProductoAchicar
primerTotalMostrar.innerHTML = montoTotalPrimerProducto

//costo unitario
var primerMontoUnitario = montoTotalPrimerProducto / primerCantidadMostrar
primerUnitarioMostrar.innerHTML= primerMontoUnitario

//segundo producto - mostramos resultados

var segundoTotalMostrar = document.getElementById("segundoTotal")
var segundoUnitarioMostrar = document.getElementById("segundoUnitarioTotal")

//costo total
var segundoProductoAchicar = Number(montoTotalSegundoProducto)
segundoProductoAchicar = segundoProductoAchicar.toFixed(4)
montoTotalSegundoProducto = segundoProductoAchicar
segundoTotalMostrar.innerHTML = montoTotalSegundoProducto

//costo unitario
var segundoMontoUnitario = montoTotalSegundoProducto / segundaCantidadMostrar
segundoUnitarioMostrar.innerHTML= segundoMontoUnitario

//tercer producto - mostramos resultados

var tercerTotalMostrar = document.getElementById("tercerTotal")
var tercerUnitarioMostrar = document.getElementById("tercerUnitarioTotal")

//costo total
var tercerProductoAchicar = Number(montoTotalTercerProducto)
tercerProductoAchicar = tercerProductoAchicar.toFixed(4)
montoTotalTercerProducto = tercerProductoAchicar
tercerTotalMostrar.innerHTML = montoTotalTercerProducto

//costo unitario
var tercerMontoUnitario = montoTotalTercerProducto / tercerCantidadMostrar
tercerUnitarioMostrar.innerHTML= tercerMontoUnitario

//cuarto producto - mostramos resultados

var cuartoTotalMostrar = document.getElementById("cuartoTotal")
var cuartoUnitarioMostrar = document.getElementById("cuartoUnitarioTotal")





//costo total 
var cuartoProductoAchicar = Number(montoTotalCuartoProducto)
cuartoProductoAchicar = cuartoProductoAchicar.toFixed(4)
montoTotalCuartoProducto = cuartoProductoAchicar
cuartoTotalMostrar.innerHTML = montoTotalCuartoProducto

//costo unitario
var cuartoMontoUnitario = montoTotalCuartoProducto / cuartaCantidadMostrar
cuartoUnitarioMostrar.innerHTML=  cuartoMontoUnitario

//quinto producto - mostramos resultados

var quintoTotalMostrar = document.getElementById("quintoTotal")
var quintoUnitarioMostrar = document.getElementById("quintoUnitarioTotal")

//costo total
var quintoProductoAchicar = Number(montoTotalQuintoProducto)
quintoProductoAchicar = quintoProductoAchicar.toFixed(4)
montoTotalQuintoProducto = quintoProductoAchicar
quintoTotalMostrar.innerHTML = montoTotalQuintoProducto

//costo unitario 
var quintoMontoUnitario =  montoTotalQuintoProducto / quintaCantidadMostrar
quintoUnitarioMostrar.innerHTML= quintoMontoUnitario

//calculamos el costo unitario general, el cual se obtiene del total de la importacion
var unitarioTotalMostrar = document.getElementById("costoUnitarioGeneral")

montoTotalPrimerProducto = Number(montoTotalPrimerProducto)
montoTotalSegundoProducto = Number(montoTotalSegundoProducto)
montoTotalTercerProducto = Number(montoTotalTercerProducto)
montoTotalCuartoProducto = Number(montoTotalCuartoProducto)
montoTotalQuintoProducto = Number(montoTotalQuintoProducto)

var total = montoTotalPrimerProducto + montoTotalSegundoProducto + montoTotalTercerProducto
            + montoTotalCuartoProducto + montoTotalQuintoProducto

//obtenemos la cantidad de productos
    var productos = 0  

            if (montoTotalPrimerProducto != 0){
                productos = productos + 1
            }
            if (montoTotalSegundoProducto != 0 ){
                productos = productos + 1
            }
            if(montoTotalTercerProducto != 0){
                productos = productos+1
            }
            if(montoTotalCuartoProducto != 0){
                productos = productos+1
            }
            if( montoTotalQuintoProducto != 0){
                productos = productos+1
            }
//mostramos costo general unitario
var totalGeneralUnitario = total / productos
unitarioTotalMostrar.innerHTML=totalGeneralUnitario

//mostramos costo total 
var costoTotalMostrar = document.getElementById("costoGeneral")
costoTotalMostrar.innerHTML= total
}
traer()

function volver(){
    localStorage.clear()
    window.location="calculadora.html"
}