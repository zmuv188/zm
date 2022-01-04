window.onload = function() {
var nnum=getCookie("night");

if(nnum==1){
	document.getElementsByTagName('body')[0].className='nice-dark-mode';
	console.log(1);
	}else{
console.log(0);	
	}
}
function getCookie(name) 
{ 
	//document.cookie.setPath("/");
    var arr, reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
	{
	      return unescape(arr[2]); 
	}
    else 
	{
        return null; 
	}
}
