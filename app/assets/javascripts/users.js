$(document).ready(function(){
 Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
  //watch for a form submission
  $("#form-submit-btn").click(function(event){
    event.preventDefault();
    $('input[type=submit]').prop('disabled', true);
    var error = false;
    var ccNum = $('#card_number').val(),
    cvcNum = $('#card_code').val(),
    expMonth = $('#card_month').val(),
    expYear = $('#card_year').val();
    
    if(!error){
      //Get the Stripe token
      Stripe.createToken({
        number: ccNum,
        cvc: cvcNum,
        exp_month: expMonth,
        exp_year: expYear
      }, StripeResponseHandler);
    }
    return false;
  }); //Form submission
  function stripeResponseHandler(status, response){
    //Get a refference to the form
    var f = $("#new_user");
    
    var token = response.id;
    
    f.append('<input type="hidden" name="user[stripe_card_token]" value="' + token +'" />');
    
    f.get(0).submit();
  }
});

    
  }
                  }