import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
// TODO: Update this to only get the current logged in user's books
const getBooks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// DELETE BOOK
const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/books/${firebaseKey}.json`)
    .then(() => getBooks().then((booksArray) => resolve(booksArray)))
    .catch((error) => reject(error));
});

const getSaleBooks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="sale"&equalTo=true`)
    .then((response) => {
      const saleBooksArray = Object.values(response.data);
      resolve(saleBooksArray);
    }).catch((error) => reject(error));
});

// CREATE BOOK
const createBook = (bookObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/books.json`, bookObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/books/${response.data.name}.json`, body)
        .then(() => {
          getBooks().then((booksArray) => resolve(booksArray));
        });
    }).catch((error) => reject(error));
});

// UPDATE BOOK
// SEARCH BOOKS

export {
  getBooks, createBook, deleteBook, getSaleBooks
};
