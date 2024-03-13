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
var nextButton_step2 = document.querySelector('.next_btn_step2');
var backButton_step2 = document.querySelector('.step2_goback');
var nextBtn_warn = document.querySelector('.next_step2_warn');
var selectplanName = document.querySelector('.selected_plan_name');
// ! STEP 3 SELECTS
var checkboxs = document.querySelectorAll('.checkbox_addons_box');
var nextButton_step3 = document.querySelector('.next_btn_step3');
var backButton_step3 = document.querySelector('.next_step3-href');
// ! STEP 4 SELECTS 
var nextButton_step4 = document.querySelector('.next_btn_step4');
var backButton_step4 = document.querySelector('.next_step4-href');
var step4_price = document.querySelector('.bottom_price_per');
var step4_total = document.querySelector('.bottom_price_total');
var step4_totaltext = document.querySelector('.total_top_text');
var step4_body_total = document.querySelector('.monthly_text_body');
var step4_top_price = document.querySelector('.top_right_price');
var step4_perdate = document.querySelector('.bottom_price_per_date');
var step4_totalbottom_top = document.querySelector('.total_bottom_top');
var totalPlanPrice = 0;
var planName = '';
var selectedPlansArray = [];
var monthlyText = document.querySelectorAll('.monthly_text');
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
        var _a;
        plancardBoxs.forEach(function (otherPlancards) {
            otherPlancards.classList.remove('card-selected');
        });
        plancards.classList.add('card-selected');
        var selectedPlanChild = plancards.querySelector('.plan__card_text');
        var selectedPlanName = (_a = selectedPlanChild === null || selectedPlanChild === void 0 ? void 0 : selectedPlanChild.querySelector('.plan__card_name')) === null || _a === void 0 ? void 0 : _a.textContent;
        planName = selectedPlanName;
        var plancardPrice = plancards.querySelector('.plan__card_price');
        var plancardValue = plancardPrice.textContent;
        totalPlanPrice = Number(plancardValue);
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
            monthlyText.forEach(function (texts) {
                texts.textContent = 'mo';
            });
            step4_perdate.textContent = '(per monthly)';
            step4_body_total.textContent = 'Monthly';
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
            step4_perdate.textContent = '(per yearly)';
            monthlyText.forEach(function (texts) {
                texts.textContent = 'yr';
            });
            step4_body_total.textContent = 'Yearly';
        });
    }
});
nextButton_step2 === null || nextButton_step2 === void 0 ? void 0 : nextButton_step2.addEventListener('click', function () {
    var isSelected = Array.prototype.slice.call(plancardBoxs).some(function (plancard) { return plancard.classList.contains('card-selected'); });
    if (isSelected == true) {
        step2.classList.toggle('d-none');
        step3.classList.toggle('d-none');
        stepnumber2 === null || stepnumber2 === void 0 ? void 0 : stepnumber2.classList.toggle('selected');
        stepnumber3 === null || stepnumber3 === void 0 ? void 0 : stepnumber3.classList.toggle('selected');
    }
    else {
        nextBtn_warn.textContent = 'You have to choose any plan';
    }
});
backButton_step2.addEventListener('click', function () {
    stepnumber1 === null || stepnumber1 === void 0 ? void 0 : stepnumber1.classList.toggle('selected');
    stepnumber2 === null || stepnumber2 === void 0 ? void 0 : stepnumber2.classList.toggle('selected');
    step1 === null || step1 === void 0 ? void 0 : step1.classList.remove('d-none');
    step2 === null || step2 === void 0 ? void 0 : step2.classList.add('d-none');
});
checkboxs.forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        (_b = (_a = checkbox.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.classList.toggle('addon-selected');
        var checkBoxParent = (_c = checkbox.parentElement) === null || _c === void 0 ? void 0 : _c.querySelector('.addons_box_left_texts');
        var boxParent = (_d = checkBoxParent === null || checkBoxParent === void 0 ? void 0 : checkBoxParent.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement;
        var boxparentChildLeft = boxParent === null || boxParent === void 0 ? void 0 : boxParent.querySelector('.addons_box_left');
        var boxParentLeft = boxparentChildLeft === null || boxparentChildLeft === void 0 ? void 0 : boxparentChildLeft.querySelector('.addons_box_left_texts');
        var selectedAddonName = (_e = boxParentLeft === null || boxParentLeft === void 0 ? void 0 : boxParentLeft.querySelector('.left_texts_h5')) === null || _e === void 0 ? void 0 : _e.textContent;
        var boxparentChild = boxParent === null || boxParent === void 0 ? void 0 : boxParent.querySelector('.addons_box_right');
        var boxparentchildPrice = Number((_f = boxparentChild === null || boxparentChild === void 0 ? void 0 : boxparentChild.querySelector('.plan__card_price')) === null || _f === void 0 ? void 0 : _f.textContent);
        var selectedBoxPrice = (_h = (_g = boxParent === null || boxParent === void 0 ? void 0 : boxParent.querySelector('addons_box_right')) === null || _g === void 0 ? void 0 : _g.querySelector('.plan__card_price')) === null || _h === void 0 ? void 0 : _h.textContent;
        var checkBoxObj = {
            'selectedName': selectedAddonName,
            'selectedPrice': boxparentchildPrice
        };
        totalPlanPrice += boxparentchildPrice;
        selectedPlansArray.push(checkBoxObj);
    });
});
nextButton_step3.addEventListener('click', function () {
    stepnumber3 === null || stepnumber3 === void 0 ? void 0 : stepnumber3.classList.toggle('selected');
    stepnumber4 === null || stepnumber4 === void 0 ? void 0 : stepnumber4.classList.toggle('selected');
    step3 === null || step3 === void 0 ? void 0 : step3.classList.toggle('d-none');
    step4 === null || step4 === void 0 ? void 0 : step4.classList.toggle('d-none');
    step4_total.textContent = "+$".concat(totalPlanPrice);
    selectplanName.textContent = "".concat(planName);
    step4_top_price.textContent = "".concat(totalPlanPrice);
    addPriceList();
});
backButton_step3.addEventListener('click', function () {
    stepnumber2 === null || stepnumber2 === void 0 ? void 0 : stepnumber2.classList.toggle('selected');
    stepnumber3 === null || stepnumber3 === void 0 ? void 0 : stepnumber3.classList.toggle('selected');
    step2 === null || step2 === void 0 ? void 0 : step2.classList.remove('d-none');
    step3 === null || step3 === void 0 ? void 0 : step3.classList.add('d-none');
});
nextButton_step4.addEventListener('click', function () {
    step4 === null || step4 === void 0 ? void 0 : step4.classList.toggle('d-none');
    step5 === null || step5 === void 0 ? void 0 : step5.classList.toggle('d-none');
});
backButton_step4.addEventListener('click', function () {
    stepnumber4 === null || stepnumber4 === void 0 ? void 0 : stepnumber4.classList.toggle('selected');
    stepnumber3 === null || stepnumber3 === void 0 ? void 0 : stepnumber3.classList.toggle('selected');
    step3 === null || step3 === void 0 ? void 0 : step3.classList.remove('d-none');
    step4 === null || step4 === void 0 ? void 0 : step4.classList.add('d-none');
});
function addPriceList() {
    step4_totalbottom_top.innerHTML = '';
    // Yeni içeriği ekle
    selectedPlansArray.forEach(function (selects) {
        var HTML = "<div class=\"bottom_top_total\">\n            <span class=\"bottom_top_total_name\">\n                ".concat(selects.selectedName, "\n            </span>\n\n            <span class=\"bottom_top_total_price\">\n                +$").concat(selects.selectedPrice, "/<span class=\"monthlyText\">mo</span>\n            </span>\n        </div>");
        step4_totalbottom_top.insertAdjacentHTML('beforeend', HTML);
    });
}
