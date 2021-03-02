const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
        <a class="navbar-brand title" href="#">Almost Amazon</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-books">
                All Books <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="sale-books">Books on Sale</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="authors">Authors</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="favorite-authors">Favorite Authors</a>
            </li>
            <li>
            <input
              class="form-control mr-sm-2 ml-3"
              id="search"
              placeholder="Search Book Titles"
              aria-label="Search"
            />
            </li>
          </ul>
          <div id="cart-button"></div>
          <div id="logout-button"></div>
        </div>
      </nav>
    `;
};

export default navBar;
