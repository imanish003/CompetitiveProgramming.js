/* eslint-disable */
// const { inputReader } = require('../lib/index');
const inputReader = require('../lib/index').inputReader;

let noOfTestCases = inputReader.readInteger();
console.log('noOfTestCases :', noOfTestCases);
while (noOfTestCases--) {

	console.log('inputReader.readArray(); :', inputReader.readArray());
	console.log('inputReader.readBoolean(); :', inputReader.readBoolean());
	console.log('inputReader.readChar(); :', inputReader.readChar());
	console.log('inputReader.readFloat(); :', inputReader.readFloat());
	console.log('inputReader.readLine(); :', inputReader.readLine());
	console.log('inputReader.readNumberArray(); :', inputReader.readNumberArray());
}
