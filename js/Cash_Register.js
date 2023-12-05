
// Empty Object for a single (valid) transaction
let trNew ={};

var TXgood = false;

var emptyDrawer;



// Declare a finalCID in order to receive the new CID AFTER THE TRANSACTION!
var finalCID;

// Obj for the transaction but wait to assign the value, depending on the URL
//var transaction;

var statusIndicator = "";

var arrayOfTransactionToExport = [];



let validTXindicator = localStorage.getItem('TXpresentIndicator');
console.log(validTXindicator);


if(validTXindicator === false || validTXindicator === null){

    var initialCID = [['ONE HUNDRED'],['TWENTY'],['TEN'], ['FIVE'], ['ONE'], ['QUARTER'], ['DIME'],['NICKEL'],['PENNY']];

    var urlToFetch = 'http://localhost:5000/cash_register';

    fetch(urlToFetch)
    .then(res => res.json())
    .then((data) => {

      /*
        Here no TX are present, so i have to look at the data
        (Array of Obj) coming from the DB:
      */
        console.log(data)
      // EXTRACTsql is a ES6 clone of data
      let extractSQL = [...data];
      // startCID is the (obj) last ROW of the drawer DB
      var startCID = {...extractSQL[(extractSQL.length-1)]};
      // Delete Date prop
      delete startCID.Date;

      // Now put each value of obj startCID into
      // each array of the initialCID array
        var arrayMiddle = []

        for(let prop in startCID){
            arrayMiddle.push(startCID[prop])
        }

        arrayMiddle.forEach(function callback(value, index) {

            initialCID[index].push(value);

           });

        console.log(initialCID);

        // Call the function fillTheLCD with the initialCID
        fillTheLCD(initialCID);

      let stringedInitialCID = JSON.stringify(initialCID);
      localStorage.setItem('startingCID', stringedInitialCID);




})
    .catch(err => console.log(err));

}

else{
        let newCIDfromJSON = localStorage.getItem('newCID');
        const newCIDparsed = JSON.parse(newCIDfromJSON);

        initialCID = newCIDparsed;


        // localStorage.setItem('endCID', finalCID);

        let presentTransaction = localStorage.getItem('transactionFromACC');
        console.log(presentTransaction);

    arrayOfTransactionToExport = JSON.parse(presentTransaction);


    fillTheLCD(initialCID)


    //initialCID = [['ONE HUNDRED', 0],['TWENTY', 40],['TEN', 20], ['FIVE', 10], ['ONE', 10], ['QUARTER', 1], ['DIME', 1],['NICKEL', 0.1],['PENNY', 0.5]];


}



// Function to fill the LCD CID
function fillTheLCD(input){
    input = initialCID;
    console.log(input)

    input.forEach(element => {

        let quantity = Number(element[1]);

        if(quantity<1){

            quantity = Number(quantity.toFixed(3));
        }
        else{
          quantity = quantity;
        }

        document.getElementById("single_TX_block").innerHTML += `
        <div class="col-6 themed-grid-col bg-black single_tx  pt-1">
        <h6 class="text-white" id="CID_display_unit">${element[0]}</h6>
        <h2 class="mx-3 ligth_blue_old digit" id="CID_display_quantity">${quantity} <span class="ultra_small">$</span></h2>
        </div>
       `
    });
}

// An empty array to fill with the amount of dollars each unit
var arrayWithoutUnit = [];
// for each loop to fill arrayWithoutUnit
initialCID.forEach(element => {
    arrayWithoutUnit.push(element[1])
});

// Set the variable for the total available in drawer
var tot_fm = 0;

// Set the initail value 0 to the counter for the reduce loop below
// To generate tot_fm, which is the amount available
let startValueForReduce = 0;
tot_fm = Number(arrayWithoutUnit.reduce((accumulator, currentValue) => accumulator + currentValue, startValueForReduce));


/**
 *  CODE BELOW IS TO COLLECT AND SPLIT THE MONEY
 *  PAID BY THE CUSTOMER IN EACH UNIT
 */
// Fill START
// Start fill 100$
var arrayofTimes100 = [];
var count100 = 0;
var toadd100 = 0;
var button100 = document.getElementById("100DollBtn");

