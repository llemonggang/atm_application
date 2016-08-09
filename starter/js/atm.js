$(document).ready(function () {

  $('#depositChecking').on('click', function() {
    var currentBalance = parseInt($('#checkingBalance').text());
    var value = parseInt($('#amountChecking').val());
    var newBalance = currentBalance + value;
    $('#checkingBalance').text(newBalance);
    $('#amountChecking').val('');
    if (newBalance > 0) {
      $('#check').css('background-color','#E3E3E3');
    }
  });

  $('#withdrawChecking').on('click', function() {
    var currentBalance = parseInt($('#checkingBalance').text());
    var value = parseInt($('#amountChecking').val());
    var newBalance = currentBalance - value;
    $('#checkingBalance').text(newBalance);
    $('#amountChecking').val('');
    if (newBalance < 0) {
      $('#checkingBalance').text(currentBalance);
      alert('Insufficient Funds')
    }
    if (newBalance = 0) {
      $('#check').css('background-color','tomato');
    }
  });

  $('#depositSavings').on('click', function() {
    var currentBalance = parseInt($('#savingsBalance').text());
    var value = parseInt($('#amountSavings').val());
    var newBalance = currentBalance + value;
    $('#savingsBalance').text(newBalance);
    $('#amountSavings').val('');
    if (newBalance > 0) {
      $('#save').css('background-color','#E3E3E3');
    }
  });

  $('#withdrawSavings').on('click', function() {
    var currentBalance = parseInt($('#savingsBalance').text());
    var value = parseInt($('#amountSavings').val());
    var newBalance = currentBalance - value;
    $('#savingsBalance').text(newBalance);
    $('#amountSavings').val('');
    if (newBalance < 0) {
      $('#savingsBalance').text(currentBalance);
      alert('Insufficient Funds')
    }
  });
});
