let books = 
[
  {idBook: '1', author: 'Thomas Pynchon', title: 'Bleeding Edge', genre: 'fiction', copies: 2},
  {idBook: '2', author: 'Haruki Murakami', title: '1Q84', genre: 'fiction', copies: 2},
  {idBook: '3', author: 'John D MacDonald', title: 'Nightmare in Pink', genre: 'mystery', copies: 1},
  {idBook: '4', author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6', genre: 'javascript', copies: 1},
  {idBook: '5', author: 'Thomas Phillips', title: 'Long Slow Distance', genre: 'fiction', copies: 1}
]

let users = 
[
  {idUser: '1', name: 'Ian Rangel'},  
  {idUser: '2', name: 'McLovin'}  
]

let usersBooks = 
[
  {idBook: '1', idUser: 1, dueDate: '15/12/2016'}
]

let b = books.length // Pega o tamanho do array
let u = users.length // Pega o tamanho do array
let ub = usersBooks.length

//Combobox (book)
let cbo = document.getElementById('cboBook');
for (var i = 0; i < books.length; i++)
{   
    var element = document.createElement("option");
    element.value = books[i].idBook;
    element.text = books[i].title; 
    cbo.appendChild(element);
}

//Combobox (user)
let cboUser = document.getElementById('cboUser');
for (var z = 0; z < users.length; z++)
{   
    var elementUser = document.createElement("option");
    elementUser.value = users[z].idUser;
    elementUser.text = users[z].name; 
    cboUser.appendChild(elementUser);
}

function authSearch () 
{
    let aName = document.getElementById('authorSearch').value
    let booksSearch = books.filter((x) => x.author.toUpperCase().indexOf(aName.toUpperCase()) !== -1);  
    try 
    {        
        for (var i = 0; i < booksSearch.length; i++)
        {
            let listItem = document.createElement('li')
            let textnode = document.createTextNode('Book : ' + booksSearch[i].title + ' - Genre: ' + booksSearch[i].genre + ' - By ' + booksSearch[i].author)
            listItem.appendChild(textnode)
            document.getElementById('result').appendChild(listItem)   
        }   
    }
    catch (err) 
    {
        document.getElementById('result').innerHTML = 'sorry no books by ' + aName
    }
}

function bookGenreSearch () 
{
    let aGenre = document.getElementById('bookGenreSearch').value
    let booksSearch = books.filter((x) => x.genre.toUpperCase().indexOf(aGenre.toUpperCase()) !== -1);
    try 
    {        
        for (var i = 0; i < booksSearch.length; i++)
        {
            let listItem = document.createElement('li')
            let textnode = document.createTextNode('Book : ' + booksSearch[i].title + ' - Genre: ' + booksSearch[i].genre + ' - By ' + booksSearch[i].author)
            listItem.appendChild(textnode)
            document.getElementById('result3').appendChild(listItem)   
        }   
    }
    catch (err) 
    {
        document.getElementById('result3').innerHTML = 'sorry no books by ' + aTitle
    }
}

function addBook(book) 
{    
    let addAuthor = document.getElementById('addAuthor').value //pega o autor digitado pelo usuario 
    let addBook = document.getElementById('addBook').value //pega o livro digitado pelo usuario
    let addGenre = document.getElementById('addGenre').value //pega o genero digitado pelo usuario
    let addCopies = document.getElementById('addCopies').value //pega o qtd copias digitado pelo usuario
 
    let newBook = {idBook: b+1, author: addAuthor, title: addBook, genre: addGenre, copies: addCopies} // Cria um novo book
    books.push(newBook) // add o novo book ao array de books (la de cima)
    let listItem = document.createElement('li')  // cria a linha
    let textnode = document.createTextNode('The new book is ' + books[b].title + ' Genre: ' + books[b].genre + ' - Copies: ' + books[b].copies + ' by ' + books[b].author) // Cria o texto com o nome do novo book    

    //Add the new book in the Combobox   
    let cbo = document.getElementById('cboBook');
    var element = document.createElement("option");
    element.value = books[b].idBook;
    element.text = books[b].title; 
    cbo.appendChild(element);

    listItem.appendChild(textnode)
    document.getElementById('result2').appendChild(listItem)
  
    //limpa os campos 
    document.getElementById('addAuthor').value = ""
    document.getElementById('addBook').value = ""
    document.getElementById('addGenre').value = ""
    document.getElementById('addCopies').value = ""
}

function showAllBooks () 
{        
    for (var i = 0; i < books.length; i++)
    { 
        let listItem = document.createElement('li')
        let textnode = document.createTextNode(books[i].title)
        listItem.appendChild(textnode)
        document.getElementById('allTheBooks').appendChild(listItem)
    }
}

function showAllUsers () 
{        
    for (var i = 0; i < users.length; i++)
    { 
        let listItem = document.createElement('li')
        let textnode = document.createTextNode(users[i].name)
        listItem.appendChild(textnode)
        document.getElementById('allTheUsers').appendChild(listItem)
    }
}

function addUser() 
{      
    let txtName = document.getElementById('txtName').value //pega o nome digitado pelo usuario
    let newUser = {idUser: u+1, name: txtName} // Cria um novo usuario
    users.push(newUser) // add o novo book ao array de usuarios (la de cima)
    let listItem = document.createElement('li')  // cria a linha
    let textnode = document.createTextNode('The new user is ' + users[u].name) // Cria o texto com o nome do novo usuario
  
    //Combobox (user) add o usuario criado no combobox
    let cboUser = document.getElementById('cboUser');
    var elementUser = document.createElement("option");
    elementUser.value = users[u].idUser;
    elementUser.text = users[u].name; 
    cboUser.appendChild(elementUser);

    listItem.appendChild(textnode)
    document.getElementById('result4').appendChild(listItem)
  
    document.getElementById('txtName').value = ""
}

function borrow() 
{    
    let aBook = document.getElementById('cboBook').value //pega o livro selecionado pelo usuario 
    let aUser = document.getElementById('cboUser').value //pega o usuario selecionado pelo usuario
    let aDate = document.getElementById('txtDate').value //pega a data digitado pelo usuario
    
    let newUserBooks = {idBook: aBook, idUser: aUser, dueDate: aDate} // Cria um novo bookUser (controla qual livro cada usuario alugou) - id do livro com o id do usuario e a data de dvolução
    usersBooks.push(newUserBooks) // add o novo book ao array de booksUsuarios (la de cima)
  
    let listItem = document.createElement('li')  
    let textnode = document.createTextNode('The new borrow book is ' + books[aBook-1].title + ' by ' + users[aUser-1].name + ' Due date: ' + aDate) 
    
    listItem.appendChild(textnode)
    document.getElementById('result5').appendChild(listItem)

    //Limpa os campos
    document.getElementById('cboBook').selectedIndex = -1;
    document.getElementById('cboUser').selectedIndex = -1;
    document.getElementById('txtDate').value = ""
  
}


