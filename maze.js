function setUpEvent() {
    //console.log("hello");
    var lose = document.getElementById("boundary1");    
    
    lose.onmouseover = function(){
        lose.setAttribute("class", "boundary youlose");
    }
       
}

window.onload = function(){
    
    setUpEvent();
}