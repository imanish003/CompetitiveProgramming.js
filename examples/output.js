/* eslint-disable */
let _inputLines;
let _lineNumber = 0;
let inputReader = _inputReader ();

function _main() {
	
	_inputLines = __input__.split('\n');
	
	let noOfTestCases = inputReader.readInteger();
	console.log('noOfTestCases :', noOfTestCases);

}

var _inputData = '';
function cacheInput(data) {
	_inputData += data;
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', _main);

function _inputReader () {
	function readInteger(){
		return Number(_inputLines[_lineNumber++]);
	}
		
	
	return {
		readInteger,
	}
}