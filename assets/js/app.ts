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
let nextButton_step2 = document.querySelector('.next_btn_step2') as HTMLButtonElement;
let backButton_step2 = document.querySelector('.step2_goback') as HTMLAnchorElement;
let nextBtn_warn = document.querySelector('.next_step2_warn') as HTMLSpanElement;
let selectplanName = document.querySelector('.selected_plan_name') as HTMLSpanElement;

// ! STEP 3 SELECTS

let checkboxs = document.querySelectorAll('.checkbox_addons_box');
let nextButton_step3 = document.querySelector('.next_btn_step3') as HTMLButtonElement;
let backButton_step3 = document.querySelector('.next_step3-href') as HTMLAnchorElement;

// ! STEP 4 SELECTS 

let nextButton_step4 = document.querySelector('.next_btn_step4') as HTMLButtonElement;
let backButton_step4 = document.querySelector('.next_step4-href') as HTMLAnchorElement;
let step4_price = document.querySelector('.bottom_price_per') as HTMLSpanElement;
let step4_total = document.querySelector('.bottom_price_total') as HTMLSpanElement;
let step4_totaltext = document.querySelector('.total_top_text') as HTMLSpanElement;
let step4_body_total = document.querySelector('.monthly_text_body') as HTMLSpanElement;
let step4_top_price = document.querySelector('.top_right_price') as HTMLSpanElement;
let step4_perdate = document.querySelector('.bottom_price_per_date') as HTMLSpanElement;
let step4_totalbottom_top = document.querySelector('.total_bottom_top') as HTMLDivElement;


let totalPlanPrice: number = 0;
let planName:string = '';
let selectedPlansArray: any = [];
let monthlyText = document.querySelectorAll('.monthly_text');

function validatePhoneNumber(inputValue: string): boolean {
    const regex = /^\+994\d{9}$/;
    return regex.test(inputValue);
}

// ! JSON Server 

async function fetchData() {
    let fethced = await fetch('http://localhost:3000/userData');
    let response = await fethced.json();

    return response
}

async function addData(dataFromUser : any) {
    let addDataUser = await fetch("http://localhost:3000/userData", {
        method: 'POST',
        body: JSON.stringify(dataFromUser),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    });
};

let getName: string = '';
let getEmail: string = '';
let getNumber: string = '';
let getPlan: string = '';
let getAddons: any[] = [];

interface getUserData {
    "name" : string;
    "email": string;
    "phonenumber": string;
    "selectedPlan": string;
    "addons": string[];
  }

async function getData() {
    let getUserData = 
        {
            "name": `${getName}`,
            "email": `${getEmail}`,
            "phonenumber": `${getNumber}`,
            "selectedPlan": `${getPlan}`,
            "addons": getAddons
        }

        return addData(getUserData)
}



// ! Script codes


