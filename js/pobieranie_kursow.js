function pobieranie(){

	    var x1 = document.getElementById("date1").value;
	    var x2 = document.getElementById("date2").value;
	    var $url = 'http://api.nbp.pl/api/cenyzlota/' + x1 + '/' + x2 +'/?format=json';
   
	    sprawdzanieDaty(x1, x2);

  		
	    $('td').empty();  


	    

	    $.ajax({
		    type:'GET',
		    url: $url,
		    success: function(data){
		    $("demo").append(data[1].cena);
		    var i = 0; var max = data[i].cena; var min = data[i].cena;  var mediana = 0;
		    while( data[i].data != x2)
		    {
			    var table = document.getElementById("table");
			    var row = table.insertRow(i+1);
		        var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(0);
				cell1.innerHTML = data[i].cena;
				cell1.classList.add('cena');
				cell2.innerHTML = data[i].data;
				cell2.classList.add('data');

				if(data[i].cena > max){
				   	max = data[i].cena;
				}									
				if(data[i].cena < min ){
				    min = data[i].cena;
				}									
				mediana = mediana + data[i].cena; 	
				i++;
			}

				wartosci(max, min, mediana,i);

		    }
	  	});
	}

function sprawdzanieDaty(x1,x2) {
			
	if(Date.parse(x1) > Date.parse(x2)){
		alert("Błedny zakres dat");
	}
	var to_long = (Date.parse(x1)) - (Date.parse(x2));    
	if(to_long < (-31736000000)){
	    alert("Przekroczony limit 367 dni");
	}

	
    var teraz = new Date;
    var wynik = teraz.getFullYear() + "-" + (1 + teraz.getMonth()) + "-" + teraz.getDate();;
    if( Date.parse(wynik) < Date.parse(x1)){
		alert("Błedny zakres dat, przyszła data");
    }
    if( Date.parse(wynik) < Date.parse(x2)){
		alert("Błedny zakres dat, przyszła data");
    }
	
}

function wartosci(max, min, mediana,i) {

	$('.wartosc_maksymalna').empty(); 
	$('.wartosc_minimalna').empty(); 
	$('.mediana').empty(); 													
	$(".wartosc_maksymalna").append("Wartość maksymalna : " + max);
	$(".wartosc_minimalna").append("Wartość wartosc_minimalna : " + min);
	$(".mediana").append("Mediana : " + mediana / i);

}