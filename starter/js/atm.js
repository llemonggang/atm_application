$(document).ready(function () {

  $('#depositChecking').on('click', function() {
    var currentBalance = parseInt($('#checkingBalance').text());
    var value = parseInt($('#amountChecking').val());
    var newBalance = currentBalance + value;
    $('#checkingBalance').text(newBalance);
    $('#amountChecking').val('');
  });
  $('#withdrawChecking').on('click', function() {
    var currentBalance = parseInt($('#checkingBalance').text());
    var value = parseInt($('#amountChecking').val());
    var newBalance = currentBalance - value;
    $('#checkingBalance').text(newBalance);
    $('#amountChecking').val('');
  });
  $('#depositSavings').on('click', function() {
    var currentBalance = parseInt($('#savingsBalance').text());
    var value = parseInt($('#amountSavings').val());
    var newBalance = currentBalance + value;
    $('#savingsBalance').text(newBalance);
    $('#amountSavings').val('');
  });
  $('#withdrawSavings').on('click', function() {
    var currentBalance = parseInt($('#savingsBalance').text());
    var value = parseInt($('#amountSavings').val());
    var newBalance = currentBalance - value;
    $('#savingsBalance').text(newBalance);
    $('#amountSavings').val('');
  });
});
