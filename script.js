let orders = [{table: 1, item: "Burger", priority: false}, {table: 2, item: "Fries", priority: true}, {table: 3, item: "Coke", priority: false}];

function processOrders(orderList) {
  return orderList.map(function (order){
    const status = order.priority ? "priority" : "normal";

    return processedOrder = {
      table: order.table,
      item: order.item,
      status
  };
  });
}

let result = processOrders(orders);

console.log(result);



















