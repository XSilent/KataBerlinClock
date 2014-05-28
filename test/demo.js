var assert = require('assert');

var Clock = require("../app/clock.js").Clock;

describe('Berlin Clock demo', function()
{
	// ----------------------------------------------------------------------------------------
	// Complete time
	// ----------------------------------------------------------------------------------------
	describe('Complete string', function(){
		it('should return the complete berlin time for 13:17:01', function()
		{
			var clock = new Clock('13:17:01');

			var timeStr = '\nO\n'
				+ 'RROO\n'
				+ 'RRRO\n'
				+ 'YYROOOOOOOO\n'
				+ 'YYOO\n';

			assert.equal(timeStr, clock.getTime());
		});
	})
});