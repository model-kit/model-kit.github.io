	var clipboard = new Clipboard('.copy-btn');
	
	clipboard.on('success', function(e) {
	    console.log(e);
	});
	
	clipboard.on('error', function(e) {
	    console.log(e);
	});
	
	
var auto_animate = document.getElementById("auto_animate"),
	rbox = auto_animate.getElementsByTagName('a');
	
for (i = 0; i < rbox.length; i++) {
	
	rbox[i].addEventListener("mouseover", function(){
			
		var id = this.getAttribute("href");
		
		var nClass= String(id).replace( "#", "" );
		
		this.classList.add(nClass);
		
		setTimeout(function(){	
		
			for (i = 0; i < rbox.length; i++) {
			
				rbox[i].className="" + "rbox";	
			
			}
		
		},1500)
		
	})
	
}

function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    document.getElementById("instruct").innerHTML="Tap";
    return true;
  }
	else {
		document.getElementById("instruct").innerHTML="Mouseover";
		return false;
	}
  }

detectmob();