button100.addEventListener("click", function() {
   count100++;
   fillArray100(count100);

});


function fillArray100(count100){
count100 = count100 * 100;
arrayofTimes100.push(count100);
toadd100 = arrayofTimes100.pop();
sumPaid();
return toadd100;
}
// End fill 100$

// Start fill 20$
var arrayofTimes20 = [];
var count20 = 0;
var toadd20 = 0;
var button20 = document.getElementById("20DollBtn");

button20.addEventListener("click", function() {
   count20++;
   fillArray20(count20);
});


function fillArray20(count20){
count20 = count20 * 20;
arrayofTimes20.push(count20);
toadd20 = arrayofTimes20.pop();
sumPaid();
return toadd20;
}
// End fill 20$

// Start fill 10$
var arrayofTimes10 = [];
var count10 = 0;
var toadd10 = 0;
var button10 = document.getElementById("10DollBtn");

button10.addEventListener("click", function() {
   count10++;
   fillArray10(count10);
});


function fillArray10(count10){
count10 = count10 * 10;
arrayofTimes10.push(count10);
toadd10 = arrayofTimes10.pop();
sumPaid();
return toadd10;
}
// End fill 10$

// Start fill 5$
var arrayofTimes5 = [];
var count5 = 0;
var toadd5 = 0;
var button5 = document.getElementById("5DollBtn");

button5.addEventListener("click", function() {
   count5++;
   fillArray5(count5);
});


function fillArray5(count5){
count5 = count5 * 5;
arrayofTimes5.push(count5);
toadd5 = arrayofTimes5.pop();
sumPaid();
return toadd5;
}
// End fill 5$
// Start fill 1$
var arrayofTimes1 = [];
var count1 = 0;
var toadd1 = 0;
var button1 = document.getElementById("1DollBtn");

button1.addEventListener("click", function() {
   count1++;
   fillArray1(count1);
});


function fillArray1(count1){
count1 = count1 * 1;
arrayofTimes1.push(count1);
toadd1 = arrayofTimes1.pop();
sumPaid();
return toadd1;
}
// End fill 1$

// Start fill Quarter$
var arrayofTimesQuarter = [];
var countQuarter = 0;
var toaddQuarter = 0;
var buttonQuarter = document.getElementById("QuarterDollBtn");

buttonQuarter.addEventListener("click", function() {
   countQuarter++;
   fillArrayQuarter(countQuarter);
});


function fillArrayQuarter(countQuarter){
countQuarter = countQuarter * 0.25;
arrayofTimesQuarter.push(countQuarter);
toaddQuarter = arrayofTimesQuarter.pop();
sumPaid();
return toaddQuarter;
}
// End fill Quarter$

// Start fill Dime$
var arrayofTimesDime = [];
var countDime = 0;
var toaddDime = 0;
var buttonDime = document.getElementById("DimeBtn");

buttonDime.addEventListener("click", function() {
   countDime++;
   fillArrayDime(countDime);
});


function fillArrayDime(countDime){
countDime = countDime * 0.10;
arrayofTimesDime.push(countDime);
toaddDime = arrayofTimesDime.pop();
sumPaid();
return toaddDime;
}
// End fill Dime$

// Start fill Nickel$
var arrayofTimesNickel = [];
var countNickel = 0;
var toaddNickel = 0;
var buttonNickel = document.getElementById("NickelBtn");

buttonNickel.addEventListener("click", function() {
   countNickel++;
   fillArrayNickel(countNickel);
});


function fillArrayNickel(countNickel){
countNickel = countNickel * 0.05;
arrayofTimesNickel.push(countNickel);
toaddNickel = arrayofTimesNickel.pop();
sumPaid();
return toaddNickel;
}
// End fill Nickel$

// Start fill Penny$
var arrayofTimesPenny = [];
var countPenny = 0;
var toaddPenny = 0;
var buttonPenny = document.getElementById("PennyBtn");

buttonPenny.addEventListener("click", function() {
   countPenny++;
   fillArrayPenny(countPenny);
});


