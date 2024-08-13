let product1 = {
  productId : 4353454654,
  name : "denim",
  price : 2435,
  quantity : 76,
}
let product2 = {
  productId : 43564554654,
  name : "kargo",
  price : 4254,
  quantity : 46,
}
let product3 = {
  productId : 43463454654,
  name : "kargo pro",
  price : 2455,
  quantity : 73,
}
let product4 = {
  productId : 4356543654,
  name : "jogger",
  price : 4435,
  quantity : 96,
}
let product5 = {
  productId : 4334524654,
  name : "denim double pocket shirts",
  price : 2535,
  quantity : 723,
}
let order1 = 
  {
    orderId : 78796,
    customerName :"dolly",
    products: [product1,product2,product3,product4,product5],
    status : "delivered",
  };
let order2 = 
  {
    orderId : 78750,
    customerName :"Sweety",
    products: [product1,product2,product3,product4,product5],
    status : "pending",
  };
let order3 = 
  {
    orderId : 78720,
    customerName :"akki",
    products: [product1,product2,product3,product4,product5],
    status : "shipped",
  };
let order4 = 
  {
    orderId : 78740,
    customerName :"Sudhishna",
    products: [product1,product2,product3,product4,product5],
    status : "shipped",
  };
let order5 = 
  {
    orderId : 78790,
    customerName :"Vijjana",
    products: [product1,product2,product3,product4,product5],
    status : "shipped",
  };
let orders = [order1,order2,order3,order4,order5];
function addProduct()
{
  let product6 = {
    productId : 4335768654,
    name : "denim shirts",
    price : 2595,
    quantity : 763,
  };
  // order.products.push(product6);
  for(let i = 0;i<=orders.length-1;i++)
    {
      orders[i].products.push(product6);
    }
console.log(orders);
}
addProduct();

function updateOrderStatus(orderId,newStatus)
{
  for(let i =0;i<=orders.length-1;i++)
    {
      if(orders[i].orderId === orderId)
      {
        orders[i].status = newStatus;
        return true;
          }
           else
          {
         return false;
          }
      }
  
    }

updateOrderStatus(78790,"delivered");

let totalValue = 0;
function totalOrderValue()
{
  totalValue = 0;
 for(let i = 0;i<=orders.length-1;i++)
   {
     orderValue = 0;
     for(let j = 0;j<=orders[i].products.length-1;j++)
       {
         orderValue = orders[i].products[j].price * orders[i].products[j].quantity;
       }
     totalValue += orderValue;
   }
  console.log(totalValue);
}
totalOrderValue();

function ordersByStatus(status)
{
  return orders.filter(function(item){
    return item.status === status;
  })
}
let st = ordersByStatus("pending");
console.log(st);


