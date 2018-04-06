
//var afficher =  document.querySelector( ' button ' );
var ici=document.getElementById('ici');
//var google = document.getElementById('google');
ici.onclick  =  function() {
document.getElementById('google').style.visibility='visible';
//h.style.display='none';
ici.style.visibility="collapse";
//setTimeout(window.open('popup.html', 'fetra', 'height=400, width=200, top=100, left=100, toolbar=no, menubar=yes, location=no, resizable=yes, scrollbars=no, status=no'),10000);
}

window.onload = function(){
	setTimeout(function(){
		alert('le 10000 s est ecoulé');
	},3000);
		//window.open('popup.html', 'fetra', 'height=400, width=200, top=100, left=100, toolbar=no, menubar=yes, location=no, resizable=yes, scrollbars=no, status=no'),10000);		
};
/*
var cacher = document.getElementById('cacher');
var h = document.querySelector('h1');
cacher.onclick  =  function() {
h.style.visibility='collapse';//hidden,collapse,inherit
//h.style.display='none';
}*/
//var f = document.getElementById("search");
//form-recherche.addEvenListener("submit",function(){
	form_recherche.onsubmit = function(e) {
		e.preventDefault();

		var mot = document.forms["form_recherche"]["recherche"].value;
		var cle = mot.split(" ");
		var m = "";
		var alf ="";
		//redir_pag= "https://www.google.fr/#q="
		if (mot ==""){
			alert("champ vide");
		}else{
			for(var i =0;i<=cle.length;i++){
				m += cle[i]+"+";
				alf = m.slice(0,(m.length)-1);
			}
		//console.log(alf);	
		document.location.href="https://www.google.fr/#q="+alf;
		//document.location.assign(`https://www.google.fr/#q=${m}`);
			
			
		}
	//	console.log(m);
	//	console.log(alf);	
	}
	

