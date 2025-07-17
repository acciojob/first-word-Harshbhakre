function firstWord(s) {
	s=s.split(" ")
	return s[0]?s[0]:""
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));   
