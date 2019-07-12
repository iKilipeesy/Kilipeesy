// Variables
var ct = true;
var activeWeaponCategeory;

// Arrays, enum
const weaponCategories = {
	RIFLE: "rifle",
	HEAVY: "heavy",
	PISTOL: "pistol",
	SMG: "smg",
	GRENADE: "grenade"
}

var rifle = [ "AK47/M4", "Galil/Famas", "Scout/SSG 08", "Awp", "Autosniper", "Aug/Krieg" ];

var heavy = [ "Negev", "M249", "Nova", "XM1014", "MAG-7/Pump" ];

var pistol = [ "Deagle", "Dual Berretas", "USP/P2K/Glock", "P250", 
				"CZ75-Auto/Five-Seven/Tec-9" ];

var smg = [ "UMP-45", "MP5/MP7", "PP-Bizon", "MP9/MAC-10", "P90" ];

var grenades = [ "HE", "Incendiary", "Smoke", "Flash", "Decoy" ];


/*
*
Starts the roulette
*
*/
function startRoulette(){
	var activeWeapons = randomWeapon(amountOfWeapons());
	console.log(activeWeapons);

	//Change the text of the span to the randomly generated pistol
	document.getElementById("secondaryWeaponName").innerHTML = activeWeapons[0];

	//Change the text of the span to the randomly generated primary if there is one
	if (activeWeapons[1] != null) {
		document.getElementById("primaryWeaponName").innerHTML = activeWeapons[1];
	}
	else{
		document.getElementById("primaryWeaponName").innerHTML = "None"
	}

}

/*
*

*
*/
function changeSide(){
	if (ct == true) {
		document.getElementById("changeSideButton").style.backgroundImage = "url(resources/csgo/tIcon.png)"
		ct = false;
	}
	else{
		document.getElementById("changeSideButton").style.backgroundImage = "url(resources/csgo/ctIcon.png)"
		ct = true;
	}
}


/*
*
Returns a random weapon category
*
*/
function randomWeaponCategory(){
	var weaponCategory;
	var randomNumber = Math.floor(Math.random() * 100);
	
	if(randomNumber <= 20){
		weaponCategory = weaponCategories.HEAVY;
	}
	else if(randomNumber <= 70){
		weaponCategory = weaponCategories.RIFLE;
	}
	else if(randomNumber <= 100){
		weaponCategory = weaponCategories.SMG;
	}
	
	return weaponCategory;
}


/*
*
Returns the weapons the user has to buy
*
*/
function randomWeapon(amountOfWeapons){
	var weapons =  new Array();

	weapons[0] = pistol[Math.floor(Math.random() * 5)];

	if (weapons[0] == pistol[2]) {
		if (ct == true) {
			weapons[0] = "USP-S/P2000";
		}
		else{
			weapons[0] = "Glock-18";
		}
	}
	if (weapons[0] == pistol[4]) {
		if (ct == true) {
			weapons[0] = "CZ75-Auto/Five-Seven";
		}
		else{
			weapons[0] = "CZ75-Auto/Tec-9";
		}
	}

	if (amountOfWeapons == 2) {
		var weaponCategory = randomWeaponCategory();

		if(weaponCategory == weaponCategories.RIFLE){
			weapons[1] = rifle[Math.floor(Math.random() * 6)];

			//Changes the weapon to either a ct or t side weapon
			if (weapons[1] == rifle[0]) {
				if (ct == true) {
					weapons[1] = "M4A4/M4A1-S";
				}
				else{
					weapons[1] = "AK-47";
				}
			}
			if (weapons[1] == rifle[1]) {
				if (ct == true) {
					weapons[1] = "Famas";
				}
				else{
					weapons[1] = "Galil";
				}
			}
			if (weapons[1] == rifle[5]) {
				if (ct == true) {
					weapons[1] = "Aug";
				}
				else{
					weapons[1] = "SG 553";
				}
			}
		}
		if(weaponCategory == weaponCategories.HEAVY){
			weapons[1] = heavy[Math.floor(Math.random() * 5)];

			if (weapons[1] == heavy[4]) {
				if (ct == true) {
					weapons[1] = "MAG-7";
				}
				else{
					weapons[1] = "Sawed-off";
				}
			}
		}
		if(weaponCategory == weaponCategories.SMG){
			weapons[1] = smg[Math.floor(Math.random() * 5)];

			if (weapons[1] == smg[3]) {
				if (ct == true) {
					weapons[1] = "MP9";
				}
				else{
					weapons[1] = "MAC-10";
				}
			}
		}	
	}

	if (Math.floor(Math.random() * 100) >= 90) {
		weapons[2] = "Zeus";
	}
	

	
	return weapons;
}


/*
*
Decides if the user has to buy a primary weapon
Returns the amount of weapons
*
*/
function amountOfWeapons(){

	if (Math.floor(Math.random() * 100) <= 80) {
		return 2;
	}
	else{
		return 1;
	}
}