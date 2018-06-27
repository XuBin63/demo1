// JavaScript Document
window.onload=function(){
	var obtn=document.getElementById('btn');
	var omnav=document.getElementById('mnav');
	obtn.onclick=function(){
		if(omnav.style.display=="block"){
			omnav.style.display="none"
		}else{
			omnav.style.display="block"
		}
	}
}