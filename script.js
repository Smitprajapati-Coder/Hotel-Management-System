// ===================== MENU DATA =====================
const menus = {
  dessert:[
    {name: "Gulab jamun", price:100, img: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSnAEvC8nlr4LLpaHVdunMEcsP8BTWjd9nuYk6lFhRKe3-QssqLxmeNF_8laL0gFYQf"},
    {name: "Kulfi", price:80, img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTxq3KN474p_NI-cONfl3LSkc1UO8zCDY16bIDYoPnIc-PJHK0P"},
    {name: "Rasgulla", price:110, img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRwHdVjzHnxg5uHxm-nFBQoyVGoy_tlo9R-djgxvaw45PY4U7j8"},
    {name: "Motichur Laddu", price:90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZPLwF3avefo5CjBgwqFVUWPMkhmFczAstR855Jc3-eTjrgTk"},
    {name: "Barfi", price:70, img: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRCW0-yn2dN4c24OCdy9pVZlN4lSoFd3rhUw0u_0wgaxsGuFYUIjlMQTSyN378QrazI"},
  ],
  fastfood: [
    { name: "Burger", price: 120, img: "https://t4.ftcdn.net/jpg/02/44/61/19/360_F_244611927_yrh0ZIYwOGTDurVnCMAt7Cq8DR4sBkB0.jpg" },
    { name: "Pizza", price: 250, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrYHPpDgHN9pIORirqN3CRuKVyEScJUgSow&s"},
    { name: "French Fries", price: 100, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLV4AxAa-zzkR7IeON1i7HbV7ptfrsNkBKSQ&s" },
    { name: "Sandwich", price: 90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6RHYXTndonjk1IRDOoh-L7yXIUe_wZUkPA&s" },
    { name: "Hot Dog", price: 110, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sGsP85U_8pgkv0UvBQj1vZy95pPu6NWdfw&s" }
  ],
  punjabi: [
    { name: "Paneer Butter Masala", price: 220, img: "https://www.yummytummyaarthi.com/wp-content/uploads/2021/12/1-500x375.jpg" },
    { name: "Dal Makhani", price: 180, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69FeaPjtsF4HJ5FnURAZmRg8MhZTWaW9mRg&s" },
    { name: "Amritsari Kulcha", price: 150, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnCsC-Aujl-55xXHMKH5h1xyfdx5Axmzkdw&s" },
    { name: "Chole Bhature", price: 160, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qZYqLr9OgwtfLJkC1ETQUn4oS__y5tjYBQ&s" },
    { name: "Lassi", price: 80, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbPWysWpNsFCYZND0Dx6zsj9IIY4IxIBFqyw&s" }
  ],
  gujarati: [
    { name: "Dhokla", price: 100, img: "https://maayeka.com/wp-content/uploads/2011/11/sooji-ka-dhokla-instant-recipe-1-of-1.jpg" },
    { name: "Thepla", price: 90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYytvLFspJaeC4bNqtEeg2_EKQuVVZLO-oZQ&s" },
    { name: "Undhiyu", price: 200, img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Undhiyu.jpg" },
    { name: "Khandvi", price: 120, img: "https://www.reciperasoi.com/wp-content/uploads/2021/03/Gujarati-Khandvi-Recipe.jpg" },
    { name: "Fafda Jalebi", price: 150, img: "https://static.toiimg.com/thumb/49481547.cms?width=1200&height=900" }
  ],
  kathiyawadi: [
    { name: "Ringan No Olo", price: 180, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOzjWF6PoI0up7YSlZObGh2WWDCr2RrCA0g&s" },
    { name: "Bajra Rotla", price: 100, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaCMaDfZ_9sCqPXZiflhX58RoEG-9aoDmJfg&s" },
    { name: "Sev Tameta", price: 160, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwz2kgrnZc4sUUuM7FhgqzPqWHZjO01DsPQ&s" },
    { name: "Khichdi Kadhi", price: 140, img: "https://meghnasfoodmagic.in/wp-content/uploads/2023/12/sye9v3hl9c9j82zh020221006153406.jpg" },
    { name: "Buttermilk", price: 60, img: "https://consumer-voice.org/wp-content/uploads/2023/04/Buttermilk-A-Refreshing-Summer-Drink.jpg" }
  ],
  chinese: [
    { name: "Noodles", price: 150, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhbuBpqIMHMHsFu7t0xTYgaU17_d3FvG2bg&s" },
    { name: "Fried Rice", price: 160, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh1sdodCMveuk9NwqHzCWkKKvmg_TZFkzBDw&s" },
    { name: "Manchurian", price: 170, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlP7ovxUYJ_5aEbg65vQxy0AAaA3rO3xddg&s" },
    { name: "Spring Roll", price: 140, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP-lpG6vB4eiWs6TiXIxgctqh0FyWfKbmpmA&s" },
    { name: "Soup", price: 120, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPMYe-o9pzwEsiC2NLAzEnVgZUznLObqW4Q&s" }
  ],
};

// ===================== GLOBALS =====================
let cart = [];
let total = 0;

// ===================== PAGE SWITCHING =====================
function goToDashboard() {
  document.getElementById("startPage").classList.add("hidden");
  document.getElementById("dashboardPage").classList.remove("hidden");
}

function goToMenu() {
  document.getElementById("dashboardPage").classList.add("hidden");
  document.getElementById("menuPage").classList.remove("hidden");
  showMenu("fastfood"); // Default menu
}

function backToDashboard() {
  document.getElementById("menuPage").classList.add("hidden");
  document.getElementById("dashboardPage").classList.remove("hidden");
}

// ===================== BACKGROUND =====================
function updateBackground(category) {
  let bgUrl = "";
  switch(category){
    case "dessert": bgUrl = "url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1350&q=80')"; break;
    case "fastfood": bgUrl = "url('https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=1350&q=80')"; break;
    case "punjabi": bgUrl = "url('https://t4.ftcdn.net/jpg/02/42/39/25/360_F_242392561_EFnxkFpe0Bwi3v01rcDt2mzEf9KKNCXS.jpg')"; break;
    case "gujarati": bgUrl = "url('https://t4.ftcdn.net/jpg/12/18/80/83/360_F_1218808337_iUu7G3vLm7k5fVyb0wQAex0AA15qUPY2.jpg')"; break;
    case "kathiyawadi": bgUrl = "url('https://i.ndtvimg.com/i/2017-07/gujarati-thali-620x350_620x350_51499860974.jpg')"; break;
    case "chinese": bgUrl = "url('https://t4.ftcdn.net/jpg/03/24/16/57/360_F_324165757_buAX78dg7TGgjh0pB8aUCwOWRkNejmwA.jpg')"; break;
    default: bgUrl = "linear-gradient(to right, #ffecd2, #fcb69f)";
  }
  document.getElementById("menuPage").style.background = bgUrl + " center/cover no-repeat";
}

// ===================== MENU =====================
function showMenu(category) {
  updateBackground(category);
  const menuDiv = document.getElementById("menu");
  menuDiv.innerHTML = "";
  menus[category].forEach(item => {
    const card = `
      <div class="card">
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
      </div>`;
    menuDiv.innerHTML += card;
  });
}

// ===================== CART =====================
function addToCart(dish, price) {
  cart.push({ dish, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById("cartItems");
  cartDiv.innerHTML = "";
  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.dish} - ₹${item.price}</p>`;
  });
  document.getElementById("cartTotal").innerText = total;
}

function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}

function showCart() {
  goToMenu(); // Show menu page with cart
}

// ===================== ORDER =====================
function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Send order to PHP backend
  fetch("save_order.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: cart, total: total })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "success") {
      let receiptHTML = "";
      cart.forEach(item => {
        receiptHTML += `<p>${item.dish} - ₹${item.price}</p>`;
      });
      document.getElementById("receipt").innerHTML = receiptHTML;
      document.getElementById("finalTotal").innerText = total;
      document.getElementById("successMsg").style.display = "block";
      document.getElementById("orderPopup").style.display = "flex";
      clearCart();
    } else {
      alert("❌ Order failed: " + data.message);
    }
  })
  .catch(err => alert("Server error: " + err));
}

function closePopup() {
  document.getElementById("orderPopup").style.display = "none";
  document.getElementById("successMsg").style.display = "none";
}

function backToMenu() {
  closePopup();
}
