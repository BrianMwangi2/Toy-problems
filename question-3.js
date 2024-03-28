// calculating gross salary
/*
function grossSalary(){
    let salary=prompt("enter salary here")
    let benefits=prompt('enter allowances here')
    // defining our salary and benefits as numbers
    let a=Number (salary)
    let b=Number(benefits)
    //returning 
    return a+b
        
}   
grossSalary();// adding basic salary and benefits gives us the gross income bem

// function to calculate paye 
function calculatePAYE() {
    const taxValue=[
        {amount :24000,rate:0.1},
        {amount:16416,rate:0.15},
        {amount:15200,rate:0.2},
        {amount:11400,rate:0.25},
        {amount:6100,ate:0.3},
        {amount:0,rate:0.35}     
    ];
    let paye =0;
    let remainingIncome=taxableIncome;
    
     for (let c=0;c <taxValue){
        const {amount,rate}=taxValue[c];
        if(remainingIncome <=0)break;
        if(remainingIncome >amount){
            paye +=amount *rate;
        }
        else if (paye +=remainingIncome*rate);
        remainingIncome = 0;
    
    }
return paye;
}
//function to calculate NHIF deductions
function calculateNHIF(salary){
    //Rates
    const nhifRates=[[150, 300, 400, 500, 600, 750, 850, 900, 1000, 1100, 1200, 1300, 1350, 1400, 1500, 1600, 1700, 1800, 1900, 2000]]
    const index = Math.min(Math.floor(basicSalary / 1000), nhifRates.length - 1)
    return nhifRates[index];
}
// Function to calculate NSSF deduction
function calculateNSSF(basicSalary) {
    // NSSF rate
    const nssfRate = 0.06;
    return Math.min(20000, basicSalary * nssfRate);
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const taxableIncome = basicSalary + benefits;
    const paye = calculatePAYE(taxableIncome);
    const nhifDeduction = calculateNHIF(basicSalary);
    const nssfDeduction = calculateNSSF(basicSalary);
    const grossSalary = basicSalary + benefits;
    const deductions = paye + nhifDeduction + nssfDeduction;
    const netSalary = grossSalary - deductions;

    return { grossSalary, paye, nhifDeduction, nssfDeduction, deductions, netSalary };
}
*/
// Function to calculate PAYE tax
/*
let taxableIncome;
function grossSalary(){
    let salary=prompt("enter salary here")
    let benefits=prompt('enter allowances here')
    // defining our salary and benefits as numbers
    let a=Number (salary)
    let b=Number(benefits)
    //returning 
    console.log(taxableIncome=a+b)
        
}
*/
//
/*function grossSalary() {
    let salary = prompt("enter salary here");
    if (isNaN(salary)) {
        alert("Please enter a valid number for the salary.");
        return;
    }
    let benefits = prompt('enter allowances here');
    if (isNaN(benefits)) {
        alert("Please enter a valid number for the benefits.");
        return;
    }

    let a = Number(salary);
    let b = Number(benefits);
    console.log(taxableIncome = a + b);
}
grossSalary();
function calculatePAYE(taxableIncome) {
    const taxValue = [
        { amount: 24000, rate: 0.1 },
        { amount: 16416, rate: 0.15 },
        { amount: 15200, rate: 0.2 },
        { amount: 11400, rate: 0.25 },
        { amount: 6100, rate: 0.3 },
        { amount: 0, rate: 0.35 }
    ];

    let paye = 0;
    let remainingIncome = taxableIncome;

    for (let c = 0; c < taxValue.length; c++) {
        const { amount, rate } = taxValue[c];
        if (remainingIncome <= 0) break;
        if (remainingIncome > amount) {
            paye += amount * rate;
            remainingIncome -= amount;
        } else {
            paye += remainingIncome * rate;
            remainingIncome = 0;
        }
    }

    return paye;
}
calculatePAYE();
// Function to calculate NHIF deductions
function calculateNHIF(basicSalary) {
    const nhifRates = [150, 300, 400, 500, 600, 750, 850, 900, 1000, 1100, 1200, 1300, 1350, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
    const index = Math.min(Math.floor(basicSalary / 1000), nhifRates.length - 1);
    return nhifRates[index];
}
calculateNHIF();
// Function to calculate NSSF deduction
function calculateNSSF(basicSalary) {
    const nssfRate = 0.06;
    return Math.min(20000, basicSalary * nssfRate);
}
calculateNSSF();
// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const taxableIncome = basicSalary + benefits;
    const paye = calculatePAYE(taxableIncome);
    const nhifDeduction = calculateNHIF(basicSalary);
    const nssfDeduction = calculateNSSF(basicSalary);
    const grossSalary = basicSalary + benefits;
    const deductions = paye + nhifDeduction + nssfDeduction;
    const netSalary = grossSalary - deductions;

    return { grossSalary, paye, nhifDeduction, nssfDeduction, deductions, netSalary };
}
calculateNetSalary();
*/
function grossSalary() {
    let salary = prompt("Enter salary here");
    if (isNaN(salary)) {
        alert("Please enter a valid number for the salary.");
        return;
    }
    let benefits = prompt('Enter allowances here');
    if (isNaN(benefits)) {
        alert("Please enter a valid number for the benefits.");
        return;
    }

    let a = Number(salary);
    let b = Number(benefits);
    console.log(calculateNetSalary(a, b)); // Call calculateNetSalary with valid parameters
}

grossSalary();

function calculatePAYE(taxableIncome) {
    const taxValue = [
        { amount: 24000, rate: 0.1 },
        { amount: 16416, rate: 0.15 },
        { amount: 15200, rate: 0.2 },
        { amount: 11400, rate: 0.25 },
        { amount: 6100, rate: 0.3 },
        { amount: 0, rate: 0.35 }
    ];

    let paye = 0;
    let remainingIncome = taxableIncome;

    for (let c = 0; c < taxValue.length; c++) {
        const { amount, rate } = taxValue[c];
        if (remainingIncome <= 0) break;
        if (remainingIncome > amount) {
            paye += amount * rate;
            remainingIncome -= amount;
        } else {
            paye += remainingIncome * rate;
            remainingIncome = 0;
        }
    }

    return paye;
}

// You can call calculatePAYE() directly with a valid taxableIncome

// Function to calculate NHIF deductions
function calculateNHIF(basicSalary) {
    const nhifRates = [150, 300, 400, 500, 600, 750, 850, 900, 1000, 1100, 1200, 1300, 1350, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
    const index = Math.min(Math.floor(basicSalary / 1000), nhifRates.length - 1);
    return nhifRates[index];
}

// You can call calculateNHIF() directly with a valid basicSalary

// Function to calculate NSSF deduction
function calculateNSSF(basicSalary) {
    const nssfRate = 0.06;
    return Math.min(20000, basicSalary * nssfRate);
}

// You can call calculateNSSF() directly with a valid basicSalary

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const taxableIncome = basicSalary + benefits;
    const paye = calculatePAYE(taxableIncome);
    const nhifDeduction = calculateNHIF(basicSalary);
    const nssfDeduction = calculateNSSF(basicSalary);
    const grossSalary = basicSalary + benefits;
    const deductions = paye + nhifDeduction + nssfDeduction;
    const netSalary = grossSalary - deductions;

    return { grossSalary, paye, nhifDeduction, nssfDeduction, deductions, netSalary };
}

// You need to call calculateNetSalary() with valid basicSalary and benefits
