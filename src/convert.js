#!/usr/bin/env node
/* eslint-disable */
var fs = require('fs');

const argv = require('yargs')
	.option('source', {
		alias: 's',
		describe: 'Source file path'
	})
	.option('destination', {
		alias: ['dest','d'],
		describe: 'Path: where you want to store the output'
	})
	.demandOption(['source'], 'Source file path is required')
	.help()
	.argv;

startConvertion(argv.source, argv.destination);

/**
 * Start the conversion of source file and store it at the destination
 * Output file content could be submitted on any conding contest platform
 *
 * @param {*} source path
 * @param {*} destination path
 */
function startConvertion(source,destination){

    var code = fs.readFileSync(source, 'utf-8');
    var lines = code.split('\n');

    // Find the variable name in which inputReader is stored
	let nameOfInputReaderVariable = findInputReaderVariableName(lines);

    // Read the file line by line
    var finalOutput = getPrefixString(nameOfInputReaderVariable);
    for(let line of lines){
       let modifiedLine = processLine(line,nameOfInputReaderVariable);
       if(modifiedLine) finalOutput += "\t" +modifiedLine +"\n";
    }
    finalOutput += getPostfixString(code,nameOfInputReaderVariable);

    fs.writeFile(destination, finalOutput, function(err) {
        console.log('Error',err);
	});
}

/**
 * Process the single line of code written by user.
 *
 * @param {*} line
 * @param {*} nameOfInputReaderVariable
 * @returns
 */
function processLine(line,nameOfInputReaderVariable){
	/**
	 * Remove the require statment to include Competative programming input reader
	 */
	if(!(line.includes('require') && line.includes(nameOfInputReaderVariable))){
		return line;
	}else{
		return "";
	}
}

/**
 * Find the name of variable in which user store the inputReader object.
 * Which is used by user to read different types of input from the console.
 *
 * @param {*} Array of lines in code
 * @returns name of input reader variable
 */
function findInputReaderVariableName(lines){
	for(let line of lines){
		/**
		 * Regex test for following type of require statement :
		 * const { inputReader } = require('competitive-programming-js');
		 * && exclude single or multiline comments
		 */
		if(/^.*{.+}.*=.*require.*\(.*['"].*competitive-programming-js.*['"].*\)[ ]*;?[ ]*$/.exec(line) && !/^([ ]*\/\/.*)|([ ]*\/\*.*\*\/[ ]*)$/.test(line)) {
			/**
			 * Below statement output :
			 * [ 'const ', ' inputReader ', ' =' ]
			 */
			let stringsBeforeEqualSign = line.match(/^.*=/g)[0].split(/[[ ]*{[ ]*}[ ]*]/);
			
			return stringsBeforeEqualSign[1];
		}
		/**
		 * const inputReader = require('competitive-programming-js').inputReader;
		 */
		else if(/^.*=.*require.*\(.*['"].*competitive-programming-js.*['"].*\).inputReader[ ]*;?[ ]*$/.exec(line)){
			/**
			 * Below statement output :
			 * [ 'const', 'inputReader', '=' ]
			 */
			let stringsBeforeEqualSign = line.match(/^.*=/g)[0].split(/[ ]+/);
			
			return stringsBeforeEqualSign[1];
		}
    }
}


/**
 * Get prefix for the converted code
 *
 * @param {*} input reader variable used by user
 * @returns prefix string
 */
function getPrefixString(nameOfInputReaderVariable){
	var prefixString = `
let _inputLines;
let _lineNumber = 0;
let ${nameOfInputReaderVariable} = _inputReader ();

function _main() {\n\t
	_inputLines = _inputData.split('\\n');
`
	
	return prefixString;
}

/**
 * Get prefix for the converted code
 *
 * @param {*} code written by user
 * @param {*} nameOfInputReaderVariable
 * @returns postfix string
 */
function getPostfixString(code, nameOfInputReaderVariable){
	var postfixString = `
}

var _inputData = '';
function cacheInput(data) {
	_inputData += data;
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', _main);

function _inputReader () {`

	let returnStatement = `
	return {`
	
	if(code.includes(`${nameOfInputReaderVariable}.readArray()`)){
		postfixString += `
	function readArray() {
		return _inputLines[_lineNumber++].split(' ');
	}
		`;
		returnStatement += `
		readArray,`;
	}
	
	if(code.includes(`${nameOfInputReaderVariable}.readBoolean()`)){
		postfixString += `
	function readBoolean(){
		let word = _inputLines[_lineNumber++];
		if(word.toLowerCase() == "true" || word.toLowerCase() == "1"){
			return true;
		}else {
			return true;
		}
	}
		`;
		returnStatement += `
		readBoolean,`;
	}
	
	if(code.includes(`${nameOfInputReaderVariable}.readChar()`)){
		postfixString += `
	function readChar(){
		return _inputLines[_lineNumber++].trim();
	}
		`;
		returnStatement += `
		readChar,`;
	}
	
	if(code.includes(`${nameOfInputReaderVariable}.readFloat()`)){
		postfixString += `
	function readFloat(){
		return Number(_inputLines[_lineNumber++]);
	}
		`;
		returnStatement += `
		readFloat,`;
	}
	
	if(code.includes(`${nameOfInputReaderVariable}.readInteger()`)){
		postfixString += `
	function readInteger(){
		return Number(_inputLines[_lineNumber++]);
	}
		`;
		returnStatement += `
		readInteger,`;
	}
	
	if(code.includes(`${nameOfInputReaderVariable}.readLine()`)){
		postfixString += `
	function readLine(){
		return _inputLines[_lineNumber++];
	}
		`;
		returnStatement += `
		readLine,`;
	}
	
	if(code.includes(`${nameOfInputReaderVariable}.readNumberArray()`)){
		postfixString += `
	function readNumberArray(){
		return _inputLines[_lineNumber++].split(' ').map(val => Number(val));
	}
		`;
		returnStatement += `
		readNumberArray,`;
	}

	returnStatement += `
	}`;
	postfixString += `
	${returnStatement}
}`;

	return postfixString;
}


`








`