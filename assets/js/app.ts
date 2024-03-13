let step1 = document.querySelector('.step.step_number_1') as HTMLDivElement;
let step2 = document.querySelector('.step.step_number_2') as HTMLDivElement;
let step3 = document.querySelector('.step.step_number_3') as HTMLDivElement;
let step4 = document.querySelector('.step.step_number_4') as HTMLDivElement;
let step5 = document.querySelector('.step.step_number_5') as HTMLDivElement;

// ! Step numbers

let stepnumber1 = document.querySelector('.step_number_1 > .step_number');
let stepnumber2 = document.querySelector('.step_number_2 > .step_number');
let stepnumber3 = document.querySelector('.step_number_3 > .step_number');
let stepnumber4 = document.querySelector('.step_number_4 > .step_number');


// ! STEP 1 SELECTS

let step1_usernameinput = document.querySelector('.username_input') as HTMLInputElement;
let step1_emailinput = document.querySelector('.email_input') as HTMLInputElement;
let step1_numberinput = document.querySelector('.number_input') as HTMLInputElement;
let step1_form = document.querySelector('.step1_form') as HTMLFormElement;
let username_warn = document.querySelector('.username_warn') as HTMLSpanElement;
let username_span = document.querySelector('.username_span') as HTMLSpanElement;
let email_warn = document.querySelector('.email_warn') as HTMLSpanElement;
let email_span = document.querySelector('.email_span') as HTMLSpanElement;
let phone_warn = document.querySelector('.phone_warn') as HTMLSpanElement;
let phone_span = document.querySelector('.phone_span') as HTMLSpanElement;

// ! STEP 2 SELECTS

let step2goback = document.querySelector('.step2_goback') as HTMLAnchorElement;
let plancardBoxs = document.querySelectorAll('.plan__card_box');
let selectplantype = document.querySelector('.plan__card_select_toggle') as HTMLDivElement;
let selectMonthly = document.querySelector('.plan__card_select_monthly') as HTMLSpanElement;
let selectYearly = document.querySelector('.plan__card_select_yearly') as HTMLSpanElement;
let planPrice = document.querySelectorAll('.plan__card_price');

function validatePhoneNumber(inputValue: string): boolean {
    const regex = /^\+994\d{9}$/;
    return regex.test(inputValue);
}


step1_form?.addEventListener('submit', function(e) {
    e.preventDefault();

    if(step1_usernameinput.value.length > 5 && step1_emailinput.value.length > 6 && validatePhoneNumber(step1_numberinput.value) == true) {
        step1.classList.toggle('d-none');
        step2.classList.toggle('d-none');
        stepnumber1?.classList.toggle('selected');
        stepnumber2?.classList.toggle('selected');
    } else {
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

        if(validatePhoneNumber(step1_numberinput.value) == false) {
            phone_warn.textContent = 'Please enter a valid phone number!';
            phone_warn.style.color = 'rgb(221, 57, 52)';
            phone_span.style.color = 'rgb(221, 57, 52)';
            step1_numberinput.style.border = '0.06rem solid rgb(221, 57, 52)';
        }
    }
});

step2goback.addEventListener('click', function(e) {
    e.preventDefault();

    step1.classList.toggle('d-none');
        step2.classList.toggle('d-none');
})

plancardBoxs.forEach(plancards => {
    plancards.addEventListener('click', function() {
        plancardBoxs.forEach(otherPlancards => {
            otherPlancards.classList.remove('card-selected');
        });

        plancards.classList.add('card-selected');

        let plancardPrice = plancards.querySelector('.plan__card_price') as HTMLSpanElement;
        let plancardValue = plancardPrice.textContent;

        console.log(plancardValue);
        
    })
});

selectplantype.addEventListener('click', function() {
    if (selectplantype.style.justifyContent == 'end') {
        selectplantype.style.justifyContent = 'start';
        selectMonthly.classList.toggle('selected-plan')
        selectYearly.classList.toggle('selected-plan')
        planPrice.forEach(planPrices => {
            let planPriceValue = Number(planPrices.textContent);
            let planPricesNew = planPriceValue/10;
            planPrices.textContent = `${planPricesNew}`
        })
    } else {
        selectplantype.style.justifyContent = 'end';
        selectMonthly.classList.toggle('selected-plan')
        selectYearly.classList.toggle('selected-plan')

        planPrice.forEach(planPrices => {
            let planPriceValue = Number(planPrices.textContent);
            let planPricesNew = planPriceValue*10;
            planPrices.textContent = `${planPricesNew}`
        })

    }
})