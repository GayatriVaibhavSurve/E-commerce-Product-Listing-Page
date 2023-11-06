document.getElementById("search").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  console.log("enter in searchbar");
  const filterData = categories.filter((item) => {
    return item.title.toLocaleLowerCase().includes(searchData);
  });
  console.log(filterData);
  displayItem(filterData);
});

const displayItem = (items) => {
  document.getElementById("productslist").innerHTML = items
    .map((item) => {
      var { p, image, title, price } = item;
      return (
        `<div class="content">
            <img src=${image} alt="">
            <h3>${title}</h3>
            <h6><i class="fa fa-rupee"></i>${price}</h6>
            <ul>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star"></i></li>
            </ul>` +
        "<button class='buy-1' onclick='addtocart(" +
        p +
        ")'>Add to Cart</button>" +
        `
        </div>`
      );
    })
    .join("");
};

displayItem(local_categories);
