/*jslint node: true */ 'use strict';
var calculator = document.getElementById('calculator');

var displayValue = document.createElement('div');
displayValue.id = 'displayValue';
displayValue.style.border = 'thick solid black';
displayValue.innerHTML = 0;
calculator.appendChild(displayValue);


var myButtons0;
var myButtons1;
var myButtons2;
var myButtons3;
var myButtons4;

// function makeButtonDivs(){
//   for (var i = 0; i < 5; i++) {
//     buttonDivs.id = 'buttonsDivRow' + i;
//     calculator.appendChild(buttonDivs);

  function makeButtons(){
    var myButtons;
    var buttonContainer = document.createElement('div');
    for (var i = 0; i < 5; i++) {
      var buttonRow = document.createElement('div');
      buttonRow.id = i;
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



//   }

// // }
// // makeButtonDivs();






    // myButtons0 = document.createElement('button');
    // myButtons1 = document.createElement('button');
    // myButtons2 = document.createElement('button');
    // myButtons3 = document.createElement('button');
    // myButtons4 = document.createElement('button');
    // myButtons0.id = 'buttonIndex' + i;
    // myButtons1.id = 'buttonIndex' + (i + 1);
    // myButtons2.id = 'buttonIndex' + (i + 2);
    // myButtons3.id = 'buttonIndex' + (i + 3);
    // myButtons4.id = 'buttonIndex' + (i + 4);
    // buttonDivs.appendChild(myButtons0);
    // buttonDivs.appendChild(myButtons1);
    // buttonDivs.appendChild(myButtons2);
    // buttonDivs.appendChild(myButtons3);
    // buttonDivs.appendChild(myButtons4);
