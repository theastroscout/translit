(() => {
	var translit = function(str){
		if(!str.match(/[А-я]/)){
			return str;
		}
		let abc = require("./dict");
		let letters = str.split("");
		let newStr = "";
		for(let i=0,l=letters.length;i<l;i++){
			let letter = letters[i];
			newStr += (abc[letter] !== undefined)?abc[letter]:letter;
		}
		return newStr;
	};

	translit._error = (err) => {
		if(process.env.test !== undefined && process.env.test !== null){
			throw new Error(err);
		}
		return false;
	};

	module.exports = translit;
})();