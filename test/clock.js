var assert = require('assert');

var Clock = require("../app/clock.js").Clock;

describe('Berlin Clock', function(){

	// ----------------------------------------------------------------------------------------
	// hour row 1
	// ----------------------------------------------------------------------------------------
	describe('#foo()', function(){
		it('should return the berlin time for 00:00:00', function(){
			var clock = new Clock('00:00:00');

			assert.equal('OOOO', clock.getHourRow1());
		});
	}),
	describe('#foo()', function(){
		it('should return the berlin time for 13:17:01', function(){
			var clock = new Clock('13:17:01');

			assert.equal('RROO', clock.getHourRow1());
		});
	}),
	describe('#foo()', function(){
		it('should return the berlin time for 23:59:59', function(){
			var clock = new Clock('23:59:59');

			assert.equal('RRRR', clock.getHourRow1());
		});
	}),
	// ----------------------------------------------------------------------------------------
	// Hour row 2
	// ----------------------------------------------------------------------------------------
	describe('#foo()', function(){
		it('should return the berlin time hour row 2 for 00:00:00', function(){
			var clock = new Clock('00:00:00');

			assert.equal('OOOO', clock.getHourRow2());
		});
	}),
	describe('#foo()', function(){
		it('should return the berlin time hour row 2 for 13:17:01', function(){
			var clock = new Clock('13:17:01');

			assert.equal('RRRO', clock.getHourRow2());
		});
	}),
	describe('#foo()', function(){
		it('should return the berlin time hour row 2 for 23:59:59', function(){
			var clock = new Clock('23:59:59');

			assert.equal('RRRO', clock.getHourRow2());
		});
	}),
	describe('#foo()', function(){
		it('should return the berlin time hour row 2 for 24:00:00', function(){
			var clock = new Clock('24:00:00');

			assert.equal('RRRR', clock.getHourRow2());
		});
	}),
	// ----------------------------------------------------------------------------------------
	// Minutes row 1
	// ----------------------------------------------------------------------------------------
	describe('#foo()', function(){
		it('should return the berlin time minutes row 1 for 00:11:00', function(){
			var clock = new Clock('00:11:00');

			assert.equal('YYOOOOOOOOO', clock.getMinutesRow1());
		});
	}),

	describe('#foo()', function(){
		it('should return the berlin time minutes row 1 for 00:00:00', function(){
			var clock = new Clock('00:00:00');

			assert.equal('OOOOOOOOOOO', clock.getMinutesRow1());
		});
	}),
	describe('#foo()', function(){
		it('should return the berlin time minutes row 1 for 13:17:01', function(){
			var clock = new Clock('13:17:01');

			assert.equal('YYROOOOOOOO', clock.getMinutesRow1());
		});
	}),
	describe('#foo()', function(){
		it('should return the berlin time minutes row 1 for 23:59:59', function(){
			var clock = new Clock('23:59:59');

			assert.equal('YYRYYRYYRYY', clock.getMinutesRow1());
		});
	}),
	describe('#foo()', function(){
		it('should return the berlin time minutes row 1 for 24:00:00', function(){
			var clock = new Clock('24:00:00');

			assert.equal('OOOOOOOOOOO', clock.getMinutesRow1());
		});
	}),
	// ----------------------------------------------------------------------------------------
	// Minutes row 2
	// ----------------------------------------------------------------------------------------
	describe('#foo()', function(){
		it('should return the berlin time minutes row 2 for 00:11:00', function(){
			var clock = new Clock('00:11:00');

			assert.equal('YOOO', clock.getMinutesRow2());
		});
	}),

	describe('#foo()', function(){
		it('should return the berlin time minutes row 2 for 00:00:00', function(){
			var clock = new Clock('00:00:00');

			assert.equal('OOOO', clock.getMinutesRow2());
		});
	}),
	describe('#foo()', function(){
		it('should return the berlin time minutes row 2 for 13:17:01', function(){
			var clock = new Clock('13:17:01');

			assert.equal('YYOO', clock.getMinutesRow2());
		});
	}),
	describe('#foo()', function(){
		it('should return the berlin time minutes row 2 for 23:59:59', function(){
			var clock = new Clock('23:59:59');

			assert.equal('YYYY', clock.getMinutesRow2());
		});
	}),
	describe('#foo()', function(){
		it('should return the berlin time minutes row 2 for 24:00:00', function(){
			var clock = new Clock('24:00:00');

			assert.equal('OOOO', clock.getMinutesRow2());
		});
	}),
	// ----------------------------------------------------------------------------------------
	// Seconds
	// ----------------------------------------------------------------------------------------
	describe('#foo()', function(){
		it('should return the berlin time seconds for 00:00:00', function(){
			var clock = new Clock('00:00:00');

			assert.equal('Y', clock.getSeconds());
		});
	}),
	describe('#foo()', function(){
		it('should return the berlin time seconds for 13:17:01', function(){
			var clock = new Clock('13:17:01');

			assert.equal('O', clock.getSeconds());
		});
	})
});