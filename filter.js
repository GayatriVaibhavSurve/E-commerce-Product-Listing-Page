const filters = [
  ...new Set(
    btns.map((btn) => {
      return btn;
    })
  ),
];

document.getElementById("btns").innerHTML = filters
  .map((btn) => {
    var { name, id } = btn;
    return "<a onclick='filterItems(" + id + `)'> ${name} </a>`;
  })
  .join("");

const filterItems = (a) => {
  const flterCategories = categories.filter(item);
  function item(value) {
    if (value.id.includes(a)) {
      return value.id;
    }
  }
  displayItem(flterCategories);
};

displayItem(categories);
