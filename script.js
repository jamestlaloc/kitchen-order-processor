let orders = ["Burger", "Fries", "Coke"]

function processOrders(orders) {
  let formattedOrders = [];

  for(let i = 0; i < orders.length; i++){
    let formattedString = `Order ${i + 1}: ${orders[i]}`;

    if(orders[i] === "Coke") {
      formattedString = `Order ${i + 1}: ${orders[i]} (Out of Stock)`;
      
    };
    formattedOrders.push(formattedString);
  };

  return formattedOrders;
}

const result = processOrders(orders);
console.log(result);