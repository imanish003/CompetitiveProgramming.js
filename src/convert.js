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

function startConvertion(source,destination){

    var data = fs.readFileSync(source, 'utf-8');
    var lines = data.split('\n');

    // Find the variable name in which inputReader is stored
    let nameOfInputReaderVariable = findInputReaderVariableName(lines);

    // Read the file line by line
    var finalOutput = prefixString;
    for(let line of lines){
       let modifiedLine = processLine(line,nameOfInputReaderVariable);
       finalOutput += "\t" +modifiedLine +"\n";
    }
    finalOutput += postfixString;

    console.log(finalOutput);
    fs.writeFile(destination, finalOutput, function(err) {
        console.log('Error',err);
    });
}

function processLine(line,nameOfInputReaderVariable){
    if(line.includes(nameOfInputReaderVariable+'.readNumber()')){
        return line.replace(nameOfInputReaderVariable+'.readNumber()','Number(lines[lineNumber++])');
    }
    else if(line.includes(nameOfInputReaderVariable+'.readLine()')){
        return line.replace(nameOfInputReaderVariable+'.readLine()','lines[lineNumber++]');
    }
    else if(line.includes(nameOfInputReaderVariable+'.readArray()')){
        return line.replace(nameOfInputReaderVariable+'.readArray()','lines[lineNumber++].split(" ")');
    }
    else if(line.includes(nameOfInputReaderVariable+'.readBoolean()')){
        return line.replace(nameOfInputReaderVariable+'.readBoolean()','Boolean(lines[lineNumber++])');
    }
    else if(line.includes(nameOfInputReaderVariable+'.readNumericArray()')){
        return line.replace(nameOfInputReaderVariable+'.readNumericArray()','lines[lineNumber++].split(" ").map(val => Number(val))');
    }else if(line.includes("requires('inputReader')")){
        return "";
    }else {
        return line;
    }
}

function findInputReaderVariableName(lines){
    for(let line of lines){
        console.log(line);
        if(line.includes("requires('inputReader')")) {
            return line.match(/\s.+\s*=/)[0].trim().split(/[ =]/)[0];
        }
    }
}


var prefixString = `
let __lines__;
let __lineNumber__ = 0;

function main() {\n\t
	let __lines__ = __input__.split('\n');`

var postfixString = `}\n\nvar input = '';
function cacheInput(data) {
    input += data;
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);

function __inputReader__ () {
	function readArray() {
		return __lines__[__lineNumber__++].split(' ');
	}

	function readNumberArray(){
		return __lines__[__lineNumber__++].split(' ').map(val => Number(val));
	}

	function readBoolean(){
		let word = __lines__[__lineNumber__++];
		if(word.toLowerCase() == "true" || word.toLowerCase() == "1"){
			return true;
		}else {
			return true;
		}
	}

	function readChar(){
		return __lines__[__lineNumber__++].trim();
	}

	function readFloat(){
		return Number(__lines__[__lineNumber__++]);
	}

	function readInteger(){
		return Number(__lines__[__lineNumber__++]);
	}

	function readLine(){
		return __lines__[__lineNumber__++];
	}

	return {
		readArray,
		readBoolean,
		readChar,
		readFloat,
		readInteger,
		readLine,
		readNumberArray
	}
}`


