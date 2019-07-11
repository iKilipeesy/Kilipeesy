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
		"CZ/Five-Seven/Tec-9" ];

var smg = [ "UMP-45", "MP5/MP7", "PP-Bizon", "MP9/MAC-10", "P90" ];

var grenades = [ "HE", "Incendiary", "Smoke", "Flash", "Decoy" ];


/*
Returns a random weapon category
 */
function randomWeaponCategory(){
	var weaponCategory;
	var randomNumber = Math.floor(Math.random() * 100);
	
	if(randomNumber <= 20){
		weaponCategeory = weaponCategories.HEAVY;
	}
	else if(randomNumber <= 55){
		weaponCategeory = weaponCategories.RIFLE;
	}
	else if(randomNumber <= 75){
		weaponCategeory = weaponCategories.SMG;
	}
	else if(randomNumber <= 100){
		weaponCategeory = weaponCategories.PISTOL;
	}
	
	return weaponCategeory;
}

function randomWeapon(weaponCategory){
	var randomNumber = Math.floor(Math.random() * 100);

	if(weaponCategory == weaponCategories.RIFLE){

	}
	if(weaponCategory == weaponCategories.HEAVY){

	}
	if(weaponCategory == weaponCategories.PISTOL){

	}
	if(weaponCategory == weaponCategories.SMG){

	}
	
}
