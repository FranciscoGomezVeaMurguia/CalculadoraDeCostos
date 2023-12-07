
function calcular (){
    
    dolar = document.getElementById("dolares").value
    localStorage.setItem("dolar", dolar)
    
    //obtenemos el dolar seleccionado 
    if (dolar == "Dolar tarjeta"){
        dolarSelec = dolarTarjeta
        
    }
    else if (dolar == "Dolar blue"){
        dolarSelec = dolarBlue
        
    }
    else if (dolar == "Dolar oficial"){
        dolarSelec = dolarOficial
        
    }

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
    
        //resultados 

        primerTotal = primerCosto * primerCantidad
        segundoTotal = segundoCosto * segundaCantidad
        tercerTotal = tercerCosto * tercerCantidad
        cuartoTotal = cuartoCosto * cuartaCantidad
        quintoTotal = quintoCosto * quintaCantidad

        var aclaracion = primerTotal + segundoTotal + terTotal + cuartoTotal+ quintoTotal 
        localStorage.setItem('aclaracion', aclaracion)
        

        //guardamos las cantidades en local storage para usarlas luego
        localStorage.setItem('primerCantidad', primerCantidad)
        localStorage.setItem('segundaCantidad', segundaCantidad)
        localStorage.setItem('tercerCantidad', tercerCantidad)
        localStorage.setItem('cuartaCantidad', cuartaCantidad)
        localStorage.setItem('quintaCantidad', quintaCantidad)

        //guardamos los resultados en local storage para usarlos en la proxima seccion de costos

        localStorage.setItem('primerTotal', primerTotal)
        localStorage.setItem('segundoTotal', segundoTotal)
        localStorage.setItem('tercerTotal', tercerTotal)
        localStorage.setItem('cuartoTotal', cuartoTotal)
        localStorage.setItem('quintoTotal', quintoTotal)



        //guardamos los nombres en local storage para usarlos en los totales

        localStorage.setItem('primerProducto', primerProducto)
        localStorage.setItem('segundoProducto', segundoProducto)
        localStorage.setItem('tercerProducto', tercerProducto)
        localStorage.setItem('cuartoProducto', cuartoProducto)
        localStorage.setItem('quintoProducto', quintoProducto)
        
        //guardamos valor de dolar
        localStorage.setItem('dolarBlue', dolarBlue)
        localStorage.setItem('dolarTarjeta', dolarTarjeta)
        
    }


//seguimos agregando costos 

