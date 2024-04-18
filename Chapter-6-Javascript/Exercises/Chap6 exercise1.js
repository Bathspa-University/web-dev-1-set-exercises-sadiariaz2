// Get DOM elements
const costPerLiterInput = document.getElementById('costPerLiter');
const litersPurchasedInput = document.getElementById('litersPurchased');
const calculateButton = document.getElementById('calculateButton');
const totalCostDisplay = document.getElementById('totalCost');

// Function to calculate total cost
function calculateTotalCost() {
    const costPerLiter = parseFloat(costPerLiterInput.value);
    const litersPurchased = parseFloat(litersPurchasedInput.value);

    // Calculate total cost
    const totalCost = costPerLiter * litersPurchased;

    // Display total cost
    totalCostDisplay.textContent =`Total Cost: $${totalCost.toFixed(2)}`;
}
// Event listener for calculate button
calculateButton.addEventListener('click', calculateTotalCost);