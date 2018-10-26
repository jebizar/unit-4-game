
var winC = 0;
var lossC = 0;

$("#winCount").html("Wins: " + winC);
$("#lossCount").html("Losses: " + lossC);



function newGame(){
    let match = Math.floor(Math.random() * 100 + 20);
 
    crystal1 = Math.floor(Math.random() * 12 + 1);
    crystal2 = Math.floor(Math.random() * 12 + 1);
    crystal3 = Math.floor(Math.random() * 12 + 1);
    crystal4 = Math.floor(Math.random() * 12 + 1);

    let userTotal = 0;

    $("#match").text(match);
    $("#userTotal").text(userTotal);

    $("#1").on("click", function(){
        userTotal += crystal1;
        
        if(userTotal === match){
            $("#userTotal").text(userTotal + " You Win!");
            winC ++;
            $("#winCount").html("Wins: " + winC);
            userTotal = 0;
            newGame();
        }
        if(userTotal > match){
            $("#userTotal").text(userTotal + " You Lose!");
            lossC ++;
            $("#lossCount").html("Losses: " + lossC);
            userTotal = 0;
            newGame();
        }
        else{
            $("#userTotal").text(userTotal);
        }
    });
    $("#2").on("click", function(){
        userTotal += crystal2;
        if(userTotal === match){
            $("#userTotal").text(userTotal + " You Win!");
            winC ++;
            $("#winCount").html("Wins: " + winC);
            userTotal = 0;
            newGame();
        }
        if(userTotal > match){
            $("#userTotal").text(userTotal + " You Lose!");
            lossC ++;
            $("#lossCount").html("Losses: " + lossC);
            userTotal = 0;
            newGame();
        }
        else{
            $("#userTotal").text(userTotal);
        }
    });
    $("#3").on("click", function(){
        userTotal += crystal3;
        if(userTotal === match){
            $("#userTotal").text(userTotal + " You Win!");
            winC ++;
            $("#winCount").html("Wins: " + winC);
            userTotal = 0;
            newGame();
        }
        if(userTotal > match){
            $("#userTotal").text(userTotal + " You Lose!");
            lossC ++;
            $("#lossCount").html("Losses: " + lossC);
            userTotal = 0;
            newGame();
        }
        else{
            $("#userTotal").text(userTotal);
        }
    });
    $("#4").on("click", function(){
        userTotal += crystal4;
        if(userTotal === match){
            $("#userTotal").text(userTotal + " You Win!");
            winC ++;
            $("#winCount").html("Wins: " + winC);
            userTotal = 0;
            newGame();
        }
        if(userTotal > match){
            $("#userTotal").text(userTotal + " You Lose!");
            lossC ++;
            $("#lossCount").html("Losses: " + lossC);
            userTotal = 0;
            newGame();
        }
        else{
            $("#userTotal").text(userTotal);
        }
    }); 
}

newGame();

$("#newGame").on("click",function(){
    newGame();
})