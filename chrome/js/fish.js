/*
**	FISH OBJECT MODULE
**	
*/



/*** CONSTANTS ***/

var SPEC_NAME			=   0;
var SPEC_RARITY			=   1; //not used
var SPEC_PRICE			=   2;
var SPEC_SIZEX			=   3;
var SPEC_SIZEY			=   4;
var SPEC_GROWTH			=   5; // Growth rate 0-1
var SPEC_BREED			=   6; // Breed rate 0-1
var SPEC_POLLUTION		=	7; // Pollution rate 0-1
var SPEC_POLLUTIONTOL	=	8; // Pollution tolerance 0-32
var SPEC_MAXCONDITION	=	9; // Max condtition
var SPEC_FOODNEED		=	10; // Max condtition
var SPEC_FISHNUMOPTIMAL	=	11; // Max breeding number
var SPEC_AGGRESSION		=	12; // Aggression / attack chance
var SPEC_STRENGTH		=	13; // Aggression / attack chance
var SPEC_LONGEVITY		=	14; // Aggression / attack chance
var SPEC_LINK			=	15;
var SPEC_FISHNUMATTACK	=	16; // min attack.


var DIRECTION_LEFT	= -10;
var DIRECTION_RIGHT	=  10;

var RARITY_POPULAR	=   0;
var RARITY_MEDIUM	=   1;
var RARITY_RARE		=   2;
var RARITY_UNIQUE	=	3;



/*** GLOBALS ***/

// FISH ANGLES

var fishAngle		= new Array();
fishAngle[ -10 ]	= new Array();
fishAngle[  10 ]	= new Array();

fishAngle[ -10 ][ -5 ] = -5.8195;
fishAngle[ -10 ][ -4 ] = -5.9026;
fishAngle[ -10 ][ -3 ] = -5.9917;
fishAngle[ -10 ][ -2 ] = -6.0857;
fishAngle[ -10 ][ -1 ] = -6.1835;
fishAngle[ -10 ][  0 ] =  6.2831;
fishAngle[ -10 ][  1 ] =  6.1835;
fishAngle[ -10 ][  2 ] =  6.0857;
fishAngle[ -10 ][  3 ] =  5.9917;
fishAngle[ -10 ][  4 ] =  5.9026;
fishAngle[ -10 ][  5 ] =  5.8195;
fishAngle[  10 ][ -5 ] =  5.8195;
fishAngle[  10 ][ -4 ] =  5.9026;
fishAngle[  10 ][ -3 ] =  5.9917;
fishAngle[  10 ][ -2 ] =  6.0857;
fishAngle[  10 ][ -1 ] =  6.1835;
fishAngle[  10 ][  0 ] =  6.2831;
fishAngle[  10 ][  1 ] = -6.1835;
fishAngle[  10 ][  2 ] = -6.0857;
fishAngle[  10 ][  3 ] = -5.9917;
fishAngle[  10 ][  4 ] = -5.9026;
fishAngle[  10 ][  5 ] = -5.8195;


// FISH SPECIES

var fishSpecies		= new Array();

/*									Name							Rarity				Price			SizeX	SizeY	Grow rate		Breed rate		Pollution rate	Pollution tollerance	Max condition	Food need	Optimal num	Aggression		Strength		Longevity	info URL 		*/
fishSpecies[0]		= new Array(	"Test fish",				RARITY_POPULAR,		10,			21,		11,		0.0010,		0.0010,		0.010,		10,				4,			0.005,	10,			0.0010,		0.1,		0.9990,	"http://xtrsyz.org/",	20				);

fishSpecies[1]		= new Array(	"Southern platyfish",		RARITY_POPULAR,		20,			21,		11,		0.0050,		0.0120,		0.002,		24,				1.2,		0.01,	32,			0.001,		0.8,		0.9800,	"http://en.wikipedia.org/wiki/Southern_platyfish",	48				);
fishSpecies[2]		= new Array(	"Guppy",					RARITY_POPULAR,		24,			17,		9,		0.0060,		0.0160,		0.005,		28,				1.0,		0.01,	40,			0.010,		0.5,		0.9400,	"http://en.wikipedia.org/wiki/Guppy",	60				);
fishSpecies[3]		= new Array(	"Panda corydoras",			RARITY_POPULAR,		28,			23,		14,		0.0040,		0.0100,		0.003,		16,				1.5,		0.02,	18,			0.005,		0.6,		0.9600,	"http://en.wikipedia.org/wiki/Panda_corydoras",	27				);

