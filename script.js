var numberList = [];
var stringList = [];
var numberCount = 0;
var sum = 0;
var average;
var stringCount = 0;

displayEverything();

$('#submit-button').on('click', testInput);
$('#reset-button').on('click', resetResults);


//------------------reusable functions----------------------------

//test input to see if it's a number, then run appropriate function
function testInput(evt){
  var userInput = $('#text-input').val();
  if($.isNumeric(userInput)) {
    addNumbers();
  } else {
    addStrings();
  }
  evt.preventDefault( );
  $('#user-input')[0].reset();
}

//push input to number array, then display
function addNumbers(){
var userInput = parseFloat($('#text-input').val());
  numberList.push(userInput);
  displayEverything();
}

//push input to string array, then display
function addStrings(){
var userInput = $('#text-input').val();
  stringList.push(userInput);
  displayEverything();
}

//calculate counts, sum, average and display all calculations
function displayEverything(){
  numberCount = numberList.length;
  
  var i;
  sum = 0;
  for ( i = 0; i < numberCount; ++i ) {
        sum += numberList[i];
    }
  
  average = sum / numberCount;
  
  stringCount = stringList.length;
  
  var allText = stringList.join('; ');
  
  $('#count-display').text(numberCount);
  $('#sum-display').text(sum);
  $('#average-display').text(average);
  $('#string-count').text(stringCount);
  $('#text-display').text(allText);
}

//reset arrays and variables
function resetResults (){
  numberList = [];
  stringList = [];
  sum = 0;
  displayEverything();
}