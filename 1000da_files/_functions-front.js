//LOAD SCRIPTS INTO DOCUMENT WHEN DOCUMENT IS LOADED...
$(document).ready(function() {
		(function($){
			$.fn.disableSelection = function() {
				return this
				.attr('unselectable', 'on')
				.css('user-select', 'none')
				.css('-moz-user-select', 'none')
				.css('-khtml-user-select', 'none')
				.css('-webkit-user-select', 'none')
				.on('selectstart', false)
				.on('contextmenu', false)
				//.on('keydown', false)
				.on('mousedown', false);
		};
	
		$.fn.enableSelection = function() {
			return this
			.attr('unselectable', '')
			.css('user-select', '')
			.css('-moz-user-select', '')
			.css('-khtml-user-select', '')
			.css('-webkit-user-select', '')
			.off('selectstart', false)
			.off('contextmenu', false)
			.off('keydown', false)
			.off('mousedown', false);
		};
		
})(jQuery); 
		$('body, html').disableSelection();
  
// REFRESH TIMER, DATAGE, TIME, MOUSEDOWNER SCRIPTS BELOW...

//REFRESH TIMER
// window.setTimeout("document.location = 'idle.php'", 3 * 60 * 1000);
window.setTimeout(
	function(){
		window.location.reload(false);
	}
	, 20 * 60 * 1000);
//TIME SCRIPT, DIV ID = PENDULE
	//Start by setting the time update interval.

function clock() {		 
		// Gets the current time
		var now = new Date();
		
		// Get the hours, minutes and seconds from the current time
		var hours = now.getHours();
		var minutes = now.getMinutes();
		var seconds = now.getSeconds();
		
		// Format hours, minutes and seconds
		var amOrPm = "AM";
		if (hours > 11) amOrPm = "PM";
		if (hours > 12) hours = hours - 12;
		if (hours == 0) hours = 12;
		if (minutes <= 9) minutes = "0" + minutes;
		if (seconds <= 9) seconds = "0" + seconds;
		
		// Gets the element we want to inject the clock into
		var elem = document.getElementById('pendule');
		
		// Sets the elements inner HTML value to our clock data
		elem.innerHTML = hours + ":" + minutes + "<span class='ampm'>" + amOrPm + "</span>";
	
	};
	clock();
	setInterval(clock,500);



//ONMOUSEDOWN SCRIPT, ALL LINKS ACTIVATE ON MOUSEDOWN EVENT

	$('area, a').mousedown(function() {
		window.location.href = this.href;
	});



});


function input(letter) {
  param = search.search_for.value;
  param += letter;
  search.search_for.value = param;
}

function backspace() {
  param = search.search_for.value;
  back = param.substring(0, (param.length - 1));
  search.search_for.value = back;
}
