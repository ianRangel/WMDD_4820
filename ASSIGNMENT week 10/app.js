let books = [
  {author: 'Thomas Pynchon', title: 'Bleeding Edge'},
  {author: 'Haruki Murakami', title: '1Q84'},
  {author: 'John D MacDonald', title: 'Nightmare in Pink'},
  {author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6'}
]

let n = books.length // Pega o tamanho do array

function authSearch () {
  let aName = document.getElementById('authorSearch').value
  //let name = books.filter((x) => x.author === aName)  
  //let name = books.filter((x) => x.toUpperCase().indexOf(aName.toUpperCase()) != -1)
  let booksSearch = books.filter((x) => x.author.toUpperCase().indexOf(aName.toUpperCase()) != -1);
  try {    
    document.getElementById('result').innerHTML = 'We have:'
    for (var i = 0; i < booksSearch.length; i++)
    {
        //document.getElementById('result').innerHTML = 'yes we have at least one book by ' + booksSearch[0].author
        //document.getElementById('result').innerHTML = 'Book : ' + booksSearch[i].title + ' by ' + booksSearch[i].author   
         let listItem = document.createElement('li')
         let textnode = document.createTextNode('Book : ' + booksSearch[i].title + '  - by ' + booksSearch[i].author)
         listItem.appendChild(textnode)
         document.getElementById('result').appendChild(listItem)   
    }   
  }
  catch (err) {
    document.getElementById('result').innerHTML = 'sorry no books by ' + aName
  }
}

function addBook(book) {    
  let author = document.getElementById('addAuthor').value //pega o nome digitado pelo usuario 
  let book1 = document.getElementById('addBook').value //pega o nome digitado pelo usuario
  let newBook = {author: author, title: book1} // Cria um novo book
  books.push(newBook) // add o novo book ao array de books (la de cima)
  let listItem = document.createElement('li')  // cria a linha
  let textnode = document.createTextNode('The new book is ' + books[n].title + ' by ' + books[n].author) // Cria o texto com o nome do novo book
  n = n + 1 // contador para ir acrescentando books
  listItem.appendChild(textnode)
  document.getElementById('result2').appendChild(listItem)
  
  document.getElementById('addAuthor').value = ""
  document.getElementById('addBook').value = ""
}

function showAllBooks () {
  let listItem = document.createElement('li')
  let textnode = document.createTextNode('a book')
  listItem.appendChild(textnode)
  document.getElementById('allTheBooks').appendChild(listItem)
}

//function showAllBooksByAuthor (value, index, ar) {
//  //document.getElementById('result').innerHTML = value.author   
//  document.write("value: " + value)
//}