var app = require('../grader.js')

describe('Grader', function(){
	it('should convert test score to letter grade', function(){
		expect(app.letterGrader(45)).toEqual("F");
		expect(app.letterGrader(88)).toEqual("B");
		expect(app.letterGrader(99)).toEqual("A");

	});
});

describe('Average', function(){
	it('should return the average from an array of scores', function(){
		expect(app.averageScore([52, 80, 86, 94])).toEqual(78);
		expect(app.averageScore([90, 95, 87, 60])).toEqual(83);

	})
})

describe('Median', function(){
	it('should return the median from an array of scores'), function(){
		expect(app.medianScore([52, 80, 80, 86, 94])).toEqual(80);
		expect(app.medianScore([52, 80, 86, 94])).toEqual(83)
	}
})

describe('Mode', function(){
	xit('should return the most frequently present score from an array'), function(){
		expect(app.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);

		//what to do when two numbers appear with equal frequency?
	}
})