step1_form?.addEventListener('submit', function (e) {
    e.preventDefault();

    if (step1_usernameinput.value.length > 5 && step1_emailinput.value.length > 6 && validatePhoneNumber(step1_numberinput.value) == true) {
        step1.classList.toggle('d-none');
        step2.classList.toggle('d-none');
        stepnumber1?.classList.toggle('selected');
        stepnumber2?.classList.toggle('selected');
        getName = step1_usernameinput.value;
        getEmail = step1_emailinput.value;
        getNumber = step1_numberinput.value;
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
})

plancardBoxs.forEach(plancards => {
    plancards.addEventListener('click', function () {
        plancardBoxs.forEach(otherPlancards => {
            otherPlancards.classList.remove('card-selected');
        });

        plancards.classList.add('card-selected');
        let selectedPlanChild = plancards.querySelector('.plan__card_text');
        let selectedPlanName = selectedPlanChild?.querySelector('.plan__card_name')?.textContent;
        
        planName = selectedPlanName;
        getPlan = selectedPlanName;

        

        let plancardPrice = plancards.querySelector('.plan__card_price') as HTMLSpanElement;
        let plancardValue = plancardPrice.textContent;

        totalPlanPrice = Number(plancardValue);
    })
});

selectplantype.addEventListener('click', function () {
    if (selectplantype.style.justifyContent == 'end') {
        selectplantype.style.justifyContent = 'start';
        selectMonthly.classList.toggle('selected-plan')
        selectYearly.classList.toggle('selected-plan')
        planPrice.forEach(planPrices => {
            let planPriceValue = Number(planPrices.textContent);
            let planPricesNew = planPriceValue / 10;
            planPrices.textContent = `${planPricesNew}`
            monthlyText.forEach(texts => {
                texts.textContent = 'mo'
            });

            step4_perdate.textContent = '(per monthly)';

            step4_body_total.textContent = 'Monthly';
        })
    } else {
        selectplantype.style.justifyContent = 'end';
        selectMonthly.classList.toggle('selected-plan')
        selectYearly.classList.toggle('selected-plan')

        planPrice.forEach(planPrices => {
            let planPriceValue = Number(planPrices.textContent);
            let planPricesNew = planPriceValue * 10;
            planPrices.textContent = `${planPricesNew}`
            step4_perdate.textContent = '(per yearly)';
            monthlyText.forEach(texts => {
                texts.textContent = 'yr'
            });

            step4_body_total.textContent = 'Yearly';
        })

    }
})

nextButton_step2?.addEventListener('click', function () {
    const isSelected = Array.prototype.slice.call(plancardBoxs).some((plancard: Element) => plancard.classList.contains('card-selected'));

    if (isSelected == true) {
        step2.classList.toggle('d-none');
        step3.classList.toggle('d-none');
        stepnumber2?.classList.toggle('selected');
        stepnumber3?.classList.toggle('selected');
    } else {
        nextBtn_warn.textContent = 'You have to choose any plan'
    }
});

backButton_step2.addEventListener('click', function () {
    stepnumber1?.classList.toggle('selected');
    stepnumber2?.classList.toggle('selected');
    step1?.classList.remove('d-none');
    step2?.classList.add('d-none');
})

checkboxs.forEach((checkbox: Element) => {
    checkbox.addEventListener('click', function () {
        const input = checkbox as HTMLInputElement; 
        const isSelected = input.checked; 

        let checkBoxParent = checkbox.parentElement?.querySelector('.addons_box_left_texts');
        let boxParent = checkBoxParent?.parentElement?.parentElement;
        let boxparentChildLeft = boxParent?.querySelector('.addons_box_left');
        let boxParentLeft = boxparentChildLeft?.querySelector('.addons_box_left_texts');
        let selectedAddonName = boxParentLeft?.querySelector('.left_texts_h5')?.textContent;
        let boxparentChild = boxParent?.querySelector('.addons_box_right');
        let boxparentchildPrice = Number(boxparentChild?.querySelector('.plan__card_price')?.textContent);

        let checkBoxObj = {
            'selectedName': selectedAddonName,
            'selectedPrice': boxparentchildPrice
        };

        if (isSelected) {
            totalPlanPrice += boxparentchildPrice;
            selectedPlansArray.push(checkBoxObj);
        } else {
            totalPlanPrice -= boxparentchildPrice;
            selectedPlansArray = selectedPlansArray.filter(plan => plan.selectedName !== selectedAddonName);
        }
            getAddons = selectedPlansArray;
    });
});

nextButton_step3.addEventListener('click', function () {
    stepnumber3?.classList.toggle('selected');
    stepnumber4?.classList.toggle('selected');
    step3?.classList.toggle('d-none');
    step4?.classList.toggle('d-none');
    step4_total.textContent = `+$${totalPlanPrice}`
    selectplanName.textContent = `${planName}`
    step4_top_price.textContent = `${totalPlanPrice}`
    addPriceList();
})

backButton_step3.addEventListener('click', function () {
    stepnumber2?.classList.toggle('selected');
    stepnumber3?.classList.toggle('selected');
    step2?.classList.remove('d-none');
    step3?.classList.add('d-none');
})

nextButton_step4.addEventListener('click', function () {
    step4?.classList.toggle('d-none');
    step5?.classList.toggle('d-none');

    setTimeout(() => {
        getData();
    }, 1700);
})

backButton_step4.addEventListener('click', function () {
    stepnumber4?.classList.toggle('selected');
    stepnumber3?.classList.toggle('selected');
    step3?.classList.remove('d-none');
    step4?.classList.add('d-none');
})

function addPriceList() {
    step4_totalbottom_top.innerHTML = '';

    // Yeni içeriği ekle
    selectedPlansArray.forEach(selects => {
        let HTML = `<div class="bottom_top_total">
            <span class="bottom_top_total_name">
                ${selects.selectedName}
            </span>

            <span class="bottom_top_total_price">
                +$${selects.selectedPrice}/<span class="monthlyText">mo</span>
            </span>
        </div>`;

        step4_totalbottom_top.insertAdjacentHTML('beforeend', HTML);
    });
};