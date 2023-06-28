const transactionBtn = document.getElementById("create-transaction");
const transactionType = document.getElementById("transaction-type");

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
