function Connexion(){

  $.ajax({

    url: 'http://127.0.0.1:8000/api/login_check',
    dataType: 'json',
    type: 'POST',

    success: (response) => {
      console.log("ici");
    }

  });

}

document.getElementById("form-signin").addEventListener("submit", 
  
($event)=>{
  alert("ici");
    $event.preventDefault();
    Connexion();

}

);