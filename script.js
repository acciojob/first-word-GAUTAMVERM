function firstWord(s) {
  // your code here
	if(s.length===0){
		return s;
	}
	let fis = s.split(" ")[0];
	return fis;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));



