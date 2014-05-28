
var Clock = function(input)
{
	var _time = input;

	/**
	 *
	 * @returns {string}
	 */
	this.getHourRow1 = function ()
	{
		var hour = _time.substring(0, 2);
		var output = parseInt(hour / 5);

		var outputStr = '';
		for(var i=0;i<output;i++) {
			outputStr += 'R';
		}

		outputStr = fill(outputStr, 'O', 4);

		return outputStr;
	};

	this.getHourRow2 = function()
	{
		var hour = _time.substring(0, 2);
		var output = hour % 5;

		var outputStr = '';
		for(var i=0;i<output;i++) {
			outputStr += 'R';
		}

		outputStr = fill(outputStr, 'O', 4);

		return outputStr;
	};

	/**
	 *
	 * @returns {string}
	 */
	this.getMinutesRow1 = function()
	{
		var minutes = _time.substring(3, 5);
		var output = parseInt( minutes / 5 );

		var outputStr = '';
		var markerCount = 0;
		for(var i=0;i<output;i++) {

			markerCount++;

			if (markerCount === 3) {
				outputStr += 'R';
				markerCount = 0;
			} else {
				outputStr += 'Y';
			}
		}

		outputStr = fill(outputStr, 'O', 11);

		return outputStr;
	};

	/**
	 *
	 * @returns {string}
	 */
	this.getMinutesRow2 = function()
	{
		var minutes = _time.substring(3, 5);
		var output = parseInt( minutes % 5 );

		var outputStr = '';
		for(var i=0;i<output;i++) {
			outputStr += 'Y';
		}

		outputStr = fill(outputStr, 'O', 4);

		return outputStr;
	};

	/**
	 *
	 * @returns {string}
	 */
	this.getSeconds = function()
	{
		var seconds = _time.substring(6, 8);

		var output = parseInt( seconds % 2 );

		var outputStr = '';
		if (output === 0) {
			outputStr = 'Y';
		} else {
			outputStr = 'O';
		}

		return outputStr;
	};

	this.getTime = function()
	{
		var display = [];

		display.push( this.getSeconds() );
		display.push( this.getHourRow1() );
		display.push( this.getHourRow2() );
		display.push( this.getMinutesRow1() );
		display.push( this.getMinutesRow2() );

		var displayStr = '';
		displayStr = '\n' + this.getSeconds() + '\n';
		displayStr += this.getHourRow1() + '\n';
		displayStr += this.getHourRow2() + '\n';
		displayStr += this.getMinutesRow1() + '\n';
		displayStr += this.getMinutesRow2() + '\n';

		return displayStr;
	};

	function turnYellowToRedMarker(str, marker)
	{
		for(var i=0;i<str.length;i) {


			if (str[i] == 'Y') {

			}
		}

		return str;
	}

	/**
	 *
	 * @param str
	 * @param fillStr
	 * @param amount
	 * @returns {*}
	 */
	function fill(str, fillStr, amount)
	{
		var lengths = amount - str.length;

		for(var i=0; i<lengths;i++) {
			str += fillStr;
		}

		return str;
	}
};

module.exports.Clock = Clock;