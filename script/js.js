function myFirstJS()
{
var a=document.getElementById("val1")
var b=document.getElementById("val2")
var d=a.value;
var e=b.value;
Add(d,e);
sub(d,e);
div(d,e);
mult(d,e);
}


function Add(val1,val2)
{
var c= val1+val2;

console.log(c);
}

function sub(val1,val2)
{
    var c= val1-val2;
    console.log(c)
}

function div(val1,val2)
{
    var c= val2/val1;
    console.log(c)
}

function mult(val1,val2)
{
    var c= val1*val2;
    console.log(c)
}