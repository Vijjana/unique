let book1 = {
  title : "javaScript Essentials",
  author : "honey",
  yearPublished : 2021,
  genres : ["programming","technology"],
  copiesAvailable : 67,
}
let book2 = {
  title : "DBMS",
  author : "siraj",
  yearPublished : 2011,
  genres : ["DataBase","technology"],
  copiesAvailable : 57,
}
let book3 = {
  title : "API",
  author : "Sudhishna",
  yearPublished : 2021,
  genres : ["Fetch","Asynch"],
  copiesAvailable : 47,
}
let book4 = {
  title : "java",
  author : "Mallikarjun",
  yearPublished : 2001,
  genres : ["programming","technology"],
  copiesAvailable : 27,
}
let book5 = {
  title : "css",
  author : "Deepthi",
  yearPublished : 2022,
  genres : ["styling","technology"],
  copiesAvailable : 64,
}
let library = [book1,book2,book3,book4,book5];

function addNewBook()
{
  let book6 = {
     title : "html",
      author : "Shirreshs",
      yearPublished : 2012,
      genres : ["structure","technology"],
      copiesAvailable : 46,
    };
  library.push(book6);

  }
addNewBook();
// console.log(library);

function findBooksByGenre(genre)
{
 return  library.filter(function(item)
                 {
                   return item.genres.includes(genre);
                 })
}

let ouput = findBooksByGenre("styling");
// console.log(ouput);

function updateCopies(Title,newCopies)
{
  for(let i = 0;i<=library.length-1;i++)
    {
      if(library[i].title  === Title)
      {
        
       library[i].copiesAvailable = newCopies;
        return "the number of books for the " +Title+ "jas been updated to "+newCopies;
      }
        }
      return "title"+" "+title+ "was not found";
      }
    

let op = updateCopies("html",67);
console.log(op);
console.log(library);


