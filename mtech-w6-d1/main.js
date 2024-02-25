const storeItems = [
  {
    name: "TV",
    price: 800.0,
    inStock: true,
    details: "4K Ultra HD",
  },
  {
    name: "Phone",
    price: 700.0,
    inStock: false,
    details: "5G",
  },
  {
    name: "Game Console",
    price: 300.0,
    inStock: true,
    details: "The latest and greatest",
  },
  {
    name: "Laptop",
    price: 1200.0,
    inStock: true,
    details: "16GB RAM 1TB SSD",
  },
  {
    name: "Smart Watch",
    price: 200.0,
    inStock: false,
    details: "Counts your steps",
  },
  {
    name: "Headphones",
    price: 100.0,
    inStock: true,
    details: "Clearest music to be heard",
  },
  {
    name: "Keyboard",
    price: 100.0,
    inStock: true,
    details: "Types for you",
  },
  {
    name: "HDMI Cord",
    price: 100.0,
    inStock: true,
    details: "HDMI to USB type C",
  },
  {
    name: "Monitor",
    price: 300.0,
    inStock: true,
    details: "4K Ultra HD",
  },
  {
    name: "Speaker",
    price: 200.0,
    inStock: true,
    details: "Clearest music to be heard",
  },
  {
    name: "Video Game",
    price: 60.0,
    inStock: true,
    details: "Enjoy for hours",
  },
];

function populateRows() {
  for (let i = 0; i < storeItems.length; i++) {
    let product = storeItems[i];
    let row = $("<tr>");

    // Check if the item is in stock
    if (product.inStock) {
      row
        .addClass("inStock")
        .append(
          `<p class="price"> $ ${product.price}</p> <p class="productName"> $ ${product.name}</p> <p class="details"> $ ${product.details}</p>`);
    } else {
      row.addClass("notInStock");
    }
    $("#table").append(row);
  }
}
populateRows();

//dark mode
$("button").append("Toggle Dark Mode");
$("button").click(function () {
  $("#contentContainer").toggleClass("darkMode");
  $("#title").toggleClass("darkMode");
  $("#table").toggleClass("darkMode");
  console.log($("#contentContainer").class);
});
