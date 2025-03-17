//your JS code here. If required.
function mapLetters(str){
	let obj={};
	for (let i=0; i<str.length; i++) {
		let char=str[i];
		if (obj[char]===undefined) {
			obj[char]=[];
		}
		obj[char].push(i);
		
	}
	return obj;
}
let input= string.toLowerCase(prompt());
alert(mapLetters(input));
