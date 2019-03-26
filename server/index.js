const express = require('express');
const app = express()
const books_controller = require('./controllers/books_controller');

app.use(express.json())
app.use(express.static(__dirname + "/../build/static"))

const PORT = 4000;

app.get('/api/books', books_controller.read)
app.post('/api/books', books_controller.add)
app.put('/api/books/:id', books_controller.update)
app.delete('/api/books/:id', books_controller.delete)

app.listen(PORT, () => { 
    console.log(`Now listening on port ${PORT}`)
})