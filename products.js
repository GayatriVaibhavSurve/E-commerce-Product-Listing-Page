const product = [
  {
    p: 0,
    id: [11, 44],
    image: "images/watch1.jpg",
    title: "GIZMORE Smartwatch",
    price: 999,
    qty: 1,
  },
  {
    p: 1,
    id: [11, 55],
    image: "images/watch2.jpg",
    title: "Fire-Boltt Smartwatch",
    price: 1399,
    qty: 1,
  },
  {
    p: 2,
    id: [11, 55],
    image: "images/watch3.jpg",
    title: "boAt Primia SmartWatch",
    price: 1900,
    qty: 1,
  },
  {
    p: 3,
    id: [22, 44],
    image: "images/eyewear1.jpg",
    title: "ROYAL SON Sunglasses",
    price: 629,
    qty: 1,
  },
  {
    p: 4,
    id: [22, 44],
    image: "images/eyewear2.jpg",
    title: "Peter Jones Sunglasses",
    price: 503,
    qty: 1,
  },
  {
    p: 5,
    id: [22, 44],
    image: "images/eyewear3.jpg",
    title: "FEISEDY Women Sunglasses",
    price: 999,
    qty: 1,
  },
  {
    p: 6,
    id: [33, 55],
    image: "images/earphones1.jpg",
    title: "OnePlus Nord Earbuds",
    price: 1499,
    qty: 1,
  },
  {
    p: 7,
    id: [33, 55],
    image: "images/earphones2.jpg",
    title: "OnePlus Earphones",
    price: 1999,
    qty: 1,
  },
  {
    p: 8,
    id: [33, 44],
    image: "images/earphones3.jpg",
    title: "pTron Bassbuds Earbuds",
    price: 499,
    qty: 1,
  },
];
const btns = [
  {
    id: 11,
    name: "Watches",
  },
  {
    id: 22,
    name: "Sunglasses",
  },
  {
    id: 33,
    name: "Earphones",
  },
  {
    id: 44,
    name: '<i class="fa fa-rupee"></i>100-1000',
  },
  {
    id: 55,
    name: '<i class="fa fa-rupee"></i>1001-2000',
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

if (sessionStorage.getItem("categories") == null) {
  sessionStorage.setItem("categories", JSON.stringify(categories));
}
let local_categories = JSON.parse(sessionStorage.getItem("categories"));
var cart = [];

if (sessionStorage.getItem("cart") == null) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

function commonadd(a) {
  console.log("p id " + a);
  let old_data = JSON.parse(sessionStorage.getItem("cart"));
  let new_data = { ...local_categories[a] };
  var flag = 0;
  for (let i = 0; i < old_data.length; i++) {
    if (old_data[i].p == a) {
      flag = 1;
      let old_qty = parseInt(new_data.qty);
      console.log("new coming qty " + new_data.qty);
      old_data[i].qty = old_qty + 1;
      local_categories[a].qty = old_data[i].qty;
      console.log("updated qty " + old_data[i].qty);
      sessionStorage.setItem("categories", JSON.stringify(local_categories));
      break;
    }
  }
  if (flag == 0) {
    old_data.push(new_data);
  }
  sessionStorage.setItem("cart", JSON.stringify(old_data));
  let total_items = old_data.length;
  return total_items;
}
function addtocart(a) {
  let total_item = commonadd(a);
  document.getElementById("totalItems").innerHTML = total_item;
}
function addMoreItems(a) {
  commonadd(a);
  location.href = "cart.html?";
}
function delElement(a) {
  console.log(a);
  let old = JSON.parse(sessionStorage.getItem("cart"));
  console.log(old);
  const indexOfObject = old.findIndex((object) => {
    return object.p == a;
  });
  old.splice(indexOfObject, 1);
  sessionStorage.setItem("cart", JSON.stringify(old));
  location.href = "cart.html?";
}

window.onunload = () => {
  window.sessionStorage.removeItem(cart);
  window.sessionStorage.removeItem(categories);
};
