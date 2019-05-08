const waitConsoleInput = require('wait-console-input');

function inputReader() {
	/**
	* Function use: Get a character from user
	*/
	function readChar() {
		return waitConsoleInput.readChar();
	}

	/**
	* Function use: Get an integer number from user
	*/
	function readInteger() {
		return waitConsoleInput.readInteger();
	}

	/**
	* Function use: Get a floating point number from user
	*/
	function readFloat() {
		return waitConsoleInput.readFloat();
	}

	/**
	* Function use: Get a string from user
	*
	*/
	function readLine() {
		return waitConsoleInput.readLine();
	}

	/**
	* Function use: Get a number array
	*/
	function readNumberArray() {
		return waitConsoleInput.readNumberArray();
	}

	/**
	* Function use: Get an generic array.
	*/
	function readArray() {
		return waitConsoleInput.readArray();
	}

	/**
	* Function use: Get the true or false value entered by user on the console.
	*/
	function readBoolean() {
		return waitConsoleInput.readBoolean();
	}

	return {
		readArray,
		readBoolean,
		readChar,
		readFloat,
		readInteger,
		readLine,
		readNumberArray
	};
}

exports.inputReader = inputReader();
