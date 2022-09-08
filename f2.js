var tomb = [];
var eves = [];
var num;
for(var i = 0; i < 20; i++){
    var random = Math.floor(Math.random() * 21)+2;
    var cimsor= i +1;
    tomb[i]={'nev': 'Cirmos'+cimsor,'eletkor': random};
    if(random == 2){
        eves.push(tomb[i]);
    }
}
console.log(tomb);
console.log(eves);