function fillArrayPenny(countPenny){
countPenny = countPenny * 0.01;
arrayofTimesPenny.push(countPenny);
toaddPenny = arrayofTimesPenny.pop();
sumPaid();
return toaddPenny;
}
// End fill Penny$
/**
 *  END PART TO COLLECT AND SPLIT THE MONEY
 *  PAID BY THE CUSTOMER IN EACH UNIT
 */


var priceFilled = false;
var paidTotal = 0;
var priceAr = 0;
var toGiveBack = priceAr - paidTotal;

let initialValue = 0;
var arrayofPaid = [];

function getThePrice(){

    priceAr = document.getElementById("TotalBill").value;


   priceAr = Number(priceAr).toFixed(2);

    if(priceAr == 0){
      generateErrorNoPriceFilled();
    }



    else{
        fakeVar = false;
    }
}



function clearPrice(){
    document.getElementById("TotalBill").value = 0;
}

function sumPaid(){
    arrayofPaid = [];
    arrayofPaid.push(toadd100).toFixed(2);
    arrayofPaid.push(toadd20).toFixed(2);
    arrayofPaid.push(toadd10).toFixed(2);
    arrayofPaid.push(toadd5).toFixed(2);
    arrayofPaid.push(toadd1).toFixed(2);
    arrayofPaid.push(toaddQuarter).toFixed(2);
    arrayofPaid.push(toaddDime).toFixed(2);
    arrayofPaid.push(toaddNickel).toFixed(2);
    arrayofPaid.push(toaddPenny).toFixed(2);
    paidTotal = Number(arrayofPaid.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue));

    fillTheCash(paidTotal.toFixed(2));

}


function fillTheCash (toFill){
document.getElementById("paid_display").innerHTML = `${toFill} <span class="ultra_small"> $</span>`;
}


