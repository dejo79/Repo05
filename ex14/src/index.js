function main (){
    
    var myNoun = "dog";
    var myVerb = "ran";
    var myAdjective = "big";
    var myAdverb = "quickly";
    var wordBlanks = "My " + myNoun + " is " + myAdjective + " but he " + myVerb + " very " + myAdverb + " and he caught the ball.";

    return wordBlanks;
    
}
console.log(main());
module.exports = main;