function calcularCostos(){
    
    
    
    
    //obtenemos resultados de la sección anterior guardados en local storage

    primTotal = localStorage.getItem('primerTotal')
    segTotal = localStorage.getItem('segundoTotal')
    terTotal = localStorage.getItem('tercerTotal')
    cuarTotal = localStorage.getItem('cuartoTotal')
    quinTotal = localStorage.getItem('quintoTotal')

    //comprobamos cuantos productos hay ingresados

    var productos = 0  

    if (primTotal != 0){
        productos = productos + 1
    }
    if (segTotal != 0 ){
        productos = productos + 1
    }
    if(terTotal != 0){
        productos = productos+1
    }
    if(cuarTotal != 0){
        productos = productos+1
    }
    if( quinTotal != 0){
        productos = productos+1
    }

    var montoFletes = 0 
    var montoSeguros = 0
    var montoComex = 0
    var montoBanco= 0
    var montoTca = 0 

    //creamos una variable que vaya acumulando el resultado para poder obtener los porcentajes del monto principal
    var primerTotalGeneral = Number(primTotal)
    var segundoTotalGeneral = Number(segTotal)
    var tercerTotalGeneral = Number(terTotal)
    var cuartoTotalGeneral = Number(cuarTotal)
    var quintoTotalGeneral = Number(quinTotal)
    
    
    //obtenemos valores de costos a agregar

    tasaEstadistica = document.getElementById("costo1").value
    derechos = document.getElementById("costo2").value
    flete = document.getElementById("costo3").value
    iva = document.getElementById("costo4").value
    seguros = document.getElementById("costo5").value
    comex = document.getElementById("costo6").value
    banco = document.getElementById("costo7").value
    tca = document.getElementById("costo8").value
    
    //agregamos tasa estadistica a cada producto, se obtiene el porcentaje ingresado y se le suma al total 
    
    tasaEstadistica = tasaEstadistica / 100
    suma = primTotal * tasaEstadistica
    primTotal = Number(primTotal)
    primerTotalGeneral = primerTotalGeneral + suma 
    
    

    suma = segTotal * tasaEstadistica
    segTotal = Number(segTotal)
    segundoTotalGeneral = segundoTotalGeneral + suma
    
    suma = terTotal * tasaEstadistica
    terTotal = Number(terTotal)
    tercerTotalGeneral = tercerTotalGeneral + suma 

    suma = cuarTotal * tasaEstadistica
    cuarTotal = Number(cuarTotal)
    cuartoTotalGeneral = cuartoTotalGeneral + suma
    
    suma = quinTotal * tasaEstadistica
    quinTotal = Number(quinTotal)
    quintoTotalGeneral = quintoTotalGeneral + suma 
    
    //agregamos derechos a cada producto, se obtiene el porcentaje ingresado y se le suma al total 
    
    derechos = derechos / 100
    suma = primTotal * derechos
    primTotal = Number(primTotal)
    primerTotalGeneral = primerTotalGeneral + suma 



    suma = segTotal * derechos
    segTotal = Number(segTotal)
    segundoTotalGeneral = segundoTotalGeneral + suma
    
    suma = terTotal * derechos
    terTotal = Number(terTotal)
    tercerTotalGeneral = tercerTotalGeneral + suma 

    suma = cuarTotal * derechos
    cuarTotal = Number(cuarTotal)
    cuartoTotalGeneral = cuartoTotalGeneral + suma
    
    suma = quinTotal * derechos
    quinTotal = Number(quinTotal)
    quintoTotalGeneral = quintoTotalGeneral + suma 

    

    //agregamos fletes a cada producto, se obtiene el monto ingresado y se le suma al total 
    
    //comprobamos cuantos productos hay y segun el resultado realizamos la suma de costos 
    switch (productos) {
        case 1:
            montoFletes = flete / productos
            primerTotalGeneral = primerTotalGeneral + montoFletes;
            
        break;

        case 2:
            montoFletes = flete / productos
            primerTotalGeneral = primerTotalGeneral + montoFletes;
            segundoTotalGeneral = segundoTotalGeneral + montoFletes;
        
        break;

        case 3:
            montoFletes = flete / productos
            primerTotalGeneral = primerTotalGeneral + montoFletes;
            segundoTotalGeneral = segundoTotalGeneral + montoFletes;
            tercerTotalGeneral = tercerTotalGeneral + montoFletes
        break;
        case 4:
            montoFletes = flete / productos
            primerTotalGeneral = primerTotalGeneral + montoFletes;
            segundoTotalGeneral = segundoTotalGeneral + montoFletes;
            tercerTotalGeneral = tercerTotalGeneral + montoFletes
            cuartoTotalGeneral = cuartoTotalGeneral + montoFletes
        break;
        case 5:
            montoFletes = flete / productos
            primerTotalGeneral = primerTotalGeneral + montoFletes;
            segundoTotalGeneral = segundoTotalGeneral + montoFletes;
            tercerTotalGeneral = tercerTotalGeneral + montoFletes
            cuartoTotalGeneral = cuartoTotalGeneral + montoFletes
            quintoTotalGeneral = quintoTotalGeneral + montoFletes;
        
    }
    

    //agregamos iva a cada producto, se obtiene el porcentaje ingresado y se le suma al total
    iva = iva / 100
    suma = primTotal * iva
    primTotal = Number(primTotal)
    primerTotalGeneral = primerTotalGeneral + suma 

    suma = segTotal * iva
    segTotal = Number(segTotal)
    segundoTotalGeneral = segundoTotalGeneral + suma
    
    suma = terTotal * iva
    terTotal = Number(terTotal)
    tercerTotalGeneral = tercerTotalGeneral + suma 

    suma = cuarTotal * iva
    cuarTotal = Number(cuarTotal)
    cuartoTotalGeneral = cuartoTotalGeneral + suma
    
    suma = quinTotal * iva
    quinTotal = Number(quinTotal)
    quintoTotalGeneral = quintoTotalGeneral + suma 

    //agregamos seguros a cada producto, se obtiene el monto ingresado y se le suma al total
    switch (productos) {
        case 1:
            montoSeguros = seguros / productos
            primerTotalGeneral = primerTotalGeneral + montoSeguros;
        break;

        case 2:
            montoSeguros = seguros / productos
            primerTotalGeneral = primerTotalGeneral + montoSeguros;
            segundoTotalGeneral = segundoTotalGeneral + montoSeguros;
        
        break;

        case 3:
            montoSeguros = seguros / productos
            primerTotalGeneral = primerTotalGeneral + montoSeguros;
            segundoTotalGeneral = segundoTotalGeneral + montoSeguros;
            tercerTotalGeneral = tercerTotalGeneral + montoSeguros
        break;
        case 4:
            montoSeguros = seguros / productos
            primerTotalGeneral = primerTotalGeneral + montoSeguros;
            segundoTotalGeneral = segundoTotalGeneral + montoSeguros;
            tercerTotalGeneral = tercerTotalGeneral + montoSeguros
            cuartoTotalGeneral = cuartoTotalGeneral + montoSeguros
        break;
        case 5:
            montoSeguros = seguros / productos
            primerTotalGeneral = primerTotalGeneral + montoSeguros;
            segundoTotalGeneral = segundoTotalGeneral + montoSeguros;
            tercerTotalGeneral = tercerTotalGeneral + montoSeguros
            cuartoTotalGeneral = cuartoTotalGeneral + montoSeguros
            quintoTotalGeneral = quintoTotalGeneral + montoSeguros;
        
    }

    //agregamos comex a cada producto, se obtiene el monto ingresado y se le suma al total
    switch (productos) {
        case 1:
            montoComex = comex / productos
            primerTotalGeneral = primerTotalGeneral + montoComex;
        break;

        case 2:
            montoComex = comex / productos
            primerTotalGeneral = primerTotalGeneral + montoComex;
            segundoTotalGeneral = segundoTotalGeneral + montoComex;
        
        break;

        case 3:
            montoComex= comex / productos
            primerTotalGeneral = primerTotalGeneral + montoComex;
            segundoTotalGeneral = segundoTotalGeneral + montoComex;
            tercerTotalGeneral = tercerTotalGeneral + montoComex
        break;
        case 4:
            montoComex = comex / productos
            primerTotalGeneral = primerTotalGeneral + montoComex;
            segundoTotalGeneral = segundoTotalGeneral + montoComex;
            tercerTotalGeneral = tercerTotalGeneral + montoComex
            cuartoTotalGeneral = cuartoTotalGeneral + montoComex
        break;
        case 5:
            montoComex = comex / productos
            primerTotalGeneral = primerTotalGeneral + montoComex;
            segundoTotalGeneral = segundoTotalGeneral + montoComex;
            tercerTotalGeneral = tercerTotalGeneral + montoComex
            cuartoTotalGeneral = cuartoTotalGeneral + montoComex
            quintoTotalGeneral = quintoTotalGeneral + montoComex;
        
    }

    //agregamos comision del banco a cada producto, se obtiene el monto ingresado y se le suma al total
    switch (productos) {
        case 1:
            montoBanco = banco / productos
            primerTotalGeneral = primerTotalGeneral + montoBanco;
        break;

        case 2:
            montoBanco = banco / productos
            primerTotalGeneral = primerTotalGeneral + montoBanco;
            segundoTotalGeneral = segundoTotalGeneral + montoBanco;
        
        break;

        case 3:
            montoBanco = banco / productos
            primerTotalGeneral = primerTotalGeneral + montoBanco;
            segundoTotalGeneral = segundoTotalGeneral + montoBanco;
            tercerTotalGeneral = tercerTotalGeneral + montoBanco
        break;
        case 4:
            montoBanco = banco / productos
            primerTotalGeneral = primerTotalGeneral + montoBanco;
            segundoTotalGeneral = segundoTotalGeneral + montoBanco;
            tercerTotalGeneral = tercerTotalGeneral + montoBanco
            cuartoTotalGeneral = cuartoTotalGeneral + montoBanco
        break;
        case 5:
            montoBanco = banco / productos
            primerTotalGeneral = primerTotalGeneral + montoBanco;
            segundoTotalGeneral = segundoTotalGeneral + montoBanco;
            tercerTotalGeneral = tercerTotalGeneral + montoBanco
            cuartoTotalGeneral = cuartoTotalGeneral + montoBanco
            quintoTotalGeneral = quintoTotalGeneral + montoBanco;
        
    }

    //agregamos tca a cada producto, se obtiene el monto ingresado y se le suma al total
    //comprobamos cuantos productos hay y segun el resultado realizamos la suma de costos 
    switch (productos) {
        case 1:
            montoTca = tca / productos
            primerTotalGeneral = primerTotalGeneral + montoTca;
            
        break;

        case 2:
            montoTca = tca / productos
            primerTotalGeneral = primerTotalGeneral + montoTca;
            segundoTotalGeneral = segundoTotalGeneral + montoTca;
        
        break;

        case 3:
            montoTca = tca / productos
            primerTotalGeneral = primerTotalGeneral + montoTca;
            segundoTotalGeneral = segundoTotalGeneral + montoTca;
            tercerTotalGeneral = tercerTotalGeneral + montoTca
        break;
        case 4:
            montoTca = tca / productos
            primerTotalGeneral = primerTotalGeneral + montoTca;
            segundoTotalGeneral = segundoTotalGeneral + montoTca;
            tercerTotalGeneral = tercerTotalGeneral + montoTca
            cuartoTotalGeneral = cuartoTotalGeneral + montoTca
        break;
        case 5:
            montoTca = tca / productos
            primerTotalGeneral = primerTotalGeneral + montoTca;
            segundoTotalGeneral = segundoTotalGeneral + montoTca;
            tercerTotalGeneral = tercerTotalGeneral + montoTca
            cuartoTotalGeneral = cuartoTotalGeneral + montoTca
            quintoTotalGeneral = quintoTotalGeneral + montoTca;
        
    }
    


    
    localStorage.setItem('primerTotalGeneral', primerTotalGeneral)
    localStorage.setItem('segundoTotalGeneral', segundoTotalGeneral)
    localStorage.setItem('tercerTotalGeneral', tercerTotalGeneral)
    localStorage.setItem('cuartoTotalGeneral', cuartoTotalGeneral)
    localStorage.setItem('quintoTotalGeneral', quintoTotalGeneral)


}