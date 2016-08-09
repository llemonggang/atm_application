$(document).ready(function () {

  $('#depositChecking').on('click', function() {
    if ($(this)) {
      addChecking();
      resetPlaceholder();
    }
  });
  $('#withdrawChecking').on('click', function() {
    if ($(this)) {
      minusChecking();
      resetPlaceholder();
    }
  });
  $('#depositSavings').on('click', function() {
    if ($(this)) {
      addSavings();
      resetPlaceholder();
    }
  });
  $('#withdrawSavings').on('click', function() {
    if ($(this)) {
      minusSavings();
      resetPlaceholder();
    }
  });
});

function addChecking() {
  var value = $('input').val();
  var balance = $('#checkingBalance').val();
  var total = value + balance;
  $('#checkingBalance').text(total);
}

function minusChecking() {
  var value = $('input').val();
  var balance = $('#checkingBalance').val();
  var total = balance - value;
  $('#checkingBalance').text(total);
}

function addSavings() {
  var value = $('input').val();
  var balance = $('#savingsBalance').val();
  var total = value + balance;
  $('#checkingBalance').text(total);
}

function minusSavings() {
  var value = $('input').val();
  var balance = $('#savingsBalance').val();
  var total = balance - value;
  $('#savingsBalance').text(total);
}

// function resetPlaceholder() {
//   $('#amountChecking').val('enter an amount');
// }
 
