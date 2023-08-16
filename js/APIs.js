function fetchData(url, method, token) {
  fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,
    },
    // body,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => { 
      console.log(data);
      // return data
    })
    .catch((error) => error);
}

function viewBooks() {
  fetch('http://localhost:8080/api/v1/books', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": getAuthorizationValue(),
      }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
    data.forEach(data => {
      var bodyOfBooksTable = document.getElementById('view-books-table-body');
      bodyOfBooksTable.innerHTML = 
        ` <tr>
            <td>${data.title}</td>
            <td>${data.isbn}</td>
            <td>${data.author}</td>
            <td>${data.totalCopies}</td>
            <td>${data.availableCopies}</td>
            <td>
              <button type="button" class="details">DETAILS</button>
            </td>
            <td>
              <div class="button-div">
                <button type="button" class="delete">DELETE</button>
                <div class="popup">
                  <div class="qtn">
                    Are you sure you want to delete this book?
                  </div>
                  <div class="delete-options">
                    <a class="cancel" href="">Cancel</a>
                    <a class="delete" href="#">Delete</a>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        `
    });
    })
    .catch((error) => error);
}

var viewBook = $('.view-book-button');
viewBook.click(
  viewBooks()
);



function getAuthorizationValue() {
  // const token = getCookie("");
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5MjE5MDk5MiwiZXhwIjoxNjkyMTkyNDMyfQ.etk9_14HrJso9EGwCSWFNKpBsKJpIPviuyWU7ToS4HM'
  if (token == null) return null;
  return "Bearer " + token;
}
