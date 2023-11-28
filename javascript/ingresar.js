const usuario = "Primoffice2023"  

const contraseña = "Primoffice"


function ingresar (){
    var usuarioIngresado = document.getElementById("username").value
    var contraseñaIngresada = document.getElementById("password").value
    var usuarioEstilos = document.getElementById("username")
    var contraseñaEstilos = document.getElementById("password")
    var datos = document.getElementById("datos")
    var usuarioVacio = document.getElementById("usuarioVacio")
    var contraseñaVacio = document.getElementById("contraseñaVacio")

    if(usuarioIngresado == usuario && contraseñaIngresada == contraseña){
        window.location.href="ingreso.html"
    }
    else if ( usuarioIngresado == "" ){
    usuarioVacio.style.display="block"

    setTimeout(function(){
        usuarioVacio.style.display="none"
    },5000)
    }

    else if(contraseñaIngresada == ""){
    contraseñaVacio.style.display="block"
    
    setTimeout(function(){
        contraseñaVacio.style.display="none"
    },5000)
    }
    
    else{
        usuarioEstilos.style.boxShadow="0px 0px 4px 1.5px rgb(238, 68, 7)"
        contraseñaEstilos.style.boxShadow="0px 0px 4px 1.5px rgb(238, 68, 7)"
        datos.style.display="block"
        
    }
}

function mostrar (){
    var usuarioEstilos = document.getElementById("username")
    var contraseñaEstilos = document.getElementById("password")
    var datos = document.getElementById("datos")
    var usuarioVacio = document.getElementById("usuarioVacio")
    var contraseñaVacio = document.getElementById("contraseñaVacio")

    usuarioEstilos.style.boxShadow="none"
    contraseñaEstilos.style.boxShadow="none"
    usuarioEstilos.style.border="1.5px solid rgb(0, 204, 255)"
    contraseñaEstilos.style.border="1.5px solid rgb(0, 204, 255)"
    datos.style.display="none"
    usuarioVacio.style.display="none"
    contraseñaVacio.style.display="none"
}