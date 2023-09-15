let transactionFromJSON = localStorage.getItem('transactionFromACC');
let transactionParsed = JSON.parse(transactionFromJSON);

console.log(transactionParsed);

let initialCIDFromJSON = localStorage.getItem('startingCID');
let initialCIDParsed = JSON.parse(initialCIDFromJSON);
console.log(initialCIDParsed);

let empty_start = [];
initialCIDParsed.forEach(element => {
let toPut_start = element[1];
empty_start.push(toPut_start);
});

// Set the variable for the total available in drawer
var tot_initial = 0;

// Set the initail value 0 to the counter for the reduce loop below
// To generate tot_initial, which is the amount available
let startValueForReduce = 0;
tot_initial = Number(empty_start.reduce((accumulator, currentValue) => accumulator + currentValue, startValueForReduce));

console.log(tot_initial)

function fillTheTXReport (){
       transactionParsed.forEach(function callback(value, index) {
        let newIndex = index +1;
        document.getElementById("loop_TX_container").innerHTML += `
        <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Transaction N.<span id="tx_ID">${newIndex}</span></h4>
          </div>
          <div class="card-body">
          <p class="card-title pricing-card-title border-bottom pb-2" id="tx_date">${value.date}</p>
          <p class="card-title pricing-card-title border-bottom pb-2">Price: <span id="price_tx">${value.price}</span></p>
          <p class="card-title pricing-card-title border-bottom pb-2">Paid: <span id="paid_tx">${value.cash}</span></p>
          <p class="card-title pricing-card-title border-bottom pb-2">$Paid per Unit:<br><span id="split_tx">${value.paidSplitted}</span></p>
          <p class="card-title pricing-card-title border-bottom pb-2">$Gave Back per Unit:<br><span id="split_tx">${value.change.change}</span></p>
          </div>
        </div>
      </div>
        `;


    });

}

let lastCID = transactionParsed[transactionParsed.length-1].cid;
console.log(lastCID)
let empty_end = [];
lastCID.forEach(element => {
let toPut_end = element[1];
empty_end.push(toPut_end);
});

// Set the variable for the total available in drawer
var tot_final = 0;

// Set the initail value 0 to the counter for the reduce loop below
// To generate tot_final, which is the amount available
let startValueForReduceEnd = 0;
tot_final = Number(empty_end.reduce((accumulator, currentValue) => accumulator + currentValue, startValueForReduceEnd));
let trimmed_total = tot_final.toFixed(2);
function fillTheTable(txDetail){
let now = new Date();
document.getElementById('date').innerHTML = `${now}`;
document.getElementById('initial_amount').innerHTML = `${tot_initial}`;
document.getElementById('final_amount').innerHTML = `${trimmed_total}`;
document.getElementById('tx_number').innerHTML = `${txDetail.length}`;
}

fillTheTXReport(transactionParsed);
fillTheTable(transactionParsed);


