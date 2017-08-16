$(document).ready(function(){
  //default player X
  var turn='X';
  var turns=["#","#","#","#","#","#","#","#","#"];
  var computersTurn="O";
  var gameOn= false;
  var count=0;
  $('#turnX').click(function(){
    turn="O";
    computersTurn="X";
    $('#turnX').removeClass("btn-primary");
    $('#turnO').addClass("btn-primary");
     reset();
  });
  $('#turnO').click(function(){
    turn="X";
    computersTurn="O";
    $('#turnO').removeClass("btn-primary");
    $('#turnX').addClass("btn-primary");
    reset();
  });
  
  $('.tic').click(function()
  {
    var slot=$(this).attr('id');
    playerTurn(turn,slot);
  });
  function playerTurn(turn,id){
    var spotTaken=$("#"+id).text();
    if( spotTaken==='#'){
      count++;
      turns[id]=turn;
      $('#'+id).text(turn);
      winCondition(turns,turn);
      if(gameOn===false)
        {
          computerTurn();
          winCondition(turns,computersTurn);
        }
    }
  }
  function computerTurn(){
    var taken=false;
    while(taken===false && count!==5){
      var computerMove=(Math.random()*10).toFixed();
      var move=$("#"+computerMove).text();
      if(move==='#'){
        $('#'+computerMove).text(computersTurn);
        taken=true;
        turns[computerMove] = computersTurn;
      }
    }
  }
  function winCondition(turnsArray,currentTurn){
    if(turnsArray[0]===currentTurn&&turnsArray[1]===currentTurn&&turnsArray[2]===currentTurn){
      gameOn=true;
      reset();
      alert("Player "+currentTurn+" wins! (Top row across 0,1,2 spots)");
    }
    else if(turnsArray[3]===currentTurn&&turnsArray[4]===currentTurn&&turnsArray[5]===currentTurn){
      gameOn=true;
      reset();
      alert("Player "+currentTurn+" wins! (Middle row across 3,4,5 spots)");
    }
   else if(turnsArray[6]===currentTurn&&turnsArray[7]===currentTurn&&turnsArray[8]===currentTurn){
      gameOn=true;
      reset();
      alert("Player "+currentTurn+" wins! (Bottom row across 6,7,8 spots)");
    }
   else if(turnsArray[0]===currentTurn&&turnsArray[4]===currentTurn&&turnsArray[8]===currentTurn){
      gameOn=true;
      reset();
      alert("Player "+currentTurn+" wins! (Diagonal row across 0,4,8 spots)");
    }
   else if(turnsArray[2]===currentTurn&&turnsArray[4]===currentTurn&&turnsArray[6]===currentTurn){
      gameOn=true;
      reset();
      alert("Player "+currentTurn+" wins! (Diagonal row across 2,4,6 spots)");
    }
  else if(turnsArray[0]===currentTurn&&turnsArray[3]===currentTurn&&turnsArray[6]===currentTurn){
      gameOn=true;
      reset();
      alert("Player "+currentTurn+" wins! (Left column across 0,3,6 spots)");
    }
  else if(turnsArray[1]===currentTurn&&turnsArray[4]===currentTurn&&turnsArray[7]===currentTurn){
      gameOn=true;
      reset();
      alert("Player "+currentTurn+" wins! (Middle column across 1,4,7 spots)");
    }
  else if(turnsArray[2]===currentTurn&&turnsArray[5]===currentTurn&&turnsArray[8]===currentTurn){
      gameOn=true;
      reset();
      alert("Player "+currentTurn+" wins! (Right column across 2,5,8 spots)");
    }
  else {
    gameOn= false;
  }
  }
 function reset(){
   turns=["#","#","#","#","#","#","#","#","#"];
   count=0;
   $('.tic').text('#');
   gameOn= true;
   
 }
  
});
