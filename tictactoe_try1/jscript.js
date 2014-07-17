var turn = 1

function whosTurn(where) {
	if (turn == 1 || turn == 3 || turn == 5) {
		turn = turn + 1;
		addAnX(where);
	}
	else {
		turn = turn + 1;
		addAnO(where);
}
}

function addAnX(where) {
	console.log(where)
	document.getElementById(where).innerHTML="<img src='ximg.gif'>";
	if (where == 'trleft') {
		xTally = xTally + 10;
		didIWinYet(xTally);
	}
	else if (where == 'trmiddle') {
		xTally = xTally + 1;
		didIWinYet(xTally);
	}
	else if (where == 'trright') {
		xTally = xTally + 2;
		didIWinYet(xTally);
	}
	else if (where == 'mrleft') {
		xTally = xTally + 3;
		didIWinYet(xTally);
	}
	else if (where == 'mrmiddle') {
		xTally = xTally + 4;
		didIWinYet(xTally);
	}
	else if (where == 'mrright') {
		x1Tally = xTally + 5;
		didIWinYet(xTally);
	}
	else if (where == 'brleft') {
		xTally = xTally + 6;
		didIWinYet(xTally);
	}
	else if (where == 'brmiddle') {
		xTally = xTally + 7;
		didIWinYet(xTally);
	}
	else if (where == 'brright') {
		xTally = xTally + 8;
		didIWinYet(xTally);
	}
};


var xTally = 0;
var oTally = 0;



function addAnO(where) {
	console.log(where)
	document.getElementById(where).innerHTML="<img src='oimg.jpeg'>";
	
		if (where == trleft) {
		oTally = oTally + 10;
		
		didIWinYet();
	}
	else if (where == trmiddle) {
		oTally = oTally + 1;
		didIWinYet(oTally);
	}
	else if (where == trright) {
		oTally = oTally + 2;
		didIWinYet(oTally);
	}
	else if (where == mrleft) {
		oTally = oTally + 3;
		didIWinYet(oTally);
	}
	else if (where == mrmiddle) {
		oTally = oTally + 4;
		didIWinYet(oTally);
	}
	else if (where == mrright) {
		o1Tally = oTally + 5;
		didIWinYet(oTally);
	}
	else if (where == brleft) {
		oTally = oTally + 6;
		didIWinYet(oTally);
	}
	else if (where == brmiddle) {
		oTally = oTally + 7;
		didIWinYet(oTally);
	}
	else if (where == brright) {
		oTally = oTally + 8;
		didIWinYet(oTally);
	}
};


function didIWinYet() {
	if (xTally === 13) {
		alert('X Wins the Game');
	}
	else if (xTally === 12) {
		alert('X Wins the Game');
	}
	else if (xTally === 21) {
		alert('X Wins the Game');
	}
	else if (xTally === 19) {
		alert('X Wins the Game');
	}
	else if (xTally === 15) {
		alert('X Wins the Game');
	}
	else if (xTally === 22) {
		alert('X Wins the Game')
	}
};