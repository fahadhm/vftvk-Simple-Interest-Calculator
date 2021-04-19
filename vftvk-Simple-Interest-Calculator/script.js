var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value.onchange=compute;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100
var year = new Date().getFullYear()+parseInt(years);

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    result = document.getElementById("result");
    document.getElementById("result").innerHTML = (principal*rate*years/100);

}
    

        