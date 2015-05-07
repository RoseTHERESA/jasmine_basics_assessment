module.exports = {
	letterGrader: function(number) {
		if (number < 60) {
		return "F";
		}
		else if (number >= 60 && number < 70) {
			return "D";
		}
		else if (number >= 70 && number < 80) {
			return "C";
		}
		else if (number >= 80 && number < 90) {
			return "B";
		}
		else {
			return "A";

		}
	},

	averageScore: function(array) {
		var sum = 0;
		for (var i=0; i<array.length; i++) {
			sum += array[i];

		}
		return sum/array.length
	},

	//tests not failing for the following
	medianScore: function(array) {
		//var half = array.length/2;
		//return half
	},

	modeScore: function(array) {

	}

};



