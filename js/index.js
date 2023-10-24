/**
 * TODO: 3-block Model - Exercise 1
 * Input
 *  - benchmark score
 *  - zone
 *  - privilege
 *  - 3 scores of 3 subjects
 * Logic Block
 *  - Create 6 constants of zone & privilege
 *  - Function of zone score 
 *  - Function of privilege score
 *  - Calculate total score = (zone + privilege) + (score 1 + score 2 + score 3)
 *  - Compare if: 
 *      - score 1 || score 2 || score 3 = 0 => failed 
 *      - total score >= benchmark => passed
 *      - total score < benchmark => failed 
 *  - Print out the result 
 * Output
 *  - sum of scores & result 
 */
// Create 6 constants for zone & case 
const ZONE_A = 2; 
const ZONE_B = 1;
const ZONE_C = 0.5; 
const PRIVILEGE_1 = 2.5; 
const PRIVILEGE_2 = 1.5;
const PRIVILEGE_3 = 1; 

function calculateScores() {
    // Input value 
    var benchmark = document.getElementById("benchmark").value * 1;  
    var zone = document.getElementById("zone").value; 
    var privilege = document.getElementById("privilege").value;
    var score1 = document.getElementById("score1").value * 1;
    var score2 = document.getElementById("score2").value * 1;
    var score3 = document.getElementById("score3").value * 1;

    // Calculate priority points
    var priorityPoints = scoreOfZone(zone) + scoreOfPrivilege(privilege); 

    // Calculate total score
    var totalScore = priorityPoints + score1 + score2 + score3; 

    // Check totalScore if pass or fail 
    var result; 
    if (score1 == 0 || score2 == 0 || score3 == 0) {
        result = "You failed because one of the three subjects is 0";
    } else {
        if (totalScore >= benchmark) {
            result = `Congratulations! You passed with the total score of ${totalScore}!`;
        } else {
            result = `You failed with the total score of ${totalScore}!`;
        }
    }

    // Render result on UI
    document.getElementById("ex1-output").innerText = result;  
}

function scoreOfZone(zone) {
    var point;
    if (zone == 1) {
        point = ZONE_A;
    } else if (zone == 2) {
        point = ZONE_B;
    } else if (zone == 3) {
        point = ZONE_C;
    } else {
        point = 0;
    }
    return point;
}

function scoreOfPrivilege(privilege) {
    var point;
    if (privilege == 1) {
        point = PRIVILEGE_1;
    } else if (privilege == 2) {
        point = PRIVILEGE_2;
    } else if (privilege == 3) {
        point = PRIVILEGE_3;
    } else {
        point = 0;
    }
    return point;
}

/** ------------------------------------------------------ */
/**
 * TODO: 3-block model - Exercise 2 
 * Input 
 *  - name
 *  - kW number
 *  - unit prices (for different kW numbers)
 * Logic Block
 *  - 1. Create 5 constants for 5 different unit prices 
 *  - 2. Create 2 variables for name & kw number
 *  - 3. Calculate bill based on the formula 
 *      - if kW <= 50 => kW * 500
 *      - if kW > 50 && kW <= 100 => (kW * 500) + (kW - 50 * 650)
 *      - ...
 *  - 4. Print out the result 
 * Output 
 *  - result 
 */
const FIRST_50KW = 500; 
const NEXT_50KW = 650; 
const NEXT_100KW = 850;
const NEXT_150KW = 1100;
const REST = 1300; 

function calculateBill() {
    // Input value 
    var name = document.getElementById("name").value; 
    var kwNum = document.getElementById("kWnum").value * 1; 
    var bill; 

    // Calculate electricity bill
    if (kwNum <= 50) {
        bill = kwNum * FIRST_50KW; 
    } else if (kwNum > 50 && kwNum <= 100) {
        bill = (50 * FIRST_50KW) + ((kwNum - 50) * NEXT_50KW); 
    } else if (kwNum > 100 && kwNum <= 200) {
        bill = (50 * FIRST_50KW) + (50 * NEXT_50KW) + ((kwNum - 100) * NEXT_100KW); 
    } else if (kwNum > 200 && kwNum <= 350) {
        bill = (50 * FIRST_50KW) + (50 * NEXT_50KW) + (100 * NEXT_100KW) + ((kwNum - 200) * NEXT_150KW); 
    } else {
        bill = (50 * FIRST_50KW) + (50 * NEXT_50KW) + (100 * NEXT_100KW) + (150 * NEXT_150KW) + ((kwNum - 350) * REST); 
    }

    // Render result on UI
    document.getElementById("ex2-output").innerText = `${name} needs to pay an electricity bill of ${bill.toLocaleString()} VND!`;
}

/** ------------------------------------------------------ */
/**
 * TODO: 3-block model - Exercise 3 
 * Input
 *  - name
 *  - yearly income
 *  - numbers of dependents
 * Logic Block
 *  - 1. Create 6 constants of tax rate 
 *  - 2. Create 6 others constants of level of income 
 *  - 3. Create 3 variables of 3 input value (name, income, member)
 *  - 4. Calculate taxable income = income - 4000000 - (member * 1600000)
 *  - 5. From taxable income, calculate tax amount by formula (similar to Uber exercise)
 *  - 6. Print out the result 
 * Output 
 *  - result 
 */
const TAX_RATE_60 = 0.05;
const TAX_RATE_120 = 0.1;
const TAX_RATE_210 = 0.15;
const TAX_RATE_384 = 0.2;
const TAX_RATE_624 = 0.25;
const TAX_RATE_960 = 0.3;
const TAX_RATE_MAX = 0.35;

