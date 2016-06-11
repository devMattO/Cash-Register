/*jslint node: true */ 'use strict';

var calModule = calculatorModule();

var calculator = document.getElementById('calculator');
var displayValue = document.createElement('div');
displayValue.id = 'displayValue';
displayValue.style.border = 'thick solid black';

displayValue.innerHTML = 0;
calculator.appendChild(displayValue);
var initialState = true;
var divisor;
var memory = 0;
var subtract_tracker = false;
var add_tracker = false;
var divide_tracker = false;
var multiply_tracker = false;

var isDisplayEmpty = true;
// var isWaiting = false;
var operation;
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

// var button_divide = document.getElementById('buttonIndex03');
// button_divide.innerHTML = '/';

  function eventListenerCreator(btn){
    btn.addEventListener('click', function(){

      if (initialState) {
        console.log('setting initial state to false');
        displayValue.innerHTML = '';
        initialState = false;
      }

      // if(isWaiting){
      //   divisor = btn.innerHTML;
      //   console.log(divisor, 'DIVISOR');
      //   console.log(displayValue.innerHTML, 'DISPLAY VALUE');
      //   console.log(this.innerHTML, 'THIS');
      // }

        displayValue.innerHTML += btn.innerHTML;
        // calModule.load(displayValue.innerHTML);
        console.log('initial value inserted into total');
    });
      calModule.saveMemory();
      calModule.recallMemory();

  }

var button_divide = document.getElementById('buttonIndex03');
button_divide.innerHTML = '/';
button_divide.addEventListener('click', function(){
  // if(true){

  // button_divide = true;
  divide_tracker = true;
  calModule.load(displayValue.innerHTML);
  calModule.saveMemory();
  calModule.recallMemory();

  initialState = true;
  // isWaiting = true;
  // }
});

var button_clear = document.getElementById('buttonIndex04');
button_clear.innerHTML = 'clear';
button_clear.addEventListener('click', function(){
  initialState = true;
  displayValue.innerHTML = 0;
});


var button_multiply = document.getElementById('buttonIndex13');
button_multiply.innerHTML = 'x';
button_multiply.addEventListener('click', function(){
  multiply_tracker = true;
  calModule.load(displayValue.innerHTML);
  calModule.saveMemory();
  calModule.recallMemory();

  initialState = true;
});

var button_getBalance = document.getElementById('buttonIndex14');
button_getBalance.innerHTML = 'get balance';
button_getBalance.addEventListener('click', function(){
  console.log();
});

var button_subtract = document.getElementById('buttonIndex23');
button_subtract.innerHTML = '-';
button_subtract.addEventListener('click', function(){
  subtract_tracker = true;
  calModule.load(displayValue.innerHTML);
  calModule.saveMemory();
  calModule.recallMemory();

  initialState = true;
});
var button_depositCash = document.getElementById('buttonIndex24');
button_depositCash.innerHTML = 'deposit cash';
button_depositCash.addEventListener('click', function(){
  balance += displayValue.innerHTML;
});//need to stop this after one click

var button_decimal = document.getElementById('buttonIndex32');
button_decimal.innerHTML = '.';
button_decimal.addEventListener('click', function(){
  displayValue.innerHTML += '.';
});

var button_add = document.getElementById('buttonIndex33');
button_add.innerHTML = '+';
button_add.addEventListener('click', function(){
  add_tracker = true;
  calModule.load(displayValue.innerHTML);
  calModule.saveMemory();
  calModule.recallMemory();

  initialState = true;
});

var button_withdrawCash = document.getElementById('buttonIndex34');
button_withdrawCash.innerHTML = 'withdraw cash';

//equals sign
var button_equals = document.getElementById('buttonIndex43');
button_equals.innerHTML = '=';
button_equals.addEventListener('click', function(){

    // function operators(x){
    if(divide_tracker){
      console.log(calModule.recallMemory());
      calModule.divide(displayValue.innerHTML);
      displayValue.innerHTML = calModule.getTotal();
    }else if(multiply_tracker){
      console.log(calModule.recallMemory());
      calModule.multiply(displayValue.innerHTML);
      displayValue.innerHTML = calModule.getTotal();
    }else if(add_tracker){
      console.log(calModule.recallMemory());
      calModule.add(displayValue.innerHTML);
      displayValue.innerHTML = calModule.getTotal();
    }else if(subtract_tracker){
      console.log(calModule.recallMemory());
      calModule.subtract(displayValue.innerHTML);
      displayValue.innerHTML = calModule.getTotal();
    }
  // }
  // console.log(operators(displayValue.innerHTML));

  // console.log(calModule.divide(displayValue.innerHTML));
  // console.log(calModule.multiply(displayValue.innerHTML));
});

//fourth row
var button_zero = document.getElementById('buttonIndex30');
button_zero.innerHTML = 0;
eventListenerCreator(button_zero);

var button_doubleZero = document.getElementById('buttonIndex31');
button_doubleZero.innerHTML = '00';
eventListenerCreator(button_doubleZero);

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