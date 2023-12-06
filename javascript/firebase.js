
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW0Y881XfKogF4h7h9qIgP0iWw5PZ_hIU",
  authDomain: "db-primoffice-1b784.firebaseapp.com",
  databaseURL: "https://db-primoffice-1b784-default-rtdb.firebaseio.com",
  projectId: "db-primoffice-1b784",
  storageBucket: "db-primoffice-1b784.appspot.com",
  messagingSenderId: "265780957690",
  appId: "1:265780957690:web:9fa9725312f3f2cb41d443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    
    const db = firebase.firestore();

    const SaveTotal = (total) => {
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

    const MSJOK =() => {
        Swal.fire({
            title: "Buen trabajo!",
            text: "Datos guardados!",
            icon: "success"
          });
    }

    const MSJERROR =() => {
        Swal.fire({
            title: "Oops!",
            text: "Los datos no fueron guardados!",
            icon: "error"
          });
    }

    document.querySelector("#btnsave").addEventListener("click", (event) => {
        let primerTotal = $("#primerTotal").val();
        let primerUnitarioTotal = $("#primerUnitarioTotal").val();
        let segundoTotal = $("#segundoTotal").val();
        let segundoUnitarioTotal = $("#segundoUnitarioTotal").val();
        let tercerTotal = $("#tercerTotal").val();
        let tercerUnitarioTotal = $("#tercerUnitarioTotal").val();
        let cuartoTotal = $("#cuartoTotal").val();
        let cuartoUnitarioTotal = $("#cuartoUnitarioTotal").val();
        let quintoTotal = $("#quintoTotal").val();
        let quintoUnitarioTotal = $("#quintoUnitarioTotal").val();
        let costoUnitarioGeneral = $("#costoUnitarioGeneral").val();
        let costoGeneral = $("#costoGeneral").val();
               
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
    })