var elements = Array.from(document.getElementsByClassName("link"));
document.getElementById("menuTitulo").addEventListener("click", function(){
	//alert("hiolaaa");
	elements.forEach(function(item){
		item.classList.toggle("mostrar");
		item.classList.toggle("hiden");
	});
});