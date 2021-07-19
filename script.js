function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    switch(<0){
        case p||r||y:document.write("please, enter a number");
            compute();}
    
}


/*<html>
    <head>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Simple Interest Calculator</h1>

        Amount <input type="number"  id="principal">  <br/>
        Rate <input type="number"  id="rate">  <br/>
        No. of Years <input type="number"  id="years">  <br/>
        Interest : <span id="result"></span><br>

        <button onclick="compute()">Compute</button>
    </body>
</html>*/
