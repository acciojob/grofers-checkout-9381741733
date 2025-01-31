// Select the price elements and calculate the total
function calculateTotalPrice() {
  const priceElements = document.querySelectorAll(".prices");
  let totalPrice = 0;

  priceElements.forEach(priceElement => {
    totalPrice += parseFloat(priceElement.textContent);
  });

  return totalPrice.toFixed(2);
}

// Add the total row to the table
function addTotalRow() {
  const table = document.getElementById("grocery-table");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: $${calculateTotalPrice()}`;
  totalCell.style.textAlign = "center";
  totalCell.style.fontWeight = "bold";

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
}

// Initialize the total calculation
addTotalRow();
