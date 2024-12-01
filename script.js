// Update total based on selection
function updateTotal(value) {
  const totalElement = document.getElementById("total");
  totalElement.textContent = `$ ${value.toFixed(2)} USD`;
}

function addToCart() {
  const selectedOption = document.querySelector('input[name="offer"]:checked');
  if (selectedOption) {
    alert(`Added ${selectedOption.id} to cart with a total of $${selectedOption.value} USD.`);
  } else {
    alert("Please select an option before adding to the cart.");
  }
}
