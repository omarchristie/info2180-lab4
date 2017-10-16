function setUpEvent() {
    var lose = document.getElementById("boundary1");
    var loseAll = document.querySelectorAll(".boundary");
    var win = document.getElementById("end");
    var test = "";
    var restart = document.getElementById("start");
    
    lose.onmouseover = function(){
        lose.setAttribute("class", "boundary youlose");
    }

    
	for (var i = 0; i < loseAll.length-1; i++) {
		loseAll[i].onmouseover = function(){
			test= "good1";
			for (var i = 0; i < loseAll.length-1; i++) {
				loseAll[i].setAttribute("class", "boundary youlose");
			}
		}
	}

	win.onmouseover = function(){
		if (test == "good1") {
			console.log("You Lose!!!");
		} else {
			console.log("You Win");
		}
	}
	
	restart.onclick = function() {
		test= "";
		for (var i = 0; i < loseAll.length-1; i++) {
			loseAll[i].setAttribute("class", "boundary");
		}
	}
       
}

window.onload = function(){
    
    setUpEvent();
}