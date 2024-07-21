// removeEvent for Elements that already existed
document
  .querySelectorAll(".item")
  .forEach((item) =>
    item.addEventListener("click", () => item.closest("li").remove())
  );

// add new item
const input = document.querySelector(".input");
document.querySelector(".addButton").addEventListener("click", () => {
  const itemsList = document.querySelector(".items");
  const text = input.value.trim();

  if (text !== "") {
    const newItem = document.createElement("li");
    newItem.innerHTML = `<button class="item">${text}</button>`;
    // removeEvent
    newItem
      .querySelector(".item")
      .addEventListener("click", () => newItem.remove());

    itemsList.appendChild(newItem);
    input.value = "";
  }
});

// press Enter
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".addButton").click();
  }
});
