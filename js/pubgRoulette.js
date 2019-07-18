//Variables
var activeMap;

//Drop Arrays
var erangelDrops = ['Sosnovka Military Base', 'School', 'Rozhok', 'Georgopol', 'Prison', 'Pochinki', 'Hospital', 'Zharki', 'Severny', 'Primorsk', 'Lipovka', 'Gatka', 'Farm', 'Novorepnoye', 'Yasnaya Polyana'];
var miramarDrops = ['Hacienda del Patron', 'Pecado', 'Minas Generales', 'Los Leones', 'Imapala', 'El Azahar', 'Power Grid', 'San Martin', 'El Pozo', 'Chumacela', 'Water treatment'];
var sanhokDrops = ['Paradise Resort', 'Bootcamp', 'Quarry', 'Pai Nan', 'Camp Alpha', 'Camp Bravo', 'Camp Charlie', 'Cave', 'Ruins', 'Lakawi', 'Bhan', 'Ha Tinh', 'Khao', 'Sanmee'];
var vikendiDrops = ['Goroka', 'Villa', 'Castle', 'Dobro Mesto', 'Podvosto', 'Peshkova', 'Coal Mine', 'Krichas', 'Zabava', 'Movatra', 'Dino Park', 'Cement Factory'];

/*
Starts the roulette
 */
function StartRoulette(){
	RandomDropSpot();
}

/*
Selects the map that the user clicked on
 */
function SelectMap(button){
	document.getElementById("erangelBtn").style.border = "solid black 2px";
	document.getElementById("miramarBtn").style.border = "solid black 2px";
	document.getElementById("sanhokBtn").style.border = "solid black 2px";
	document.getElementById("vikendiBtn").style.border = "solid black 2px";

	button.style.border = "solid red 2px";
	activeMap = button;
	console.log(button.value);
}

/*
Generates a random dropping spot for the selected map and returns it 
 */
function RandomDropSpot(){
	var dropSpot;

	switch(activeMap.value){
		case "erangel":
			dropSpot = erangelDrops[Math.floor(Math.random() * erangelDrops.length)]; 		
			break;
		case "miramar":
			dropSpot = miramarDrops[Math.floor(Math.random() * miramarDrops.length)];
			break;
		case "sanhok": 
			dropSpot = sanhokDrops[Math.floor(Math.random() * sanhokDrops.length)];
			break;
		case "vikendi":
			dropSpot = vikendiDrops[Math.floor(Math.random() * vikendiDrops.length)];
			break;
		case default:
			dropSpot = "Error";
			break;
	}

	return dropSpot
}
