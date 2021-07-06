function clear()
{
    document.getElementById("form").reset();
}
function show(){
    var s = document.getElementById("suggest").value;
    var fname = document.getElementById("first").value;
    var lname = document.getElementById("last").value;
    var mname = document.getElementById("mid").value;
    var gen1= document.getElementById("ml");
    var gen2= document.getElementById("fl");
    
    if(s==""||fname==""||lname=="") 
        alert("Please Fill all the details");
    else
    {
        var para = document.createElement("P");
        para.innerHTML = s;
        var user = document.createElement("h5");
        if(gen1.checked==true)
            {
        if(mname=="")
            user.innerHTML='--'+'Mr.'+fname+' '+lname+'--';
        else
            user.innerHTML='--'+'Mr.'+fname+' '+mname+' '+lname+'--';
            "<hr>"}
        else
            {
         if(mname=="")
            user.innerHTML='--'+'Ms/Mrs.'+fname+' '+lname+'--';
        else
        user.innerHTML='--'+'Ms/Mrs.'+fname+' '+mname+' '+lname+'--';
        "<hr>"}
        para.style.padding="0px 0px 5px 0px";
        user.style.textAlign="center";
        document.getElementById("display").appendChild(para);
        document.getElementById("display").appendChild(user);
        user.style.padding="0px 0px 30px 0px";
        clear();
    }
}