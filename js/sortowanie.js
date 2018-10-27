
	function sort_price() {
	var table = $('#table');

	 table.find('tr').sort(function(a, b) 
	 {
	  	if($('#price_order').val()=='asc') 
	  	{
	   		return $('td:last', a).text().localeCompare($('td:last', b).text());
	  	}
	  	else 
	  	{
	  		 return $('td:last', b).text().localeCompare($('td:last', a).text());
	  	}
			
	 }).appendTo(table);
	}

	function sort_date() {
	var table = $('#table');

	 table.find('tr').sort(function(a, b) 
	 {
	  	if($('#price_order').val()=='asc') 
	  	{
	   		return $('td:first', a).text().localeCompare($('td:first', b).text());
	  	}
	  	else 
	  	{
	  		 return $('td:first', b).text().localeCompare($('td:first', a).text());
	  	}
			
	 }).appendTo(table);
	}