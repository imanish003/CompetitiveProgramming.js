const waitConsoleInput = require('wait-console-input');

function inputReader() {
	/**
	 * Read char from console
	 *
	 * @returns character
	 */
	function readChar() {
		return waitConsoleInput.readChar();
	}

	/**
	* Read Number from console
	* @returns a Number
	*/
	function readNumber() {
		return waitConsoleInput.readFloat();
	}

	/**
	* Read a line from console
	* @returns line
	*/
	function readLine() {
		return waitConsoleInput.readLine();
	}

	/**
	* Read a array separated by space
	* @returns number array
	*/
	function readNumberArray() {
		return waitConsoleInput.readNumberArray();
	}

	/**
	* Read a generic array from console separated by space
	* @returns generic array
	*/
	function readArray() {
		return waitConsoleInput.readArray();
	}

	/**
	* Read a boolean value i.e true or false from console
	* @returns true or false
	*/
	function readBoolean() {
		return waitConsoleInput.readBoolean();
	}

	return {
		readArray,
		readBoolean,
		readChar,
		readNumber,
		readLine,
		readNumberArray
	};
}

exports.inputReader = inputReader();
