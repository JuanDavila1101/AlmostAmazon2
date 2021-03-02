import selectAuthor from './selectAuthor';

const editBookForm = (bookObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-book-form" class="mb-4">
      <div class="form-group">
        <label for="title">Book Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Book Title" value="${bookObject.title}" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required value="${bookObject.image}">
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price" placeholder="Book Price" value="${bookObject.price}" required>
      </div>
      <div class="form-group" id="select-author">
      </div>
      <div class="form-check mb-2">
        <input type="checkbox" class="form-check-input" id="sale" ${bookObject.sale && 'checked'}>
        <label class="form-check-label" for="sale">On Sale?</label>
      </div>
      <button type="submit" id="update-book--${bookObject.firebaseKey}" class="btn btn-success">Update Book</button>
    </form>`;

  selectAuthor(bookObject.author_id);
};

export default editBookForm;
