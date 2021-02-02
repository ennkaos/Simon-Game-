var userClickedPattern=[]
var level=0;
var gamePattern=[]
var buttonColours=["red","blue","green","yellow"]
$(document).keydown(function(){
    if(level==0){
        nextSequence();
    }
})

function nextSequence(){
    userClickedPattern=[]
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour);
    makeSound(randomChosenColour)
    level++;
    $("h1").text("Level "+""+level);
    
    
}

    
$(".btn").click(function (event){
    var userChosenColour =$(this).attr("id");;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    makeSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1)
})

function makeSound(name){
    switch(name){
        case "red":
            var red=new Audio("sounds/red.mp3");
            red.play();
        break;
        case "blue":
            var blue=new Audio("sounds/blue.mp3");
            blue.play();
        break;
        case "green":
            var green=new Audio("sounds/green.mp3");
            green.play();
        break;
        case "yellow":
            var yellow=new Audio("sounds/yellow.mp3")
            yellow.play()
        break;
    }
}
function animatePress(currentColor){

    $("."+currentColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}
function checkAnswer(currentlevel){
    if(userClickedPattern[currentlevel]===gamePattern[currentlevel]){
        if (userClickedPattern.length === gamePattern.length){

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
        console.log("succes");
        
    }else{
        console.log("wrong");
        $("h1").text("Game Over, Press Any Key to Restart");
        var audio2= new Audio("sounds/wrong.mp3");
        audio2.play();
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        },500)
        startOver()
    }


};
function startOver (){
    level=0;
    gamePattern=[];
    userClickedPattern=[]

}