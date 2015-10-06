var addNumbers = function(string){
	var words = string.split(' ')
	var a = ''
	var b = 0
	for (var i = 0; i <words.length; i++){
		a = parseInt(words[i])
		b += a
	}
	return b
}

console.log(addNumbers('12Hello 3World!'))

// var longestWord = function(words){

// 	var str = words.split( ' ')
// 	var longest = 0
// 	var word = null

// 	for (var i=0; i < str.length; i++ ){
// 		if (longest < str[i].length){
// 			longest = str[i].length
// 			word = str[i]
// 		}
// 	}



// 	return (word)
// }
// console.log(longestWord('Why not this one?'))