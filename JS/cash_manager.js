/**
*** checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

==== THE JSON
[["ONE HUNDRED",100],["TWENTY",60],["TEN",20],["FIVE",55],["ONE",90],["QUARTER",4.25],["DIME",3.1],["NICKEL",2.05],["PENNY",1.01]]
**/

let arrayOfValues = [];
let totalCashArr = [["ONE HUNDRED"],["TWENTY"],["TEN"],["FIVE"],["ONE"],["QUARTER"],["DIME"],["NICKEL"],["PENNY"]];
let cashTotal = 0;
let initialValue = 0;

var startDate = Date().toString();
document.getElementById("date_cid").innerHTML = `${startDate}`;


function fillTheCash(){

    let ONE_HUNDRED =  document.getElementById("OneHundred").value;
    totalCashArr[0].push(Number(ONE_HUNDRED));
    arrayOfValues.push(Number(ONE_HUNDRED));

    let TWENTY =  document.getElementById("twenty").value;
    totalCashArr[1].push(Number(TWENTY));
    arrayOfValues.push(Number(TWENTY));

    let TEN =  document.getElementById("ten").value;
    totalCashArr[2].push(Number(TEN));
    arrayOfValues.push(Number(TEN));

    let FIVE =  document.getElementById("five").value;
    totalCashArr[3].push(Number(FIVE));
    arrayOfValues.push(Number(FIVE));

    let ONE =  document.getElementById("one").value;
    totalCashArr[4].push(Number(ONE));
    arrayOfValues.push(Number(ONE));

    let QUARTER =  document.getElementById("quarter").value;
    totalCashArr[5].push(Number(QUARTER));
    arrayOfValues.push(Number(QUARTER));

    let DIME =  document.getElementById("dime").value;
    totalCashArr[6].push(Number(DIME));
    arrayOfValues.push(Number(DIME));

    let NICKEL =  document.getElementById("nickel").value;
    totalCashArr[7].push(Number(NICKEL));
    arrayOfValues.push(Number(NICKEL));

    let PENNY =  document.getElementById("penny").value;
    totalCashArr[8].push(Number(PENNY));
    arrayOfValues.push(Number(PENNY));

    generateJSON(totalCashArr);
}

function generateJSON(totalCashArr){

    /**
     * TO DO
     * CLEAN THE ARRAY BEFORE EXPORT VIA JSON
     */
    let cleanedArray = [];
    totalCashArr.forEach(element => {
       if (element.length !=2){
        let subArray = []
        subArray.push(element[0]);
        subArray.push(element[element.length-1]);
        cleanedArray.push(subArray);
       }
       else{
        cleanedArray.push(element);
       }
    });
    console.log(cleanedArray);
    let cleanedArrayNum = []
    cleanedArray.forEach(element => {
        cleanedArrayNum.push(element[1]);
    });


    cashTotal = Number(cleanedArrayNum.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue));

    const myObjectString = JSON.stringify(cleanedArray);
    const cashTot = JSON.stringify(cashTotal);
    const dateInitial = JSON.stringify(startDate);
    localStorage.setItem('arrayOfCash', myObjectString);
    localStorage.setItem('totalAval', cashTot);
    localStorage.setItem('Date', dateInitial);
    console.log(myObjectString);
    console.log(cashTot);
    console.log(startDate);
}



function resetFields(){
    document.getElementById("OneHundred").value = "";
    document.getElementById("twenty").value = "";
    document.getElementById("ten").value = "";
}

// The function that validates the contact form named cf (name="cf")
function validateForm() {

        // 100$ zone START
        // Assign to a variable tthe input of the field
        let hundredDollarsInput = document.forms["cf"]["100$"].value;

        if(hundredDollarsInput < 100 && hundredDollarsInput != 0){
            alert("Please insert in 100$ field a number greater than 100");
            document.getElementById("OneHundred").style.border = "2px solid red";
            return false;
        }
        else if(hundredDollarsInput%100 != 0){
            alert("Please insert in 100$ field a number multiple of 100");
            document.getElementById("OneHundred").style.border = "2px solid red";
            return false;
        }
        else{
            document.getElementById("OneHundred").style.border = "2px solid green";
        }
        // 100$ zone END

        // 20$ zone START
        // Assign to a variable tthe input of the field
        let twentyDollarsInput = document.forms["cf"]["20$"].value;

        if(twentyDollarsInput < 20 && twentyDollarsInput != 0){
            alert("Please insert in 20$ field a number greater than 20");
            document.getElementById("twenty").style.border = "2px solid red";
            return false;
        }
        else if(twentyDollarsInput%20 != 0){
            alert("Please insert in 20$ field a number multiple of 20");
            document.getElementById("twenty").style.border = "2px solid red";
            return false;
        }
        else{
            document.getElementById("twenty").style.border = "2px solid green";
        }
        // 20$ zone END

        // 10$ zone START
        // Assign to a variable tthe input of the field
        let tenDollarsInput = document.forms["cf"]["10$"].value;

        if(tenDollarsInput < 10 && tenDollarsInput != 0){
            alert("Please insert in 10$ field a number greater than 10");
            document.getElementById("ten").style.border = "2px solid red";
            return false;
        }
        else if(tenDollarsInput%10 != 0){
            alert("Please insert in 10$ field a number multiple of 10");
            document.getElementById("ten").style.border = "2px solid red";
            return false;
        }
        else{
            document.getElementById("ten").style.border = "2px solid green";
        }
        // 10$ zone END
        // 5$ zone START
        // Assign to a variable tthe input of the field
        let fiveDollarsInput = document.forms["cf"]["5$"].value;

        if(fiveDollarsInput < 5 && fiveDollarsInput != 0){
            alert("Please insert in 5$ field a number greater than 10");
            document.getElementById("five").style.border = "2px solid red";
            return false;
        }
        else if(fiveDollarsInput%5 != 0){
            alert("Please insert in 5$ field a number multiple of 5");
            document.getElementById("five").style.border = "2px solid red";
            return false;
        }
        else{
            document.getElementById("five").style.border = "2px solid green";
        }
        // 5$ zone END
                // 1$ zone START
        // Assign to a variable tthe input of the field
        let oneDollarInput = document.forms["cf"]["1$"].value;

        if(oneDollarInput < 1 && oneDollarInput != 0){
            alert("Please insert in 1$ field without decimals");
            document.getElementById("one").style.border = "2px solid red";
            return false;
        }
        else if(oneDollarInput%1 != 0){
            alert("Please insert in 1$ field without decimals");
            document.getElementById("one").style.border = "2px solid red";
            return false;
        }
        else{
            document.getElementById("one").style.border = "2px solid green";
        }
        // 1$ zone END


  }


