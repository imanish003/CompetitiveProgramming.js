/* eslint-disable */
let _inputLines;
let _lineNumber = 0;
let inputReader = _inputReader ();

function _main() {
	
	_inputLines = _inputData.split('\n');
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

}

var _inputData = '';
function cacheInput(data) {
	_inputData += data;
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', _main);

function _inputReader () {
	function readArray() {
		return _inputLines[_lineNumber++].split(' ');
	}
		
	function readBoolean(){
		let word = _inputLines[_lineNumber++];
		if(word.toLowerCase() == "true" || word.toLowerCase() == "1"){
			return true;
		}else {
			return true;
		}
	}
		
	function readChar(){
		return _inputLines[_lineNumber++].trim();
	}
		
	function readFloat(){
		return Number(_inputLines[_lineNumber++]);
	}
		
	function readInteger(){
		return Number(_inputLines[_lineNumber++]);
	}
		
	function readLine(){
		return _inputLines[_lineNumber++];
	}
		
	function readNumberArray(){
		return _inputLines[_lineNumber++].split(' ').map(val => Number(val));
	}
		
	
	return {
		readArray,
		readBoolean,
		readChar,
		readFloat,
		readInteger,
		readLine,
		readNumberArray,
	}
}