function checkCashRegister(price, cash, cid, paidSplitted) {

    initialCID[0][1] = initialCID[0][1] + toadd100;
    initialCID[1][1] = initialCID[1][1] + toadd20;
    initialCID[2][1] = initialCID[2][1] + toadd10;
    initialCID[3][1] = initialCID[3][1] + toadd5;
    initialCID[4][1] = initialCID[4][1] + toadd1;
    initialCID[5][1] = initialCID[5][1] + toaddQuarter;
    initialCID[6][1] = initialCID[6][1] + toaddDime;
    initialCID[7][1] = initialCID[7][1] + toaddNickel;
    initialCID[8][1] = initialCID[8][1] + toaddPenny;

    cid = initialCID;
    price = priceAr;
    cash = paidTotal;

    paidSplitted = arrayofPaid;
    console.log(paidSplitted);
    // Array of units
    let arrayOfUnits = [100,20,10,5,1,0.25,0.1,0.05,0.01];
    console.log(paidTotal);

    if (paidTotal<price){
        generateError(paidTotal,price);
        return
   }

    // final obj for the final change
    let change = {status: " ", change   : []};

     statusIndicator = change.status;

    // Array of Cid
    let arrayOfCid = [];


    // Push into arrayOfCid the amount of CID per Currency Unit
    cid.forEach(element => {
        arrayOfCid.push(element[1]);
    });// ArrayOfCID is => [1.01,2.05,3.1,4.25,90,55,20,60,100]

    // Super important: Each element is the amount of dollars available divided per Currency Unit
    // Set an initial value for sum all elements of ArrayOfCID
    const initialValue = 0;

    // Assign to totalOfCID the SUM of all elements of ArrayOfCID
    // In order to get the amount of CHANGE to give back to the customer
    const totalOfCid = arrayOfCid.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
    );
    // Example of totalOfCid => 335.40999999999997
        console.log(totalOfCid);
    // dollarsToSendBackToCustomer is cash-price
    var dollarsToSendBackToCustomer = cash-priceAr;

    // Case for INSUFFICIENT_FUNDS due to change exceeds that in the drawer (totalOfCid)
    if (totalOfCid<dollarsToSendBackToCustomer){
            change.status = "INSUFFICIENT_FUNDS";
            generateErrorInsuffFunds(totalOfCid,dollarsToSendBackToCustomer);
    }

    // Case for FUNDS available
    else{

        // First; test if cash is equal to price => NO cash required
        if(price == cash){

            change.status = "OPEN";
            change.change = 0;

            //Important! Call the sumPaid function in order to add what
            // the customer paid to the new CID
            sumPaid();

            statusIndicator = change.status;

            // Store locally new cid
            finalCID = JSON.stringify(cid);

            localStorage.setItem('newCID', finalCID);

            if(price == 0){
                generateErrorNoPriceFilled();

            }
            // Here below else means "Price is filled"
            else{

            //Call the generateModal function passing
            // Price, Cash, Paidsplitted,Change,CID
            generateModal(price,cash,paidSplitted,change,cid,statusIndicator);

            // Generate the trNew object and push in the arrayOfTransactionToExport
            trNew = new TransactionConstructor(price,cash,paidSplitted,change,cid);

            arrayOfTransactionToExport.push(trNew);
            toExport = JSON.stringify(arrayOfTransactionToExport);

            // store on localStorage the stringified array of transactions
            localStorage.setItem('transactionFromACC', toExport);

            // Set to true the indicator of a good transaction
            TXgood = true;

             // store on localStorage the indicator of a good transaction
            localStorage.setItem('TXpresentIndicator', TXgood);


            return change;
        }

        }
        // End price == Cash

        /* EVERYTHING STARTS HERE:
         * FUNDS AVAILABLE, CASH REQUIRED
         */


        else{
            /// ================ HUNDRED DOLLARS ZONE  =====================

            let required100 = Math.floor(dollarsToSendBackToCustomer/100);
            let available100 = Math.floor(cid[0][1]/arrayOfUnits[0]);

            console.log(`required100: ${required100}`);
            console.log(`available100: ${available100}`);

            if(required100!=0 && available100!=0){

                let subArray = [];

                if(required100>available100){

                dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-available100*100).toFixed(2);
                console.log(`Req100 > aval100`);
                console.log(`dollarsToSendBackToCustomer minus available 100$ ${dollarsToSendBackToCustomer}`);
                let remainingCID = cid[0][1] - required100*100;
                    console.log(remainingCID);
                    cid[0].pop();
                    cid[0].push(remainingCID);
                    console.log(cid);
                    subArray.push("ONE HUNDRED");
                    subArray.push(available100*100);
                    change.change.push(subArray);

                    }
                else{
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-required100*100).toFixed(2);
                    console.log(`Req100 < aval100`);
                    console.log(`dollarsToSendBackToCustomer minus available 100$ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[0][1] - required100*100;
                    console.log(remainingCID);
                    cid[0].pop();
                    cid[0].push(remainingCID);
                    console.log(cid);
                    subArray.push("ONE HUNDRED");
                    subArray.push(required100*100);
                    change.change.push(subArray);
                    }
                    if(dollarsToSendBackToCustomer == 0){
                        // Check if price is filled,
                      // Generate the TX valid
                      if(price!=0){

                        endCashAllOk(price,cash,paidSplitted,change,cid,statusIndicator);

                      }
                      // Otherwise generate error
                       else{

                        generateErrorNoPriceFilled();
                        return
                         }

                    }


            } // End test required100!=0 && available100!=0


            /// ================ TWENTY DOLLARS ZONE  =====================
            let required20 = Math.floor(dollarsToSendBackToCustomer/20);
            let available20 = Math.floor(cid[1][1]/arrayOfUnits[1]);
            console.log(`required20: ${required20}`);
            console.log(`available20: ${available20}`);

            if(required20!=0 &&available20!=0){
                let subArray = [];
                if(required20>available20){
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-available20*20).toFixed(2);
                    console.log(`Req20 > aval20`);
                    console.log(required20*20);
                    console.log(`dollarsToSendBackToCustomer minus available 20$ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[1][1] - required20*20;
                    console.log(remainingCID);
                    cid[1].pop();
                    cid[1].push(remainingCID);
                    console.log(cid)

                    subArray.push("TWENTY");
                    subArray.push(available20*20);
                    change.change.push(subArray);

                }
                else{
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-required20*20).toFixed(2);
                    console.log(`Req20 < aval20`);
                    console.log(required20*20);
                    console.log(`dollarsToSendBackToCustomer minus available 20$ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[1][1] - required20*20;
                    console.log(remainingCID);
                    cid[1].pop();
                    cid[1].push(remainingCID);
                    console.log(cid);

                    subArray.push("TWENTY");
                    subArray.push(required20*20);
                    change.change.push(subArray);
                }

                if(dollarsToSendBackToCustomer == 0){
                    // Check if price is filled,
                  // Generate the TX valid
                  if(price!=0){

                    endCashAllOk(price,cash,paidSplitted,change,cid,statusIndicator);

                  }
                  // Otherwise generate error
                   else{

                    generateErrorNoPriceFilled();
                    return
                     }

                }



            } // End test required20!=0 && available20!=0


            /// ================ TEN DOLLARS ZONE  =====================
            let required10 = Math.floor(dollarsToSendBackToCustomer/10);
            let available10 = Math.floor(cid[2][1]/arrayOfUnits[2]);
            console.log(`required10: ${required10}`);
            console.log(`available10: ${available10}`);

            if(required10!=0 &&available10!=0){
                let subArray = [];

                if(required10>available10){
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-available10*10).toFixed(2);
                    console.log(`Req10 > aval10`);
                    console.log(`dollarsToSendBackToCustomer minus available 10$ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[2][1] - required10*10;
                    console.log(remainingCID);
                    cid[2].pop();
                    cid[2].push(remainingCID);
                    console.log(cid);
                    subArray.push("TEN");
                    subArray.push(available10*10);
                    change.change.push(subArray);
                }
                else{
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-required10*10).toFixed(2);
                    console.log(`Req10 < aval10`);
                    console.log(`dollarsToSendBackToCustomer minus available 10$ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[2][1] - required10*10;
                    console.log(remainingCID);
                    cid[2].pop();
                    cid[2].push(remainingCID);
                    subArray.push("TEN");
                    subArray.push(required10*10);
                    change.change.push(subArray);
                }

                if(dollarsToSendBackToCustomer == 0){
                    // Check if price is filled,
                  // Generate the TX valid
                  if(price!=0){

                    endCashAllOk(price,cash,paidSplitted,change,cid,statusIndicator);

                  }
                  // Otherwise generate error
                   else{

                    generateErrorNoPriceFilled();
                    return
                     }

                }


                } // End test required10!=0 && available10!=0


            /// ================ FIVE DOLLARS ZONE  =====================
            let required5 = Math.floor(dollarsToSendBackToCustomer/5);
            let available5 = Math.floor(cid[3][1]/arrayOfUnits[3]);
            console.log(`required5: ${required5}`);
            console.log(`available5: ${available5}`);

            if(required5!=0 &&available5!=0){
                let subArray = [];

                if(required5>available5){
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-available5*5).toFixed(2);
                    console.log(`Req5 > aval5`);
                    console.log(`dollarsToSendBackToCustomer minus available 5$ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[3][1] - required5*5;
                    console.log(remainingCID);
                    cid[3].pop();
                    cid[3].push(remainingCID);
                    console.log(cid);
                    subArray.push("FIVE");
                    subArray.push(available5*5);
                    change.change.push(subArray);
                }
                else{
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-required5*5).toFixed(2);
                    console.log(`Req5 < aval5`);
                    console.log(`dollarsToSendBackToCustomer minus available 5$ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[3][1] - required5*5;
                    console.log(remainingCID);
                    cid[3].pop();
                    cid[3].push(remainingCID);
                    subArray.push("FIVE");
                    subArray.push(required5*5);
                    change.change.push(subArray);
                }

                if(dollarsToSendBackToCustomer == 0){
                    // Check if price is filled,
                  // Generate the TX valid
                  if(price!=0){

                    endCashAllOk(price,cash,paidSplitted,change,cid,statusIndicator);

                  }
                  // Otherwise generate error
                   else{

                    generateErrorNoPriceFilled();
                    return
                     }

                }


                } // End test required5!=0 && available5!=0



            /// ================ ONE DOLLAR ZONE  =====================
            let required1 = Math.floor(dollarsToSendBackToCustomer/1);
            let available1 = Math.floor(cid[4][1]/arrayOfUnits[4]);
            console.log(`required1: ${required1}`);
            console.log(`available1: ${available1}`);

            if(required1!=0 &&available1!=0){
                let subArray = [];

                if(required1>available1){
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-available1*1).toFixed(2);
                    console.log(`Req1 > aval1`);
                    console.log(`dollarsToSendBackToCustomer minus available 1$ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[4][1] - required1*1;
                    console.log(remainingCID);
                    cid[4].pop();
                    cid[4].push(remainingCID);
                    subArray.push("ONE");
                    subArray.push(available1*1);
                    change.change.push(subArray);
                }
                else{
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-required1*1).toFixed(2);
                    console.log(`Req1 < aval1`);
                    console.log(`dollarsToSendBackToCustomer minus available 1$ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[4][1] - required1*1;
                    console.log(remainingCID);
                    cid[4].pop();
                    cid[4].push(remainingCID);
                    subArray.push("ONE");
                    subArray.push(required1*1);
                    change.change.push(subArray);
                }

                if(dollarsToSendBackToCustomer == 0){
                    // Check if price is filled,
                  // Generate the TX valid
                  if(price!=0){

                    endCashAllOk(price,cash,paidSplitted,change,cid,statusIndicator);

                  }
                  // Otherwise generate error
                   else{

                    generateErrorNoPriceFilled();
                    return
                     }

                }


                } // End test required1!=0 && available1!=0


            /// ================ QUARTER DOLLAR ZONE  =====================
            let requiredQuarter = Math.floor(dollarsToSendBackToCustomer/0.25 );
            let availableQuarter = Math.floor(cid[5][1]/arrayOfUnits[5]);
            console.log(`requiredQuarter: ${requiredQuarter}`);
            console.log(`availableQuarter: ${availableQuarter}`);

            if(requiredQuarter!=0 &&availableQuarter!=0){
                let subArray = [];

                if(requiredQuarter>availableQuarter){
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-availableQuarter*0.25).toFixed(2);
                    console.log(`ReqQuart > avalQuart`);
                    console.log(`dollarsToSendBackToCustomer minus available Quarter $ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[5][1] - requiredQuarter*0.25;
                    console.log(remainingCID);
                    cid[5].pop();
                    cid[5].push(remainingCID);
                    subArray.push("QUARTER");
                    subArray.push(availableQuarter*0.25);
                    change.change.push(subArray);
                }
                else{
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-requiredQuarter*0.25).toFixed(2);
                    console.log(`ReqQuart < avalQuart`);
                    console.log(`dollarsToSendBackToCustomer minus available Quarter $ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[5][1] - requiredQuarter*0.25;
                    console.log(remainingCID);
                    cid[5].pop();
                    cid[5].push(remainingCID);
                    subArray.push("QUARTER");
                    subArray.push(requiredQuarter*0.25);
                    change.change.push(subArray);
                }
                if(dollarsToSendBackToCustomer == 0){
                    // Check if price is filled,
                  // Generate the TX valid
                  if(price!=0){

                    endCashAllOk(price,cash,paidSplitted,change,cid,statusIndicator);

                  }
                  // Otherwise generate error
                   else{

                    generateErrorNoPriceFilled();
                    return
                     }

                }


                } // End test requiredQuarters!=0 && availableQuarters!=0

                else{
                    let fakeVar = false;
                }

            /// ================ DIME ZONE  =====================
            let requiredDime = Math.floor(dollarsToSendBackToCustomer/0.1 );
            let availableDime = Math.floor(cid[6][1]/arrayOfUnits[6]);
            console.log(`requiredDime: ${requiredDime}`);
            console.log(`availableDime: ${availableDime}`);

            if(requiredDime!=0 &&availableDime!=0){
                let subArray = [];
                if(requiredDime>availableDime){
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-availableDime*0.1).toFixed(2);
                    console.log(`ReqDime > avalDime`);
                    console.log(`dollarsToSendBackToCustomer minus available Dime $ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[6][1] - requiredDime*0.1;
                    console.log(remainingCID);
                    cid[6].pop();
                    cid[6].push(remainingCID);
                    subArray.push("DIME");
                    subArray.push(availableDime*0.1);
                    change.change.push(subArray);
                }
                else{
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-requiredDime*0.1).toFixed(2);
                    console.log(`ReqDime < avalDime`);
                    console.log(`dollarsToSendBackToCustomer minus available Dime $ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[6][1] - requiredDime*0.1;
                    console.log(remainingCID);
                    cid[6].pop();
                    cid[6].push(remainingCID);
                    subArray.push("DIME");
                    subArray.push(requiredDime*0.1);
                    change.change.push(subArray);
                }
                if(dollarsToSendBackToCustomer == 0){
                    // Check if price is filled,
                  // Generate the TX valid
                  if(price!=0){

                    endCashAllOk(price,cash,paidSplitted,change,cid,statusIndicator);

                  }
                  // Otherwise generate error
                   else{

                    generateErrorNoPriceFilled();
                    return
                     }

                }


                } // End test requiredDime!=0 && availableDime!=0

                else{
                    let fakeVar = false;
                }

            /// ================ NICKEL ZONE  =====================
            let requiredNickel = Math.floor(dollarsToSendBackToCustomer/0.05 );
            let availableNickel = Math.floor(cid[7][1]/arrayOfUnits[7]);
            console.log(`requiredNickel: ${requiredNickel}`);
            console.log(`availableNickel: ${availableNickel}`);

            if(requiredNickel!=0 &&availableNickel!=0){
                let subArray = [];
                if(requiredNickel>availableNickel){
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-availableNickel*0.05).toFixed(2);
                    console.log(`ReqNickel > avalNickel`);
                    console.log(`dollarsToSendBackToCustomer minus available Nickel $ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[7][1] - requiredNickel*0.05;
                    console.log(remainingCID);
                    cid[7].pop();
                    cid[7].push(remainingCID).toFixed(2);
                    subArray.push("NICKEL");
                    subArray.push((availableNickel*0.05).toFixed(2));
                    change.change.push(subArray);
                }
                else{
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-requiredNickel*0.05).toFixed(2);
                    console.log(`ReqDime < avalDime`);
                    console.log(`dollarsToSendBackToCustomer minus available Nickel $ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[7][1] - requiredNickel*0.05;
                    console.log(remainingCID);
                    cid[7].pop();
                    cid[7].push(remainingCID);
                    subArray.push("NICKEL");
                    subArray.push(requiredNickel*0.05);
                    change.change.push(subArray);
                }
                if(dollarsToSendBackToCustomer == 0){
                    // Check if price is filled,
                  // Generate the TX valid
                  if(price!=0){

                    endCashAllOk(price,cash,paidSplitted,change,cid,statusIndicator);

                  }
                  // Otherwise generate error
                   else{

                    generateErrorNoPriceFilled();
                    return
                     }

                }


                } // End test requiredNickel!=0 && availableNickel!=0


            /// ================ PENNY ZONE  =====================
            let requiredPenny = Math.floor(dollarsToSendBackToCustomer/0.01 );
            let availablePenny = Math.floor(cid[8][1]/arrayOfUnits[8]);
            console.log(`requiredPenny: ${requiredPenny}`);
            console.log(`availablePenny: ${availablePenny}`);

            if(requiredPenny!=0 &&availablePenny!=0){
                let subArray = [];
                if(requiredPenny>availablePenny){
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-availablePenny*0.01).toFixed(2);
                    console.log(`ReqPenny > avalPenny`);
                    console.log(`dollarsToSendBackToCustomer minus available Penny $ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = (cid[8][1] - requiredPenny*0.01).toFixed(2);
                    console.log(remainingCID);
                    cid[8].pop();
                    cid[8].push(remainingCID);
                    subArray.push("PENNY");
                    subArray.push(availablePenny*0.01);
                    change.change.push(subArray);
                }
                else{
                    dollarsToSendBackToCustomer = (dollarsToSendBackToCustomer-requiredPenny*0.01).toFixed(2);
                    console.log(`ReqPenny < avalPenny`);
                    console.log(`dollarsToSendBackToCustomer minus available Penny $ ${dollarsToSendBackToCustomer}`);
                    let remainingCID = cid[8][1] - requiredPenny*0.01;
                    console.log(remainingCID);
                    cid[8].pop();
                    cid[8].push(remainingCID);
                    subArray.push("PENNY");
                    subArray.push(requiredPenny*0.01);
                    change.change.push(subArray);
                }
                if(dollarsToSendBackToCustomer == 0){
                    if(totalOfCid == requiredPenny*0.01){
                        change.status = "CLOSED";
                        change.change.pop();
                        change.change = cid;
                        console.log(change);
                        return change;
                    }
                    endCashAllOk(price,cash,paidSplitted,change,cid,statusIndicator);
                    }
                else{
                    change.status="INSUFFICIENT_FUNDS";
                    generateErrorInsuffFunds(totalOfCid,dollarsToSendBackToCustomer);
                    change.change.pop();
                    console.log(change);
                    return change;
                }

            } // End test requiredPenny!=0 && availablePenny!=0

            else if(requiredPenny!=0 && availablePenny ==0){
              change.status = "CLOSE";
              console.log(change.status);
              generateErrorInsuffFunds();
            }



            }
        } // End total case for FUNDS available AND CASH REQUIRED


    // Finals returns
    console.log(change);

    return change;
}

