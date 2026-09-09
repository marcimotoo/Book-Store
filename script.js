const bookSectionRef = document.getElementById("book-section");
const commentSectionRef = document.getElementById("comment-section");

function renderBookSection() {
  getFromLocalStorage();

  bookSectionRef.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    bookSectionRef.innerHTML += getBookCardTemplate(i);
    for (let j = 0; j < books[i].comments.length; j++) {
      document.getElementById("comment-section" + [i]).innerHTML += getBookCommentTemplate(i, j);
    }
  }
  document.getElementById("favorites_button").onclick = showFavorites;
  document.getElementById("favorites_button").textContent = "Favoriten";
}

function renderLikeHeart(i) {
  let likeStatus = "";

  if (books[i].liked == true) {
    likeStatus = "heartfull";
  } else {
    likeStatus = "heartempty";
  }

  return likeStatus;
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

  bookSectionRef.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    if (books[i].liked === true) {
      bookSectionRef.innerHTML += getBookCardTemplate(i);
      for (let j = 0; j < books[i].comments.length; j++) {
        document.getElementById("comment-section" + [i]).innerHTML += getBookCommentTemplate(i, j);
      }
    }
  }

  document.getElementById("favorites_button").onclick = renderBookSection;
  document.getElementById("favorites_button").textContent = "Zurück";
}
