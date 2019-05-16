/* eslint-disable */
const inputReader = require('../lib/index').inputReader;

let noOfCase = inputReader.readInteger();
console.log(noOfCase,typeof noOfCase);
while(noOfCase--){
	let tmp = inputReader.readArray();
	console.log(tmp, typeof tmp);

	tmp = inputReader.readBoolean();
	console.log(tmp, typeof tmp);

	tmp = inputReader.readChar();
	console.log(tmp, typeof tmp);

	tmp = inputReader.readFloat();
	console.log(tmp, typeof tmp);

	tmp = inputReader.readLine();
	console.log(tmp, typeof tmp);

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