window.customElements.define(
  "dashboard-tag",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="dashboard">
            <div>
            <div class="dashboard-links">
                <div class="accordion myAcc" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                    >
                        Manage Books
                    </button>
                    </h2>

                    <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                    >
                    <div class="accordion-body">
                        <div class="accordion-body active">
                            <a href="view-books.html">View books</a>
                        </div>
                        <div class="accordion-body">
                            <a href="addBook.html">Add a book</a></div>
                        <div class="accordion-body">
                            <a href="updateBook.html">Update a book</a>
                        </div>
                        <div class="accordion-body">
                            <a href="">Delete a book</a>
                        </div>
                        <div class="accordion-body">
                            <a href="borrowed.html">Borrowed Books</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        Reports and statistics
                    </button>
                    </h2>

                    <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                    >
                    <div class="accordion-body">
                        <div class="accordion-body">
                        <a href="">All reports</a>
                        </div>
                        <div class="accordion-body">
                        <a href="">Total number of borrowed books</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="accordion-item" id="user-id">
                    <h2 class="accordion-header">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#view-users"
                        aria-expanded="true"
                        aria-controls="view-users"
                    >
                        Users
                    </button>
                    </h2>

                    <div
                    class="accordion myAcc accordion-collapse collapse"
                    id="view-users"
                    data-bs-parent="#user-id"
                    >
                    <div class="accordion-body">
                        <h2>
                        <button
                            class="accordion-button n02 collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-user-view"
                            aria-expanded="false"
                            aria-controls="collapse-user-view"
                        >
                            View Library Users
                        </button>
                        </h2>

                        <div
                        class="accordion-collapse collapse"
                        id="collapse-user-view"
                        data-bs-parent="#view-users"
                        >
                        <div class="accordion-body">
                            <div class="accordion-body">
                            <a href="view-owing-users.html">View Owing Users </a>
                            </div>
                        </div>
                        <div class="accordion-body">
                            <div class="accordion-body">
                            <a href="view-all-users.html">View all Users </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-body"><a href="add-user.html">Add a user</a></div>
                    <div class="accordion-body"><a href="">Delete a user</a></div>
                    </div>
                </div>
                <div class="link">
                    <a href="">New Element</a>
                </div>
                <div class="link">
                    <a href="">Logout</a>
                </div>
                </div>
            </div>
            </div>
        </div>
          `;
    }
  }
);
