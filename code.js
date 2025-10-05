document.writeln(123);
// window.alert("hello world");
document.getElementById("mainBody").innerHTML="<h3>hello</h3>";
 let btn=document.getElementById("btn");
function checked()
{
    let c=document.getElementById("ff").value;
    console.log(c);  
}
// btn.onclick=checked;
function form(){
    let nam=document.getElementById("nam").value;
    let emal=document.getElementById("em").value;
    let ids=document.getElementById("id").value;
    if(ids>12)
    {
        document.writeln("it is not available");
    }
    else{
        document.writeln("success");
    }
 console.log(nam);
console.log(emal);
console.log(ids);
}
bbg.onclick=form;