fishSpecies[4]		= new Array(	"Bronze catfish",			RARITY_POPULAR,		40,			29,		12,		0.0025,		0.0080,		-0.005,		30,				2.0,		0.04,	15,			0.010,		1.0,		0.9950,	"http://en.wikipedia.org/wiki/Bronze_corydoras",	22				);
fishSpecies[5]		= new Array(	"Zebrafish",				RARITY_POPULAR,		48,			25,		8,		0.0055,		0.0090,		0.008,		12,				1.4,		0.02,	42,			0.008,		0.5,		0.9900,	"http://en.wikipedia.org/wiki/Zebra_Danio",	63				);
fishSpecies[6]		= new Array(	"Sailfin molly",			RARITY_POPULAR,		56,			22,		14,		0.0080,		0.0070,		0.011,		26,				2.0,		0.02,	8,			0.0001,		0.1,		0.8500,	"http://en.wikipedia.org/wiki/Sailfin_molly",	12				);

fishSpecies[7]		= new Array(	"Rosy barb",				RARITY_POPULAR,		80,			50,		39,		0.0030,		0.0060,		0.018,		22,				5.0,		0.02,	12,			0.020,		1.5,		0.9900,	"http://en.wikipedia.org/wiki/Rosy_barb",	18				);
fishSpecies[8]		= new Array(	"Cardinal tetra",			RARITY_POPULAR,		96,			15,		7,		0.0020,		0.0050,		0.001,		11,				1.2,		0.005,	64,			0.0001,		1.2,		0.9920,	"http://en.wikipedia.org/wiki/Cardinal_tetra",	96				);
fishSpecies[9]		= new Array(	"Dojo loach",				RARITY_POPULAR,		112,		45,		12,		0.0015,		0.0045,		0.040,		28,				4.5,		0.04,	10,			0.010,		1.4,		0.9890,	"http://en.wikipedia.org/wiki/Misgurnus_anguillicaudatus",	15				);

fishSpecies[10]		= new Array(	"Paradise fish",			RARITY_POPULAR,		160,		37,		17,		0.0020,		0.0020,		0.006,		22,				3.5,		0.04,	5,			0.050,		0.3,		0.9850,	"http://en.wikipedia.org/wiki/Paradise_fish",	8				);
fishSpecies[11]		= new Array(	"Tropheus",					RARITY_POPULAR,		192,		53,		19,		0.0015,		0.0025,		0.009,		8,				4.2,		0.07,	7,			0.002,		1.4,		0.9920,	"http://en.wikipedia.org/wiki/Tropheus",		11	);
fishSpecies[12]		= new Array(	"Bala shark",				RARITY_POPULAR,		224,		35,		16,		0.0012,		0.0036,		0.007,		24,				4.4,		0.03,	6,			0.009,		0.2,		0.9900,	"http://en.wikipedia.org/wiki/Bala_shark",		9				);

fishSpecies[13]		= new Array(	"Electric yellow cichlid",	RARITY_POPULAR,		320,		41,		19,		0.0018,		0.0035,		0.011,		10,				4.8,		0.05,	12,			0.004,		1.6,		0.9930,	"http://en.wikipedia.org/wiki/Labidochromis_caeruleus",	18				);
fishSpecies[14]		= new Array(	"Clown loach",				RARITY_POPULAR,		384,		60,		31,		0.00005,	0.00001,	0.003,		19,				7.0,		0.07,	18,			0.001,		2.4,		0.9950,	"http://en.wikipedia.org/wiki/Botia_macracantha",	27				);
fishSpecies[15]		= new Array(	"Fairy cichlid",			RARITY_POPULAR,		448,		32,		15,		0.0030,		0.0095,		0.011,		11,				4.2,		0.04,	10,			0.045,		1.2,		0.9920,	"http://en.wikipedia.org/wiki/Neolamprologus_brichardi",	15				);

