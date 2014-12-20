/*
**	LIGHTING OBJECT
**
*/



/*** CONSTANTS ***/

PATH_LIGHTING	= "gfx/lighting/";

LI_NAME		= 0;
LI_PRICE	= 1;
LI_COMFORT	= 2;
LI_ENERGY	= 3;
LI_IMAGE	= 4;



var lightingConstructor = function() {

	var light		= new Array();
	var lightNum	= light.length;

	var createLight = function( name, fileName, price, comfort, energyCost ) {
		light[lightNum] = new Array();
		light[lightNum][LI_NAME]		= name;
		light[lightNum][LI_PRICE]		= price;
		light[lightNum][LI_COMFORT]		= comfort;
		light[lightNum][LI_ENERGY]		= energyCost;
		light[lightNum][LI_IMAGE]		= new Image();
		light[lightNum][LI_IMAGE].src	= PATH_LIGHTING + fileName;
		lightNum = light.length;
		
	}
	
	createLight( "Simple Light",		"light0.png",	0,		0.91,	0.01 );
	createLight( "Wide Light",			"light1.png",	100,	0.92,	0.02 );
	createLight( "Diagonal Light",		"light2.png",	300,	0.93,	0.03 );
	createLight( "Five Light Up",		"light3.png",	600,	0.94,	0.04 );
	createLight( "Five Light Down",		"light4.png",	1000,	0.95,	0.05 );
	createLight( "Horizontal Lights",	"light5.png",	1500,	0.96,	0.06 );
	createLight( "Triple Spotlight",	"light6.png",	2100,	0.97,	0.07 );
	createLight( "Star Lamps",			"light7.png",	2800,	0.98,	0.08 );
	createLight( "Corner Reflectors",	"light8.png",	3600,	0.99,	0.09 );
	
	
	this.getLightData = function( num, data ) {
		num = parseInt(num)||0;
		return light[num][data];
	}



}



var lighting = new lightingConstructor();

