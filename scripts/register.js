enterButtonb.onclick=function(){
    let mail=document.getElementById("mail").value;
    let pass=document.getElementById("pass").value; 
    let secondName=document.getElementById("secondNameInput").value; 
    let Name=document.getElementById("nameInput").value; 
    let thirdName=document.getElementById("thirdNameInput").value; 
    let mas=[secondName,Name,thirdName,mail,pass];
    let masId=["secondNameInput","nameInput",
"thirdNameInput","mail","pass"];
    let n=0;
    for(let i=0;i<(mas.length);i++){
        if(mas[i]===""){
            document.getElementById(masId[i]).className="emptyInput";
        }
        else{
            n++;
            document.getElementById(masId[i]).className="normalInput"
        }
    }
    if(n===5){
        location.href="index.html";
    }
}
