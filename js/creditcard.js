$(function() {
    
    var creditCard = $('#cardnumber');

  function validateCard() {

    creditCard.after('<i class="icon-ok"></i>');
    creditCard.before('<span class="card"></span>');
    var cardHolder = $('span.card');


    creditCard.validateCreditCard(function(result) {

        console.log('test');
      var ele = $(this),
          paymentIcons = ele.hasClass('*[class*="card-"]'),
          checkmark = ele.siblings('.icon-ok');


      var removeIcon = ele.removeClass(function(index, css) {
        return (css.match (/\bcard-\S+/g) || []).join(' ');
      });


        if (result.card_type !== null) {
          // // background image didn't work w/ cc autofill mobile
          //ele.addClass('card-'+result.card_type.name);
          //ele.before('<span class="card-'+result.card_type.name+'"></span>');
          cardHolder.html('<span class="card-'+result.card_type.name+'"></span>');
        }
        else {
          //ele.addClass('card-generic');
          //ele.before('<span class="card-generic"></span>');
          cardHolder.html('<span class="card-generic"></span>');
        }


      if (result.valid) return checkmark.addClass('valid');
      else return checkmark.removeClass('valid');

      }, {
        accept: ['visa', 'mastercard', 'discover', 'amex']
      });

  }
  if (creditCard.data('creditcard') == true) {
      validateCard();

      // creditCard.on('change', function() {
      //   var timer = setTimeout(function() {
      //     validateCard();
      //   },400);
      // });

  }




});