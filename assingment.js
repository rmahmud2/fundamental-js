// feetToMile 
function feetToMile(feet){
    var mile = feet * 0.000189394;
    return mile;
}
var resultOfMile = feetToMile(5280);
console.log(resultOfMile);

// woodCalculator
function woodCalculator(chair, table, bed){
    var forOneChair = chair * 1;
    var forOneTable = table * 3;
    var forOneBed = bed * 5;
    var totalWood = forOneChair + forOneTable + forOneBed;
    return totalWood;
}
var resultOfWood = woodCalculator(1, 1, 1)
console.log(resultOfWood);

// tinyFriend
function tinyFriend(names){
    var smallest = names[0];
    for(var i=0; i<names.lenght; i++){
        var currentName = names[i].lenght;
        if(currentName<smallest){
            smallest = currentName[i];
        }
    }
    return smallest;
}
var tinyFriendName = tinyFriend(["Chhowa", "Deb", "Kontho", "Rana"]);
console.log(tinyFriendName);
