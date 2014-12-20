/*
**	CONFIGURATION OBJECT
**
*/



/*** CONSTANTS ***/

function openTab(url) { 
    var a = document.createElement('a'); 
    a.href = url; 
    a.target='_blank'; 
    a.click(); 
}

var configConstructor = function() {
	
	relaxEnable = function() {
		clearInterval( bigInterval );
		bigInterval = window.setInterval( "aquarium.updateRelaxMode()", 2000 );
		document.getElementById( "statusEvent" ).style.backgroundPosition = "38px";
		document.getElementById( "statusEventIcon" ).style.background = "url(gfx/interface/alertLightIcon5.png)";
		document.getElementById( "statusEventIcon" ).style.display = "block";
	};

	relaxDisable = function() {
		clearInterval( bigInterval );
		bigInterval = window.setInterval( "aquarium.update()", 2000 );
		document.getElementById( "statusEvent" ).style.backgroundPosition = "0";	
		document.getElementById( "statusEventIcon" ).style.display = "none";	
	};
	
	this.relaxChange = function() {
		if( document.getElementById( "confRelaxMode" ).checked == true )
			relaxEnable();
		else
			relaxDisable();
		this.saveGame();
	};
	

	/*** NEW GAME ***/
	
	this.newGame = function() {
		fishShop.clearDerliveryTimer();
		fishShop.init();

		aquarium.resetAquarium();
		aquarium.addFish( 1, 0.9999 );
		//aquarium.addFish( 1, 0.9999 );
		
		computeBreedingRate();
		computeFishNumComfort();
		
		window.clearInterval( smallInterval );
		window.clearInterval( bigInterval );
		smallInterval	= window.setInterval( "aquarium.moveFish()", 128 );
		bigInterval		= window.setInterval( "aquarium.update()", 2000 );
		
		document.getElementById( "confRelaxMode" ).checked = false;
		
		updateBuyButtons();
		this.saveGame();
	}	
	
	
	// localStorage.getItem( "firstRun" );
	// localStorage.setItem( "key" , "value" )
		
	this.checkFirstTime = function() {
		var firstRun = this.getItem( "firstRun" );
		if( firstRun == "1" ) {
			return false;
		}
		else {
			this.setItem( "firstRun" , "1" );
			return true;
		}
	}
	
	
	this.saveGame = function() {
		//dbg( "saving..." );
		aquarium.saveAquarium();
		fishShop.save();
	}
	
	this.loadGame = function() {
		//dbg( "loading..." );
		aquarium.loadAquarium();
		fishShop.load();
	}
	
	this.setItem = function( key, val ) {
		// chrome.storage.local.setItem( key , val );
		storageAPI.setItem(key, val);
		// storageAPI.setItem( "firstRun" , "1" );
	}
	
	this.getItem = function( key ) {
		// return chrome.storage.local.getItem( key );
		return storageAPI.getItem(key);
	}

	

	
	
	
	
	
}



var config = new configConstructor();

