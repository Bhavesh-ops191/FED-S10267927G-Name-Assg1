let products = {
    data: [
      {
        productName: "[FIM'S CLUB ] OVERSIZED L/S T-SHIRT",
        category: "TopWear",
        price: "48.37",
        image: "Oversized TShirt.png",
      },
      {
        productName: "Mini Silicone Pouch",
        category: "Bags",
        price: "20.50",
        image: "Mini Silicone Pouch.png",
      },
      {
        productName: "Tote Bag",
        category: "Bags",
        price: "48.37",
        image: "Tote Bag.png",
      },
      {
        productName: "Track Jacket (Black)",
        category: "TopWear",
        price: "97.58",
        image: "Track Jacket (Black).png",
      },
      {
        productName: "Track Pants (Black)",
        category: "BottomWear",
        price: "97.58",
        image: "Track Pants (Black).png",
      },
      {
        productName: "S/S T-Shirt",
        category: "TopWear",
        price: "40.18",
        image: "SS TShirt.png",
      },
      {
        productName: "JAPAN 3rd Single 'CRAZY' Limited Edition A",
        category: "Albums",
        price: "19.18",
        image: "JAPAN 3rd Single 'CRAZY' Limited Edition A.png",
      },
      {
        productName: "3rd Mini Album 'EASY' (Weverse Albums ver.) Set",
        category: "Albums",
        price: "19.35",
        image: "3rd Mini Album 'EASY' (Weverse Albums ver.) Set.png",
      },
      {
        productName: "Bear Mouse Pad",
        category: "Accessories",
        price: "8.20",
        image: "Bear Mouse Pad.png",
      },
      {
        productName: "Plush Keyring",
        category: "Accessories",
        price: "18.04",
        image: "Plush Keyring.png",
      },
      {
        productName: "Photo Card Holder",
        category: "Accessories",
        price: "12.29",
        image: "Photo Card Holder.png",
      },
      {
        productName: "Oversized Shorts (Light grey)",
        category: "BottomWear",
        price: "69.70",
        image: "Oversized Shorts (Light grey).png",
      },
      {
        productName: "Track Pants (Grey)",
        category: "BottomWear",
        price: "77.89",
        image: "Track Pants (Grey).png",
      },
      {
        productName: "JAPAN 2nd Single [UNFORGIVEN] Solo Jacket",
        category: "Albums",
        price: "10.98",
        image: "JAPAN 2nd Single [UNFORGIVEN] Solo Jacket.png",
      },
    ],
  };
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "All") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  