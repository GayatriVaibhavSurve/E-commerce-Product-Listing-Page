var cart = JSON.parse(sessionStorage.getItem("cart"));
let total = 0;
function displaycart() {
  console.log(cart);
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML =
      `<i class="fa fa-rupee"></i>` + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { p, image, title, price, qty } = items;
        total = total + price * qty;
        document.getElementById("total").innerHTML =
          `<i class="fa fa-rupee"></i>` + total + ".00";
        return (
          `<div class="content">
                <img src=${image} alt="">
                <h3>${title}<br><i class="fa fa-rupee"></i>${price}<br><p id="qty">Qty:${qty}</p></h3>` +
          "<button class='buy-1 removeBtn'onclick='delElement(" +
          p +
          ")'>Remove</button>" +
          "<button class='buy-1 addBtn'onclick='addMoreItems(" +
          p +
          ")'>Add More</button>" +
          ` 
            </div>`
        );
      })
      .join("");
  }
}

function paynow() {
  var par = new URLSearchParams();
  console.log(total);
  par.append("key", total);
  location.href = "payment.html?" + par.toString();
}
