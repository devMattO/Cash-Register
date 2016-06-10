/*jslint node: true */ 'use strict';

var calModule = calculatorModule();
console.log(calModule.add(5),calModule.add(5));

var calculator = document.getElementById('calculator');

var displayValue = document.createElement('div');
displayValue.id = 'displayValue';
displayValue.style.border = 'thick solid black';
var total = 0;
displayValue.innerHTML = total;
calculator.appendChild(displayValue);
var initialState = true;
var balance = 0;

  function makeButtons(){
    var myButtons;
    var buttonContainer = document.createElement('div');
    buttonContainer.id = 'buttonContainer';
    for (var i = 0; i < 5; i++) {
      var buttonRow = document.createElement('div');
      buttonRow.id = 'divIndex' + i;
      for (var j = 0; j < 5; j++) {
        myButtons = document.createElement('button');
        myButtons.id = 'buttonIndex' + i + j;
        buttonRow.appendChild(myButtons);

      }
      buttonContainer.appendChild(buttonRow);
    }
    calculator.appendChild(buttonContainer);
  }
  makeButtons();

  function eventListenerCreator(btn){
    btn.addEventListener('click', function(){
      if (initialState) {
        displayValue.innerHTML = '';
        initialState = false;
      }
      displayValue.innerHTML += btn.innerHTML;
    });
  }

//first row
var button_seven = document.getElementById('buttonIndex00');
button_seven.innerHTML = 7;
eventListenerCreator(button_seven);

var button_eight = document.getElementById('buttonIndex01');
button_eight.innerHTML = 8;
eventListenerCreator(button_eight);

var button_nine = document.getElementById('buttonIndex02');
button_nine.innerHTML = 9;
eventListenerCreator(button_nine);

var button_divide = document.getElementById('buttonIndex03');
button_divide.innerHTML = '/';
button_divide.addEventListener('click', function(){
  // console.log(button_divide.innerHTML);
  console.log(displayValue.innerHTML);

});

var button_clear = document.getElementById('buttonIndex04');
button_clear.innerHTML = 'clear';
button_clear.addEventListener('click', function(){
  initialState = true;
  displayValue.innerHTML = 0;
});

//second row
var button_four = document.getElementById('buttonIndex10');
button_four.innerHTML = 4;
eventListenerCreator(button_four);

var button_five = document.getElementById('buttonIndex11');
button_five.innerHTML = 5;
eventListenerCreator(button_five);

var button_six = document.getElementById('buttonIndex12');
button_six.innerHTML = 6;
eventListenerCreator(button_six);

var button_multiply = document.getElementById('buttonIndex13');
button_multiply.innerHTML = 'x';
var button_getBalance = document.getElementById('buttonIndex14');
button_getBalance.innerHTML = 'get balance';
button_getBalance.addEventListener('click', function(){
  console.log();
});

//third row
var button_one = document.getElementById('buttonIndex20');
button_one.innerHTML = 1;
eventListenerCreator(button_one);

var button_two = document.getElementById('buttonIndex21');
button_two.innerHTML = 2;
eventListenerCreator(button_two);

var button_three = document.getElementById('buttonIndex22');
button_three.innerHTML = 3;
eventListenerCreator(button_three);

var button_subtract = document.getElementById('buttonIndex23');
button_subtract.innerHTML = '-';
var button_depositCash = document.getElementById('buttonIndex24');
button_depositCash.innerHTML = 'deposit cash';
button_depositCash.addEventListener('click', function(){
  balance += displayValue.innerHTML;
});//need to stop this after one click

//fourth row
var button_zero = document.getElementById('buttonIndex30');
button_zero.innerHTML = 0;
eventListenerCreator(button_zero);

var button_doubleZero = document.getElementById('buttonIndex31');
button_doubleZero.innerHTML = '00';
eventListenerCreator(button_doubleZero);

var button_decimal = document.getElementById('buttonIndex32');
button_decimal.innerHTML = '.';
button_decimal.addEventListener('click', function(){
  displayValue.innerHTML += '.';
});
var button_add = document.getElementById('buttonIndex33');
button_add.innerHTML = '+';
button_add.addEventListener('click', function(){
  total = displayValue.innerHTML;
  console.log(total);
  console.log(calModule.add(5)); // left off right here
});
var button_withdrawCash = document.getElementById('buttonIndex34');
button_withdrawCash.innerHTML = 'withdraw cash';

//equals sign
var button_equals = document.getElementById('buttonIndex43');
button_equals.innerHTML = '=';
