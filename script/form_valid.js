function form_data()
{
var form = document.getElementById("form");

var first_name = document.getElementById("fname");
var last_name = document.getElementById("lname");
var date_of_birth = document.getElementById("dob");
var gender = document.getElementById("gender");
var email = document.getElementById("email_id");
var mobile_num = document.getElementById("mobile_no");
if(NullorBlank(first_name,"Please Fill Your FirstName :)")){return false;}
if(NullorBlank(last_name,"Please Fill Your LastName :)")){return false;}
if(letteronly(first_name)){return false;}
if(letteronly(last_name)){return false;}
if(DOB(date_of_birth," Sorry Your Age is Less Than 18 :(")){return false;}
if(EmailId(email)){return false;}
if(Mobile_num(mobile_num)){return false;}
}
function NullorBlank(elmid,alert_message)
{
 if(elmid.value == "" || elmid.value == null || elmid.value.length == 0)
 {
    alert(alert_message);
    elmid.focus();
    elmid.style.border="1px solid red";
    return true;
 }
 else
 {
    elmid.style.border="";
    return false;
 }
}
function DOB(elmid,alert_message)
{
    var today = new Date();
    var birthDate = new Date(elmid.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    if (age<18)
    {
        alert(alert_message);
        elmid.focus();
        elmid.style.border="1px solid red";
        return true;
    }
    else
    {
        elmid.style.border="";
        return false;
    }
}function Mobile_num(elmid) {
    var numberformat = /^\d{10}$/;
    if (elmid.value.match(numberformat)) {
        elmid.style.border = "";
        return false;
    } else {
        alert("Enter the Proper Phone Number ???")
        elmid.value = "";
        elmid.focus();
        elmid.style.border = "1px solid red";
        return true;
    }
}
function EmailId(elmid) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;
    if (elmid.value.match(mailformat)) {
        elmid.style.border = "";
        return true;
    } else {
        alert("Enter the Proper Email Id ???")
        elmid.value = "";
        elmid.focus();
        elmid.style.border = "1px solid red";
        return false;
    }
}
function letteronly(elmid) {
    var letterformat = /^[A-Za-z]+$/;
    if (elmid.value.match(letterformat)) {
        elmid.style.border = "";
        return false;
    } else {
        alert("Invalid - Only Letter allowed!!");
        elmid.value = "";
        elmid.focus();
        elmid.style.border = "1px solid red";
        return true;
    }
}









