import { createTransaction } from "./utils/create-transaction.js";

const transactionBtn = document.getElementById("create-transaction");
const transactionType = document.getElementById("transaction-type");

transactionBtn.style.display = "none";

transactionType.addEventListener("input", function () {
  // console.log("yes");
  let transType = transactionType.value;

  if (transType === "credit") {
    transactionBtn.textContent = "Deposit";
    transactionBtn.style.display = "block";
  } else if (transType === "debit") {
    transactionBtn.textContent = "Withdraw";
    transactionBtn.style.display = "block";
  } else {
    transactionBtn.style.display = "none";
  }
});

transactionBtn.addEventListener("click", function () {
  const currentBal = document.getElementById("current-balance");
  const amount = document.getElementById("amount");
  const transactionType = document.getElementById("transaction-type");

  console.log("clicked");
  let balanceAmount = parseFloat(currentBal.textContent);
  let newTransaction = parseFloat(amount.value);
  let transType = transactionType.value;
  console.log(transType);
  if (transType === "credit") {
    let newBalance = balanceAmount + newTransaction;
    currentBal.textContent = parseFloat(newBalance).toFixed(2);
    console.log("creating transaction");
    createTransaction();
  } else if (transType === "debit") {
    let newBalance = balanceAmount - newTransaction;
    currentBal.textContent = parseFloat(newBalance).toFixed(2);
    createTransaction();
  } else {
    console.log("invalid transaction data");
  }
});
