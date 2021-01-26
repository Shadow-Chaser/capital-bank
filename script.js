// Login Button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){

    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// Deposit Button event handler
const depositBtn = document.getElementById("add-deposit");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("deposit-amount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("current-deposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    
    document.getElementById("current-deposit").innerText = totalDeposit;
    document.getElementById("deposit-amount").value = "";

})
