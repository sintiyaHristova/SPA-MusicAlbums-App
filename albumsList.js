window.addEventListener("load", musicAlbums);

function musicAlbums() {
  const author = document.getElementById("author");
  const album = document.getElementById("album");
  const year = document.getElementById("year");
  const price = document.getElementById("price");
  const table = document.getElementById("tablE");
  const soldAlbums = document.getElementById("soldAlbums");
  const totalProfit = document.getElementById("profit");
  let sum = 0;

  const submitButton = document
    
    .addEventListener("click", (ev) => {
      ev.preventDefault();
      if (
        author.value !== "" &&
        album.value !== "" &&
        year.value !== "" &&
        price.value !== ""
      ) {
        addPost(
          ev,
          author.value,
          album.value,
          year.value,
          price.value,
        );
        clearInputFileds();
      }
    });

  function addPost(
    ev,
    author,
    album,
    year,
    price,
  ) {
    
    const tr = elGenerator("tr");
    tr.setAttribute("class", "row");
    elGenerator("td", `${author}`, tr);
    elGenerator("td", `${album}`, tr);
    elGenerator("td", `${year}`, tr);
    elGenerator("td", `${price}`, tr);
    const td = elGenerator("td");
    tr.appendChild(td);

    const editBtn = elGenerator("button", "Edit", td);
    editBtn.setAttribute("class", "action-btn");
    editBtn.setAttribute("id", "edit");
    const sellBtn = elGenerator("button", "Sell", td);
    sellBtn.setAttribute("class", "action-btn");
    sellBtn.setAttribute("id", "sell");

    table.appendChild(tr);

    sellBtn.addEventListener("click", (ev) =>
    sellAlbum(
        ev,
        author,
        album,
        year,
        price,
      )
    );
    editBtn.addEventListener("click", (ev) =>
      editPost(
        ev,
        author,
        album,
        year,
        price,
      )
    );
  }

  function editPost(
    ev,
    albumEl,
    authorEl,
    yearEl,
    priceEl,
  ) {
    ev.target.parentNode.parentNode.remove();

    author.value = albumEl;
    album.value = authorEl;
    year.value = yearEl;
    price.value = priceEl;
  }

  function sellAlbum(
    ev,
    albumEl,
    authorEl,
    yearEl,
    priceEl,
  ) {
    ev.target.parentNode.parentNode.remove();

     let currAlbum = Number(priceEl);

    const soldLiEl = document.createElement("li");
    soldLiEl.className = "each-list";
    const albumName = document.createElement("span");
    albumName.textContent = authorEl;
    const albumYear = document.createElement("span");
    albumYear.textContent = yearEl;
    const albumProfit = document.createElement("span");
    albumProfit.textContent = currAlbum;

    soldLiEl.appendChild(albumName);
    soldLiEl.appendChild(albumYear);
    soldLiEl.appendChild(albumProfit);
    soldAlbums.appendChild(soldLiEl);

    sum += currAlbum;
    totalProfit.textContent = sum;
  }

  function clearInputFileds() {
    author.value = "";
    album.value = "";
    year.value = "";
    price.value = "";
  }

  function elGenerator(type, content, parent) {
    const element = document.createElement(type);
    element.textContent = content;

    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}
