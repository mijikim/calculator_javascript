CALCULATOR = {
  currentCalculation: "",
  currentResult: 0,
  nextNumber: 0,
  nextOperation: "+",

  init: function(){
    this.attachClearButtonHandler();
    this.attachEnterButtonHandler();
    this.attachButtonClickHandlers();
  },

  attachClearButtonHandler: function() {
    $("#clear_button").click(function(e){
      e.stopImmediatePropagation();
      CALCULATOR.currentCalculation = "";
      $("#result_display").empty();
    });
  },

  attachEnterButtonHandler: function() {
    $("#enter_button").click(function (e) {
      e.stopImmediatePropagation();

      console.log(CALCULATOR.currentCalculation);

      CALCULATOR.calculate();

      CALCULATOR.currentCalculation = CALCULATOR.currentResult;

      CALCULATOR.appendResult();
    })
  },

  calculate: function() {
    if (CALCULATOR.currentCalculation == "") {
      return;
    }

    CALCULATOR.getNextNumberAndOperation();

    CALCULATOR.performOperation();

    CALCULATOR.calculate()
  },

  getNextNumberAndOperation: function() {
    if (isNaN(CALCULATOR.currentCalculation.charAt(0))){
      var operator = CALCULATOR.currentCalculation.match(/\D/)[0];

    CALCULATOR.nextOperation = operator;

    CALCULATOR.currentCalculation = CALCULATOR.currentCalculation.replace(/^\D/, "");
  }

    var number = CALCULATOR.currentCalculation.match(/^(\d+)/)[0];

    CALCULATOR.nextNumber = parseInt(number);

    CALCULATOR.currentCalculation = CALCULATOR.currentCalculation.replace(/^(\d+)/, "");

  },

  performOperation: function() {
    switch(CALCULATOR.nextOperation) {
      case "+":
        CALCULATOR.currentResult = CALCULATOR.currentResult + CALCULATOR.nextNumber;
        break;
      case "-":
        CALCULATOR.currentResult = CALCULATOR.currentResult - CALCULATOR.nextNumber;
        break;
      case "*":
        CALCULATOR.currentResult = CALCULATOR.currentResult * CALCULATOR.nextNumber;
        break;
      case "/":
        CALCULATOR.currentResult = CALCULATOR.currentResult / CALCULATOR.nextNumber;
        break;
    }
  },

  appendResult: function() {
    $("#result_display").empty();
    $("#result_display").append(CALCULATOR.currentResult);

    CALCULATOR.currentResult = 0;
    CALCULATOR.nextOperation = "+";

    CALCULATOR.allowButtonsToResetDisplay();
  },

  allowButtonsToResetDisplay: function() {
    $(".button").on("click", function () {
      $("#result_display").empty();
      CALCULATOR.currentCalculation = this.innerText;

      $("#result_display").append(CALCULATOR.currentCalculation);

      $(".button").unbind("click");

      CALCULATOR.attachClearButtonHandler();
      CALCULATOR.attachEnterButtonHandler();
      CALCULATOR.attachButtonClickHandlers();
    })
  },

  attachButtonClickHandlers: function() {
    $(".button").click(function(){

      CALCULATOR.currentCalculation = CALCULATOR.currentCalculation + this.innerText;
      $("#result_display").empty();
      $("#result_display").append(CALCULATOR.currentCalculation);
    });
  }
};

$(document).ready(function(){
  CALCULATOR.init();
});