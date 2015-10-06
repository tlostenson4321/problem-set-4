// var addNumbers = function(string){

// }

var longestWord = function(words){

	var str = words.split( ' ')
	var longest = 0
	var word = null

	for (var i=0; i < str.length; i++ ){
		if (longest < str[i].length){
			longest = str[i].length
			word = str[i]
		}
	}



	return (word)
}
console.log(longestWord('Why not this one?'))