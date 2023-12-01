var dolarTarjeta = 0

function continuar(){


    var primerProducto = document.getElementById("primerProducto").value
    var primerCosto = document.getElementById("primerCosto").value
    var primerCantidad = document.getElementById("primerCantidad").value

    var segundoProducto = document.getElementById("segundoProducto").value
    var segundoCosto = document.getElementById("segundoCosto").value
    var segundaCantidad = document.getElementById("segundaCantidad").value

    var tercerProducto = document.getElementById("tercerProducto").value
    var tercerCosto = document.getElementById("tercerCosto").value
    var tercerCantidad = document.getElementById("tercerCantidad").value

    var cuartoProducto = document.getElementById("cuartoProducto").value
    var cuartoCosto = document.getElementById("cuartoCosto").value
    var cuartaCantidad = document.getElementById("cuartaCantidad").value

    var quintoProducto = document.getElementById("quintoProducto").value
    var quintoCosto = document.getElementById("quintoCosto").value
    var quintaCantidad = document.getElementById("quintaCantidad").value

    var dolar = document.getElementById("dolares").value

    var cantidadInput = "incorrecto"
    var costoInput = "incorrecto"
    var productoInput = "incorrecto"
    
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

    if(cantidadInput == "correcto" && costoInput == "correcto" && productoInput == "correcto"){
        window.location.href="calculadoraCostos.html"
    }

    }


function aceptarProducto(){
    var cartel = document.getElementById("nombreProducto")
    cartel.style.display="none"
}
function aceptarCosto(){
    var cartel = document.getElementById("costoProducto")
    cartel.style.display="none"
}
function aceptarCantidad(){
    var cartel = document.getElementById("cantidadProducto")
    cartel.style.display="none"
}

fetch("https://dolarapi.com/v1/dolares/tarjeta")
    .then(response => response.json())
    .then(data => traerDolarTarjeta(data));

    function traerDolarTarjeta(data){
        dolarTarjeta = data.venta
        alert(dolarTarjeta)
    }
    

