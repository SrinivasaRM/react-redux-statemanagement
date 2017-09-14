const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

//const { data } = require('./data');
let { data } = require('./data');

/** Get books API **/
/**
app.get('/api/books', (req, res) => {
  res.send(data.books);
});**/

/** Get authors API **/
/**
app.get('/api/authors', (req, res) => {
  res.send(data.authors);
});
**/

/** Improving DATA api calls in one round trip from node server**/
app.get('/api/books', (req, res) => {
  res.send(data.books.map(book => {
    return Object.assign({}, book, {
      authors:getBookAuthors(book)
    })
  }));
});

/** Delete Book API Call **/
app.delete('api/books/:bookId', (req, res) => {
  data.books = data.books.filter(book =>
  book.id !== req.params.bookId);

  res.send({delete: true});
});

const getBookAuthors = book => {
  // book.authorId or book.authorIds
  const authorIds = book.authorId ? [book.authorId] : book.authorIds;
/** Returning the above array in below. **/
  return authorIds.map(authorId => data.authors[authorId]);
}

/** Listen server port **/
app.listen(8000, () => {
  console.log('API server is at port 8000');
})
