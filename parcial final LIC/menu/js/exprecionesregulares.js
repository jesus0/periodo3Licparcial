function validaciones(){

var pivote

var vnombreapel = /^([a-z ñáéíóú]{2,60})$/i;

var apel2 = /^([a-z ñáéíóú]{2,60})$/i;

var vcorreo = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

var vdui = /^[0-9]{8}$/;

var vedad = /[0-9]+/;

if (document.getElementById("fname").value.match(vnombreapel)){
           pivote='Ok';
		 
		   }
        else {
            alert('nombre no valido'); 
			document.getElementById("fname").value = "";
			exit;
	}
if (document.getElementById("edad").value.match(vedad)){
          pivote='Ok';
		 
		   }
        else {
            alert('la edad que introdujo es incorrecta'); 
			document.getElementById("edad").value = "";
			exit;
	}		
if (document.getElementById("apellido").value.match(apel2)){
           pivote='Ok';
		 
		   }
        else {
            alert('apellido incorrecto'); 
			document.getElementById("apellido").value = "";
			exit;
	}

	
if (document.getElementById("e-mail").value.match(vcorreo)){
          pivote='Ok';
		 
		   }
        else {
            alert('la direccion de correo es invalida'); 
			document.getElementById("e-mail").value = "";
			exit;
	}	

if (document.getElementById("numdui").value.match(DUI)){
        pivote='Ok';
		;
		   }
        else {
            alert('numero de dui invalido'); 
			document.getElementById("numdui").value = "";
			exit;
	}
	
if (pivote=='Ok'){

alert('Datos ingresados correctamente');
	
	}
	
	}