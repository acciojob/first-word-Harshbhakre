function firstWord(s) {
	s=s.trim().split(" ")
	return s[0]?s[0]:""
}

const s = prompt("Enter String:");
alert(firstWord(s));    
