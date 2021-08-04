function submit()
{
    var stuid = document.getElementByname("stuid").value;

    if(stuid == "" ||stuid <= 0)
    {
        alert("Enter your id");
        document.getElementByname("stuid").focus();
        return;
    }



    var FirstName = document.getElementByname("FirstName").value;

    if(FirstName == "" ||FirstName <= 0)
    {
        alert("Enter Frist Name");
        document.getElementByname("FirstName").focus();
        return;
    }


    var LastName = document.getElementByname("LastName").value;

    if(LastName == "" ||LastName <= 0)
    {
        alert("Enter Last Name");
        document.getElementByname("LastName").focus();
        return;
    }


     var Fathername = document.getElementByname("Fathername").value;

    if(Fathername == "" ||Fathername <= 0)
    {
        alert("Enter Correct Name");
        document.getElementByname("Fathername").focus();
        return;
    }
    var Mothername = document.getElementByname("Mothername").value;

    if(Mothername == "" ||Mothername <= 0)
    {
        alert("Enter Correct Name");
        document.getElementByname("Mothername").focus();
        return;
    }
    var MobileNumber = document.getElementByname("MobileNumber").value;

    if(MobileNumber == "" ||MobileNumber <= 0)
    {
        alert("Enter Correct Number");
        document.getElementByname("MobileNumber").focus();
        return;
    }
    var Aadharnumber = document.getElementByname("Aadharnumber").value;

    if(Aadharnumber == "" ||Aadharnumber <= 0)
    {
        alert("Enter Correct Number");
        document.getElementByname("Aadharnumber").focus();
        return;
    }
    

    var course = document.getElementByname("course").value;

    if(course == "" ||course <= 0)
    {
        alert("Enter Course Detalis");
        document.getElementByname("course").focus();
        return;
    }

    var first   = stuid;
    var second  = FirstName;
    var third   = LastName;
    var fourth  = Fathername;
    var fifth   = Mothername;
    var sixth   = MobileNumber; 
    var seven   = Aadharnumber;   
    var eight   = course;
    
   
    
    var a = [];
    a.push(first,second,third,fourth,fifth,sixth,seven,eight);
    console.log(a);
}