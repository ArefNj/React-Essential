function addCard() {
  const cardContainer = document.getElementById("container");
  const newCountCards = cardContainer.childElementCount + 1;

  const newCard = document.createElement("li");
  newCard.className = "card";
  newCard.innerHTML = `
    <div class="card-header">
      <h2>Item ${newCountCards}</h2>
      <img id="trash-bin" src="./trash-bin.jpg" alt="bin">
    </div>
    <div class="card-content">
    <p>
      Lorem ipsum dolor sit amet consecteturadipisicing elit. Unde
      dignissimos ut iusto quae molestiae odio quod, quas magni quaerat
      impedit maiores optio id dolores delectus praesentium omnis autem
      libero harum?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Voluptate
      vel eaque dolores explicabo, excepturi dolor um a quo corporis.
    </p>
    </div>
  `;

  cardContainer.appendChild(newCard);
  addDeleteEvent(newCard.querySelector("#trash-bin"));
}

function updateItemNumbers() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => (card.querySelector(".card-header h2").textContent = `Item ${index + 1}`));
}

// Add new card
const addBottom = document.getElementById("addButton");
addBottom.addEventListener("click", addCard);


// add delete event for all cards
document.querySelectorAll("#trash-bin").forEach(function (bin) {
  addDeleteEvent(bin);
});

function addDeleteEvent(element) {
  element.addEventListener("click", function () {
    element.closest(".card").remove();
    updateItemNumbers();
  });
}
