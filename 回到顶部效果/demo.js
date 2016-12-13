window.onload = function(){
	var obtn = document.getElementById('btn');
	var osHeight = document.documentElement.clientHeight;
	var timer = null;
	var flag  = true;
	window.onscroll = function(){
		var osTop = document.body.scrollTop || document.documentElement.scrollTop;
		if(osTop>osHeight){
			obtn.style.display = 'block';
		}else{
			obtn.style.display = 'none';
		}
		if(!flag){
			clearInterval(timer);
		}
		flag = false;
	}
	obtn.onclick = function(){
		timer = setInterval(function(){
			var osTop = document.body.scrollTop || document.documentElement.scrollTop;
			var ispeed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop  = osTop + ispeed;
			flag = true;
			if(osTop == 0){
				clearInterval(timer);
			}
		}, 30);
		
	}
}