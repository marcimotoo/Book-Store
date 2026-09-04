function getBookCardTemplate(i) {
  return /*html*/ `
    <article class="book-card">
      <h2>${books[i].name}</h2>
          <img src="./assets/images/${books[i].src}" alt="">
          <div class="price-and-like">
            <p>${books[i].price} €</p>
            <div class="display-flex">
              <p>${books[i].likes}</p>
              <img onclick="likeAddAndRemove(${i})" src="./assets/images/${renderLikeHeart(i)}.png" alt="">
            </div>
          </div>
          <table>
            <tr>
              <th>Autor:</th>
              <td>${books[i].author}</td>
            </tr>
            <tr>
              <th>Erscheinungsjahr:</th>
              <td>${books[i].publishedYear}</td>
            </tr>
            <tr>
              <th>Genre</th>
              <td>${books[i].genre}</td>
            </tr>
          </table>
          <h3>Kommentare:</h3>
          <div id="comment-section${i}" class="comment-section"></div>
          <div id="" class="send-button">
            <input id="user_input${i}" type="text" placeholder="Schreibe dein Kommentar..">
            <img onclick="addComment(${i})" class="send-button" src="./assets/images/abschicken.png" alt="">
          </div>
    </article>
  `;
}
