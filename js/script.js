class Baraja {
	constructor (carta){

		this.carta = carta;
		this.total_cartas = this.carta.concat(this.carta).sort();
		this.carta_id_1 = false;
		this.carta_id_2 = false;
		this.contador = 0;
		this.cartaA = false;
		this.cartaB = false;
		this.barajar(this.total_cartas);
		this.crono(this.minutos, this.segundos);

	}

//Función que desordena aleatoriamente un array:
	barajar(array){
		var i=0;
		var j=0;
		var temp = null;

		for (var i = array.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
		}
	}

//Función cronómetro:
	crono(){
	 	var sec = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    setInterval( function(){
        document.getElementById("segundos").innerHTML=pad(++sec%60);
        document.getElementById("minutos").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);
  }

//Función que gestiona el juego en sí, lo que ocurre tras hacer click en una carta:
	levanta_carta(id){
		this.contador++;
		console.log("Contador: "+this.contador);
		
		if(this.contador == 1){

			this.carta_id_1 = id;
			document.getElementById("carta"+id).setAttribute("src",this.total_cartas[id]);
			this.cartaA = this.total_cartas[id];
			console.log(this.carta_id_1);

		}else if(this.contador==2){

			this.carta_id_2 = id;
			document.getElementById("carta"+id).setAttribute("src",this.total_cartas[id]);
			this.contador = 0;
			this.cartaB = this.total_cartas[id];
			console.log(this.carta_id_2);
 
			if(this.cartaA != this.cartaB){
 
				setTimeout( function(){					
					console.log("las cartas son distintas");
					document.getElementById("carta"+baraja.carta_id_1).setAttribute("src","imagenes/reves.jpg");
					document.getElementById("carta"+baraja.carta_id_2).setAttribute("src","imagenes/reves.jpg");
				},700);

			}else{
				
				console.log("las cartas son iguales");
			
			}
						
		}
			
	}			
		
}

baraja = new Baraja( ["imagenes/carta1.jpg", "imagenes/carta2.jpg", "imagenes/carta3.jpg", "imagenes/carta4.jpg", "imagenes/carta5.jpg", "imagenes/carta6.jpg"] );

