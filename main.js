// PAGE NAVIGATION
const formSteps = document.querySelectorAll(".form-step");
const nextBtn = document.querySelectorAll(".btn-next");
const prevBtn = document.querySelectorAll(".btn-prev");
const addBenef = document.getElementById('add_benef');

let formStepsNum = 0;

nextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar()
  });
});

prevBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar()
  });
});

function updateFormSteps() {
  formSteps.forEach((formSteps) => {
    formSteps.classList.contains("form-step-active");
    formSteps.classList.remove("form-step-active");
  });
  formSteps[formStepsNum].classList.add("form-step-active");
}


// PROGRESS BAR
const progress = document.getElementById("progress");
const progressSteps = document.querySelectorAll(".progress-step");

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");
  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}


// Radio Toggle
// const box = document.getElementById('hidden-row');
//
// function handleRadioClick() {
//   if (document.getElementById('show').checked) {
//     box.style.display = 'table-row';
//     document.getElementById("table-design").innerHTML = "₦35,000";
//   } else {
//     box.style.display = 'none';
//     document.getElementById("table-design").innerHTML = "₦15,000";
//   }
// }
//
// const radioButtons = document.querySelectorAll('input[name="yes"]');
// radioButtons.forEach(radio => {
//   radio.addEventListener('click', handleRadioClick);
// });

// ADD BENEFICIARY

// function displayHidden() {
//   $("#remove").removeAttr("hidden")
// }
var n = 1;
var max_field = 10; //maximum input boxes allowed
$("#add_more").click(function(e) {
  e.preventDefault();
  if (n <= max_field) {
    var newElement = `
      <div class="first-layer">
        <div class="row" id="row1">
          <div class="col-25">
            <label for="">Full Name <span>*</span></label>
          </div>
          <div class="col-75">
            <input class="input-details full-name" id="fl-name" type="text" name="" value="">
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label for="">Address</label>
          </div>
          <div class="col-75">
            <input class="input-details" id="ben-add" type="text" name="" value="">
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label for="">Phone <span>*</span></label>
          </div>
          <div class="col-75">
            <input class="input-details phone" id="ben-phone" type="number" name="" value="">
          </div>
        </div>
      </div>
      <div class="second-layer">
        <div class="row">
          <div class="col-25">
            <label for="">Email <span>*</span></label>
          </div>
          <div class="col-75">
            <input class="input-details email" id="ben-mail" type="email" name="" value="">
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label for="">Values (% OR Amount)</label>
          </div>
          <div class="col-75">
            <input class="input-details" id="ben-value" type="number" name="" value="">
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label for="">Gift</label>
          </div>
          <div class="col-75">
            <input class="input-details" id="gifts" type="number" name="" value="">
          </div>
        </div>
      </div>`
    $("#append-col-1").append($(newElement));

  } else {
    alert("maximum banks reached")
  }

  displayHidden()
});

// $(document).ready(function() {
//   var n = 1
//   $("#add_more").click(function(e) {
//     if (n < 8) {
//       e.preventDefault();
//       $("#row1").append(`
//             <tr>
//               <td> <input type="text" class="input-details" name="" value=""> </td>
//               <td> <input type="text" class="input-details" name="" value=""> </td>
//               <td> <input type="text" class="input-details" name="" value=""> </td>
//             </tr>
//             <tr>
//               <td> <input type="text" class="input-details" name="" value=""> </td>
//               <td> <input type="text" class="input-details" name="" value=""> </td>
//               <td> <input type="text" class="input-details" name="" value=""> </td>
//             </tr>`);
//       n++;
//       displayHidden()
//     }
//   });
// });







// ADD MORE BANKS
function displayHidden() {
  $("#remove_1").removeAttr("hidden")
}
var x = 1;
var max_fields = 10; //maximum input boxes allowed
$("#add_more_1").click(function(e) {

  e.preventDefault();
  if (x <= max_fields) {
    var newElementForm = `<div class="second-layer id="hide_this">
                 <div class="row">
                   <div class="col-25">
                     <label for="">Bank Name</label>
                   </div>
                   <div class="col-75">
                     <select class="input-details" name="">
                       <option value="NIN">-- select option --</option>
                       <option value="NIN">Zenith Bank</option>
                       <option value="NIN">Access Bank</option>
                       <option value="NIN">First Bank</option>
                       <option value="NIN">United Bank of Africa</option>
                       <option value="NIN">Guarantee Trust Bank</option>
                     </select>

                   </div>
                 </div>
                 <div class="row">
                   <div class="col-25">
                     <label for="">Account Name <span>*</span></label>
                   </div>
                   <div class="col-75">
                     <input class="input-details acc-name" id="accnt-name" type="text" name="" value="">
                   </div>
                 </div>
               </div>
               </div>
               <div class="second-layer">
                 <div class="row">
                   <div class="col-25">
                     <label for="">Account Number</label>
                   </div>
                   <div class="col-75">
                     <input class="input-details" type="text" name="" value="">
                   </div>
                 </div>
                 <div class="row">
                   <div class="col-25">
                     <label for="">Branch</label>
                   </div>
                   <div class="col-75">
                     <input class="input-details" type="text" name="" value="">
                   </div>
                 </div>
               </div>`;
    $("#append-col").append($(newElementForm));

  } else {
    alert("maximum banks reached")
  }

  displayHidden()
});

$(document).on('click', '#remove_1', function() {
  $(this).closest('#inputFormRow').remove();
});



