


function fatorial(n){
	if(n==0){
		return 1;
	}else{
		var fat = 1;
		for(var i=1;i<=n;i++){
			fat = fat * 1;
		}
		return fat;
	}
}



function fatorial(n){
	
	if(n==0){
		return 1;
	}else{
		return n * fatorial(n-1)
	}
}
	
	function fatorial(n){
	
	if(n==0){
		return 1;
	}else{
		return n * arguments.callee(n-1)
	}
	}