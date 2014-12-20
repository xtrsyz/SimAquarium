/*
**	AQUARIUM OBJECT MODULE
**	
*/


/*** CONSTANTS ***/

BUY = -1;
SELL = 1;


var aquariumConstructor = function() {


	this.resetAquarium = function() {
		this.resetMoney();
		
		usedScenery = 0
		sceneries.length = 0;
		sceneries[0] = true;
		document.getElementById( "buttonSceneryBuy0" ).setAttribute( "class", "button choose off" );
		for( i = 1; i < 9; i++ ) {
			document.getElementById( "buttonScenerySell" + i ).setAttribute( "class", "button sell off" );
		}
		
		usedLight = 0;
		lights.length = 0;
		lights[0] = true;	
		document.getElementById( "buttonLightBuy0" ).setAttribute( "class", "button choose off" );
		for( i = 1; i < 9; i++ ) {
			document.getElementById( "buttonLightSell" + i ).setAttribute( "class", "button sell off" );
		}
		
		usedFilter = 0;		
		filters.length = 0;
		filters[0]	= true;
		document.getElementById( "buttonFilterBuy0" ).setAttribute( "class", "button choose off" );
		for( i = 1; i < 6; i++ ) {
			document.getElementById( "buttonFilterSell" + i ).setAttribute( "class", "button sell off" );
		}
		
		usedBackground = 0;
		document.getElementById( "buttonBackgroundBuy0" ).setAttribute( "class", "button buy off" );
		document.getElementById( "view0" ).style.background = "url(" + background.getBackgroundData( 0, BG_IMAGE ) + ")";
		
		fish.length = 0;
		//fishNumBySpecies.length = 0;
		for( i = 0; i < 29; i++ ) {
			fishNumBySpecies[i] = 0;
		}
		
		fishNum = 0;
		
		pollution = 0;
		pollutionChanged = false;
		this.updatePollutionBar();
		
		medicine = 0;
		food = 0;
		
		growHormone = 0;
		breedHormone = 0;
		distraction = 0;
		
		killFish = -1;
		breedFish = -1;
	
		fishBirths = 0;
		fishDeaths = 0;
		
		this.updateComfortAquarium();
		this.layerFrontRefresh();
		this.layerBackRefresh();
		updateBuyButtons();
	}
	
	
	
	this.saveAquarium = function() {
	
		config.setItem( "money" , money );
		
		config.setItem( "usedScenery" , usedScenery );
		config.setItem( "usedLight" , usedLight );
		for( i = 0; i < 9; i++ ) {
			if( sceneries[i] == true ) {
				config.setItem( "sceneries" + i , "1" );
			} else {
				config.setItem( "sceneries" + i , "0" );
			}
			if( lights[i] == true ) {
				config.setItem( "lights" + i , "1" );
			} else {
				config.setItem( "lights" + i , "0" );
			}
		}
		config.setItem( "usedFilter" , usedFilter );
		for( i = 0; i < 6; i++ ) {
			if( filters[i] == true ) {
				config.setItem( "filters" + i , "1" );
			} else {
				config.setItem( "filters" + i , "0" );
			}
		}
		config.setItem( "usedBackground" , usedBackground );

		// save the fish
		config.setItem( "fishNum" , fishNum );
		for( i = 0; i < 29; i++ ) {
			config.setItem( "fishNumBySpecies" + i , fishNumBySpecies[i] );
			//dbg( "saved fishnumBS: " + fishNumBySpecies[i] )
		}
		for( i = 0; i < fishNum; i++ ) {
			config.setItem( "fish" + i , fish[i].serialize() );
		}
		
		config.setItem( "pollution" , pollution );
		pollutionChanged = false;
		this.updatePollutionBar();
		
		config.setItem( "medicine" , medicine );
		config.setItem( "food" , food );
		
		config.setItem( "growHormone" , growHormone );
		config.setItem( "breedHormone" , breedHormone );
		config.setItem( "distraction" , distraction );
		
		config.setItem( "killFish" , killFish );
		config.setItem( "breedFish" , breedFish );
		
		config.setItem( "fishBirths" , fishBirths );
		config.setItem( "fishDeaths" , fishDeaths );
		
	}
	
	
	
	this.loadAquarium = function() {
	
		money = parseFloat( config.getItem( "money" ) );
		document.getElementById( "statusMoney" ).innerHTML = parseInt( money );
		
		usedScenery = parseInt( config.getItem( "usedScenery" ) );
		usedLight = parseInt( config.getItem( "usedLight" ) );
		for( i = 0; i < 9; i++ ) {
			var tmp = config.getItem( "sceneries" + i );
			if( tmp == "1" ) {
				sceneries[i] = true;
				if( i != usedScenery ) {
					document.getElementById( "buttonSceneryBuy" + i ).setAttribute( "class", "button choose on" );
				}
				else {
					document.getElementById( "buttonSceneryBuy" + i ).setAttribute( "class", "button choose off" );
				}
				if( i > 0 ) {
					document.getElementById( "buttonScenerySell" + i ).setAttribute( "class", "button sell on" );
				}
			} else {
				sceneries[i] = false;
			}
			
			var tmp = config.getItem( "lights" + i );
			if( tmp == "1" ) {
				lights[i] = true;
				if( i != usedLight ) {
					document.getElementById( "buttonLightBuy" + i ).setAttribute( "class", "button choose on" );
				}
				else {
					document.getElementById( "buttonLightBuy" + i ).setAttribute( "class", "button choose off" );
				}
				if( i > 0 ) {
					document.getElementById( "buttonLightSell" + i ).setAttribute( "class", "button sell on" );
				}
			} else {
				lights[i] = false;
			}
			
		}
		usedFilter = parseInt( config.getItem( "usedFilter" ) );
		for( i = 0; i < 6; i++ ) {
			var tmp = config.getItem( "filters" + i );
			if( tmp == "1" ) {
				filters[i] = true;
				if( i != usedFilter ) {
					document.getElementById( "buttonFilterBuy" + i ).setAttribute( "class", "button choose on" );
				}
				else {
					document.getElementById( "buttonFilterBuy" + i ).setAttribute( "class", "button choose off" );
				}
				if( i > 0 ) {
					document.getElementById( "buttonFilterSell" + i ).setAttribute( "class", "button sell on" );
				}
			} else {
				filters[i] = false;
			}
		}
		usedBackground = parseInt( config.getItem( "usedBackground" ) )||0;
		document.getElementById( "buttonBackgroundBuy" + usedBackground ).setAttribute( "class", "button buy off" );
		document.getElementById( "view0" ).style.background = "url(" + background.getBackgroundData( usedBackground, BG_IMAGE ) + ")";
		
		// load fish data

		tempFishNum = parseInt( config.getItem( "fishNum" ) );
		//dbg( tempFishNum );
		for( i = 0; i < 29; i++ ) {
			var tmp = config.getItem( "fishNumBySpecies" + i );
			fishNumBySpecies[i] = parseInt( tmp );
		} 
		fishNum = 0;
		for( i = 0; i < tempFishNum; i++ ) {
			var serialized = config.getItem( "fish" + i );
			var unSerialize = serialized.split( "|" );
			var spec = parseInt(unSerialize[0]);
			
			fish[i] = new fishConstructor( spec, 0.9999 );
			fishNum++;
		
			//fishNumBySpecies[spec]++;
			
			fish[i].changeData( parseFloat(unSerialize[1]), parseFloat(unSerialize[2]), parseFloat(unSerialize[3]), parseFloat(unSerialize[4]) );
		}
		aquarium.updateComfortSpecies();
		
		pollution = parseFloat( config.getItem( "pollution" ) );
		pollutionChanged = false;
		this.updatePollutionBar();
		
		medicine = parseFloat( config.getItem( "medicine" ) );
		food = parseFloat( config.getItem( "food" ) ) ;
		
		growHormone = parseFloat( config.getItem( "growHormone" ) );
		breedHormone = parseFloat( config.getItem( "breedHormone" ) );
		distraction = parseFloat( config.getItem( "distraction" ) );
		
		killFish = parseInt( config.getItem( "killFish" ) );
		breedFish = parseInt( config.getItem( "breedFish" ) );
	
		fishBirths = parseInt( config.getItem( "fishBirths" ) );
		fishDeaths = parseInt( config.getItem( "fishDeaths" ) );
		
		
		this.updateComfortAquarium();
		this.layerFrontRefresh();
		this.layerBackRefresh();
		updateBuyButtons();
		
	}
	

	
	
	


	/*** AQUARIUM CANVAS & CONTEXT ***/
	var canvasTank;
	var canvasTankCtx;
	var canvasTankGameCtx;

	/*** AQUARIUM MONEY ***/
	var money	= 0;	// 

	this.getMoney = function() {
		return money;
	}
	this.resetMoney = function() {
		money = 100;
		document.getElementById( "statusMoney" ).innerHTML = parseInt( money );
	}	
	
	
	changeMoney = function( diff ) {
		//dbg( "changeMoney( " + diff + " )" )
		if( money + diff < 0 ) return false;
		money = money + diff;
		document.getElementById( "statusMoney" ).innerHTML = parseInt( money );
		return true;
	}
	
		
		
	
	/*** AQUARIUM SCENERIES ***/

	var usedScenery = 0;			// Which scenery is used in the aquarium;
	var sceneries	= new Array();	// Which sceneries are available to the user
	this.getSceneries = function( sNum ) {
		return sceneries[sNum];
	}
	
	sceneries[0]	= true;			// The first scenery is always available


	
	this.buyScenery = function( scNum ) {
		if( sceneries[scNum] ) {
			this.chooseScenery( scNum )
		}
		else {
			if( changeMoney( BUY * scenery.getSceneryData( scNum, SC_PRICE ))) {
				document.getElementById( "buttonSceneryBuy" + scNum ).setAttribute( "class", "button choose on" );
				if (scNum) document.getElementById( "buttonScenerySell" + scNum ).setAttribute( "class", "button sell on" );
				sceneries[scNum] = true;
				this.chooseScenery( scNum );
				updateBuyButtons();
				
			}
		}
	}	
	this.chooseScenery = function( scNum ) {
		//dbg( "chooseScenery( " + scNum + " )" )
		usedScenery = parseInt(usedScenery)||0;
		if( sceneries[usedScenery] )
			document.getElementById( "buttonSceneryBuy" + usedScenery ).setAttribute( "class", "button choose on" );
		else
			document.getElementById( "buttonSceneryBuy" + usedScenery ).setAttribute( "class", "button buy on" );
		
		document.getElementById( "buttonSceneryBuy" + scNum ).setAttribute( "class", "button choose off" );
		usedScenery = scNum;
		this.updateComfortAquarium();
		this.layerFrontRefresh();
		this.layerBackRefresh();
		config.saveGame();
	}
	
	this.sellScenery = function( scNum ) {
		if( !sceneries[scNum] )
			return;
	
		changeMoney( SELL * scenery.getSceneryData( scNum, SC_PRICE ) * 0.5 );
		document.getElementById( "buttonSceneryBuy" + scNum ).setAttribute( "class", "button buy on" );
		document.getElementById( "buttonScenerySell" + scNum ).setAttribute( "class", "button sell off" );
		sceneries[scNum] = false;

		// Return to custom scenery if you sell current scenery
		if( scNum == usedScenery )
			this.chooseScenery( 0 );
		updateBuyButtons();
	}	
	
	
	/*** AQUARIUM LIGHTING ***/
	
	
	var usedLight = 0;			// Which scenery is used in the aquarium;
	var lights	= new Array();	// Which sceneries are available to the user
	lights[0]	= true;			// The first scenery is always available


	
	this.buyLight = function( liNum ) {
		if( lights[liNum] ) {
			this.chooseLight( liNum )
		}
		else {
			if( changeMoney( BUY * lighting.getLightData( liNum, LI_PRICE ))) {
				document.getElementById( "buttonLightBuy" + liNum ).setAttribute( "class", "button choose on" );
				if (liNum) document.getElementById( "buttonLightSell" + liNum ).setAttribute( "class", "button sell on" );
				lights[liNum] = true;
				this.chooseLight( liNum );
				updateBuyButtons();
			}
		}
	}	
	
	
	this.chooseLight = function( liNum ) {
		if( lights[usedLight] )
			document.getElementById( "buttonLightBuy" + usedLight ).setAttribute( "class", "button choose on" );
		else
			document.getElementById( "buttonLightBuy" + usedLight ).setAttribute( "class", "button buy on" );
		
		document.getElementById( "buttonLightBuy" + liNum ).setAttribute( "class", "button choose off" );
		usedLight = liNum;
		this.updateComfortAquarium();
		this.layerFrontRefresh();
		this.layerBackRefresh();
		config.saveGame();
	}
	
	this.sellLight = function( liNum ) {
		if( !lights[liNum] )
			return;
	
		changeMoney( SELL * lighting.getLightData( liNum, LI_PRICE ) * 0.5 );
		document.getElementById( "buttonLightBuy" + liNum ).setAttribute( "class", "button buy on" );
		document.getElementById( "buttonLightSell" + liNum ).setAttribute( "class", "button sell off" );
		lights[liNum] = false;

		// Return to custom scenery if you sell current scenery
		if( liNum == usedLight )
			this.chooseLight( 0 );
		updateBuyButtons();
	}	
	
	
	
	
	
	/*** AQUARIUM FILTERS ***/
	
	
	var usedFilter = 0;			// Which scenery is used in the aquarium;
	var filters	= new Array();	// Which sceneries are available to the user
	filters[0]	= true;			// The first scenery is always available
	
	this.buyFilter = function( fiNum ) {
		if( filters[fiNum] ) {
			this.chooseFilter( fiNum )
		}
		else {
			if( changeMoney( BUY * filtration.getFilterData( fiNum, FI_PRICE ))) {
				document.getElementById( "buttonFilterBuy" + fiNum ).setAttribute( "class", "button choose on" );
				if (fiNum) document.getElementById( "buttonFilterSell" + fiNum ).setAttribute( "class", "button sell on" );
				filters[fiNum] = true;
				this.chooseFilter( fiNum );
				updateBuyButtons();
				
			}
		}
	}	
	
	this.chooseFilter = function( fiNum ) {
		if( filters[usedFilter] )
			document.getElementById( "buttonFilterBuy" + usedFilter ).setAttribute( "class", "button choose on" );
		else
			document.getElementById( "buttonFilterBuy" + usedFilter ).setAttribute( "class", "button buy on" );
		
		document.getElementById( "buttonFilterBuy" + fiNum ).setAttribute( "class", "button choose off" );
		usedFilter = fiNum;
		this.layerFrontRefresh();
		this.layerBackRefresh();
		config.saveGame();
	}
	
	this.sellFilter = function( fiNum ) {
		if( !filters[fiNum] )
			return;
	
		changeMoney( SELL * filtration.getFilterData( fiNum, FI_PRICE ) * 0.5 );
		document.getElementById( "buttonFilterBuy" + fiNum ).setAttribute( "class", "button buy on" );
		document.getElementById( "buttonFilterSell" + fiNum ).setAttribute( "class", "button sell off" );
		filters[fiNum] = false;

		// Return to custom scenery if you sell current scenery
		if( fiNum == usedFilter )
			this.chooseFilter( 0 );
		updateBuyButtons();
	}	
	
	
	/*** BUY AQUARIUM BACKGROUNS ***/
	
	var usedBackground = 0;			// Which background is used in the aquarium;
	
	this.buyBackground = function( bgNum ) {
		if( usedBackground == bgNum )
			return;

		if( changeMoney( BUY * background.getBackgroundData( bgNum, BG_PRICE ))) {
			document.getElementById( "buttonBackgroundBuy" + usedBackground ).setAttribute( "class", "button buy on" );
			document.getElementById( "buttonBackgroundBuy" + bgNum ).setAttribute( "class", "button buy off" );
			document.getElementById( "view0" ).style.background = "url(" + background.getBackgroundData( bgNum, BG_IMAGE ) + ")";
			usedBackground = bgNum;
			updateBuyButtons();
			config.saveGame();
		}
	
	}
	
	
	
	
	
	
	
	/*** UPDATE AQUARIUM SCENERIES - DISABLE OPTIONS YOU CAN'T AFFORD ***/
	
	updateBuyButtons = function() {
	
		fishShop.updateView();
	
		for( i = 0; i < 9; i++ ) {
	
			// update sceneries view
			if( !sceneries[i] ) {
				if( aquarium.getMoney() < scenery.getSceneryData( i, SC_PRICE )) {
					document.getElementById( "buttonSceneryBuy" + i ).setAttribute( "class", "button buy off" );
				} else {
					document.getElementById( "buttonSceneryBuy" + i ).setAttribute( "class", "button buy on" );
				}
			}
			
			// update lights view
			if( !lights[i] ) {
				if( aquarium.getMoney() < lighting.getLightData( i, LI_PRICE )) {
					document.getElementById( "buttonLightBuy" + i ).setAttribute( "class", "button buy off" );
				} else {
					document.getElementById( "buttonLightBuy" + i ).setAttribute( "class", "button buy on" );
				}
			}
		}
		
		
		for( i = 0; i < 6; i++ ) {
			// update filters view
			if( !filters[i] ) {
				
				if( aquarium.getMoney() < filtration.getFilterData( i, FI_PRICE )) {
					document.getElementById( "buttonFilterBuy" + i ).setAttribute( "class", "button buy off" );
				} else {
					document.getElementById( "buttonFilterBuy" + i ).setAttribute( "class", "button buy on" );
				}
			}
		}
		
		
		for( i = 0; i < 15; i++ ) {
			// update filters view
			if( i != usedBackground ) {
				
				if( aquarium.getMoney() < background.getBackgroundData( i, BG_PRICE )) {
					document.getElementById( "buttonBackgroundBuy" + i ).setAttribute( "class", "button buy off" );
				} else {
					document.getElementById( "buttonBackgroundBuy" + i ).setAttribute( "class", "button buy on" );
				}
			}
		}
		
		
		
	}
	

	this.updateBuyButtonsAlias = function() {
		updateBuyButtons();
	}
	
	

	
	/*** AQUARIUM IMAGES ***/
	
	var imageGlassFront	= new Image();
	var imageWater		= new Image();
	var imageGlassBack	= new Image();
	imageGlassFront.src	= "gfx/aquarium/tank/glassFront.png";
	imageWater.src		= "gfx/aquarium/tank/water.png";
	imageGlassBack.src	= "gfx/aquarium/tank/glassBack.png";
	
	
	/*** AQUARIUM LAYERS ***/
	
	var layerFront		= document.createElement( "canvas" );
	layerFront.setAttribute( "width", 360 );
	layerFront.setAttribute( "height", 240 );
	var layerFrontCtx	= layerFront.getContext( "2d" );

	var layerBack		= document.createElement( "canvas" );
	layerBack.setAttribute( "width", 360 );
	layerBack.setAttribute( "height", 240 );
	var layerBackCtx	= layerBack.getContext( "2d" );
	
	this.layerFrontRefresh = function() {
		//dbg("layerFrontRefresh")
		layerFrontCtx.clearRect( 0, 0, 360, 240 );
		layerFrontCtx.drawImage( scenery.getSceneryData( usedScenery, SC_FGIMAGE ), 0, 0 );
		layerFrontCtx.drawImage( imageWater, 0, 16 );
		layerFrontCtx.drawImage( lighting.getLightData( usedLight, LI_IMAGE ), 0, 0 );
		layerFrontCtx.drawImage( imageGlassFront, 0, 0 );
	}
	this.layerBackRefresh = function() {
		//dbg("layerFrontRefresh")
		layerBackCtx.clearRect( 0, 0, 360, 240 );
		layerBackCtx.drawImage( imageGlassBack, 0, 0 );
		layerBackCtx.drawImage( filtration.getFilterData( usedFilter, FI_IMAGE ), 10, 0 );
		layerBackCtx.drawImage( scenery.getSceneryData( usedScenery, SC_BGIMAGE ), 0, 0 );
	}
	
	
	/*** CREATE THE AQUARIUM ***/
	
	this.create = function() {
		canvasTank = document.getElementById( "tank" );
		canvasTankCtx = canvasTank.getContext( '2d' );
		canvasTankGameCtx = canvasTank.getContext( 'opera-2dgame' );
		this.layerBackRefresh();
		this.layerFrontRefresh();
	}

	
	
	//Photo MAKING
	
	this.exportPhoto = function() {

		var tempCanvas = document.createElement( "canvas" );
		tempCanvas.setAttribute( "width", 360 );
		tempCanvas.setAttribute( "height", 240 );
		tempCtx = tempCanvas.getContext( "2d" );
		tempCtx.globalCompositeOperation = "source-over";
		
		// DRAW BACKGROUND
		tempCtx.fillStyle = "white";
		tempCtx.fillRect( 0, 0, 360, 240 );
		var wall = new Image();
		wall.src = background.getBackgroundSrc( usedBackground );
		for( x = 0; x < 6; x++ ) {
			for( y = 0; y < 4; y++ ) {
				tempCtx.drawImage( wall, x * 64, y * 64 );
			}
		}
		
		// DRAW TANK
		tempCtx.drawImage( layerBack, 0, 0 );
		for( i = 0; i < fishNum; i++ ) {
			var fishObj = fish[i];
			tempCtx.save();
				tempCtx.translate( fishObj.getX(), fishObj.getY() );
				tempCtx.rotate( fishAngle[ fishObj.getVX() ][ fishObj.getVY() ] );
				tempCtx.translate( fishObj.getBoxX1(), fishObj.getBoxY1() );
				tempCtx.drawImage( fishObj.getImage(), 0, 0, fishObj.getSizeX(), fishObj.getSizeY() );
			tempCtx.restore();
		}
		tempCtx.drawImage( layerFront, 0, 0 );
		// widget.openURL( tempCanvas.toDataURL() );
		// parent.postMessage({'command':'openURL','url': tempCanvas.toDataURL()}, "*");
		
	}
	
	
	
	
	
	
	
	
	/******** 
	*********
	F   I  S  H 
	*********
	*********/
	
	
	
	
	
	
	/*** ADD/REMOVE THE FISH IN THE AQUARIUM ***/
	
	var fish = new Array(); // the list of all fish
		
	var fishNum = 0; // number of fish in the aquarium
	this.getFishNum = function() { return fishNum }
	
	var fishNumBySpecies = new Array(); // number of every specie in the aquarium
	for( i = 0; i < 29; i++ ) {
			fishNumBySpecies[i] = 0;
	}
	
	this.getFishNumBySpecies = function( fSpec ) {
		//dbg( fishNumBySpecies[ fSpec ] );
		return fishNumBySpecies[ fSpec ];
	}
	
	// Add a fish by species
	this.addFish = function( sNum, size ) {
		fish[fishNum] = new fishConstructor( sNum, size );
		fishNum++;
		
		fishNumBySpecies[sNum]++;
			
		aquarium.updateComfortSpecies();
	}


	
	// Remove specific fish
	this.removeFish = function( fNum ) {
		//dbg( "this.removeFish( " + fNum + ")" ) 
		if( fNum >= fishNum )
			return;
	
		fishNumBySpecies[ fish[ fNum ].getSpecNum() ]--;
		
		for( i = fNum + 1; i < fishNum; i++ ) {
			fish[i-1] = fish[i];
		}
		
		fishNum--;
		
		fish.length = fishNum;
		
		aquarium.updateComfortSpecies();
		
	}
	
	// Fish is attacked and hurt
	this.hurtFish = function( fNum, hurtNum   ) {
	
		fish[fNum].changeCondition( hurtNum );
	
	}
	

	
	
	
	
	/*** AQUARIUM POLUTION ***/
	
	var pollution = 0;
	var pollutionChanged = false;
	
	this.getPollution = function() {
		return pollution;
	}
	
	this.changePollution = function( change ) {
		pollution = pollution + change;
		if( pollution < 0 )
			pollution = 0;
		else if( pollution > 32 )
			pollution = 32;
		pollutionChanged = true;
	}
	
	this.resetPollution = function() {
		pollution = 0;
		pollutionChanged = true;
	}
	
	this.updatePollutionBar = function() {
		document.getElementById( "statusWaterBar" ).style.height = parseInt( pollution ) + "px";
		pollutionChanged = false;
	}
	
	
	
	/***AQUARIUM CLEANING ***/
	
	this.clean = function() {
		if( pollution < 1)
			return;
		if( changeMoney( -10 )) {
			this.changePollution( ( Math.random() * -4 ) - 2);
			this.updatePollutionBar();
			updateBuyButtons();
			stats.refreshStatsPage();
		}
	}
	
	
	this.waterChange = function() {
		if( pollution < 1)
			return;
		if( changeMoney( -40 )) {
			this.resetFood();
			this.resetMedicine();
			this.resetPollution();
			this.resetGrowHormone();
			this.resetBreedHormone();
			this.updatePollutionBar();
			updateBuyButtons();
			stats.refreshStatsPage();
		}
	}
	
	
	/*** AQUARIUM MEDICINE, FOOD AND HORMONES ***/
	
	/*** MEDICINE ***/
	
	var medicine			= 0;
	this.getMedicine = function() { return medicine };
	this.changeMedicine = function( medNum ) {
		medicine = medicine + medNum;
		if( medicine < 0 )
			medicine = 0;
		if( medicine > 100 )
			medicine = 100;
	}
	this.resetMedicine = function() {
		medicine = 0;
	}
	this.updateMedicine = function() {
		medicineMelt = Math.random();
	
		if( medicine > 0 ) {
			this.changeMedicine( medicineMelt * -0.8 );
			this.changePollution( medicineMelt * 0.02 );
		}
	}
	
	this.addMedicine = function() {
		
		if( changeMoney( -20 )) {
			//this.changePollution( pollution );
			this.changeMedicine( ( Math.random() * 4 ) + 4 );
			updateBuyButtons();
			stats.refreshStatsPage();
		}
	}
	
	/*** FOOD ***/
	
	
	var food			= 0;
	this.getFood = function() { return food };

	this.changeFood = function( foodNum ) {
		food = food + foodNum;
		if( food < 0 )
			food = 0;
		if( food > 100 )
			food = 100;
	}
	
	this.resetFood = function() {
		food = 0;
	}
	
	this.updateFood = function() {
	
		foodMelt = Math.random();
	
		if( food > 0 ) {
			this.changeFood( foodMelt * -0.04 );
			this.changePollution( foodMelt * 0.01 );
		}
	}
	
	this.addFood = function() {
		if( changeMoney( -20 )) {
			//this.changePollution( 1 );
			this.changeFood( ( Math.random() * 8 ) + 8 );
			updateBuyButtons();
			stats.refreshStatsPage();
		}
	
	}
	
	/*** HORMONES ***/ 
	
	// GROW HORMONE
	var growHormone		= 0;
	
	this.getGrowHormone = function() {
		return growHormone;
	}
	
	this.resetGrowHormone = function() {
		growHormone = 0;
	}
	
	this.changeGrowHormone = function( ghNum ) {
		growHormone = growHormone + ghNum;
		if( growHormone < 0 )
			 growHormone = 0;
		if( growHormone > 100 )
			 growHormone = 100;
	}
	this.updateGrowHormone = function() {
		growHormoneMelt = Math.random();
		if( growHormone > 0 ) {
			this.changeGrowHormone( growHormoneMelt * -0.1 );
			this.changePollution( growHormoneMelt * 0.5 );
			//dbg( "growH: " + growHormone );
		}
	}
	
	this.addGrowHormone = function() {
		if( changeMoney( -100 )) {
			this.changePollution( 2 );
			this.changeGrowHormone( ( Math.random() * 4 ) + 4 );
			updateBuyButtons();
			stats.refreshStatsPage();
		}
	}
	
	
	
	
	// BREED HORMONE
	var breedHormone	= 0;
	
	this.getBreedHormone = function() {
		return breedHormone;
	}
	
	this.resetBreedHormone = function() {
		breedHormone = 0;
	}
	
	this.changeBreedHormone = function( bhNum ) {
		breedHormone = breedHormone + bhNum;
		if( breedHormone < 0 )
			 breedHormone = 0;
		if( breedHormone > 100 )
			 breedHormone = 100;
	}
	
	this.updateBreedHormone = function() {
		breedHormoneMelt = Math.random();
		if( breedHormone > 0 ) {
			this.changeBreedHormone( breedHormoneMelt * -0.2 );
			this.changePollution( breedHormoneMelt );
			//dbg( "breedH: " + breedHormone );
		}
	}
	
	this.addBreedHormone = function() {
		if( changeMoney( -200 )) {
			this.changePollution( 4 );
			this.changeBreedHormone( ( Math.random() * 4 ) + 4 );
			updateBuyButtons();
			stats.refreshStatsPage();
		}
	}
	
	
	/*** AQUARIUM DISTRASTION - CONFUSES FISH SO THEY DON'T ATTACK ***/
	var distraction = 0;
	
	this.getDistraction = function() { return distraction };
	
	this.distractFish = function() {
		distraction = distraction + 10;
		if( distraction > 100 )
			distraction = 100;
		stats.refreshStatsPage();
	}
	
	this.updateDistraction = function() {
		if( distraction == 0 )
			return;
		distraction--;
		//dbg("distraction " + distraction)
	}
	
	
	
	/*** SCARE / ATTRACT THE FISH ***/
	this.scareFish = function() {
		var dirX, dirY;
		if( changeMoney( -5 )) {
			for( i = 0; i < fishNum; i++ ) {
				if( fish[i].getX() > 180 ) dirX = 10; else dirX = -10;
				if( fish[i].getY() > 120 ) dirY = 5; else dirY = -5;
				fish[i].rotate( dirX, dirY );
				fish[i].speedUp();
			}
			updateBuyButtons();
			this.distractFish();
		}
	}
	
	this.attractFish = function() {
		if( changeMoney( -5 )) {
			for( i = 0; i < fishNum; i++ ) {
				if( fish[i].getX() > 180 ) dirX = -10; else dirX = 10;
				if( fish[i].getY() > 120 ) dirY = -5; else dirY = 5;
				fish[i].rotate( dirX, dirY );
				fish[i].speedUp();
			}
			updateBuyButtons();
			this.distractFish();
		}
	}
	
	
	
	
	/*** *** REFRESH THE AQUARIUM *** ***/
	
	
	/* MOVE FISH EVERY 32/1000 -- 1024/1000 SECONDS */
	this.moveFish = function() {
		for( i = 0; i < fishNum; i++ )
			fish[i].move();
		if( uio.getView() == VIEW_AQUARIUM )
			this.render();
	}
	

	

	killFish = -1;
	breedFish = -1;
	
	var fishBirths = 0;
	var fishDeaths = 0;
	this.getFishBirths = function() { return fishBirths; };
	this.getFishDeaths = function() { return fishDeaths; };
	
	
	this.breedFishSet = function( bSpec ) {
		breedFish = bSpec;
	}
	
	/* UPDATE AQUARIUM EVERY 2 SECONDS */
	this.update = function() {
		

		
		/* FISH UPDATE */
		for( i = 0; i < fishNum; i++ ) {

			// Swim variations
			swimVar = Math.random();
			if( swimVar < 0.3 ) fish[i].speedUp();
			if( swimVar < 0.2 ) fish[i].changeDirection();
			
			// Grow
			fish[i].grow();
			
			// Breed
			fish[i].breed();
			
			// Pollute water
			fish[i].pollute();
			
			// Diseases & Heal
			fish[i].diseaseCheck();
			
			// Hunger & Eat
			fish[i].hungerCheck();
			
			//dbg("Attack");
			// Attack
			fish[i].fight( i );
			
			//dbg("Getting older");
			// Getting older
			fish[i].getOld();

			// Death Check
			if( fish[i].getCondition() <= 0 ) {
				killFish = i;
			}
				
		}
		
		/* FILTERS UPDATE */
		if( pollution > 0 ) {
			if( changeMoney( filtration.getFilterData( usedFilter, FI_ENERGY ))) {
				aquarium.changePollution( filtration.getFilterData( usedFilter, FI_POLLUTION ) );
				
			}
		}
		
		/* LIGHTS UPDATE */
		
		/* MEDICINE UPDATE */
		this.updateMedicine();
		
		/* FOOD UPDATE */
		this.updateFood();
		
		/* HORMONES UPDATE */
		this.updateGrowHormone();
		this.updateBreedHormone();
		
		/* DISTRACTION UPDATE */
		this.updateDistraction();
		
		
		/* GUI UPDATE */
		
		// pollution bar
		if( pollutionChanged ) {
			this.updatePollutionBar();
			// opera.postError
			// config.saveGame();
			console.error
		}
		
		
		
		/*** BREED A NEW FISH ***/
		if( breedFish > -1 ) {
			fishBirths++;
			this.addFish( breedFish, 0.2 );
			breedFish = -1;
			uio.changeAlertNum( 2 );
			config.saveGame();
		}
		
		/*** REMOVE DEAD FISH  ***/
		if( killFish > -1 ) {
			fishDeaths++;
			this.removeFish( killFish  )
			killFish = -1;
			uio.changeAlertNum( 3 );
			config.saveGame();
		}
		
		
		
		
		
		
		// animate icon
		if( uio.getAlertNum() > -1 ) {
			uio.blikStatusWidgetIcon();
			uio.changeAlertNum( -1 );
		}
		
		stats.refreshStatsPage();
	

	}
	
	
	
	
	/* UPDATE AQUARIUM IN RELAX MODE EVERY 2 SECONDS */
	this.updateRelaxMode = function() {		
		/* FISH UPDATE */
		for( i = 0; i < fishNum; i++ ) {
			// Swim variations
			swimVar = Math.random();
			if( swimVar < 0.3 ) fish[i].speedUp();
			if( swimVar < 0.2 ) fish[i].changeDirection();
		}
	}
	
	
	
	

	/*** COMPUTE THE COMFORT FACTOR ***/
	// Affects probability of breading and attacking other fishes

	var comfortAquarium; // global aquarium factor
	this.getComfortAquarium = function() { return comfortAquarium; }

	this.updateComfortAquarium = function() {
		comfortAquarium = lighting.getLightData( usedLight, LI_COMFORT ) * scenery.getSceneryData( usedScenery, SC_COMFORT );
		computeBreedingRate();
		
		//dbg( comfortAquarium );
			
	}

	this.updateComfortSpecies = function() {
		computeFishNumComfort();
	}
		

	
	
	
	
	
	
	/*** AQUARIUM RENDERING ***/

	this.render = function() {
		canvasTankCtx.clearRect( 0, 0, 360, 240 );
		renderBackground();
		for( i = 0; i < fishNum; i++ ) {
			renderFish( fish[i] );
		}
		renderForeground();
	}
	
	var renderForeground = function() {
		canvasTankCtx.drawImage( layerFront, 0, 0 );
	}

	var renderBackground = function() {
		canvasTankCtx.drawImage( layerBack, 0, 0 );
	}	
	
	var renderFish = function( fishObj ) {
		canvasTankCtx.save();
			canvasTankCtx.translate( fishObj.getX(), fishObj.getY() );
			canvasTankCtx.rotate( fishAngle[ fishObj.getVX() ][ fishObj.getVY() ] );
			canvasTankCtx.translate( fishObj.getBoxX1(), fishObj.getBoxY1() );
			canvasTankCtx.drawImage( fishObj.getImage(), 0, 0, fishObj.getSizeX(), fishObj.getSizeY() );
		canvasTankCtx.restore();
	}


	
	// FOR STATISTICS
	/*** return fish species ***/
	
	this.returnSpecNum = function( fNum ) {
		return fish[fNum].getSpecNum();
	}
	
	this.returnSpecName = function( fNum ) {
		return fishSpecies[ fish[fNum].getSpecNum() ][SPEC_NAME];
	}
	
	this.returnFishCondition = function( fNum ) {
		return fish[fNum].getCondition();
	}
	
	this.returnFishHunger = function( fNum ) {
		return fish[fNum].getHunger();
	}
	this.returnFishDisease = function( fNum ) {
		return fish[fNum].getDisease();
	}
	
	this.returnFishSize = function( fNum ) {
		return fish[fNum].getSize();
	}
	
	
	// sell fish
	this.sellFish = function( fNum ) {
		changeMoney( fishSpecies[fish[fNum].getSpecNum()][SPEC_PRICE] / 2 );
		aquarium.removeFish( fNum );
		updateBuyButtons();
		stats.updateFishListTable();
	}
	
	this.addMoney = function( mNum ) {
		changeMoney( mNum );
	}
	
}

var aquarium = new aquariumConstructor();
aquarium.updateComfortAquarium();
