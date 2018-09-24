/**
 * PassApp by KIMB-technologies
 * (c) 2018, released unter terms of BSD-3-Clause License
 * https://github.com/KIMB-technologies/PassApp
 */

function hintsOverlay(){
	const openHintsButton = "button#openHints";
	const closeHintsButton = "button#closeHints"
	const hintsOverlayDiv = "div#hintsOverlay";
	const hintsOverlayBackg = "div#hintsBackground";

	var opened = false;

	function closeit(){
		opened = false;
		$( hintsOverlayDiv ).addClass( "hidden" );
	}
	function openit(){
		opened = true;
		$( hintsOverlayDiv ).removeClass( "hidden" );
	}

	function openCloseInit(){
		$( openHintsButton ).click( openit );
		$( closeHintsButton ).click( closeit );
		$( hintsOverlayBackg ).click( closeit );
		$(document).keyup(function(e) {
			if(e.keyCode == 27 && opened) { // on ESC
				closeit();
			}
		});
	}
	openCloseInit();
}
