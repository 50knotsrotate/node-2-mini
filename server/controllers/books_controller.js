var id = 1;

const books = [
    {
        id,
        title: 'Never gonna give you up',
        author: 'Rick Astley'
    }
]


module.exports = {
    read: (req, res) => { 
        res.status(200).send(books)
    }, 
    add: (req, res) => { 
        id++
        const { title, author } = req.body
        let newBook = {
            title,
            author,
            id
        }
        books.push(newBook)
        res.status(200).send(books)
    },
     update: (req, res) => {
         let index = null;
         books.forEach((book, i) => {
             if (book.id === parseInt(req.params.id)) index = i;
         });
         if (index != null) {
             books[index] = {
                 id: books[index].id,
                 title: req.body.title || books[index].title,
                 author: req.body.author || books[index].author
             };
             res.status(200).send(books);
         } else { 
             res.status(400).send('That is not a valud thinihfsd')
         }
    },
    delete: (req, res) => {
        let index = null;

        books.forEach((book, i) => { 
            if (book.id == req.params.id) index = i
        })
        if (index != null) { //!index will not work here because 0 is a valid index in the books array
            books.splice(index, 1)
            res.status(200).send(books)
        } else { 
            res.status(404).send('<h1>That book was not found</h1>')
        }
     }
}