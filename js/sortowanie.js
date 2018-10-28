
function sort(rodzaj) {
	var table = $('#table');
	table.find('tr').sort(function(a, b) 
	{
	  	if($('#price_order').val()=='asc') {
	   		return $(rodzaj, a).text().localeCompare($(rodzaj, b).text());
	  	}
	  	else {
	  		 return $(rodzaj, b).text().localeCompare($(rodzaj, a).text());
	  	}
			
	 }).appendTo(table);
}																							

	