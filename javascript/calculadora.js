var dolarTarjeta = 0


var dolarBlue = 0


var dolarOficial = 0 

//dolar seleccionado (valor)
var dolarSelec = ""

//dolar seleccionado (nombre)
var dolar = ""

    // primer producto
    var primerProducto = ""
    var primerCosto = 0
    var primerCantidad = 0

    // segundo producto
    var segundoProducto = ""
    var segundoCosto = 0
    var segundaCantidad = 0

    // tercer producto
    var tercerProducto = ""
    var tercerCosto = 0
    var tercerCantidad = 0

    // cuarto producto
    var cuartoProducto = ""
    var cuartoCosto = 0
    var cuartaCantidad = 0

    // quinto producto
    var quintoProducto = ""
    var quintoCosto = 0
    var quintaCantidad = 0

    var primTotal = 0
    var segTotal = 0
    var terTotal = 0 
    var cuarTotal = 0 
    var quinTotal = 0 
    
    var primerTotal = 0
    var segundoTotal = 0
    var tercerTotal = 0 
    var cuartoTotal = 0 
    var quintoTotal = 0 
    
        

    //costos a sumar 

    var tasaEstadistica = 0 
    var derechos = 0
    var flete = 0 
    var iva = 0 
    var seguros = 0 
    var comex = 0 
    var banco = 0 
    var tca = 0  


//obtenemos el valor del dolar
//dolar tarjeta
fetch("https://dolarapi.com/v1/dolares/tarjeta")
    .then(response => response.json())
    .then(data => traerDolarTarjeta(data));

    function traerDolarTarjeta(data){
    dolarTarjeta = data.venta
    mostrarDolar()
    }
    
//dolar blue
    fetch("https://dolarapi.com/v1/dolares/blue")
    .then(response => response.json())
    .then(data => traerDolarBlue(data));

    function traerDolarBlue(data){
    dolarBlue = data.venta
    mostrarDolar()
    }

//dolar oficial
    fetch("https://dolarapi.com/v1/dolares/oficial")
    .then(response => response.json())
    .then(data => traerDolarOficial(data));

    function traerDolarOficial(data){
    dolarOficial = data.venta
    mostrarDolar()
    }
    function mostrarDolar(){
    
    var dolarBlueMostrar = document.getElementById("precioBlue")
    var dolarTarjetaMostrar = document.getElementById("precioTarjeta")
    var dolarOficialMostrar = document.getElementById("precioOficial")

    dolarBlueMostrar.innerHTML = dolarBlue
    dolarTarjetaMostrar.innerHTML= dolarTarjeta
    dolarOficialMostrar.innerHTML= dolarOficial
    }
