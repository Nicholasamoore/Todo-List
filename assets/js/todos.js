// check off specific todos by clicking
// only listening on "li" inside of "ul"
$("ul").on("click", "li", function() { 
	$(this).toggleClass("completed");
});

// click on X to delete todo
// only listening on "span" inside of "ul"
$("ul").on("click", "span", function(event) { 
	// parent() removes the entire li
	$(this).parent().fadeOut(500, function() { 
		// li is removed after the 500ms fadeout effect
		$(this).remove(); 
	}); 
	// stopPropagation() stops bubbling effect
	event.stopPropagation();   
});

$("input[type='text']").keypress(function(event) {
	// 13 is the Enter key
	if (event.which===13) {	
		// grabbing text from input
		var todoText = $(this).val(); 
		// erase the input box 
		$(this).val("");
		// add user's new todo to the ul 
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus-circle").click(function() {
	$("input[type='text']").fadeToggle();
});