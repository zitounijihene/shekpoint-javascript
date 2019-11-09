var myTextArea=document.getElementById("Text");
function Bold(){
    if(myTextArea.style.fontWeight=="bold"){
        myTextArea.style.fontWeight="normal";
    }
    else{
        myTextArea.style.fontWeight="bold";
}   }
function italic(){
    if(myTextArea.style.fontStyle=="italic"){
        myTextArea.style.fontStyle="normal";
    }
    else{
        myTextArea.style.fontStyle="italic";
    }
}
function underline(){
    if(myTextArea.style.textDecoration=="underline"){
        myTextArea.style.textDecoration="none";
    }
    else{
        myTextArea.style.textDecoration="underline";
    }
}
function changesize(){
    document.getElementById("Text").style.fontSize=document.getElementById("size").value
}
function changetype(){
    document.getElementById("Text").style.fontFamily=document.getElementById("family").value
}
