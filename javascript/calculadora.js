var dolarTarjeta = 0


var dolarBlue = 0


var dolarOficial = 0 

function continuar(){

    //obtenemos los valores ingresados en el primer producto
    var primerProducto = document.getElementById("primerProducto").value
    var primerCosto = document.getElementById("primerCosto").value
    var primerCantidad = document.getElementById("primerCantidad").value

    //obtenemos los valores ingresados en el segundo producto
    var segundoProducto = document.getElementById("segundoProducto").value
    var segundoCosto = document.getElementById("segundoCosto").value
    var segundaCantidad = document.getElementById("segundaCantidad").value

    //obtenemos los valores ingresados en el tercer producto
    var tercerProducto = document.getElementById("tercerProducto").value
    var tercerCosto = document.getElementById("tercerCosto").value
    var tercerCantidad = document.getElementById("tercerCantidad").value

    //obtenemos los valores ingresados en el cuarto producto
    var cuartoProducto = document.getElementById("cuartoProducto").value
    var cuartoCosto = document.getElementById("cuartoCosto").value
    var cuartaCantidad = document.getElementById("cuartaCantidad").value

    //obtenemos los valores ingresados en el quinto producto
    var quintoProducto = document.getElementById("quintoProducto").value
    var quintoCosto = document.getElementById("quintoCosto").value
    var quintaCantidad = document.getElementById("quintaCantidad").value

    //recibimos el dolar a utilizar que eligió el usuario

    var dolar = document.getElementById("dolares").value
    var cantidadInput = "incorrecto"
    var costoInput ="incorrecto"
    var productoInput ="incorrecto"
    //chequeamos que el usuario haya ingresado por lo menos un producto

    if (primerCantidad == "" && segundaCantidad == "" && tercerCantidad == "" && cuartaCantidad == "" 
    &&  quintaCantidad == ""){
        var cartel = document.getElementById("cantidadProducto")
        cartel.style.display="block"
    }

    if (primerCosto == "" && segundoCosto == "" && tercerCosto == "" && cuartoCosto == "" 
    &&  quintoCosto == ""){
        var cartel = document.getElementById("costoProducto")
        cartel.style.display="block"
    }

    if (primerProducto == "" && segundoProducto == "" && tercerProducto == "" && cuartoProducto == "" 
    &&  quintoProducto == ""){
        var cartel = document.getElementById("nombreProducto")
        cartel.style.display="block"
    }
    
    // en caso de que haya ingresado un producto o mas le permitimos continuar

    if (primerCantidad != "" || segundaCantidad != "" || tercerCantidad != "" || cuartaCantidad != "" 
    ||  quintaCantidad != ""){
        cantidadInput = "correcto"
    }

    if (primerCosto != "" || segundoCosto != "" || tercerCosto != "" || cuartoCosto != "" 
    ||  quintoCosto != ""){
        costoInput = "correcto"
    }

    if (primerProducto != "" || segundoProducto != "" || tercerProducto != "" || cuartoProducto != "" 
    ||  quintoProducto != ""){
        productoInput = "correcto"
    }

    // al presionar boton nos envia a la otra seccion de la calculadora

    if(cantidadInput == "correcto" && costoInput == "correcto" && productoInput == "correcto"){
        window.location.href="calculadoraCostos.html"
    }

    }

//ocultar carteles de advertencia
//advertencia input de producto vacio
function aceptarProducto(){
    var cartel = document.getElementById("nombreProducto")
    cartel.style.display="none"
}
//advertencia input de costo vacio
function aceptarCosto(){
    var cartel = document.getElementById("costoProducto")
    cartel.style.display="none"
}
//advertencia input de cantidad vacio
function aceptarCantidad(){
    var cartel = document.getElementById("cantidadProducto")
    cartel.style.display="none"
}

//obtenemos el valor del dolar
//dolar tarjeta
fetch("https://dolarapi.com/v1/dolares/tarjeta")
    .then(response => response.json())
    .then(data => traerDolarTarjeta(data));

    function traerDolarTarjeta(data){
    dolarTarjeta = data.venta
    }
    
//dolar blue
    fetch("https://dolarapi.com/v1/dolares/blue")
    .then(response => response.json())
    .then(data => traerDolarBlue(data));

    function traerDolarBlue(data){
    dolarBlue = data.venta
    }

//dolar oficial
    fetch("https://dolarapi.com/v1/dolares/oficial")
    .then(response => response.json())
    .then(data => traerDolarOficial(data));

    function traerDolarOficial(data){
    dolarOficial = data.venta
    }