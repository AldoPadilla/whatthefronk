function show_errors($form,errors){
	var errorsHandled = {};
	for(var n in errors){
		var error = errors[n];
		var field = error.path;
		var errorType = error.message.replace(/[\s\n]/g,'');
		if(!errorsHandled[field]){
			errorsHandled[field] = true;
			var $error = $form.find('.form-error[data-path='+field+'][data-on='+errorType+']');
			bind_events_on_error_field($error);
		}
	}
}

function bind_events_on_error_field($error){
	$error.addClass('shown');
	$error.on('click mouseleave',function(){
		$error.unbind('click mouseenter mouseleave');
		$error.removeClass('shown');
		$error.closest('.form-field').find('.form-control').focus();
	})
}

function gid(object){
	var id;
	if(object._id){
		id = object._id.toString();
	} else {
		id = object.toString();
	}
	return id;
}