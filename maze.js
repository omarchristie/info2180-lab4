function setUpEvent() {
    var lose = document.getElementById("boundary1");
    var loseAll = document.querySelectorAll(".boundary");
    var win = document.getElementById("end");
    var restart = document.getElementById("start");
    
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

	win.onmouseover = function(){
		if (lose.getAttribute("class") == "boundary youlose") {
			document.getElementById("status").innerHTML = "You Lose!!!";
		} else {
			document.getElementById("status").innerHTML = "You Win!!!";
		}
	}
	
	restart.onclick = function() {
		document.getElementById("status").innerHTML = 'Move your mouse over the "S" to begin.';
		for (var i = 0; i < loseAll.length-1; i++) {
			loseAll[i].setAttribute("class", "boundary");
		}
	}
      

}

window.onload = function(){
    
    setUpEvent();
}