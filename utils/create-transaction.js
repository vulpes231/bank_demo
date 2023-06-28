export function createTransaction() {
  const tableBody = document.getElementById("tbody");
  const currentBal = document.getElementById("current-balance");
  const amount = document.getElementById("amount");
  const transactionType = document.getElementById("transaction-type");

  let balanceAmount = parseFloat(currentBal.textContent);
  let newTransaction = parseFloat(amount.value);
  let transType = transactionType.value;

  let newRow = document.createElement("tr");
  let tableData1 = document.createElement("td");
  tableData1.classList.add("des");
  tableData1.textContent = console.log(new Date().getUTCDate());

  let tableData2 = document.createElement("td");
  tableData2.classList.add("des");
  if (transType === "credit") {
    tableData2.textContent = "Deposit";
  } else {
    tableData2.textContent = "Withdrawal";
  }

  let tableData3 = document.createElement("td");
  tableData3.classList.add("des");
  if (transType === "credit") {
    tableData3.style.color = "green";
    tableData3.textContent = parseFloat(newTransaction).toFixed(2);
  } else {
    tableData3.style.color = "red";
    tableData3.textContent = parseFloat(newTransaction).toFixed(2);
  }

  let tableData4 = document.createElement("td");
  tableData4.classList.add("des");
  let setbalance = parseFloat(balanceAmount).toFixed(2);

  tableData4.textContent = setbalance;

  newRow.appendChild(tableData1);
  newRow.appendChild(tableData2);
  newRow.appendChild(tableData3);
  newRow.appendChild(tableData4);
  tableBody.appendChild(newRow);
}