fishSpecies[16]		= new Array(	"San Francisco piranha",	RARITY_POPULAR,		640,		60,		35,		0.0015,		0.0024,		0.009,		12,				6.2,		0.09,	8,			0.100,		1.7,		0.9910,	"http://en.wikipedia.org/wiki/Pygocentrus_piraya",	12				);
fishSpecies[17]		= new Array(	"Siamese fighting fish",	RARITY_POPULAR,		768,		33,		28,		0.0039,		0.0008,		0.055,		29,				4.0,		0.08,	5,			0.060,		0.9,		0.9870,	"http://en.wikipedia.org/wiki/Siamese_Fighting_Fish",	8				);
fishSpecies[18]		= new Array(	"Ram cichlid",				RARITY_POPULAR,		896,		15,		13,		0.0065,		0.0021,		0.003,		1,				0.9,		0.03,	30,			0.0005,		0.4,		0.9850,	"http://en.wikipedia.org/wiki/Mikrogeophagus_ramirezi",	45				);

fishSpecies[19]		= new Array(	"Oscar",					RARITY_POPULAR,		1280,		89,		45,		0.0001,		0.0002,		0.062,		22,				13.0,		0.12,	12,			0.002,		1.0,		0.9990,	"http://en.wikipedia.org/wiki/Oscar_(fish)",	18				);
fishSpecies[20]		= new Array(	"Marine angelfish",			RARITY_POPULAR,		1536,		80,		43,		0.0001,		0.0001,		0.009,		13,				5.3,		0.08,	11,			0.001,		1.5,		0.9900,	"http://en.wikipedia.org/wiki/Marine_angelfish",	17			);
fishSpecies[21]		= new Array(	"Electric Blue Hap",		RARITY_POPULAR,		1792,		46,		25,		0.0011,		0.0018,		0.024,		9,				5.1,		0.08,	17,			0.044,		1.2,		0.9920,	"http://en.wikipedia.org/wiki/Sciaenochromis",	26				);

fishSpecies[22]		= new Array(	"Goldfish",					RARITY_POPULAR,		2560,		60,		32,		0.0007,		0.0016,		0.090,		16,				4.3,		0.08,	16,			0.007,		1.6,		0.9970,	"http://en.wikipedia.org/wiki/Goldfish",	24				);
fishSpecies[23]		= new Array(	"Black Piranha",			RARITY_POPULAR,		3072,		70,		44,		0.0003,		0.0009,		0.041,		29,				9.6,		0.13,	1,			0.210,		2.1,		0.9950,	"http://en.wikipedia.org/wiki/Serrasalmus_rhombeus",	1				);
fishSpecies[24]		= new Array(	"Freshwater angelfish",		RARITY_POPULAR,		3584,		48,		60,		0.0001,		0.0052,		0.016,		8,				7.2,		0.10,	29,			0.002,		1.8,		0.9945,	"http://en.wikipedia.org/wiki/Pterophyllum",	44				);

fishSpecies[25]		= new Array(	"Discus",					RARITY_POPULAR,		5120,		65,		59,		0.0011,		0.00005,	0.022,		3,				8.5,		0.16,	24,			0.008,		1.8,		0.9,	"http://en.wikipedia.org/wiki/Discus_(fish)",	36				);
fishSpecies[26]		= new Array(	"Barracuda",				RARITY_POPULAR,		6144,		100,	27,		0.0008,		0.0002,		0.044,		7,				12.5,		0.25,	7,			0.080,		9.2,		0.9,	"http://en.wikipedia.org/wiki/Barracuda",	15				);
fishSpecies[27]		= new Array(	"Green Sea Turtle",			RARITY_POPULAR,		7168,		100,	26,		0.00001,	0.00001,	0.045,		5,				9.9,		0.17,	2,			0.0004,		2.1,		0.9,	"http://en.wikipedia.org/wiki/Green_Sea_Turtle"	,	64			);

