$('#in').on('keyup',function(){
	spellfuck();
});

function spellfuck(){
	var spellfucked = spellfucker($('#in').val());
	console.log(spellfucked.result)
	$('#out').val(spellfucked.result);
	$('#wordsfucked').text(spellfucked.rating)
}

spellfuck();

$('#regenerate').on('click',function(){
	spellfuck();
});