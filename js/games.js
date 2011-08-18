$(document).ready(function() {
  
  var x = "X";
  var o = "O";
  var tie = "Cat";
  
  var tic = x;
  var boardSize = 3;
  var move = 0;
  var imgSize = 162;
  
  placekitten();
  
  $("li").click(function() {
    if($(this).html() != o && $(this).html() != x) {
      $(this).html(tic);
      move++;
      tictactoe();
    }
  });
  
  function tictactoe() {
    if(tic == x) {
      tic = o;
    } else if(tic == o) {
      tic = x;
    }
    
    var arr = $('li').map(function(){
       return $(this).html();
    }).get();
    
    var arrSize = arr.length;
    
    var check = "";
    
    for(var i = 0; i < boardSize; i+=1) {
      // check all across
      check = "";
      for(var j = 0; j < boardSize; j++) {
        check+=arr[i+(j*boardSize)];
      }
      if(win(check)) break;
      
      // check left diagonal
      if(i == 0) {
        check = "";
        for(var j = 0; j < boardSize*boardSize; j+=boardSize+1) {
          check+=arr[j];
        }
        if(win(check)) break;
      }
      
      // check right diagonal
      if(i == boardSize-1) {
        check = "";
        for(var j = boardSize-1; j <= (boardSize*boardSize)-boardSize; j+=boardSize-1) {
          check+=arr[j];
        }
        if(win(check)) break;
      }
    }
    for(var i = 0; i <= (boardSize*boardSize)-boardSize; i+=boardSize) {
      // check all down
      check = "";
      for(var j = 0; j < boardSize; j++) {
        check+=arr[i+j];
      }
      if(win(check)) break;
    }
  }
  
  function win(check) {
    if(check == x+x+x) {
      alert(x+" wins");
      tic = x;
      move = 0;
      placekitten();
      return true;
    } else if(check == o+o+o) {
      alert(o+" wins");
      tic = x;
      move = 0;
      placekitten();
      return true;
    } else if(move == boardSize*boardSize) {
        alert(tie+" game");
        tic = x;
        move = 0;
        placekitten();
        return true;
    } else {
      return false;
    }
  }
  
  function placekitten() {
    var kiterator = Math.floor(Math.random()*9);
    $("li").each(function() {
      $(this).html('<img src="http://placekitten.com/'+imgSize+'/'+imgSize+'?image='+kiterator+'" alt="">');
      kiterator++;
    });
  }
  
});