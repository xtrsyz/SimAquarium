/*
**	FISH SHOP OBJECT
**
*/



/*** CONSTANTS ***/

SHOPSLOT_SPEC	= 0;
SHOPSLOT_NUM	= 1;
SHOPSLOT_NAME	= 2;
SHOPSLOT_PRICE	= 3;
SHOPSLOT_LINK	= 4;

TIME_SECOND		= 1000;
TIME_MINUTE		= 60000;
TIME_HOUR		= 3600000;


var fishShopConstructor = function() {

	/*** FISH SHOP INIT ***/
	
	var fishShopSlot = new Array();
	
	/* Initialize the fish shop */
	this.init = function() {
		fishShopDeliveryTime = 60;
		for( i = 0; i < 9; i++ ) {
			fishShopSlot[i] = new Array();
		}	
		delivery();
		this.updateDeliveryTime(); // start the fish shop counter
	}
	
	
	/*** FISH SHOP DELIVERY ***/
	
	delivery = function() {
		for( i = 0; i < 9; i++ ) {
				fishShopSlot[i][SHOPSLOT_SPEC]	= ( 3 * i ) + parseInt( Math.random() * 3 ) + 1;
				
				// DOLPHIN IS A RARITY AND YOU NEED TO HAVE A SWIMMING POOL TO GET IT
				if( i == 8 ) {
					if( aquarium.getSceneries( 4 ) ) {
						if( Math.random() < 0.1 ) {
							fishShopSlot[i][SHOPSLOT_SPEC] = 28;
						}
					}
				}
				
				fishShopSlot[i][SHOPSLOT_NUM]	= parseInt( ( Math.random() * ( 10 - i ) + ( 10 - i )) / 2 );
				fishShopSlot[i][SHOPSLOT_NAME]	= fishSpecies[fishShopSlot[i][SHOPSLOT_SPEC]][SPEC_NAME];
				fishShopSlot[i][SHOPSLOT_PRICE]	= fishSpecies[fishShopSlot[i][SHOPSLOT_SPEC]][SPEC_PRICE];
				fishShopSlot[i][SHOPSLOT_LINK]	= fishSpecies[fishShopSlot[i][SHOPSLOT_SPEC]][SPEC_LINK];
				
				document.getElementById( "fishSlot" + i ).children[0].innerHTML = fishShopSlot[i][SHOPSLOT_NAME];
				document.getElementById( "fishSlot" + i ).children[2].innerHTML = fishShopSlot[i][SHOPSLOT_PRICE];
				document.getElementById( "fishSlot" + i ).children[3].innerHTML = fishShopSlot[i][SHOPSLOT_NUM];
				document.getElementById( "fishSlot" + i ).children[1].style.backgroundImage = "url(gfx/aquarium/fishes/fish" + fishShopSlot[i][SHOPSLOT_SPEC] + "R.png)";
			}	
	}

		
	/*** FISH SHOP DELIVERY TIMER ***/
	
	var fishShopDeliveryTime = 60;
	var fishShopTimer;
	
	this.setDeliveryTimer = function() {
		fishShopTimer = window.setTimeout( "fishShop.updateDeliveryTime()", TIME_MINUTE );
	}

	this.clearDerliveryTimer = function() {
		window.clearTimeout( fishShopTimer );
	}
	
	this.updateDeliveryTime = function() {
		fishShopDeliveryTime--;
		if( fishShopDeliveryTime == 0 ) {
			delivery();
			aquarium.updateBuyButtonsAlias();
			fishShopDeliveryTime = 60;
		}
		document.getElementById( "newFishTime" ).innerHTML = fishShopDeliveryTime;
		fishShopTimer = window.setTimeout( "fishShop.updateDeliveryTime()", TIME_MINUTE );
	}
	


	/*** OPEN FISH INFO ***/
	this.openFishInfo = function( slotNum ) {
		// widget.openURL( fishShopSlot[slotNum][SHOPSLOT_LINK] );
		window.open( fishShopSlot[slotNum][SHOPSLOT_LINK] );
	}
	
	
	/*** BUY FISH ***/
	this.buyFish = function( slotNum ) {
		if( fishShopSlot[slotNum][SHOPSLOT_NUM] < 1 ) return;
		if( aquarium.getFishNum() > 63 ) return;
		
		if( changeMoney( BUY * fishShopSlot[slotNum][SHOPSLOT_PRICE] )) {
		
			aquarium.addFish( fishShopSlot[slotNum][SHOPSLOT_SPEC], 0.4 );
			fishShopSlot[slotNum][SHOPSLOT_NUM]--;
			document.getElementById( "fishSlot" + slotNum ).children[3].innerHTML = fishShopSlot[slotNum][SHOPSLOT_NUM];
			aquarium.updateBuyButtonsAlias();
			config.saveGame();
		}
	}
	
	
	this.updateView = function() {
		for( i = 0; i < 9; i++ ) {
		
			if( fishShopSlot[i][SHOPSLOT_PRICE] > aquarium.getMoney() ) {
				document.getElementById( "fishSlot" + i ).children[5].setAttribute( "class", "button buy off" );
			}
			else if( fishShopSlot[i][SHOPSLOT_NUM] == 0 ) {
				document.getElementById( "fishSlot" + i ).children[5].setAttribute( "class", "button buy off" );
			}
			else {
				document.getElementById( "fishSlot" + i ).children[5].setAttribute( "class", "button buy on" );
			}		

		}
	}
	
	
	this.save = function() {
		for( i = 0; i < 9; i++ ) {
		
			localStorage.setItem( "fishShopSlot" + i + "spec" , fishShopSlot[i][SHOPSLOT_SPEC] );
			localStorage.setItem( "fishShopSlot" + i + "num" , fishShopSlot[i][SHOPSLOT_NUM] );
			localStorage.setItem( "fishShopSlot" + i + "name" , fishShopSlot[i][SHOPSLOT_NAME] );
			localStorage.setItem( "fishShopSlot" + i + "price" , fishShopSlot[i][SHOPSLOT_PRICE] );
			localStorage.setItem( "fishShopSlot" + i + "link" , fishShopSlot[i][SHOPSLOT_LINK] );
			localStorage.setItem( "fishShopDeliveryTime" , fishShopDeliveryTime );
			
		}	
	}

	this.load = function() {
		for( i = 0; i < 9; i++ ) {
			fishShopSlot[i][SHOPSLOT_SPEC] = parseInt( localStorage.getItem( "fishShopSlot" + i + "spec" ) );
			fishShopSlot[i][SHOPSLOT_NUM] = parseInt( localStorage.getItem( "fishShopSlot" + i + "num" ) );
			fishShopSlot[i][SHOPSLOT_NAME] = localStorage.getItem( "fishShopSlot" + i + "name" );
			fishShopSlot[i][SHOPSLOT_PRICE] = parseInt( localStorage.getItem( "fishShopSlot" + i + "price" ) );
			fishShopSlot[i][SHOPSLOT_LINK] = localStorage.getItem( "fishShopSlot" + i + "link" );
			fishShopDeliveryTime = localStorage.getItem( "fishShopDeliveryTime" );
			
			document.getElementById( "newFishTime" ).innerHTML = fishShopDeliveryTime;			
			document.getElementById( "fishSlot" + i ).children[0].innerHTML = fishShopSlot[i][SHOPSLOT_NAME];
			document.getElementById( "fishSlot" + i ).children[2].innerHTML = fishShopSlot[i][SHOPSLOT_PRICE];
			document.getElementById( "fishSlot" + i ).children[3].innerHTML = fishShopSlot[i][SHOPSLOT_NUM];
			document.getElementById( "fishSlot" + i ).children[1].style.backgroundImage = "url(gfx/aquarium/fishes/fish" + fishShopSlot[i][SHOPSLOT_SPEC] + "R.png)";
		}
	}
	
	
}



var fishShop = new fishShopConstructor();

