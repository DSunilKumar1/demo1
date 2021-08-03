function compute()
{
    var principal = document.getElementById("principal").value;

    if(principal == "" || principal <= 0)
    {
        alert("Enter a  number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var total = principal + interest;
    document.getElementById("result").innerHTML = total;


    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = " Deposit amount " + "<span class='highlight'>" + principal + "</span>"  + " <br>interest rate  "+ "<span class='highlight'>" + rate + "</span>%" + "<br>interst receive  amount  " + "<span class='highlight'>" + interest + "</span>" + " <br> total"+"<span class='highlight'>"+ total + "</span>";
}


