$(".cancelbtn").click((event) => {
  console.log("Cancelled!");
  window.location.replace("../index.html");
});

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


const form = $("#login-form");

let token = "";

function fetchData(url, method, token) {
  fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,
    },
  })
    .then(response => { 
      return response.json()
    })
    .then(data => { 
      console.log(data)
      // return data
    })
    .catch((error) => error);
  
}

function login() {
  const username = $("#username").val();
  const password = $("#password").val();

  if (!$("#username")[0].checkValidity()) {
    $("#username")[0].reportValidity();
    return;
  }
  if (!$("#password")[0].checkValidity()) {
    $("#password")[0].reportValidity();
    return;
  }

  fetch("http://localhost:8080/api/v1/auth/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": getAuthorizationValue(),
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      responseClone = response.clone();

      if (response.status === 200) {
        console.log("Login successful!");
      } else if (response.status === 401) {
        console.log("Login failed!");
      }

      return response.json();
    })
    .then((data) => {
      if (data.token != null) window.location.replace("dashboard.html");
      else {
        console.log(data.errorMessage);
        {
          $("#error-message").addClass("active");
          $(document).keypress((e) => {
            $("#close").click();
            $(document).unbind(e);
          });
        }
        // window.location.reload();
      }

      console.log(data);
    })
    .catch((rejectionReason) => {
      console.log(
        "Error parsing JSON from response:",
        rejectionReason,
        responseClone
      );
      responseClone.text().then((bodyText) => {
        console.log("Received the following instead of valid JSON:", bodyText);
      });
    });
}

var button = $("button:submit");
button.click(login);

$(document).keypress((e) => {
  let key;
  if (window.e) {
    key = e.charCode;
  } else key = e.which;

  if (key === 13) button.click();
});

$("#close").click((e) => {
  e.currentTarget.parentElement.classList.remove("active");
  $("#password").val("");
  $("#username").val("").focus();
});

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
            <td>${data.isbn}</td>
            <td>${data.title}</td>
            <td>${data.author}</td>
            <td>Rosamunde Piilcher</td>
            <td>Novel</td>
            <td>3</td>

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

// form.onsubmit = (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);

//   const data = Object.fromEntries(formData);
//   const jsonData = JSON.stringify(data);

//   console.log(jsonData);

//   formData.append("loginData", jsonData);

//   return false;
// };

// fetch("http://localhost:8080/api/v1/authors")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fetch("http://localhost:8080/api/v1/auth/authenticate", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ username: "admin", password: "secret" }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.token);
//   })
//   .catch((error) => console.log(error));

// fetch("http://localhost:8080/api/v1/books", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5MjE0ODQzNCwiZXhwIjoxNjkyMTQ5ODc0fQ.-ZB-imN519SaLpzHPYexSF9Yao925k-bGiBNaj_7kG4",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

function getAuthorizationValue() {
  // const token = getCookie("");
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5MjE5MDk5MiwiZXhwIjoxNjkyMTkyNDMyfQ.etk9_14HrJso9EGwCSWFNKpBsKJpIPviuyWU7ToS4HM'
  if (token == null) return null;
  return "Bearer " + token;
}

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function checkCookie() {
//   let user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//       setCookie("username", user, 365);
//     }
//   }
// }
