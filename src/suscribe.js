document.getElementById("form-suscribe").addEventListener("submit", ($e) => {
  $e.preventDefault();
  let token = getToken();
  console.log(token);
});

async function getToken() {
  
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
      },

      error: () => {
        console.log("sniiiif");
      },
    });
}
