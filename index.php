<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <LINk rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>Document</title>
</head>

<body>
    <div class="page">
        <div class="content" id="contenu">

            <h1> Subscribe</h1>
            <form action="#" id="form-suscribe">
                <div class="form-example">
                    <label for="email">ton Email: </label>
                    <input type="email" name="email" id="email" required>
                </div><br>
                <div class="form-example">
                    <label for="pwd">ton Passeword: </label>
                    <input type="text" name="pwd" id="pwd" required>
                </div><br>
                <div>
                    <input type="submit" value="Subscribe" class="submit">
                </div><br>
            </form><br>

            <h1> Sign In </h1>
            <form action="#" id="form-signin">
                <div class="form-example">
                    <label for="email">Email: </label>
                    <input type="email" name="email" id="email2" required>
                </div><br>
                <div class="form-example">
                    <label for="pwd">Passeword: </label>
                    <input type="text" name="pwd" id="pwd2" required>
                </div><br>
                <div>
                    <input type="submit" value="Sign In" class="submit">
                </div>
            </form>


        </div>
    </div>
</body>


<button onclick="window.location.href='Articles.php'">voir les articles</button>

<script src="./src/signin.js"> </script>
<script src="./src/suscribe.js"> </script>

</html>