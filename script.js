function renderBookSection() {
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
}

function renderLikeHeart(i) {
  let LikeStatus = "";

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

  books[i].comments.push({ name: "Du", comment: commentInput });

  renderBookSection();
}

function likeAddAndRemove(i) {
  if (books[i].liked == true) {
    books[i].liked = false;
    books[i].likes--;
  } else {
    books[i].liked = true;
    books[i].likes++;
  }

  renderBookSection();
}
