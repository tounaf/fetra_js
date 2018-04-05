
//var afficher =  document.querySelector( ' button ' );
var ici=document.getElementById('ici');
//var google = document.getElementById('google');
ici.onclick  =  function() {
document.getElementById('google').style.visibility='visible';
//h.style.display='none';
ici.style.visibility="collapse";
}
/*
var cacher = document.getElementById('cacher');
var h = document.querySelector('h1');
cacher.onclick  =  function() {
h.style.visibility='collapse';//hidden,collapse,inherit
//h.style.display='none';
}*/

form.addEvenListener("submit",function(e){
	var mot = document.forms.elements["recherche"].value;
	var sp =/\s*;\s*/;
	var cle = mot.split(sp);
	//for(var i=0;i=<cle.length;i++){
	//		return cle[i];
	document.location.href="https://www.google.fr/search?q=cle";
	//}

})
