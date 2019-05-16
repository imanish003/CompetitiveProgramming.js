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
