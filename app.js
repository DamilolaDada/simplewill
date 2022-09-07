const surname = document.getElementById('input-surname');
const name = document.getElementById('input-name');
const otherName = document.getElementById('input-other-name');
const phoneNum = document.getElementById('input-phone-num');
const address = document.getElementById('input-address');
const companyName = document.getElementById('input-company-name');
const companyAddress = document.getElementById('input-company-address');
const maritalStatus = document.getElementById('input-marital-status');
const typeOfMarriage = document.getElementById('input-type-marriage');
const mod = document.getElementById('mod');
const idNumber = document.getElementById('id-numb');
const inputPfa = document.getElementById('input-pfa');
const rsaNum = document.getElementById('rsa-numb');
const bankNames = document.getElementById('banks-names');
const accntName = document.getElementById('accnt-name');
const accntNum = document.getElementById('accnt-nmb');
const bnkBranch = document.getElementById('input-branch');
const spsName = document.getElementById('sps-name');
const spsAddress = document.getElementById('input-address');
const nod = document.getElementById('nod');
const nameOfDep = document.getElementById('nm-of-dep');
const noChildren = document.getElementById('no-children');
const flName = document.getElementById('fl-name');
const benAdd = document.getElementById('ben-add');
const benPhone = document.getElementById('ben-phone');
const benMail = document.getElementById('ben-mail');
const benValue = document.getElementById('ben-value');
const gift = document.getElementById('gifts');
const totalFee = document.getElementById("total-fee")

function logInputs() {
  console.log(surname.value, name.value, otherName.value, phoneNum.value, address.value, companyName.value, companyAddress.value, maritalStatus.value, typeOfMarriage.value,
    mod.value, idNumber.value, inputPfa.value, rsaNum.value, bankNames.value, accntName.value, accntNum.value, accntNum.value, bnkBranch.value, spsName.value, spsAddress.value,
    nod.value, nameOfDep.value, noChildren.value, noChildren.value, flName.value, benAdd.value, benPhone.value, benMail.value, benValue.value, gift.value, totalFee.innerText
  );
}

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
