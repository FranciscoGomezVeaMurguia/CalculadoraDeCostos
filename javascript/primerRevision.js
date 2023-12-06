function continuar(){
    //obtenemos los valores ingresados en el primer producto
    primerProducto = document.getElementById("primerProducto").value
    primerCosto = document.getElementById("primerCosto").value
    primerCantidad = document.getElementById("primerCantidad").value

    //obtenemos los valores ingresados en el segundo producto
    segundoProducto = document.getElementById("segundoProducto").value
    segundoCosto = document.getElementById("segundoCosto").value
    segundaCantidad = document.getElementById("segundaCantidad").value

    //obtenemos los valores ingresados en el tercer producto
    tercerProducto = document.getElementById("tercerProducto").value
    tercerCosto = document.getElementById("tercerCosto").value
    tercerCantidad = document.getElementById("tercerCantidad").value

    //obtenemos los valores ingresados en el cuarto producto
    cuartoProducto = document.getElementById("cuartoProducto").value
    cuartoCosto = document.getElementById("cuartoCosto").value
    cuartaCantidad = document.getElementById("cuartaCantidad").value

    //obtenemos los valores ingresados en el quinto producto
    quintoProducto = document.getElementById("quintoProducto").value
    quintoCosto = document.getElementById("quintoCosto").value
    quintaCantidad = document.getElementById("quintaCantidad").value

    //recibimos el dolar a utilizar que eligió el usuario

    dolar = document.getElementById("dolares").value
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
