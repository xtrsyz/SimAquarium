/*
**	FILTRATION OBJECT
**
*/



/*** CONSTANTS ***/

PATH_FILTERS	= "gfx/filters/";

FI_NAME			= 0;
FI_PRICE		= 1;
FI_COMFORT		= 2;
FI_POLLUTION	= 3;
FI_ENERGY		= 4;
FI_IMAGE		= 5;



var filtrationConstructor = function() {

	var filter		= new Array();
	var filterNum	= filter.length;

	var createFilter = function( name, fileName, price, comfort, pollution, energyCost ) {
		filter[filterNum] = new Array();
		filter[filterNum][FI_NAME]			= name;
		filter[filterNum][FI_PRICE]			= price;
		filter[filterNum][FI_COMFORT]		= comfort;
		filter[filterNum][FI_POLLUTION]		= pollution;
		
		filter[filterNum][FI_ENERGY]		= energyCost;
		filter[filterNum][FI_IMAGE]			= new Image();
		filter[filterNum][FI_IMAGE].src		= PATH_FILTERS + fileName;
		filterNum = filter.length;
		
	}
	
	createFilter( "Box filter",				"filter0.png",	0,		0.95,	-0.06,	0.032 );
	createFilter( "Cannister filter",		"filter1.png",	120,	0.92,	-0.12,	0.016 );
	createFilter( "Undergravel filter",		"filter2.png",	240,	0.99,	-0.24,	0.008 );
	createFilter( "Fluidized bed filter",	"filter3.png",	960,	0.97,	-0.48,	0.004 );
	createFilter( "Power filter",			"filter4.png",	1920,	0.96,	-0.96,	0.002 );
	createFilter( "Advanced Power Filter",	"filter5.png",	7680,	0.98,	-1.92,	0.001 );

	
	
	this.getFilterData = function( num, data ) {
		num = parseInt(num)||0;
		return filter[num][data];
	}



}



var filtration = new filtrationConstructor();




/*** BACKGROUND WALL OBJECT ***/


PATH_BGS		= "gfx/view4/";

BG_NAME		= 0;
BG_PRICE	= 1;
BG_IMAGE	= 2;

var backgroundConstructor = function() {

	var background		= new Array();
	var backgroundNum	= background.length;
	
	var createBackground = function( name, fileName, price ) {
	
		background[backgroundNum] = new Array();
		
		background[backgroundNum][BG_NAME]			= name;
		background[backgroundNum][BG_PRICE]			= price;
		background[backgroundNum][BG_IMAGE]			= PATH_BGS + fileName;
		backgroundNum = background.length;

	};
	
	this.getBackgroundSrc = function( bg ) { return background[bg][BG_IMAGE]; }
	
	
	/*** CREATE HTML FOR BACKGROUNDS ***/
	this.createBackgroundSlots = function() {
	
		for( i = 0; i < backgroundNum; i++ ) {
			var bgSlot = document.createElement( "div" );
			var bgSlotTitle = document.createElement( "div" );
			var bgSlotMoney = document.createElement( "div" );
			var bgSlotBuy = document.createElement( "div" );
			
			bgSlot.setAttribute( "class", "backgroundSlot" );
			bgSlot.setAttribute( "id", "backgroundSlot" + i );
			
			bgSlotTitle.innerHTML = background[i][BG_NAME];
			bgSlotTitle.setAttribute( "class", "title" );

			bgSlotMoney.innerHTML = background[i][BG_PRICE];
			bgSlotMoney.setAttribute( "class", "money" );
			
			bgSlotBuy.setAttribute( "class", "button buy on" );
			bgSlotBuy.setAttribute( "id", "buttonBackgroundBuy" + i );
			
			document.getElementById( "tabBackgroundShop" ).appendChild ( bgSlot );
			bgSlot.appendChild ( bgSlotTitle );
			bgSlot.appendChild ( bgSlotMoney );
			bgSlot.appendChild ( bgSlotBuy );
		}
		document.getElementById( "buttonBackgroundBuy0" ).setAttribute( "class", "button buy off" );
	
	}		
	
	createBackground( "White",	"bg0.png",	60 );
	createBackground( "Black",	"bg1.png",	60 );
	createBackground( "Red",	"bg2.png",	60 );
	createBackground( "Yellow",	"bg3.png",	60 );
	createBackground( "Blue",	"bg4.png",	60 );
	
	createBackground( "Orange",	"bg5.png",	90 );
	createBackground( "Green",	"bg6.png",	90 );
	createBackground( "Violet",	"bg7.png",	90 );
	createBackground( "Brown",	"bg8.png",	90 );
	createBackground( "Sepia",	"bg9.png",	90 );
	
	createBackground( "Metal",	"bg10.png",	120 );
	createBackground( "Rivets",	"bg11.png",	120 );
	createBackground( "Rust",	"bg12.png",	120 );
	createBackground( "Fun",	"bg13.png",	180 );
	createBackground( "Transparent",	"bg14.png",	240 );	
	
	this.getBackgroundData = function( num, data ) {
		return background[num][data];
	}



}

background = new backgroundConstructor();
