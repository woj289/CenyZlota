function pobieranie(){
	    var x1 = document.getElementById("date1").value;
	    var x2 = document.getElementById("date2").value;

	  
	    	if(Date.parse(x1) > Date.parse(x2)){
	    		alert("Błedny zakres dat");
	    	}

	    var $url = 'https://api.nbp.pl/api/cenyzlota/' + x1 + '/' + x2 +'/?format=json';
  
	    $.ajax({
		    type:'GET',
		    url: $url,
		    success: function(data){
		      $("demo").append(data[1].cena);

		      var i = 0;
		      var max = data[i].cena;
		      var min = data[i].cena;
			  var mediana = 0;
		      while( data[i].data != x2)
		      {
			      var table = document.getElementById("table");
				  var row = table.insertRow(i+1);
				  var cell1 = row.insertCell(0);
				  var cell2 = row.insertCell(0);
				  cell1.innerHTML = data[i].cena;
				  cell2.innerHTML = data[i].data;

				  if(data[i].cena > max){
				   	max = data[i].cena;
				   }

				  if(data[i].cena < min ){
				   	min = data[i].cena;
				   }

				  mediana = mediana + data[i].cena; 
				  i++;
				}
				$(".wartosc_maksymalna").append("Wartość maksymalna : " + max);
				$(".wartosc_minimalna").append("Wartość wartosc_minimalna : " + min);
				$(".mediana").append("Mediana : " + mediana / i);

		    }
	  	});
	}