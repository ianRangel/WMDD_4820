let books = [
  {author: 'Thomas Pynchon', title: 'Bleeding Edge'},
  {author: 'Haruki Murakami', title: '1Q84'},
  {author: 'John D MacDonald', title: 'Nightmare in Pink'},
  {author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6'}
]

let n = books.length // Pega o tamanho do array

function authSearch () {
  let aName = document.getElementById('authorSearch').value
  let name = books.filter((x) => x.author === aName)
  try {
    document.getElementById('result').innerHTML = 'yes we have at least one book by ' + name[0].author
  }
  catch (err) {
    document.getElementById('result').innerHTML = 'sorry no books by ' + aName
  }
}

function addBook(book) {    
  let book1 = document.getElementById('addBook').value
  let title = document.getElementById('addTitle').value //pega o nome digitado pelo usuario
  let newBook = {author: book1, title: title} // Cria um novo book
  books.push(newBook) // add o novo book ao array de books (la de cima)
  let listItem = document.createElement('li')  // cria a linha
  let textnode = document.createTextNode('The new book is ' + books[n].title) // Cria o texto com o nome do novo book
  n = n + 1 // contador para ir acrescentando books
  listItem.appendChild(textnode)
  document.getElementById('result2').appendChild(listItem)
}

function showAllBooks () {
  let listItem = document.createElement('li')
  let textnode = document.createTextNode('a book')
  listItem.appendChild(textnode)
  document.getElementById('allTheBooks').appendChild(listItem)
}