fishSpecies[28]		= new Array(	"Bottlenose dolphin",		RARITY_POPULAR,		10240,		188,	51,		0.00004,	0.00001,	0.030,		8,				15.2,		0.25,	7,			0.012,		9.4,		0.9993,	"http://en.wikipedia.org/wiki/Bottlenose_dolphin",	64	);





var fishSpeciesNum	= fishSpecies.length;


var speciesBreedingRate	= new Array();
computeBreedingRate = function() {
	for( i = 0; i < fishSpecies.length; i++ ) {
		speciesBreedingRate[i] = aquarium.getComfortAquarium() * fishSpecies[i][SPEC_BREED];
	}
}

var speciesFishNumComfort = new Array();
computeFishNumComfort = function() {
	for( i = 0; i < fishSpecies.length; i++ ) {
		speciesFishNumComfort[i] = fishSpecies[i][SPEC_FISHNUMOPTIMAL] / aquarium.getFishNum();
	}
}





// FISH FRAMES

var fishFrameL		= new Array();
var fishFrameR		= new Array();

for( i = 0; i < 29; i++ ) {
	fishFrameL[i] = new Array();
	fishFrameR[i] = new Array();
	
	fishFrameL[i][0] = new Image();
	fishFrameR[i][0] = new Image();
	
	fishFrameL[i][0].src = "gfx/aquarium/fishes/fish" + i + "L.png";
	fishFrameR[i][0].src = "gfx/aquarium/fishes/fish" + i + "R.png";;

}





