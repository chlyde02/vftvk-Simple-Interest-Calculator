function compute()
{
    
    var principle = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principle*(rate/100))*years;
    var year = new Date().getFullYear()+parseInt(years);
    if(principle<=0){document.getElementById("result").innerHTML="Enter a positive number.";}
    else{document.getElementById("result").innerHTML="If you deposit $"+principle+",<br> at an interest rate of "+rate+"%, <br>you will receive an amount of $"+interest+" in the year "+year;}



/*If you deposit 1000000,
at an interest rate of 3.5%.
You will receive an amount of 175000,
in the year 2025*/
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rV").innerHTML=rateval;
}        


        
