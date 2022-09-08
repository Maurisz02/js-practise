
var tomb = [];
for(var i = 0; i < 10; i++){
    var random = Math.floor(Math.random() * 101)+1;
    tomb[i]=random;
}
tomb.sort();
console.log(tomb);