var fishConstructor = function( sNum, fSize ) {
	
	// Fish Position
	var x, y;
	this.getX = function() { return x }
	this.getY = function() { return y }
	
	// Fish direction and speed
	var vX, vY, speed, maxSpeed, movX, movY;
	this.getVX = function() { return vX }
	this.getVY = function() { return vY }
	
	// Fish Size and box points
	var size, sizeX, sizeY, boxX1, boxY1, boxX2, boxY2;
	this.getSize = function() { return size }
	this.getSizeX = function() { return sizeX }
	this.getSizeY = function() { return sizeY }
	this.getBoxX1 = function() { return boxX1 }
	this.getBoxY1 = function() { return boxY1 }
	this.getBoxX2 = function() { return boxX2 }
	this.getBoxY2 = function() { return boxY2 }
	
	// Fish image
	var image = new Image;
	this.getImage = function() { return image };

	// Fish species
	var specNum, specName;
	this.getSpecNum		= function() { return specNum }
	this.getSpecName	= function() { return specName }
	
	/*** FISH MOVEMENT ***/
	
	/* Move fish */
	this.move = function() {
		x = x + movX;
		y = y + movY;
		
		
		
		// Fish hits borders check
		if(  x > ( 355 - boxX2 )) {
			if( vX == 10 )
				this.rotate( -10, vY );
		}
		else if( x < ( 5 + boxX2 )) {
			if( vX == -10 )
				this.rotate( 10, vY );
		}
		if(  y > ( 215 - boxY2 )) {
			if( vY > 0 )
				this.rotate( vX, vY * -1 );
		}
		else if( y < ( 25 + boxY2 )) {
			if( vY < 0 )
				this.rotate( vX, vY * -1 );
		}
		
		this.slowDown();
	}
	
	/* Slow down */
	this.slowDown = function() {
		if( speed > 0.05 )
			speed = speed * 0.985;
		movX = vX * speed;
		movY = vY * speed;
	}
	
	/* Speed up */
	this.speedUp = function() {
		speed = maxSpeed;
		movX = vX * speed;
		movY = vY * speed;
	}	
	
	/* Change direction */
	this.changeDirection = function() {
		if( Math.random() < 0.5 )
			this.rotate( 10, parseInt( Math.random() * 11 - 5 ));
		else
			this.rotate( -10, parseInt( Math.random() * 11 - 5 ));
	}
	this.rotate = function( rX, rY ) {
		vX = rX;
		vY = rY;
		movX = vX * speed;
		movY = vY * speed;
		if( vX == 10 )
			image = fishFrameR[specNum][0];
		else
			image = fishFrameL[specNum][0];
	}
	
	
	/*** FISH GROWTH ***/
	this.grow = function() {
	
		if( size < 1 ) {
		
		
			if( aquarium.getGrowHormone() > 0 )
				size = size + ( fishSpecies[specNum][SPEC_GROWTH] * 4 );
			else
				size = size + fishSpecies[specNum][SPEC_GROWTH];
			
			
			if( size > 1 )
				size = 1;
			
			sizeX = fishSpecies[specNum][SPEC_SIZEX] * size;
			sizeY = fishSpecies[specNum][SPEC_SIZEY] * size;
			boxX1 = sizeX * -0.5;
			boxY1 = sizeY * -0.5;
			boxX2 = sizeX * 0.5;
			boxY2 = sizeY * 0.5;
			
			maxSpeed = size * 0.5;
		}
		
	}
	
	/*** FISH BREED ***/
	
	var breedChance;
	
	this.setBreedChance = function() {
		breedChance = fishSpecies[specNum][SPEC_BREED]
	}
	
	
	this.breed = function() {
		//dbg( aquarium.getFishNumBySpecies(specNum) );
		
		if( aquarium.getFishNum() > 63 ) return;
	
		if( aquarium.getFishNum() > fishSpecies[specNum][SPEC_FISHNUMOPTIMAL] )  {
			if( Math.random() < 0.9 )
				return;
		}
	
		if( size == 1 ) {
			if( aquarium.getFishNumBySpecies( specNum ) > 1 ) {
				if( aquarium.getBreedHormone() > 0 ) {
					if( Math.random() < ( speciesBreedingRate[specNum] * 2 ) + 0.01 ) {
						aquarium.breedFishSet( specNum );

					}
				} else {
					if( Math.random() < speciesBreedingRate[specNum] ) {
						aquarium.breedFishSet( specNum );
					}
				}
				
			}
		}	
	}
	
	

	/*** FISH POLLUTION ***/
	
	this.pollute = function() {
		aquarium.changePollution( fishSpecies[specNum][SPEC_POLLUTION] );
	}
	
	
	
	/*** FISH DISEASES ***/
	
	var disease = 0;
	this.getDisease  = function() {
		return disease;
	}
	
	this.diseaseCheck = function() {

		var illChance = Math.random();
	
		if( disease > 0 ) {
			this.changeCondition( illChance * -0.1 );
			this.changeDisease( illChance * -0.2 );

			if( aquarium.getMedicine() > 0 ) {
			
				if( aquarium.getMedicine() < illChance ) {
					this.changeDisease( aquarium.getMedicine() * -2 );
					aquarium.resetMedicine();
				}
				else {
					this.changeDisease( illChance * -2 );
					aquarium.changeMedicine( illChance * -1 );
				}
			}

		}
		else {
			var currentPollution = aquarium.getPollution();
			
			if( illChance < 0.00001 ) {
				this.makeSick();
			}
			else {
				if( fishSpecies[specNum][SPEC_POLLUTIONTOL] < currentPollution ) {
					if( ( fishSpecies[specNum][SPEC_POLLUTIONTOL] / currentPollution ) < illChance ) {
						if( Math.random() * 1000 < currentPollution ) {
							this.makeSick();
						}
					}
				}
			}
		}
	}

	this.changeDisease = function( disNum ) {
		disease = disease + disNum;
		if( disease < 0 )
			disease = 0;
	}
	
	this.makeSick = function() {
		disease = ( Math.random() * fishSpecies[specNum][SPEC_MAXCONDITION] ) + 0.5;
		uio.changeAlertNum( 0 );
	}
	
	
	
	/*** FISH HUNGER ***/
	var hunger = 0;
	this.getHunger = function() {
		return hunger;
	}
	this.hungerCheck = function() {
		var hungerChance = Math.random();
		if( hungerChance < fishSpecies[specNum][SPEC_FOODNEED] ) {
			hunger = hunger + 1;
		}
		
		
		// Try to eat food
		if( hunger > 0 ) {
			if( aquarium.getFood() > 0 ) {
				eatFoodNumber = fishSpecies[specNum][SPEC_FOODNEED] * 10;
			
				if( eatFoodNumber < aquarium.getFood() ) {
					this.changeHunger( eatFoodNumber * -5 );
					aquarium.changeFood( eatFoodNumber * -0.1);
				
				}
				else {
					this.changeHunger( aquarium.getFood() * -2 );
					aquarium.resetFood();
				}
			}
		}
		
		// starve
		if( hunger > 100 ) {
			uio.changeAlertNum( 1 );
			this.changeCondition( Math.random() * -0.5 );
			
		
		}
	
	}
	
	this.changeHunger = function( hNum ) {
		hunger = hunger + hNum;
		if( hunger < 0 )
			hunger = 0;
		if( hunger > 101 )
			hunger = 101;
	}
	
	
	/*** FISH CONDITION / HEALTH ***/
	
	var condition;
	this.getCondition = function() {
		return condition;
	}
	this.setCondition = function() {
		condition = fishSpecies[specNum][SPEC_MAXCONDITION];
	}

	
	
	this.changeCondition = function( condValue ) {
		//dbg( "before con " + condition );
		condition = condition + condValue;
		if( condition < 0 ) {
			condition = 0;
		}
		else if( condition > fishSpecies[specNum][SPEC_MAXCONDITION] ) {
			condition = fishSpecies[specNum][SPEC_MAXCONDITION];
		}
		
		//dbg( "after con " + condition + "   dis: " + disease );
	}
	
	
	
	/*** FISH FIGHTS ***/
	
	this.fight = function( me ) {
		if( aquarium.getFishNum() < 2 )
			return;
			
		if( aquarium.getDistraction() > 0 )
			return;
		
	
		if( size >= 1 ) {
			if( aquarium.getFishNum() > fishSpecies[specNum][SPEC_FISHNUMATTACK] ) {
				var biteRnd1 = Math.random();
				if( biteRnd1 < fishSpecies[specNum][SPEC_AGGRESSION] ) {
					var biteRnd2 = Math.random();
					if( hunger > 100 ) {
						this.attackEnemy( me );
					}
					else if( biteRnd2 > speciesFishNumComfort[specNum] )  {
						this.attackEnemy( me );
					}
				}
			}
		}
	}
	
	this.attackEnemy = function( me ) {
		var enemy = parseInt( Math.random() * aquarium.getFishNum()  );
		
		if( enemy == me )
			return;
	
		aquarium.hurtFish( enemy, ( Math.random() * fishSpecies[specNum][SPEC_STRENGTH] ) * -1 )
		uio.changeAlertNum( 4 );
	
	}
	
	
	/*** FISH GETTING OLD ***/
	
	this.getOld = function() {
		if( size < 1 )
			return;
			
		if( Math.random() > fishSpecies[specNum][SPEC_LONGEVITY] ) {
			this.changeCondition( Math.random() * -0.1 );
			//dbg( "older con " + condition );
		}
	
	}
	
	
	/*** FISH DATA SERIALIZING ***/
	this.serialize = function() {
		var fishData = specNum + "|" + size + "|" + disease + "|" + hunger + "|" + condition;
		return fishData;
	}
	
	this.changeData = function( s, d, h, c ) {
		size = s;
		disease = d;
		hunger = h;
		condition = c;

		if( size > 1 ) size = 1;
		sizeX = fishSpecies[specNum][SPEC_SIZEX] * size;
		sizeY = fishSpecies[specNum][SPEC_SIZEY] * size;
		boxX1 = sizeX * -0.5;
		boxY1 = sizeY * -0.5;
		boxX2 = sizeX * 0.5;
		boxY2 = sizeY * 0.5;
		maxSpeed = size * 0.5;

		
	}
	
	
	

	
	
	/*** LET THERE BE A FISH ***/

	specNum		= sNum;
	specName	= fishSpecies[specNum][SPEC_NAME];
	
	size = fSize;
	this.grow();
	this.speedUp();
	x = parseInt( Math.random() * 180 + 90 );
	y = parseInt( Math.random() * 120 + 60 );
	this.changeDirection();
	this.setBreedChance();
	this.setCondition();
	
	
		
}



