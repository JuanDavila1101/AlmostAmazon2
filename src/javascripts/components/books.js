const showBooks = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Book</button>';

  document.querySelector('#store').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `<div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
        <hr>
        <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-book-btn--${item.firebaseKey}">Edit Book</button>
        <button class="btn btn-danger" id="delete-book--${item.firebaseKey}">Delete Book</button>
        </div>
      </div>`;
  });
};

const emptyBooks = () => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Book</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#store').innerHTML = '<h1 class="text-white">No Items</h1>';
};

export { showBooks, emptyBooks };
