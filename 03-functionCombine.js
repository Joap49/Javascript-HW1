/// 03-functionCombine.js

var str1 = "My favorite holiday is "
var array1 = ["Easter", "4th of July", "Halloween", "Thanksgiving", "Christmas", "New Years"];
var indexNum = Math.floor(Math.random() * array1.length);
var str2 = array1[indexNum];

function Holiday(){
  return str1.concat(str2);
}

console.log(Holiday(str1, str2));
