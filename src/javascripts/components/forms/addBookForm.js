import selectAuthor from './selectAuthor';

const addBookForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-book-form" class="mb-4">
      <div class="form-group">
        <label for="title">Book Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Book Title" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price" placeholder="Book Price" required>
      </div>
      <div class="form-group" id="select-author">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="sale">
        <label class="form-check-label" for="sale">On Sale?</label>
      </div>
      <button type="submit" id="submit-book" class="btn btn-primary">Submit Book</button>
    </form>`;

  selectAuthor();
};

export default addBookForm;
