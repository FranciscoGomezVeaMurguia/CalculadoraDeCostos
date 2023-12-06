function revisar(){
    
    var tasa = document.getElementById("costo1").value 
    
    var derechos = document.getElementById("costo2").value 
    var costoFlete = document.getElementById("costo3").value 
    var iva = document.getElementById("costo4").value 
    var cargo = document.getElementById("costo5").value 
    var comex = document.getElementById("costo6").value 
    var banco = document.getElementById("costo7").value 
    var tca = document.getElementById("costo8").value 
    
    if (tasa == "" || derechos == "" || costoFlete == "" || iva == ""
        || cargo == "" || comex == "" || banco == "" || tca == ""){
        var cartel = document.getElementById("nombreCartel")
        cartel.style.display="block"
        } 
        else {
        window.location.href="costosProductos.html"
        }
    }
    
    function aceptar(){
        var cartel = document.getElementById("nombreCartel")
        cartel.style.display="none"
    }