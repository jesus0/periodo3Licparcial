function validaciones(){

var pivote
var valcode = /^[1-9]{4}-?\s?[1-9]{4}-?\s?[1-9]{4}-?\s?[1-9]{4}/

var vnombre = /^([a-z ñáéíóú]{2,60})$/i;

var num1 = /[0-9]+/;


var num2 = /[0-9]+/;

if (document.getElementById("num1").value.match(num1)){
           pivote='Ok';
		 
		   }
        else {
            alert('argumento invalido'); 
			document.getElementById("num1").value = "";
			exit;
	}
if (document.getElementById("num2").value.match(num2)){
          pivote='Ok';
		 
		   }
        else {
            alert('argumento invalido'); 
			document.getElementById("num2").value = "";
			exit;
	}		
if (document.getElementById("codigo").value.match(valcode)){
           pivote='Ok';
		 
		   }
        else {
            alert('argumento invalido'); 
			document.getElementById("codigo").value = "";
			exit;
	}

	
if (document.getElementById("nombre").value.match(vnombre)){
          pivote='Ok';
		 
		   }
        else {
            alert('argumento invalido'); 
			document.getElementById("nombre").value = "";
			exit;
	}	

	
if (pivote=='Ok'){

alert('Datos ingresados correctamente');
	
	}
	
	}