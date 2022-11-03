
function payWithPaystack() {
  var handler = PaystackPop.setup({
    key: 'pk_test_356e8ed21d43378911f517139df726b0218ee603', //put your public key here
    email: document.querySelector('.email').value, //put your customer's email here
    amount: 7500000, //amount the customer is supposed to pay
    currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars
    ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Replace with a reference you generated
    subaccount: 'ACCT_7maoyhkhh9gsw9k',
    callback: function(response) {
      //this happens after the payment is completed successfully
      var reference = response.reference;
      alert('Payment complete! Reference: ' + reference);
    },
    // Make an AJAX call to your server with the reference to verify the transaction
    onClose: function() {
      console.log("here now");
      logInputs();
      alert('Transaction was not completed, window closed.');
    },
  });
  handler.openIframe();
}
