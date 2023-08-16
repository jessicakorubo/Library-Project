function fetchData(url, method, body, token) {
  fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
}
