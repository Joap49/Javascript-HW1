/// 05-randomWords.js

var array2 = ["I ", "You ", "We ", "They "]
var array3 = ["love ", "hate ", "protect ", "hug "]
var array4 = ["plantains", "pillows", "dogs", "flowers"]
var randomNum = Math.floor(Math.random() * array2.length);
var str3 = array2[randomNum]
var str4 = array3[randomNum]
var str5 = array4[randomNum]


function randomWords(){
  return str3.concat(str4, str5);
}

console.log(randomWords(str3, str4, str5));
