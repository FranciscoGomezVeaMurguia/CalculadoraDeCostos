    var firebaseConfig = {
    apiKey: "AIzaSyCW0Y881XfKogF4h7h9qIgP0iWw5PZ_hIU",
    authDomain: "db-primoffice-1b784.firebaseapp.com",
    databaseURL: "https://db-primoffice-1b784-default-rtdb.firebaseio.com",
    projectId: "db-primoffice-1b784",
    storageBucket: "db-primoffice-1b784.appspot.com",
    messagingSenderId: "265780957690",
    appId: "1:265780957690:web:9fa9725312f3f2cb41d443"
    };
    
    
    firebase.initializeApp(firebaseConfig)

    // Initialize Firebase
    
    
    var db = firebase.firestore();
    
    var SaveTotal = (total) => {
        db.collection("totales").add({
            total,
        })
        .then((docRef) => {
            MSJOK();
        })
        .catch((error) => {
            MSJERROR();
        });

    }

    var MSJOK =() => {
        Swal.fire({
            title: "Buen trabajo!",
            text: "Datos guardados!",
            icon: "success"
        });
    }

    var MSJERROR =() => {
        Swal.fire({
            title: "Oops!",
            text: "Los datos no fueron guardados!",
            icon: "error"
        });
    }

    function guardar(){
        
        let primerTotal = localStorage.getItem('primerTotalGeneral')
        let primerUnitarioTotal = localStorage.getItem("primerMontoUnitario")
        let segundoTotal = localStorage.getItem('segundoTotalGeneral')
        let segundoUnitarioTotal = localStorage.getItem("segundoMontoUnitario")
        let tercerTotal = localStorage.getItem('tercerTotalGeneral')
        let tercerUnitarioTotal = localStorage.getItem('tercerMontoUnitario')
        let cuartoTotal = localStorage.getItem('cuartoTotalGeneral')
        let cuartoUnitarioTotal = localStorage.getItem('cuartoMontoUnitario')
        let quintoTotal = localStorage.getItem('quintoTotalGeneral')
        let quintoUnitarioTotal = localStorage.getItem('quintoMontoUnitario')
        
        let costoUnitarioGeneral = localStorage.getItem('unitarioTotal')
        let costoGeneral = localStorage.getItem('costoTotal')
        




        primerTotal = Number(primerTotal)
        segundoTotal = Number(segundoTotal)
        tercerTotal = Number(tercerTotal)
        cuartoTotal = Number(cuartoTotal)
        quintoTotal = Number(quintoTotal)
        
    const total = {
        primerTotal,
        primerUnitarioTotal,
        segundoTotal,
        segundoUnitarioTotal,
        tercerTotal,
        tercerUnitarioTotal,
        cuartoTotal,
        cuartoUnitarioTotal,
        quintoTotal,
        quintoUnitarioTotal,
        costoUnitarioGeneral,
        costoGeneral
}

    SaveTotal(total)

    }