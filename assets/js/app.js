var step1 = document.querySelector('.step.step_number_1');
var step2 = document.querySelector('.step.step_number_2');
var step3 = document.querySelector('.step.step_number_3');
var step4 = document.querySelector('.step.step_number_4');
var step5 = document.querySelector('.step.step_number_5');
// ! Step numbers
var stepnumber1 = document.querySelector('.step_number_1 > .step_number');
var stepnumber2 = document.querySelector('.step_number_2 > .step_number');
var stepnumber3 = document.querySelector('.step_number_3 > .step_number');
var stepnumber4 = document.querySelector('.step_number_4 > .step_number');
// ! STEP 1 SELECTS
var step1_usernameinput = document.querySelector('.username_input');
var step1_emailinput = document.querySelector('.email_input');
var step1_numberinput = document.querySelector('.number_input');
var step1_form = document.querySelector('.step1_form');
var username_warn = document.querySelector('.username_warn');
var username_span = document.querySelector('.username_span');
var email_warn = document.querySelector('.email_warn');
var email_span = document.querySelector('.email_span');
var phone_warn = document.querySelector('.phone_warn');
var phone_span = document.querySelector('.phone_span');
// ! STEP 2 SELECTS
var step2goback = document.querySelector('.step2_goback');
var plancardBoxs = document.querySelectorAll('.plan__card_box');
var selectplantype = document.querySelector('.plan__card_select_toggle');
var selectMonthly = document.querySelector('.plan__card_select_monthly');
var selectYearly = document.querySelector('.plan__card_select_yearly');
var planPrice = document.querySelectorAll('.plan__card_price');
function validatePhoneNumber(inputValue) {
    var regex = /^\+994\d{9}$/;
    return regex.test(inputValue);
}
step1_form === null || step1_form === void 0 ? void 0 : step1_form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (step1_usernameinput.value.length > 5 && step1_emailinput.value.length > 6 && validatePhoneNumber(step1_numberinput.value) == true) {
        step1.classList.toggle('d-none');
        step2.classList.toggle('d-none');
        stepnumber1 === null || stepnumber1 === void 0 ? void 0 : stepnumber1.classList.toggle('selected');
        stepnumber2 === null || stepnumber2 === void 0 ? void 0 : stepnumber2.classList.toggle('selected');
    }
    else {
        if (step1_usernameinput.value.length < 3) {
            username_warn.textContent = 'Please enter your username!';
            username_warn.style.color = 'rgb(221, 57, 52)';
            username_span.style.color = 'rgb(221, 57, 52)';
            step1_usernameinput.style.border = '0.06rem solid rgb(221, 57, 52)';
        }
        if (step1_emailinput.value.length < 3) {
            email_warn.textContent = 'Please enter a valid email address!';
            email_warn.style.color = 'rgb(221, 57, 52)';
            email_span.style.color = 'rgb(221, 57, 52)';
            step1_emailinput.style.border = '0.06rem solid rgb(221, 57, 52)';
        }
        if (validatePhoneNumber(step1_numberinput.value) == false) {
            phone_warn.textContent = 'Please enter a valid phone number!';
            phone_warn.style.color = 'rgb(221, 57, 52)';
            phone_span.style.color = 'rgb(221, 57, 52)';
            step1_numberinput.style.border = '0.06rem solid rgb(221, 57, 52)';
        }
    }
});
step2goback.addEventListener('click', function (e) {
    e.preventDefault();
    step1.classList.toggle('d-none');
    step2.classList.toggle('d-none');
});
plancardBoxs.forEach(function (plancards) {
    plancards.addEventListener('click', function () {
        plancardBoxs.forEach(function (otherPlancards) {
            otherPlancards.classList.remove('card-selected');
        });
        plancards.classList.add('card-selected');
        var plancardPrice = plancards.querySelector('.plan__card_price');
        var plancardValue = plancardPrice.textContent;
        console.log(plancardValue);
    });
});
selectplantype.addEventListener('click', function () {
    if (selectplantype.style.justifyContent == 'end') {
        selectplantype.style.justifyContent = 'start';
        selectMonthly.classList.toggle('selected-plan');
        selectYearly.classList.toggle('selected-plan');
        planPrice.forEach(function (planPrices) {
            var planPriceValue = Number(planPrices.textContent);
            var planPricesNew = planPriceValue / 10;
            planPrices.textContent = "".concat(planPricesNew);
        });
    }
    else {
        selectplantype.style.justifyContent = 'end';
        selectMonthly.classList.toggle('selected-plan');
        selectYearly.classList.toggle('selected-plan');
        planPrice.forEach(function (planPrices) {
            var planPriceValue = Number(planPrices.textContent);
            var planPricesNew = planPriceValue * 10;
            planPrices.textContent = "".concat(planPricesNew);
        });
    }
});
