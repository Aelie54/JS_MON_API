document.getElementById("form-suscribe").addEventListener("submit", ($e) => {
  $e.preventDefault();
  let token = getToken();
  console.log(token);
});

function getToken() {
  
  let data = JSON.stringify({
    username: "BAH",
    password: "Mypass",
  });

  
  $.ajax({
    url: "http://127.0.0.1:8000/api/login_check",
    dataType: "json",
    type: "POST",
    data: data,
    contentType: "application/json",
    success: (response) => {
      console.log(response);
      token = response?.token ?? false;
      Inscription();
    },
    error: () => {
      console.log("oups error");
    },
  });
  
}

function Inscription() {

  let email = $("#email").val();
  let username = $("#email").val();
  let pwd = $("#pwd").val();

  (data = JSON.stringify({
    email: email,
    password: pwd,
    username: username,
    createdAt: new Date(),
    updatedAt: new Date(),
  })),

    $.ajax({
      url: "http://127.0.0.1:8000/api/users",
      dataType: "json",
      type: "POST",
      data: data,
      contentType: "application/ld+json",
      headers: { Authorization: "Bearer " + token },

      success: (response) => {
        console.log("bravo!");
        Redirect();
      },

      error: () => {
        console.log("sniiiif");
      },
    });
}


////////////////////////////////////////////////////////////////Changer Contenu de page

function Redirect(){

  $.ajax({
    url: "./Articles.php",
    dataType: "html",
    headers: { Authorization: "Bearer " + token },

    success: function(response){
      console.log("Redirect");
        document.getElementById("contenu").innerHTML = response;
        GetArticles();

    },

    error:function(error){
        console.log(error);
    }
});

}

//////////////////////////////////////////////////////////////////Attraper les articles

function GetArticles() {

  console.log(token) ; //affiche le token!

  $.ajax({
      
      url: "http://127.0.0.1:8000/api/articles",
      dataType: "json",
      type: "GET",
      contentType:"application/ld+json",
      headers: { Authorization: "Bearer " + token },


      success: (articles) => {
        
        // console.log(articles);    //affiche le tableau OK

      if (! articles instanceof Array) {
        return false; 
      }
      if (articles.length === 0) {
        return false; 
      }

        ShowArticles(articles);

        },

        error: () => {
          console.log("OMG ERROR GetArticles");
        },
  })

  return articles;
};


////////////////////////////////////////////////////////////////// Afficher les articles

function ShowArticles(articles) {

  console.log(articles); //affiche le tableau OK

  articles.forEach(article => {
    // console.log(article.title); 
    // console.log(article.content);

    let html =  `<div><h2>${article.title}</h2><p>${article.content}</p> </div>`

    $("#articles").html(html) ;

  });

};