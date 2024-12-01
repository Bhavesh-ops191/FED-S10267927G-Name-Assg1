let products = {
    data: [
      {
        productName: "[FIM'S CLUB ] OVERSIZED L/S T-SHIRT",
        category: "TopWear",
        price: "48.37",
        image: "Oversized TShirt.png",
        itemStock: "True"
      },
      {
        productName: "Mini Silicone Pouch",
        category: "Bags",
        price: "20.50",
        image: "Mini Silicone Pouch.png",
        itemStock: "True" 
      },
      {
        productName: "Tote Bag",
        category: "Bags",
        price: "22.57",
        image: "Tote Bag.png",
        itemStock: "False"
      },
      {
        productName: "Track Jacket (Black)",
        category: "TopWear",
        price: "97.58",
        image: "Track Jacket (Black).png",
        itemStock: "True"
      },
      {
        productName: "Track Pants (Black)",
        category: "BottomWear",
        price: "97.58",
        image: "Track Pants (Black).png",
        itemStock: "False"
      },
      {
        productName: "S/S T-Shirt",
        category: "TopWear",
        price: "40.18",
        image: "SS TShirt.png",
        itemStock: "False"
      },
      {
        productName: "JAPAN 3rd Single 'CRAZY' Limited Edition A",
        category: "Albums",
        price: "19.18",
        image: "JAPAN 3rd Single 'CRAZY' Limited Edition A.png",
        itemStock: "True"
      },
      {
        productName: "3rd Mini Album 'EASY' (Weverse Albums ver.) Set",
        category: "Albums",
        price: "19.35",
        image: "3rd Mini Album 'EASY' (Weverse Albums ver.) Set.png",
        itemStock: "False"
      },
      {
        productName: "Bear Mouse Pad",
        category: "Accessories",
        price: "8.20",
        image: "Bear Mouse Pad.png",
        itemStock: "False"
        
      },
      {
        productName: "Plush Keyring",
        category: "Accessories",
        price: "18.04",
        image: "Plush Keyring.png",
        itemStock: "True"
      },
      {
        productName: "Photo Card Holder",
        category: "Accessories",
        price: "12.29",
        image: "Photo Card Holder.png",
        itemStock: "False"
      },
      {
        productName: "Oversized Shorts (Light grey)",
        category: "BottomWear",
        price: "69.70",
        image: "Oversized Shorts (Light grey).png",
        itemStock: "False"
        
      },
      {
        productName: "Track Pants (Grey)",
        category: "BottomWear",
        price: "77.89",
        image: "Track Pants (Grey).png",
        itemStock: "True"
      },
      {
        productName: "JAPAN 2nd Single [UNFORGIVEN] Solo Jacket",
        category: "Albums",
        price: "10.98",
        image: "JAPAN 2nd Single [UNFORGIVEN] Solo Jacket.png",
        itemStock: "True"
      },
    ],
  };
  for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
  
    // Navigate to the specific item page when clicked
    card.addEventListener("click", () => {
      if (i.productName === "[FIM'S CLUB ] OVERSIZED L/S T-SHIRT") {
        window.location.href = "Item(Oversised TShirt).html?stock=" + i.itemStock;
      }
    });
    
    card.addEventListener("click", () => {
      if (i.productName === "Tote Bag") {
        window.location.href = "Item(Tote Bag).html?stock=" + i.itemStock;  // Add Tote Bag page navigation
      }
    });
  
    // Image container
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
  
    // Image tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
  
    // Add a "No Stock" label if the item is out of stock
    if (i.itemStock === "False") {
      let noStockLabel = document.createElement("div");
      noStockLabel.classList.add("no-stock");
      noStockLabel.innerText = "No Stock";
      imgContainer.appendChild(noStockLabel);
    }
  
    card.appendChild(imgContainer);
  
    // Container for product details
    let container = document.createElement("div");
    container.classList.add("container");
  
    // Product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
  
    // Price
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
    filterProduct("All");
    document.getElementById("all-button").classList.add("active");
  };

  card.addEventListener("click", () => {
    // Pass stock status to the product page
    const stockStatus = i.itemStock === "True" ? "In-Stock" : "No Stock";
    window.location.href = `Item.html?stock=${stockStatus}`;
  });
  
  