
  let product1 = {
  name : "Denim",
  price : 867,
  category : "kargo",
  }
let product2 = {
  name : "nylon",
  price : 877,
  category : "SHIRTS",
  }
let product3 = {
  name : "COTTON JEANS",
  price : 767,
  category : "FORMAL",
  }
let array = [product1,product2,product3];

// for(let i =0;i<=array.length-1;i++)
//   {
//     console.log(array[i].name);
//   }
function sortByPrice()
{
 return array.sort(function(a,b)
             {
               return a.price - b.price;
             })
}

let op = sortByPrice();
console.log(op);
 for(let i =0;i<=op.length-1;i++)
   
 {  
   console.log(op[i].price);
 }

 function filterByCategory(category)
 {
   return array.filter(function(item)
                {
                  return item.category == category;
                })
   
 }
let result = filterByCategory("FORMAL");
console.log(result);