GetArticles();


function GetArticles() {

    $.ajax({
        
        url: "http://127.0.0.1:8000/api/articles",
        dataType: "application/ld+json",
        type: "GET",

        success: (articles) => {

            console.log(articles);

            ShowArticles();
          },

          error: () => {
            console.log("oups error");
          },
    })

    return articles;
};



function ShowArticles() {

};