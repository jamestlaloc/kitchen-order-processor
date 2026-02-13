let orders = [{table: 1, item: "Burger", priority: false}, {table: 2, item: "Fries", priority: true}, {table: 3, item: "Coke", priority: false}];

function processOrders(orders) {
  let formattedOrders = [];
  

  for(let i = 0; i < orders.length; i++){
    let order = orders[i];
    let formattedString = `Table ${order.table}: ${order.item}`;

    if(order.priority) {
      formattedString = `PRIORITY!!! - Table ${order.table}: ${order.item}`;
    }
    formattedOrders.push(formattedString);
  }
  return formattedOrders;
}

let result = processOrders(orders);

console.log(result);



















