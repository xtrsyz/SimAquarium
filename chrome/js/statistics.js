/*
**	STATISTICS OBJECT
**
*/


var statsConstructor = function() {


	this.createFishListTable = function() {
		for( i = 0; i < 64; i++ ) {
		
			var ftSlot			 = document.createElement( "div" );
			var ftSlotName		= document.createElement( "div" );
			var ftSlotHealth	= document.createElement( "div" );
			var ftSlotHealthBar	= document.createElement( "div" );
			var ftSlotHunger	= document.createElement( "div" );
			var ftSlotHungerBar	= document.createElement( "div" );
			var ftSlotSick		= document.createElement( "div" );
			var ftSlotSize		= document.createElement( "div" );
			var ftSlotSell		= document.createElement( "div" );
			var ftSlotPrice		= document.createElement( "div" );
			
			ftSlot.setAttribute( "class", "fishTableRow" );
			ftSlot.setAttribute( "id", "fishTableRow" + i );
			ftSlot.setAttribute( "style", "display: none;" );
			
			ftSlotName.setAttribute( "class", "fishTableSpeciesName" );
			ftSlotName.setAttribute( "id", "fishTableSpeciesName" + i );

			ftSlotHealth.setAttribute( "class", "fishTableHealthBox" );
			ftSlotHealth.setAttribute( "id", "fishTableHealthBox" + i );

			ftSlotHealthBar.setAttribute( "class", "fishTableHealthBoxBar" );
			ftSlotHealthBar.setAttribute( "id", "fishTableHealthBoxBar" + i );
			
			ftSlotHunger.setAttribute( "class", "fishTableHungerBox" );
			ftSlotHunger.setAttribute( "id", "fishTableHungerBox" + i );
			
			ftSlotHungerBar.setAttribute( "class", "fishTableHungerBoxBar" );
			ftSlotHungerBar.setAttribute( "id", "fishTableHungerBoxBar" + i );
			
			ftSlotSick.setAttribute( "class", "fishTableSickBox" );
			ftSlotSick.setAttribute( "id", "fishTableSickBox" + i );
			
			ftSlotSize.setAttribute( "class", "fishTableSizeBox" );
			ftSlotSize.setAttribute( "id", "fishTableSizeBox" + i );	
			
			ftSlotSell.setAttribute( "class", "button sell on" );
			ftSlotSell.setAttribute( "id", "fishTableSellFish" + i );
			
			ftSlotPrice.setAttribute( "class", "money" );
			ftSlotPrice.setAttribute( "id", "fishTablePrice" + i );	
			
			
			document.getElementById( "fishTableContainer" ).appendChild ( ftSlot );
			ftSlot.appendChild ( ftSlotName );
			ftSlot.appendChild ( ftSlotHealth );
			ftSlot.appendChild ( ftSlotHunger );
			ftSlot.appendChild ( ftSlotSick );
			ftSlot.appendChild ( ftSlotSize );
			ftSlot.appendChild ( ftSlotSell );
			ftSlot.appendChild ( ftSlotPrice );
			ftSlotHealth.appendChild ( ftSlotHealthBar );
			ftSlotHunger.appendChild ( ftSlotHungerBar );
			
			
				
			
		}
		
		/*** SELL FISH EVENTS TABLE ***/
		document.getElementById( "fishTableSellFish0" ).addEventListener( "click", function() { aquarium.sellFish( 0 ) } , false );
		document.getElementById( "fishTableSellFish1" ).addEventListener( "click", function() { aquarium.sellFish( 1 ) } , false );
		document.getElementById( "fishTableSellFish2" ).addEventListener( "click", function() { aquarium.sellFish( 2 ) } , false );
		document.getElementById( "fishTableSellFish3" ).addEventListener( "click", function() { aquarium.sellFish( 3 ) } , false );
		document.getElementById( "fishTableSellFish4" ).addEventListener( "click", function() { aquarium.sellFish( 4 ) } , false );
		document.getElementById( "fishTableSellFish5" ).addEventListener( "click", function() { aquarium.sellFish( 5 ) } , false );
		document.getElementById( "fishTableSellFish6" ).addEventListener( "click", function() { aquarium.sellFish( 6 ) } , false );
		document.getElementById( "fishTableSellFish7" ).addEventListener( "click", function() { aquarium.sellFish( 7 ) } , false );
		document.getElementById( "fishTableSellFish8" ).addEventListener( "click", function() { aquarium.sellFish( 8 ) } , false );
		document.getElementById( "fishTableSellFish9" ).addEventListener( "click", function() { aquarium.sellFish( 9 ) } , false );
		document.getElementById( "fishTableSellFish10" ).addEventListener( "click", function() { aquarium.sellFish( 10 ) } , false );
		document.getElementById( "fishTableSellFish11" ).addEventListener( "click", function() { aquarium.sellFish( 11 ) } , false );
		document.getElementById( "fishTableSellFish12" ).addEventListener( "click", function() { aquarium.sellFish( 12 ) } , false );
		document.getElementById( "fishTableSellFish13" ).addEventListener( "click", function() { aquarium.sellFish( 13 ) } , false );
		document.getElementById( "fishTableSellFish14" ).addEventListener( "click", function() { aquarium.sellFish( 14 ) } , false );
		document.getElementById( "fishTableSellFish15" ).addEventListener( "click", function() { aquarium.sellFish( 15 ) } , false );
		document.getElementById( "fishTableSellFish16" ).addEventListener( "click", function() { aquarium.sellFish( 16 ) } , false );
		document.getElementById( "fishTableSellFish17" ).addEventListener( "click", function() { aquarium.sellFish( 17 ) } , false );
		document.getElementById( "fishTableSellFish18" ).addEventListener( "click", function() { aquarium.sellFish( 18 ) } , false );
		document.getElementById( "fishTableSellFish19" ).addEventListener( "click", function() { aquarium.sellFish( 19 ) } , false );
		document.getElementById( "fishTableSellFish20" ).addEventListener( "click", function() { aquarium.sellFish( 20 ) } , false );
		document.getElementById( "fishTableSellFish21" ).addEventListener( "click", function() { aquarium.sellFish( 21 ) } , false );
		document.getElementById( "fishTableSellFish22" ).addEventListener( "click", function() { aquarium.sellFish( 22 ) } , false );
		document.getElementById( "fishTableSellFish23" ).addEventListener( "click", function() { aquarium.sellFish( 23 ) } , false );
		document.getElementById( "fishTableSellFish24" ).addEventListener( "click", function() { aquarium.sellFish( 24 ) } , false );
		document.getElementById( "fishTableSellFish25" ).addEventListener( "click", function() { aquarium.sellFish( 25 ) } , false );
		document.getElementById( "fishTableSellFish26" ).addEventListener( "click", function() { aquarium.sellFish( 26 ) } , false );
		document.getElementById( "fishTableSellFish27" ).addEventListener( "click", function() { aquarium.sellFish( 27 ) } , false );
		document.getElementById( "fishTableSellFish28" ).addEventListener( "click", function() { aquarium.sellFish( 28 ) } , false );
		document.getElementById( "fishTableSellFish29" ).addEventListener( "click", function() { aquarium.sellFish( 29 ) } , false );
		document.getElementById( "fishTableSellFish30" ).addEventListener( "click", function() { aquarium.sellFish( 30 ) } , false );
		document.getElementById( "fishTableSellFish31" ).addEventListener( "click", function() { aquarium.sellFish( 31 ) } , false );
		document.getElementById( "fishTableSellFish32" ).addEventListener( "click", function() { aquarium.sellFish( 32 ) } , false );
		document.getElementById( "fishTableSellFish33" ).addEventListener( "click", function() { aquarium.sellFish( 33 ) } , false );
		document.getElementById( "fishTableSellFish34" ).addEventListener( "click", function() { aquarium.sellFish( 34 ) } , false );
		document.getElementById( "fishTableSellFish35" ).addEventListener( "click", function() { aquarium.sellFish( 35 ) } , false );
		document.getElementById( "fishTableSellFish36" ).addEventListener( "click", function() { aquarium.sellFish( 36 ) } , false );
		document.getElementById( "fishTableSellFish37" ).addEventListener( "click", function() { aquarium.sellFish( 37 ) } , false );
		document.getElementById( "fishTableSellFish38" ).addEventListener( "click", function() { aquarium.sellFish( 38 ) } , false );
		document.getElementById( "fishTableSellFish39" ).addEventListener( "click", function() { aquarium.sellFish( 39 ) } , false );
		document.getElementById( "fishTableSellFish40" ).addEventListener( "click", function() { aquarium.sellFish( 40 ) } , false );
		document.getElementById( "fishTableSellFish41" ).addEventListener( "click", function() { aquarium.sellFish( 41 ) } , false );
		document.getElementById( "fishTableSellFish42" ).addEventListener( "click", function() { aquarium.sellFish( 42 ) } , false );
		document.getElementById( "fishTableSellFish43" ).addEventListener( "click", function() { aquarium.sellFish( 43 ) } , false );
		document.getElementById( "fishTableSellFish44" ).addEventListener( "click", function() { aquarium.sellFish( 44 ) } , false );
		document.getElementById( "fishTableSellFish45" ).addEventListener( "click", function() { aquarium.sellFish( 45 ) } , false );
		document.getElementById( "fishTableSellFish46" ).addEventListener( "click", function() { aquarium.sellFish( 46 ) } , false );
		document.getElementById( "fishTableSellFish47" ).addEventListener( "click", function() { aquarium.sellFish( 47 ) } , false );
		document.getElementById( "fishTableSellFish48" ).addEventListener( "click", function() { aquarium.sellFish( 48 ) } , false );
		document.getElementById( "fishTableSellFish49" ).addEventListener( "click", function() { aquarium.sellFish( 49 ) } , false );
		document.getElementById( "fishTableSellFish50" ).addEventListener( "click", function() { aquarium.sellFish( 50 ) } , false );
		document.getElementById( "fishTableSellFish51" ).addEventListener( "click", function() { aquarium.sellFish( 51 ) } , false );
		document.getElementById( "fishTableSellFish52" ).addEventListener( "click", function() { aquarium.sellFish( 52 ) } , false );
		document.getElementById( "fishTableSellFish53" ).addEventListener( "click", function() { aquarium.sellFish( 53 ) } , false );
		document.getElementById( "fishTableSellFish54" ).addEventListener( "click", function() { aquarium.sellFish( 54 ) } , false );
		document.getElementById( "fishTableSellFish55" ).addEventListener( "click", function() { aquarium.sellFish( 55 ) } , false );
		document.getElementById( "fishTableSellFish56" ).addEventListener( "click", function() { aquarium.sellFish( 56 ) } , false );
		document.getElementById( "fishTableSellFish57" ).addEventListener( "click", function() { aquarium.sellFish( 57 ) } , false );
		document.getElementById( "fishTableSellFish58" ).addEventListener( "click", function() { aquarium.sellFish( 58 ) } , false );
		document.getElementById( "fishTableSellFish59" ).addEventListener( "click", function() { aquarium.sellFish( 59 ) } , false );
		document.getElementById( "fishTableSellFish60" ).addEventListener( "click", function() { aquarium.sellFish( 60 ) } , false );
		document.getElementById( "fishTableSellFish61" ).addEventListener( "click", function() { aquarium.sellFish( 61 ) } , false );
		document.getElementById( "fishTableSellFish62" ).addEventListener( "click", function() { aquarium.sellFish( 62 ) } , false );
		document.getElementById( "fishTableSellFish63" ).addEventListener( "click", function() { aquarium.sellFish( 63 ) } , false );
	
	}

	this.updateFishListTable = function() {

		if( aquarium.getFishNum() < 10 )
			document.getElementById( "fishTableContainer" ).style.overflow = "hidden";
		else
			document.getElementById( "fishTableContainer" ).style.overflow = "auto";
	
		if(  aquarium.getFishNum() == 0 ) {
			document.getElementById( "fishTableIcons" ).style.display = "none";
			document.getElementById( "fishTableInfo" ).style.display = "block";
		}
		else {
			document.getElementById( "fishTableIcons" ).style.display = "block";
			document.getElementById( "fishTableInfo" ).style.display = "none";
		}
		
		

	
		for( i = 0; i < aquarium.getFishNum(); i++ ) {
			document.getElementById( "fishTableRow" + i ).style.display = "block";
			document.getElementById( "fishTableSpeciesName" + i ).innerHTML = aquarium.returnSpecName( i );
			document.getElementById( "fishTableHealthBoxBar" + i ).style.width = aquarium.returnFishCondition( i ) / fishSpecies[aquarium.returnSpecNum(i)][SPEC_MAXCONDITION] * 25 + 'px';
			document.getElementById( "fishTableHungerBoxBar" + i ).style.width = aquarium.returnFishHunger( i ) / 4 + 'px';	
			if( aquarium.returnFishDisease( i ) > 0 )
				document.getElementById( "fishTableSickBox" + i ).innerHTML = "SICK";
			else
				document.getElementById( "fishTableSickBox" + i ).innerHTML = "";
			var sizeTemp = aquarium.returnFishSize( i ) * 100;
			sizeTemp = Math.round( sizeTemp );
			document.getElementById( "fishTableSizeBox" + i ).innerHTML = sizeTemp + "%";
			document.getElementById( "fishTablePrice" + i ).innerHTML = fishSpecies[aquarium.returnSpecNum(i)][SPEC_PRICE] / 2
		}
		
		for( i = aquarium.getFishNum(); i < 64; i++ ) {
			document.getElementById( "fishTableRow" + i ).style.display = "none";
		}
		
	}


	
	
	

	this.refreshStatsPage = function() {
		if( uio.getView() != VIEW_STATISTICS )
			return;

		if( document.getElementById( "tabFishList" ).style.display == "block" ) {
			this.updateFishListTable();
		
		
		} else {
			document.getElementById( "statFishNumber" ).innerHTML = aquarium.getFishNum();
			document.getElementById( "statFishBirths" ).innerHTML = aquarium.getFishBirths();
			document.getElementById( "statFishDeaths" ).innerHTML = aquarium.getFishDeaths();
			document.getElementById( "statPollution" ).innerHTML = parseInt( aquarium.getPollution() * 3.15 ) + "%";
			document.getElementById( "statFood" ).innerHTML = parseInt( aquarium.getFood() ) + "%";
			document.getElementById( "statMedicine" ).innerHTML = parseInt( aquarium.getMedicine() ) + "%";
			document.getElementById( "statGrowH" ).innerHTML = parseInt( aquarium.getGrowHormone() ) + "%";
			document.getElementById( "statBreedH" ).innerHTML = parseInt( aquarium.getBreedHormone() ) + "%";
			document.getElementById( "statDistraction" ).innerHTML = parseInt( aquarium.getDistraction() ) + "%";
		}
	};

	
	
};


var stats = new statsConstructor();