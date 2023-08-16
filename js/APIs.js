const url = "http://localhost:8080/api/v1";

function fetchData(url, method, token) {
  fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
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

const submitBook = document.getElementById('submit');


// submitBook.addEventListener('click', () => {
//   console.log('book added!');
// })



function viewBooks() {
  fetch("http://localhost:8080/api/v1/books", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAuthorizationValue(),
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayBookData(data);
      const delBtn = document.querySelectorAll("button.delete");
      deleteBookModal(delBtn, data);
    })
    .catch((error) => error);
}

function displayBookData(data) {
  var bodyOfBooksTable = document.getElementById("view-books-table-body");
  data.forEach((data) => {
    console.log(data);
    var tr = document.createElement("tr");
    tr.innerHTML = ` 
      <tr>
        <td>${data.isbn}</td>
        <td>${data.title}</td>
        <td>${data.authors[0]}</td>
        <td>${data.availableCopies}</td>
        <td>${data.totalCopies}</td>
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
              <div class="delete-options" data-id=${data.isbn}>
                <a class="cancel" href="">Cancel</a>
                <a class="delete" id="delete-book" href="">Delete</a>
              </div>
            </div>
          </div>
        </td>
      </tr>
    `;
    bodyOfBooksTable.appendChild(tr);
  });
}

function deleteBookModal(delBtn, data) {
  delBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const tar = e.currentTarget.nextElementSibling;
      tar.classList.add("active");
      setOthersInactive(delBtn, e.currentTarget);
      document.addEventListener("click", (e) => {
        var id = e.target.parentElement.children[1].dataset.id;
        console.log(id);
        let isDeleteButtonPressed = id == "delete";
        if (isDeleteButtonPressed) {
          fetch(`${url}/books/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Authorization": getAuthorizationValue()
            },
          })
            .then((response) => response.json())
            .then(() => location.reload());
        }
        // // var eventAdded = true;
        if (tar.classList.contains("active")) {
          tar.classList.remove("active");
        }
      });


      // let id = e.target.parentElement.dataset.id;
      
    });

    
  });
}

var viewBook = $(".view-book-button");
console.log(viewBook);
viewBook.click(viewBooks());

function getAuthorizationValue() {
  // const token = getCookie("");
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5MjIxMzYxOSwiZXhwIjoxNjkyMjE1MDU5fQ.SYojIdLig9fpxgjFwcn-Las_4ywlGXLkt3NKP_hcVhI";
  if (token == null) return null;
  return "Bearer " + token;
}
