function setUpEvent() {
    var lose = document.getElementById("boundary1");
    var loseAll = document.querySelectorAll(".boundary");
    
    lose.onmouseover = function(){
        lose.setAttribute("class", "boundary youlose");
    }

    
	for (var i = 0; i < loseAll.length-1; i++) {
		loseAll[i].onmouseover = function(){
			for (var i = 0; i < loseAll.length-1; i++) {
				loseAll[i].setAttribute("class", "boundary youlose");
				}
			}
	}
       
}

window.onload = function(){
    
    setUpEvent();
}