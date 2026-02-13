let orders = [{table: 1, item: "Burger", priority: false}, {table: 2, item: "Fries", priority: true}, {table: 3, item: "Coke", priority: false}];

function processOrders(orders) {
  const processedOrders = [];

  for(let i = 0; i < orders.length; i++){
    const order = orders[i];

    const status = order.priority ? "priority" : "normal";

    const processedOrder = {
      table: order.table,
      item: order.item,
      status: status
    };

    processedOrders.push(processedOrder);
  }
  return processedOrders;
}

let result = processOrders(orders);

console.log(result);



















