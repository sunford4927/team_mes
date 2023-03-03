// 계획데이터와 고객데이터를 통해 고객명을 가져옴
export function Make_Table(plans, orders, customers, items) {
    for (var i = 0; i < plans.length; i++) {
      for (var j = 0; j < orders.length; j++) {
        if (plans[i]["order_code"] == orders[j]["order_code"]) {
          plans[i]["customer_code"] = orders[j]["customer_code"];
        }
        for (var k = 0; k < customers.length; k++) {
          if (plans[i]["customer_code"] == customers[k]["customer_code"]) {
            plans[i]["customer_name"] = customers[k]["customer_name"];
          }
        }
      }
      // console.log(plans[i]["item_code"])
    }
    for (var u = 0; u < plans.length; u++) {
      for (var y = 0; y < items.length; y++) {
        if (plans[u]["item_code"] == items[y]["item_code"]) {
          plans[u]["item_name"] = items[y]["item_name"];
        }
      }
    }
    // console.log(plans)
  }

export function Make_ID(dummyData) {
for (var i = 0; i < dummyData.length; i++) {
    dummyData[i]["id"] = i + 1;
}
return dummyData;
}
