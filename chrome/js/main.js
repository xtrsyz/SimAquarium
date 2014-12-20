/*
**	MAIN MODULE
**	
*/

document.addEventListener('DOMContentLoaded', function() {

// if you have multiple pages, use updateSandboxStorage to pass updated storage to other pages via iframe id attribute
/*  document.getElementById('btnUpdateStorage').addEventListener('click', function(event) {
    storageAPI.updateSandboxStorage('sandboxFrame');
  });*/


// ugly hack to prevent this onload firing before the sandbox delegator is listening...
window.setTimeout(function() {
	if( config.checkFirstTime() ) {
		aquarium.addFish( 1, 0.9999 );
		//aquarium.addFish( 1, 0.9999 );
		aquarium.resetMoney();
		config.saveGame();
	} else { // Load aquarium state
		config.loadGame();
	}
},1000);

}); // end DOMContentLoaded



/*** DEBUG MESSAGE FUNCTION ***/
var debug = true;
function dbg( msg ) {
	if( !debug ) return;
	// opera.postError( msg );
	console.error
}


/*** AQUARIUM SPEED ***/
var smallInterval, bigInterval;
var smallIntervals = new Array( 1024, 512, 256, 128, 64, 32 );
var chosenSpeed = 3;

/*** ONLOAD WIDGET ***/
window.addEventListener( "load", function() {

	background.createBackgroundSlots();

	eventsCreate();

	aquarium.create();

	fishShop.init();
	stats.createFishListTable();
		
	
	
	smallInterval	= window.setInterval( "aquarium.moveFish()", 128 );
	bigInterval		= window.setInterval( "aquarium.update()", 2000 );
	updateBuyButtons();
	
}, false );

