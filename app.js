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

      CALCULATOR.calculate();

      CALCULATOR.appendResult();
    })
  },

  calculate: function() {
    CALCULATOR.getNextNumberAndOperation();

    CALCULATOR.performOperation();
  },

  getNextNumberAndOperation: function() {

  },

  performOperation: function() {

  },

  appendResult: function() {
    $("#result_display").empty();
    $("#result_display").append(CALCULATOR.currentResult);
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