---
---
//run crunch stuff.

  $(document).ready(function() {
    $('body').noisy({
      'intensity' : 1,
      'size' : 200,
      'opacity' : 0.074,
      'fallback' : '',
      'monochrome' : true
    }).css('background-color', '#262626');
  });


  var handler = StripeCheckout.configure({
    key: 'pk_test_vOlrXy6YbwiTPFaKBb8ldgZN',
    image: '/img/documentation/checkout/marketplace.png',
    token: function(token) {
      // Use the token to create the charge with a server-side script.
      // You can access the token ID with `token.id`
    }
  });

  $('#customButton').on('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: 'Crunchbangplusplus',
      description: 'Donation of $' + moneyAmount()/100,
      amount: moneyAmount()
    });
    e.preventDefault();
  });


  function moneyAmount(){

    var dollar = $("#dollar-amt").val();
    if(dollar == "")
      dollar = 0;

      var cents = $("#cents-amt").val();
      if(cents == "")
        cents = 0;


        var total =  (dollar*100) + cents*1;
        if(total < 0){
          console.log("total is less than zero");
          return 0;
        } else {
          return total;
        }
  }

      // Close Checkout on page navigation
      $(window).on('popstate', function() {
        handler.close();
      });
      $('#payment-form').submit(function(event) {
        var $form = $(this);

        // Disable the submit button to prevent repeated clicks
        $form.find('button').prop('disabled', true);

        Stripe.card.createToken($form, stripeResponseHandler);

        // Prevent the form from submitting with the default action
        return false;
      });
      function stripeResponseHandler(status, response) {
        var $form = $('#payment-form');

        if (response.error) {
          // Show the errors on the form
          $form.find('.payment-errors').text(response.error.message);
          $form.find('button').prop('disabled', false);
        } else {
          // response contains id and card, which contains additional card details
          var token = response.id;
          // Insert the token into the form so it gets submitted to the server
          $form.append($('<input type="hidden" name="stripeToken" />').val(token));
          // and submit
          $form.get(0).submit();
        }
      };
