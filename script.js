function renderBookSection() {
  getFromLocalStorage();
  let bookSectionRef = document.getElementById("book-section");
  bookSectionRef.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    bookSectionRef.innerHTML += getBookCardTemplate(i);
    for (let j = 0; j < books[i].comments.length; j++) {
      document.getElementById("comment-section" + i).innerHTML += /*html*/ `
      <b>${books[i].comments[j].name}</b>
      <p>${books[i].comments[j].comment}</p>
      `;
    }
  }
  document.getElementById("favorites_button").onclick = showFavorites;
  document.getElementById("favorites_button").textContent = "Favoriten";
}

function renderLikeHeart(i) {
  if (books[i].liked == true) {
    LikeStatus = "heartfull";
  } else {
    LikeStatus = "heartempty";
  }

  return LikeStatus;
}

function addComment(i) {
  const commentInputRef = document.getElementById("user_input" + i);
  const commentInput = commentInputRef.value;
  if (commentInput.length >= 5) {
    books[i].comments.push({ name: "Du", comment: commentInput });
    saveToLocalStorage();
    renderBookSection();
  } else {
    commentInputRef.value = "";
    commentInputRef.placeholder = "Zu wenig Zeichen!";
  }
}

function likeAddAndRemove(i) {
  if (books[i].liked == true) {
    books[i].liked = false;
    books[i].likes--;
  } else {
    books[i].liked = true;
    books[i].likes++;
  }

  saveToLocalStorage();
  renderBookSection();
}

function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
  const storageArray = JSON.parse(localStorage.getItem("books"));

  if (storageArray === null) {
    books = books;
  } else {
    books = storageArray;
  }
}

function showFavorites() {
  getFromLocalStorage();
  let bookSectionRef = document.getElementById("book-section");
  bookSectionRef.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    if (books[i].liked === true) {
      bookSectionRef.innerHTML += getBookCardTemplate(i);
      for (let j = 0; j < books[i].comments.length; j++) {
        document.getElementById("comment-section" + i).innerHTML += /*html*/ `
        <b>${books[i].comments[j].name}</b>
        <p>${books[i].comments[j].comment}</p>
        `;
      }
    }
  }

  document.getElementById("favorites_button").onclick = renderBookSection;
  document.getElementById("favorites_button").textContent = "Zurück";
}
