$(function() {

  var counter = true;

  $('.box').on('click', function() {

    if ($(this).text().length < 1) {
      if (counter) {
        $(this).text('O');
        counter = false;
        checkWin();
      }
      else {
        $(this).text('X');
        counter = true;
        checkWin();
      }
    }
  });

  var checkWin = function() {
    var gridStatus = $('.box').map(function() { return $(this).text(); });
    // we have  a variable who will produce an array of values based on what is in the boxes.
    //we can make a funciton and put this variable inside and then have it check different combinations and win conditions, if triggered we will make it display a winner.
    if ($('.box').text() !== ''){
      if ((gridStatus[0] === gridStatus[1] && gridStatus[1] === gridStatus[2]) || (gridStatus[3] === gridStatus[4] && gridStatus[4] === gridStatus[5]) || (gridStatus[6] === gridStatus[7] && gridStatus[7] === gridStatus[8]) || (gridStatus[0] === gridStatus[3] && gridStatus[3] === gridStatus[6]) || (gridStatus[1] === gridStatus[4] && gridStatus[4] === gridStatus[7]) || (gridStatus[2] === gridStatus[5] && gridStatus[5] === gridStatus[8]) || (gridStatus[0] === gridStatus[4] && gridStatus[4] === gridStatus[8]) || (gridStatus[2] === gridStatus[4] && gridStatus[4] === gridStatus[6])) {
        if (gridStatus[0] !== '') {
          console.log(gridStatus[0]);
        }
        else if ()
        console.log($(this).text());
        return true;
        //something
      }
    }


  }; //end of checkWin

  // var checkWin = function() {
  //   var one = $('.one').text();
  //   var two = $('.two').text();
  //   var three = $('.three').text();
  //   var four = $('.four').text();
  //   var five = $('.five').text();
  //   var six = $('.six').text();
  //   var seven = $('.seven').text();
  //   var eight = $('.eight').text();
  //   var nine = $('.nine').text();
  //
  //   if ($('.box').text() !== '') {
  //     if (one === two && two === three){
  //       console.log($('.one').text());
  //     }
  //     else if (four === five && five === six) {
  //       console.log($('.four').text());
  //     }
  //     else if (seven === eight && eight === nine) {
  //       console.log($('.seven').text());
  //     }
  //     else if (one === four && four === seven) {
  //       console.log($('.four').text());
  //     }
  //     else if (two === five && five === eight) {
  //       console.log($('.five').text());
  //     }
  //     else if (three === six && six === nine) {
  //       console.log($('three').text());
  //     }
  //     else if (one === five && five === nine){
  //       console.log($('.one').text());
  //     }
  //     else if (three === five && five == seven) {
  //       console.log($('.three').text());
  //     }
  //   }
  //
  // };









});
