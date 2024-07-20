function addCard() {
  const cardContainer = document.getElementById("container");
  const newCountCards = cardContainer.childElementCount + 1;

  const newCard = document.createElement("li");
  newCard.className = "card";
  newCard.innerHTML = `
    <div class="card-header">
      <h2>Item ${newCountCards}</h2>
      <img class="trash-bin" src="./trash-bin.jpg" alt="bin">
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
  // add delete event for new cards
  newCard
    .querySelector(".trash-bin")
    .addEventListener("click", () => newCard.remove());

  cardContainer.appendChild(newCard);
}

// Add new card
const addBottom = document.getElementById("addButton");
addBottom.addEventListener("click", addCard);

// add delete event for 3 existed cards
document
  .querySelectorAll(".trash-bin")
  .forEach((bin) =>
    bin.addEventListener("click", () => bin.closest(".card").remove())
  );
