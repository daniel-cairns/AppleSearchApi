$(document).ready(function(){

	$('#do-search').click(function(){

		// Get the search query value
		var query = $('#query').val();

		// Make sure there is value
		if($.trim(query) == ''){
			// Display error message
			console.log('Blank query, show error...');
			return;
		}

		// AJAX
		$.ajax({
			url: 'app/apple-search.php',
			type: 'get',
			data: {
				searchQuery: query
			},
			beforeSend: function(){},
			success: function(dataFromServer){
				console.log(dataFromServer);
			},
			error: function(){
				console.log('Cannot connect to app/apple-search.php file')
			}
		});

	});

});