// REQUIRED FIELDS PAGE 2
//
// const revealBtn = document.querySelector(".reveal-btn");
// const name = document.querySelector(".name");
// const surname = document.querySelector(".surname");
// const phoneNum = document.querySelector(".phone-num")
// const identity = document.querySelector(".identity")
// const identityNum = document.querySelector(".identity-num")
//
// deactivate()
//
// function activate() {
//   revealBtn.disabled = false;
//   revealBtn.style.backgroundColor = "#366999";
//   revealBtn.style.cursor = "pointer";
// }
// function deactivate() {
//   revealBtn.disabled = true;
//   revealBtn.style.backgroundColor = "#cdd5da";
//   revealBtn.style.cursor = "not-allowed";
// }
// function check() {
//   if (name.value != '' && surname.value != '' && phoneNum.value != '' && identity.value != '' && identityNum.value != '') {
//     activate()
//   } else {
//     deactivate()
//   }
// }
// name.addEventListener('input', check)
// surname.addEventListener('input', check)
// phoneNum.addEventListener('input', check)
// identity.addEventListener('input', check)
// identityNum.addEventListener('input', check)
//
//
// // REQUIRED FIELDS PAGE 3
//
// const revealBtn1 = document.querySelector(".reveal-btn1")
// const fullName =  document.querySelector(".full-name")
// const phone =  document.querySelector(".phone")
// const email =  document.querySelector(".email")
// const spouseName =  document.querySelector(".spouse-name")
// const address =  document.querySelector(".address")
// const nameOfDep =  document.querySelector(".name-of-dep")
//
//
//
// deactivate1()
//
//
// function activate1() {
//   revealBtn1.disabled = false;
//   revealBtn1.style.backgroundColor = "#366999";
//   revealBtn1.style.cursor = "pointer";
// }
//
// function deactivate1() {
//   revealBtn1.disabled = true;
//   revealBtn1.style.backgroundColor = "#cdd5da";
//   revealBtn1.style.cursor = "not-allowed";
// }
//
//
// function check1() {
//   if (fullName.value != '' && phone.value != '' && email.value !='' && nameOfDep.value !=''){
//     activate1()
//   } else {
//     deactivate1()
//   }
// }
// fullName.addEventListener('input', check1)
// phone.addEventListener('input', check1)
// email.addEventListener('input', check1)
//
// nameOfDep.addEventListener('input', check1)
//
// // REQUIRED FIELDS PAGE 4
//
// const revealBtn2 = document.querySelector(".reveal-btn2");
// const rsaNumber =  document.querySelector(".rsa-number");
// const accNum =  document.querySelector(".acc-numb");
// const bankName =  document.querySelector(".bank-name");
// const pfa =  document.querySelector(".pfa");
// const accName = document.querySelector('.acc-name')
//
// deactivate2()
//
//
// function activate2() {
//   revealBtn2.disabled = false;
//   revealBtn2.style.backgroundColor = "#366999";
//   revealBtn2.style.cursor = "pointer";
// }
//
// function deactivate2() {
//   revealBtn2.disabled = true;
//   revealBtn2.style.backgroundColor = "#cdd5da";
//   revealBtn2.style.cursor = "not-allowed";
// }
//
//
// function check2() {
//   if (rsaNumber.value != '' && accNum.value != '' && bankName.value !='' && pfa.value !='' && accName.value != '') {
//     activate2()
//   } else {
//     deactivate2()
//   }
// }
// rsaNumber.addEventListener('input', check2)
// accNum.addEventListener('input', check2)
// bankName.addEventListener('input', check2)
// pfa.addEventListener('input', check2)
// accName.addEventListener('input', check2)

//          // TOGGLE CHECKBOX

$('.check-box').click(function() {
  //check if checkbox is checked
  if ($(this).is(':checked')) {

    $('.pay-button').removeAttr('disabled'); //enable input
    $('.submit-btn').removeAttr('disabled');
    $(".pay-button").css("background-color", "#5091CD");
    $(".submit-btn").css("background-color", "#5091CD");
    $(".pay-button").css("cursor", "pointer");
    $(".submit-btn").css("cursor", "pointer");
  } else {
    $('.pay-button').attr('disabled', true); //disable input
    $('.submit-btn').attr('disabled', true);
    $(".pay-button").css("background-color", "#cdd5da");
    $(".submit-btn").css("background-color", "#cdd5da");
    $(".pay-button").css("cursor", "not-allowed");
    $(".submit-btn").css("cursor", "not-allowed");
  }
});



// const inputName  = document.getElementById("#input-name").value
// const inputOtherName  = document.getElementById("#input-other-name")
// const inputPhoneNum  = document.getElementById("#input-phone-num")
// const inputAddress  = document.getElementById("#input-add")
// const inputCompanyName  = document.getElementById("#input-company-name")
// const inputCompanyAddress = document.getElementById("#input-company-address")
// const inputMaritalStatus  = document.getElementById("#input-marital-status")
// const inputTypeMarriage  = document.getElementById("#input-type-marriage")
// const mod  = document.getElementById("#mod")
// const idNumb  = document.getElementById("#id-numb");
// const inputSurname  = document.getElementById("#input-surname").value;
// const submitBtn = document.querySelector('.submit-btn');
//
// submitBtn.addEventListener("click", (e)=>{
//   e.preventDefault()
//   console.log(inputSurname)
// })
