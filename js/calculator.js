/*jslint node: true */ 'use strict';
var calculator = document.getElementById('calculator');

var displayValue = document.createElement('div');
displayValue.id = 'displayValue';
displayValue.style.border = 'thick solid black';
displayValue.innerHTML = 0;
calculator.appendChild(displayValue);

  function makeButtons(){
    var myButtons;
    var buttonContainer = document.createElement('div');
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

//first row
var button_seven = document.getElementById('buttonIndex00');
button_seven.innerHTML = 7;
var button_eight = document.getElementById('buttonIndex01');
button_eight.innerHTML = 8;
var button_nine = document.getElementById('buttonIndex02');
button_nine.innerHTML = 9;
var button_divide = document.getElementById('buttonIndex03');
button_divide.innerHTML = '/';
var button_clear = document.getElementById('buttonIndex04');
button_clear.innerHTML = 'clear';

//second row
var button_four = document.getElementById('buttonIndex10');
button_four.innerHTML = 4;
var button_five = document.getElementById('buttonIndex11');
button_five.innerHTML = 5;
var button_six = document.getElementById('buttonIndex12');
button_six.innerHTML = 6;
var button_multiply = document.getElementById('buttonIndex13');
button_multiply.innerHTML = 'x';
var button_getBalance = document.getElementById('buttonIndex14');
button_getBalance.innerHTML = 'get balance';

//third row
var button_one = document.getElementById('buttonIndex20');
button_one.innerHTML = 1;
var button_two = document.getElementById('buttonIndex21');
button_two.innerHTML = 2;
var button_three = document.getElementById('buttonIndex22');
button_three.innerHTML = 3;
var button_subtract = document.getElementById('buttonIndex23');
button_subtract.innerHTML = '-';
var button_depositCash = document.getElementById('buttonIndex24');
button_depositCash.innerHTML = 'deposit cash';

//fourth row
var button_zero = document.getElementById('buttonIndex30');
button_zero.innerHTML = 0;
var button_doubleZero = document.getElementById('buttonIndex31');
button_doubleZero.innerHTML = '00';
var button_decimal = document.getElementById('buttonIndex32');
button_decimal.innerHTML = '.';
var button_add = document.getElementById('buttonIndex33');
button_add.innerHTML = '+';
var button_withdrawCash = document.getElementById('buttonIndex34');
button_withdrawCash.innerHTML = 'withdraw cash';

//equals sign
var button_equals = document.getElementById('buttonIndex43');
button_equals.innerHTML = '=';