const LEVEL_1 = 60000000;
const LEVEL_2 = 120000000; 
const LEVEL_3 = 210000000;
const LEVEL_4 = 384000000;
const LEVEL_5 = 624000000;
const LEVEL_6 = 960000000;

function calculateTax() {
    // Input value
    var name = document.getElementById("nameTax").value;
    var income = document.getElementById("income").value * 1;
    var member = document.getElementById("member").value * 1;

    // Calculate taxable income 
    var taxableIncome = income - 4000000 - (member * 1600000);

    // Calculate the final tax amount need to be paid 
    var taxAmount;
    if (taxableIncome <= LEVEL_1) {
        taxAmount = taxableIncome * TAX_RATE_60;
    } else if (taxableIncome > LEVEL_1 && taxableIncome <= LEVEL_2) {
        taxAmount = (LEVEL_1 * TAX_RATE_60) + ((taxableIncome - LEVEL_1) * TAX_RATE_120);
    } else if (taxableIncome > LEVEL_2 && taxableIncome <= LEVEL_3) {
        taxAmount = (LEVEL_1 * TAX_RATE_60) + ((LEVEL_2 - LEVEL_1) * TAX_RATE_120) + ((taxableIncome - LEVEL_2) * TAX_RATE_210);
    } else if (taxableIncome > LEVEL_3 && taxableIncome <= LEVEL_4) {
        taxAmount = (LEVEL_1 * TAX_RATE_60) + ((LEVEL_2 - LEVEL_1) * TAX_RATE_120) + ((LEVEL_3 - LEVEL_2) * TAX_RATE_210) + ((taxableIncome - LEVEL_3) * TAX_RATE_384);
    } else if (taxableIncome > LEVEL_4 && taxableIncome <= LEVEL_5) {
        taxAmount = (LEVEL_1 * TAX_RATE_60) + ((LEVEL_2 - LEVEL_1) * TAX_RATE_120) + ((LEVEL_3 - LEVEL_2) * TAX_RATE_210) + ((LEVEL_4 - LEVEL_3) * TAX_RATE_384) + ((taxableIncome - LEVEL_4) * TAX_RATE_624);
    } else if (taxableIncome > LEVEL_5 && taxableIncome <= LEVEL_6) {
        taxAmount = (LEVEL_1 * TAX_RATE_60) + ((LEVEL_2 - LEVEL_1) * TAX_RATE_120) + ((LEVEL_3 - LEVEL_2) * TAX_RATE_210) + ((LEVEL_4 - LEVEL_3) * TAX_RATE_384) + ((LEVEL_5 - LEVEL_4) * TAX_RATE_624) + ((taxableIncome - LEVEL_5) * TAX_RATE_960);
    } else {
        taxAmount = (LEVEL_1 * TAX_RATE_60) + ((LEVEL_2 - LEVEL_1) * TAX_RATE_120) + ((LEVEL_3 - LEVEL_2) * TAX_RATE_210) + ((LEVEL_4 - LEVEL_3) * TAX_RATE_384) + ((LEVEL_5 - LEVEL_4) * TAX_RATE_624) + ((LEVEL_6 - LEVEL_5) * TAX_RATE_960) + ((taxableIncome - LEVEL_6) * TAX_RATE_MAX);
    }

    if (taxAmount <= 0) {
        alert("Income is invalid!");
    } else {
        // Render result on UI
        var result = `The personal income tax that ${name} has to pay is ${taxAmount.toLocaleString()} VND!`;
        document.getElementById("ex3-output").innerText = result;
    }
}

/** ------------------------------------------------------ */
/**
 * TODO: 3-block model - Exercise 4
 * Input
 *  - client id 
 *  - client type
 *  - number of channels
 *  - number of connections (only for enterprise)
 * Logic Block
 *  - 1. Create 7 constants for fixed prices 
 *  - 2. Create function for select client by onChange 
 *  - 3. Create 3 variables for client type, client id, channels and connections (for enterprise)
 *  - 4. Calculate cable bill with formula 
* Output 
 *  - result 
 */
const BILL_INDIVIDUAL = 4.5;
const BILL_ENTERPRISE = 15;
const SERVICE_INDIVIDUAL = 20.5;
const SERVICE_ENTERPRISE_1 = 75;  
const SERVICE_ENTERPRISE_2 = 5;  
const CHANNEL_INDIVIDUAL = 7.5;
const CHANNEL_ENTERPRISE = 50; 

function selectClient() {
    var client = document.getElementById("client").value; 

    if (client == 0 || client == 1) {
        document.getElementById("connection").style.display = "none";
    } else {
        document.getElementById("connection").style.display = "block";
    }
}

function calculateCable() {
    // Input value
    var clientType = document.getElementById("client").value; 
    var clientId = document.getElementById("clientId").value;
    var channel = document.getElementById("channel").value * 1;
    var connection = document.getElementById("connection").value * 1;

    // Calculate cable bill
    var billAmount; 
    if (clientType == 0) {
        alert("Client type is invalid!"); 
    } else if (clientId == 1) {
        billAmount = BILL_INDIVIDUAL + SERVICE_INDIVIDUAL + (channel * CHANNEL_INDIVIDUAL);
    } else {
        if (connection <= 10) {
            billAmount = BILL_ENTERPRISE + SERVICE_ENTERPRISE_1 + (channel * CHANNEL_ENTERPRISE);
        } else {
            billAmount = BILL_ENTERPRISE + SERVICE_ENTERPRISE_1 + ((connection - 10) * SERVICE_ENTERPRISE_2) + (channel * CHANNEL_ENTERPRISE); 
        }
    }

    // Display result on UI
    var result = `Client ID: ${clientId} - Cable bill: ${billAmount.toLocaleString("en-US", {style: "currency", currency: "USD"})}`;
    document.getElementById("ex4-output").innerText = result; 
}