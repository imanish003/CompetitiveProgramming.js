const {inputReader} = require('competitive-programming-js');

// To read integer value from console
let noOfTestCases = inputReader.readInteger();
console.log(noOfCase,typeof noOfCase);
while(noOfTestCases--){
	// To read generic array separated by space
	let tmp = inputReader.readArray();
	console.log(tmp, typeof tmp);

	// To read boolean value i.e. 'true' or 'false' (It's case insensitive)
	tmp = inputReader.readBoolean();
	console.log(tmp, typeof tmp);

	// To read a single character
	tmp = inputReader.readChar();
	console.log(tmp, typeof tmp);

	// to read float value
	tmp = inputReader.readFloat();
	console.log(tmp, typeof tmp);

	// to read a line
	tmp = inputReader.readLine();
	console.log(tmp, typeof tmp);

	// To read a numeric array
	tmp = inputReader.readNumberArray();
	console.log(tmp, typeof tmp);
}

/* 
input :
1
hajs djahsd jhjhd khakdhjahs 2
true
a
3.23
This is an awesome line
1 4 5 8 9 7

Output :
1 'number'
[ 'hajs', 'djahsd', 'jhjhd', 'khakdhjahs', '2' ] 'object'
true 'boolean'
a string
3.23 'number'
This is an awesome line string
[ 1, 4, 5, 8, 9, 7 ] 'object'
 */