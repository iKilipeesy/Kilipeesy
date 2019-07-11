// Variables
var ctPlayer;
var activeWeaponCategeory;

// Arrays, enum
const weaponCategories = {
	RIFLE: "rifle",
	HEAVY: "heavy",
	PISTOL: "pistol",
	SMG: "smg",
	GRENADE: "grenade"
}

var rifle = [ "AK47", "Galil", "M4", "Famas", "Scout", "Awp", "Autosniper", 
		"Aug/Krieg" ];

var heavy = [ "Negev", "M249", "Nova", "XM1014", "MAG-7/Pump" ];

var pistol = [ "Deagle", "Dual Berretas", "USP/P2K/Glock", "P250", 
				"CZ75-Auto/Five-Seven/Tec-9" ];

var smg = [ "UMP-45", "MP5/MP7", "PP-Bizon", "MP9/MAC-10", "P90" ];

var grenades = [ "HE", "Incendiary", "Smoke", "Flash", "Decoy" ];


/*

*/
function startRoulette(){
	var activeWeapons = randomWeapon(amountOfWeapons());
	console.log(activeWeapons);
}

/*
Returns a random weapon category
 */
function randomWeaponCategory(){
	var weaponCategory;
	var randomNumber = Math.floor(Math.random() * 100);
	
	if(randomNumber <= 20){
		weaponCategory = weaponCategories.HEAVY;
	}
	else if(randomNumber <= 55){
		weaponCategory = weaponCategories.RIFLE;
	}
	else if(randomNumber <= 75){
		weaponCategory = weaponCategories.SMG;
	}
	else if(randomNumber <= 100){
		weaponCategory = weaponCategories.PISTOL;
	}
	
	return weaponCategory;
}

/*

*/
function randomWeapon(amountOfWeapons){
	var weapons =  new Array();

	weapons[0] = pistol[Math.floor(Math.random() * 5)];

	if (amountOfWeapons == 2) {
		var weaponCategory = randomWeaponCategory();

		if(weaponCategory == weaponCategories.RIFLE){
			weapons[1] = rifle[Math.floor(Math.random() * 8)];
		}
		if(weaponCategory == weaponCategories.HEAVY){
			weapons[1] = heavy[Math.floor(Math.random() * 5)];
		}
		if(weaponCategory == weaponCategories.SMG){
			weapons[1] = smg[Math.floor(Math.random() * 5)];
		}	
	}

	if (Math.floor(Math.random() * 100) >= 90) {
		weapons[2] = "Zeus";
	}
	
	return weapons;
}

/*

*/
function amountOfWeapons(){

	if (Math.floor(Math.random() * 100) <= 80) {
		return 2;
	}
	else{
		return 1;
	}
}
