var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var step4_changeButton = document.querySelector('.total_top_change');
var totalPlanPrice = 0;
var planName = '';
var selectedPlansArray = [];
var monthlyText = document.querySelectorAll('.monthly_text');
function validatePhoneNumber(inputValue) {
    var regex = /^\+994\d{9}$/;
    return regex.test(inputValue);
}
// ! JSON Server 
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var fethced, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:3000/userData')];
                case 1:
                    fethced = _a.sent();
                    return [4 /*yield*/, fethced.json()];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function addData(dataFromUser) {
    return __awaiter(this, void 0, void 0, function () {
        var addDataUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:3000/userData", {
                        method: 'POST',
                        body: JSON.stringify(dataFromUser),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        }
                    })];
                case 1:
                    addDataUser = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
;
var getName = '';
var getEmail = '';
var getNumber = '';
var getPlan = '';
var getAddons = [];
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        var getUserData;
        return __generator(this, function (_a) {
            getUserData = {
                "name": "".concat(getName),
                "email": "".concat(getEmail),
                "phonenumber": "".concat(getNumber),
                "selectedPlan": "".concat(getPlan),
                "addons": getAddons
            };
            return [2 /*return*/, addData(getUserData)];
        });
    });
}
// ! Script codes
step1_form === null || step1_form === void 0 ? void 0 : step1_form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (step1_usernameinput.value.length > 5 && step1_emailinput.value.length > 6 && validatePhoneNumber(step1_numberinput.value) == true) {
        step1.classList.toggle('d-none');
        step2.classList.toggle('d-none');
        stepnumber1 === null || stepnumber1 === void 0 ? void 0 : stepnumber1.classList.toggle('selected');
        stepnumber2 === null || stepnumber2 === void 0 ? void 0 : stepnumber2.classList.toggle('selected');
        getName = step1_usernameinput.value;
        getEmail = step1_emailinput.value;
        getNumber = step1_numberinput.value;
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
        getPlan = selectedPlanName;
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
            plancardBoxs.forEach(function (otherPlancards) {
                otherPlancards.classList.remove('card-selected');
            });
            step4_perdate.textContent = '(per monthly)';
            step4_body_total.textContent = 'Monthly';
        });
    }
    else {
        selectplantype.style.justifyContent = 'end';
        selectMonthly.classList.toggle('selected-plan');
        selectYearly.classList.toggle('selected-plan');
        plancardBoxs.forEach(function (otherPlancards) {
            otherPlancards.classList.remove('card-selected');
        });
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
        var _a, _b, _c, _d;
        var input = checkbox;
        var isSelected = input.checked;
        var checkBoxParent = (_a = checkbox.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('.addons_box_left_texts');
        var boxParent = (_b = checkBoxParent === null || checkBoxParent === void 0 ? void 0 : checkBoxParent.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
        var boxparentChildLeft = boxParent === null || boxParent === void 0 ? void 0 : boxParent.querySelector('.addons_box_left');
        var boxParentLeft = boxparentChildLeft === null || boxparentChildLeft === void 0 ? void 0 : boxparentChildLeft.querySelector('.addons_box_left_texts');
        var selectedAddonName = (_c = boxParentLeft === null || boxParentLeft === void 0 ? void 0 : boxParentLeft.querySelector('.left_texts_h5')) === null || _c === void 0 ? void 0 : _c.textContent;
        var boxparentChild = boxParent === null || boxParent === void 0 ? void 0 : boxParent.querySelector('.addons_box_right');
        var boxparentchildPrice = Number((_d = boxparentChild === null || boxparentChild === void 0 ? void 0 : boxparentChild.querySelector('.plan__card_price')) === null || _d === void 0 ? void 0 : _d.textContent);
        var checkBoxObj = {
            'selectedName': selectedAddonName,
            'selectedPrice': boxparentchildPrice
        };
        if (isSelected) {
            totalPlanPrice += boxparentchildPrice;
            selectedPlansArray.push(checkBoxObj);
        }
        else {
            totalPlanPrice -= boxparentchildPrice;
            selectedPlansArray = selectedPlansArray.filter(function (plan) { return plan.selectedName !== selectedAddonName; });
        }
        getAddons = selectedPlansArray;
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
    setTimeout(function () {
        getData();
    }, 1700);
});
backButton_step4.addEventListener('click', function () {
    stepnumber4 === null || stepnumber4 === void 0 ? void 0 : stepnumber4.classList.toggle('selected');
    stepnumber3 === null || stepnumber3 === void 0 ? void 0 : stepnumber3.classList.toggle('selected');
    step3 === null || step3 === void 0 ? void 0 : step3.classList.remove('d-none');
    step4 === null || step4 === void 0 ? void 0 : step4.classList.add('d-none');
});
step4_changeButton.addEventListener('click', function (e) {
    e.preventDefault();
    step4 === null || step4 === void 0 ? void 0 : step4.classList.add('d-none');
    step2 === null || step2 === void 0 ? void 0 : step2.classList.remove('d-none');
});
function addPriceList() {
    step4_totalbottom_top.innerHTML = '';
    // Yeni içeriği ekle
    selectedPlansArray.forEach(function (selects) {
        var HTML = "<div class=\"bottom_top_total\">\n            <span class=\"bottom_top_total_name\">\n                ".concat(selects.selectedName, "\n            </span>\n\n            <span class=\"bottom_top_total_price\">\n                +$").concat(selects.selectedPrice, "/<span class=\"monthlyText\">mo</span>\n            </span>\n        </div>");
        step4_totalbottom_top.insertAdjacentHTML('beforeend', HTML);
    });
}
;
