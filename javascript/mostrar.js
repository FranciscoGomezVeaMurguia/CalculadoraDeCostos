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

//traemos valores del nombre de cada producto
var primerPorductoMostrar = localStorage.getItem('primerProducto')
var segundoProductoMostrar = localStorage.getItem('segundoProducto')
var tercerProductoMostrar = localStorage.getItem('tercerProducto')
var cuartoProductoMostrar = localStorage.getItem('cuartoProducto')
var quintoProductoMostrar = localStorage.getItem('quintoProducto')



//primer producto - mostramos resultados
var primerTotalMostrar = document.getElementById("primerTotal")
var primerUnitarioMostrar = document.getElementById("primerUnitarioTotal")

//comprobamos si se agrego este producto
if(montoTotalPrimerProducto != 0){
var primerMostrar = document.getElementById("primerProductoMostrar")
primerMostrar.innerHTML = primerPorductoMostrar
}

//costo total
var primerProductoAchicar = Number(montoTotalPrimerProducto)
primerProductoAchicar = primerProductoAchicar.toFixed(4)
montoTotalPrimerProducto = primerProductoAchicar
primerTotalMostrar.innerHTML = montoTotalPrimerProducto

//costo unitario
var primerMontoUnitario = montoTotalPrimerProducto / primerCantidadMostrar
localStorage.setItem('primerMontoUnitario', primerMontoUnitario)
primerUnitarioMostrar.innerHTML= primerMontoUnitario

//segundo producto - mostramos resultados

var segundoTotalMostrar = document.getElementById("segundoTotal")
var segundoUnitarioMostrar = document.getElementById("segundoUnitarioTotal")

//comprobamos si se agrego este producto
if(montoTotalSegundoProducto != 0){
    var segundoMostrar = document.getElementById("segundoProductoMostrar")
    segundoMostrar.innerHTML = segundoProductoMostrar
    }

//costo total
var segundoProductoAchicar = Number(montoTotalSegundoProducto)
segundoProductoAchicar = segundoProductoAchicar.toFixed(4)
montoTotalSegundoProducto = segundoProductoAchicar
segundoTotalMostrar.innerHTML = montoTotalSegundoProducto


//costo unitario
if(montoTotalSegundoProducto != 0){
var segundoMontoUnitario = montoTotalSegundoProducto / segundaCantidadMostrar
localStorage.setItem('segundoMontoUnitario', segundoMontoUnitario)
segundoUnitarioMostrar.innerHTML= segundoMontoUnitario
}

//tercer producto - mostramos resultados

var tercerTotalMostrar = document.getElementById("tercerTotal")
var tercerUnitarioMostrar = document.getElementById("tercerUnitarioTotal")

//comprobamos si se agrego este producto
if(montoTotalTercerProducto != 0){
var tercerMostrar = document.getElementById("tercerProductoMostrar")
tercerMostrar.innerHTML = tercerProductoMostrar
}

//costo total
var tercerProductoAchicar = Number(montoTotalTercerProducto)
tercerProductoAchicar = tercerProductoAchicar.toFixed(4)
montoTotalTercerProducto = tercerProductoAchicar
tercerTotalMostrar.innerHTML = montoTotalTercerProducto

//costo unitario
if(montoTotalTercerProducto != 0){
var tercerMontoUnitario = montoTotalTercerProducto / tercerCantidadMostrar
localStorage.setItem('tercerMontoUnitario', tercerMontoUnitario)
tercerUnitarioMostrar.innerHTML= tercerMontoUnitario
}
//cuarto producto - mostramos resultados

var cuartoTotalMostrar = document.getElementById("cuartoTotal")
var cuartoUnitarioMostrar = document.getElementById("cuartoUnitarioTotal")

//comprobamos si se agrego este producto
if(montoTotalCuartoProducto != 0){
var cuartoMostrar = document.getElementById("cuartoProductoMostrar")
cuartoMostrar.innerHTML = cuartoProductoMostrar
}

//costo total 
var cuartoProductoAchicar = Number(montoTotalCuartoProducto)
cuartoProductoAchicar = cuartoProductoAchicar.toFixed(4)
montoTotalCuartoProducto = cuartoProductoAchicar
cuartoTotalMostrar.innerHTML = montoTotalCuartoProducto

//costo unitario
if(montoTotalCuartoProducto != 0){
var cuartoMontoUnitario = montoTotalCuartoProducto / cuartaCantidadMostrar
localStorage.setItem('cuartoMontoUnitario', cuartoMontoUnitario)
cuartoUnitarioMostrar.innerHTML=  cuartoMontoUnitario
}
//quinto producto - mostramos resultados

var quintoTotalMostrar = document.getElementById("quintoTotal")
var quintoUnitarioMostrar = document.getElementById("quintoUnitarioTotal")

//comprobamos si se agrego este producto
if(montoTotalQuintoProducto != 0){
var quintoMostrar = document.getElementById("quintoProductoMostrar")
localStorage.setItem('quintoMontoUnitario', quintoMontoUnitario)
quintoMostrar.innerHTML = quintoProductoMostrar
}

//costo total
var quintoProductoAchicar = Number(montoTotalQuintoProducto)
quintoProductoAchicar = quintoProductoAchicar.toFixed(4)
montoTotalQuintoProducto = quintoProductoAchicar
quintoTotalMostrar.innerHTML = montoTotalQuintoProducto

//costo unitario 
if(montoTotalQuintoProducto != 0){
var quintoMontoUnitario =  montoTotalQuintoProducto / quintaCantidadMostrar
quintoUnitarioMostrar.innerHTML= quintoMontoUnitario
}

//calculamos el costo unitario general, el cual se obtiene del total de la importacion
var unitarioTotalMostrar = document.getElementById("costoUnitarioGeneral")

//pasamos los valores de string a numero
montoTotalPrimerProducto = Number(montoTotalPrimerProducto)
montoTotalSegundoProducto = Number(montoTotalSegundoProducto)
montoTotalTercerProducto = Number(montoTotalTercerProducto)
montoTotalCuartoProducto = Number(montoTotalCuartoProducto)
montoTotalQuintoProducto = Number(montoTotalQuintoProducto)

//sumamos todos los montos para obtener el total
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
//mostramos  costo general unitario
var totalGeneralUnitario = total / productos
localStorage.setItem("unitarioTotal", totalGeneralUnitario)
unitarioTotalMostrar.innerHTML=totalGeneralUnitario

//mostramos  costo total 
var costoTotalMostrar = document.getElementById("costoGeneral")
costoTotalMostrar.innerHTML= total
localStorage.setItem('costoTotal', total)

//mostramos la aclaracion
var blueAclaracion = document.getElementById("blueAclaracion")
var dolarAclaracion = document.getElementById("oficialAclaracion")
var aclaracion = localStorage.getItem('aclaracion')
var blue = total - aclaracion
blueAclaracion.innerHTML = blue
dolarAclaracion.innerHTML = aclaracion
}

traer()

function volver(){
    localStorage.clear()
    window.location="calculadora.html"
}