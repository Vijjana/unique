let name = "sweety";
nameArray = name.toString().split('');
console.log(nameArray);
let object = {};
for(let i = 0;i<=nameArray.length-1;i++)
  {
    if(object[nameArray[i]] === undefined)
    {
      object[nameArray[i]] = 1;
    }
    else
    {
      object[nameArray[i]]++;
    }
  }
console.log(object);
let total = 0;
for(let key in object)
  {
    if(object[key] == 1)
    {
      total = total + object[key];
      console.log(key);
    }
  }
console.log(total);

