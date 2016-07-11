$(document).ready(function(){
	$("#getquote").click(function(){
		$.ajax({
		  type: 'GET',
		  url: 'http://ron-swanson-quotes.herokuapp.com/v2/quotes',
		  success: function(data) {
		    $("#quotes").text(data[0]); 
		  }
		});
	});
});