// Refresh the page
function refreshPage(){
    location.reload();
}

// Obj transaction constructor
function TransactionConstructor(price,cash,paidSplitted,change,cid){
this.date = Date().toString();
this.price = price;
this.cash = cash;
this.paidSplitted= paidSplitted;
this.change=change;
this.cid=cid;
}

function endCashAllOk(price,cash,paidSplitted,change,cid,statusIndicator){
    // console.log("RESTO FINITO");
    change.status="OPEN";
    console.log(change);
    statusIndicator = change.status;
    finalCID = JSON.stringify(cid);
    localStorage.setItem('newCID', finalCID);
    generateModal(price,cash,paidSplitted,change,cid,statusIndicator);
    trNew = new TransactionConstructor(price,cash,paidSplitted,change,cid);
    arrayOfTransactionToExport.push(trNew);
    toExport = JSON.stringify(arrayOfTransactionToExport);
    localStorage.setItem('transactionFromACC', toExport);
    TXgood = true;
    localStorage.setItem('TXpresentIndicator', TXgood);
    return change;
}

function generateModal(price,cash,paidSplitted,change,cid,statusIndicator){
    document.getElementById("transaction_modal").classList.add("d-block");
    let currentDate = Date().toString();
    document.getElementById("currentDate").innerHTML =`${currentDate}`;
    document.getElementById("totalBill").innerHTML =`${price}`;
    document.getElementById("totalPaid").innerHTML =`${cash}`;
    document.getElementById("splittedPaid").innerHTML =`${paidSplitted}`;
    document.getElementById("totalChange").innerHTML =`${change.change}`;
    document.getElementById("status").innerHTML =`${statusIndicator}`;
}

function generateError(cash,price){
    document.getElementById("error_modal").classList.add("d-block");
    document.getElementById("paid_error").innerHTML =`${cash}$`;
    document.getElementById("price_error").innerHTML =`${price}$`;
}

function hideModal(){
document.getElementById("transaction_modal").classList.remove("d-block");
document.getElementById("error_modal").classList.remove("d-block");
document.getElementById("insuffFunds_modal").classList.remove("d-block");
document.getElementById("noFill_modal").classList.remove("d-block");
document.getElementById("noNumberType_modal").classList.remove("d-block");

}

function generateErrorInsuffFunds(){
document.getElementById("insuffFunds_modal").classList.add("d-block");
document.getElementById("currentDateInvalid").innerHTML = Date().toString();
}

function generateErrorNoPriceFilled(){
document.getElementById("noFill_modal").classList.add("d-block");
document.getElementById("currentDateInvalid").innerHTML = Date().toString();
}

function generatePriceNotNumber(){
document.getElementById("noNumberType_modal").classList.add("d-block");
}
