const menuItems = [
  ["Tea", "Classic Cutting Tea", "Strong kadak chai with TeaMax-style warmth.", "₹25", "Veg", "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80"],
  ["Tea", "Masala Tea", "Spiced milk tea with ginger, cardamom and cafe comfort.", "₹35", "Veg", "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=700&q=80"],
  ["Tea", "Tandoori Tea", "Smoky kulhad-style tea with a rich finish.", "₹55", "Veg", "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=700&q=80"],
  ["Coffee", "Hot Coffee", "Creamy, familiar and served cafe-hot.", "₹69", "Veg", "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80"],
  ["Coffee", "Cold Coffee", "Thick chilled coffee with a smooth frothy top.", "₹99", "Veg", "https://images.unsplash.com/photo-1533777324565-a040eb52fac1?auto=format&fit=crop&w=700&q=80"],
  ["Coffee", "Mocha Frappe", "Coffee, chocolate and ice blended for a sweet kick.", "₹129", "Veg", "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80"],
  ["Shakes", "Chocolate Shake", "Rich chocolate shake finished with cream.", "₹129", "Veg", "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=80"],
  ["Shakes", "Oreo Shake", "Cookie-loaded chilled shake for the sweet tooth.", "₹139", "Veg", "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=700&q=80"],
  ["Shakes", "KitKat Shake", "Crunchy chocolate shake with a dessert-cafe mood.", "₹149", "Veg", "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80"],
  ["Mocktails", "Blue Lagoon", "Sparkling blue citrus cooler with ice.", "₹119", "Veg", "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=80"],
  ["Mocktails", "Virgin Mojito", "Mint, lime and soda served chilled.", "₹109", "Veg", "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80"],
  ["Mocktails", "Green Apple Fizz", "Crisp green apple sparkle with a tangy finish.", "₹119", "Veg", "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80"],
  ["Pizza", "Classic Veg Pizza", "Cheesy pizza topped with capsicum, onion and corn.", "₹169", "Veg", "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80"],
  ["Pizza", "Paneer Tikka Pizza", "Paneer cubes, spicy sauce and melted cheese.", "₹219", "Veg", "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80"],
  ["Pizza", "Double Cheese Pizza", "Extra cheese, soft base and golden crust.", "₹199", "Veg", "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=700&q=80"],
  ["Burger", "Classic Veg Burger", "Crispy veg patty with fresh lettuce and sauce.", "₹79", "Veg", "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"],
  ["Burger", "Tandoori Veg Burger", "Smoky tandoori sauce, crunchy patty and soft bun.", "₹99", "Veg", "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80"],
  ["Burger", "Max Full Burger", "Loaded cafe burger with cheese and house sauces.", "₹129", "Veg", "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=700&q=80"],
  ["Sandwich", "Veg Grilled Sandwich", "Grilled bread packed with vegetables and cheese.", "₹89", "Veg", "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80"],
  ["Sandwich", "Corn Cheese Sandwich", "Sweet corn, cheese and a crisp toasted edge.", "₹109", "Veg", "https://images.unsplash.com/photo-1628191013647-5640e14fd8cf?auto=format&fit=crop&w=700&q=80"],
  ["Sandwich", "Paneer Tikka Sandwich", "Spicy paneer stuffing with mint mayo.", "₹129", "Veg", "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=700&q=80"],
  ["Pasta", "White Sauce Pasta", "Creamy pasta with herbs, vegetables and cheese.", "₹159", "Veg", "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80"],
  ["Pasta", "Red Sauce Pasta", "Tangy tomato sauce tossed with cafe-style seasoning.", "₹149", "Veg", "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=700&q=80"],
  ["Pasta", "Mix Sauce Pasta", "Balanced creamy and spicy sauce with veggies.", "₹169", "Veg", "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80"],
  ["Fries", "Classic Fries", "Crispy salted fries with ketchup.", "₹79", "Veg", "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=700&q=80"],
  ["Fries", "Peri Peri Fries", "Fries tossed in spicy peri peri seasoning.", "₹99", "Veg", "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80"],
  ["Fries", "Cheesy Fries", "Golden fries topped with creamy cheese sauce.", "₹119", "Veg", "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=700&q=80"],
  ["Chinese", "Chilli Garlic Noodles", "Street-style noodles with chilli garlic punch.", "₹129", "Veg", "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80"],
  ["Chinese", "Veg Fried Rice", "Wok-tossed rice with crunchy vegetables.", "₹129", "Veg", "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80"],
  ["Chinese", "Chilli Paneer", "Paneer tossed in semi-gravy Indo-Chinese sauce.", "₹169", "Veg", "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=80"],
  ["Momos", "Steamed Momos", "Soft veg momos with spicy red chutney.", "₹99", "Veg", "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80"],
  ["Momos", "Fried Momos", "Crispy outside, juicy veg filling inside.", "₹119", "Veg", "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80"],
  ["Momos", "Tandoori Momos", "Charred creamy momos with tandoori masala.", "₹149", "Veg", "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?auto=format&fit=crop&w=700&q=80"],
  ["Combos", "TeaMax Student Combo", "Masala tea, veg burger and classic fries.", "₹169", "Veg", "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=700&q=80"],
  ["Combos", "Pizza Party Combo", "Veg pizza, two mocktails and peri peri fries.", "₹399", "Veg", "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80"],
  ["Combos", "Couple Coffee Combo", "Two cold coffees with grilled sandwich bites.", "₹299", "Veg", "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80"],
  ["Desserts", "Chocolate Brownie", "Warm brownie with chocolate drizzle.", "₹99", "Veg", "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"],
  ["Desserts", "Ice Cream Sundae", "Vanilla scoop, syrup and crunchy toppings.", "₹109", "Veg", "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80"],
  ["Desserts", "Choco Lava Cake", "Soft cake with a molten chocolate centre.", "₹119", "Veg", "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=700&q=80"]
];

const categories = ["All", ...new Set(menuItems.map((item) => item[0]))];
const bestNames = new Set(["Masala Tea", "Cold Coffee", "Tandoori Momos", "Chilli Garlic Noodles"]);
const menuGrid = document.querySelector("#menuGrid");
const categoryPills = document.querySelector("#categoryPills");
const bestTrack = document.querySelector("#bestTrack");

function iconize(root = document) {
  root.querySelectorAll("[data-icon]").forEach((node) => {
    if (node.querySelector("svg")) return;
    const iconName = node.dataset.icon;
    const icon = window.lucide?.icons?.[toPascal(iconName)];
    if (!icon) return;
    const svg = icon.toSvg({ "aria-hidden": "true" });
    node.insertAdjacentHTML("afterbegin", svg);
  });
}

function toPascal(value) {
  return value.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("");
}

function renderPills() {
  categoryPills.innerHTML = categories.map((category, index) => `
    <button class="pill ${index === 0 ? "active" : ""}" type="button" data-category="${category}">${category}</button>
  `).join("");
}

function renderMenu(category = "All") {
  const visible = category === "All" ? menuItems : menuItems.filter((item) => item[0] === category);
  menuGrid.innerHTML = visible.map(([cat, name, desc, price, badge, image]) => `
    <article class="menu-card reveal">
      <img src="${image}" alt="${name}" loading="lazy" />
      <div class="menu-body">
        <span class="category-label">${cat}</span>
        <div class="menu-top">
          <h3>${name}</h3>
          <span class="price">${price}</span>
        </div>
        <p>${desc}</p>
        <div class="menu-meta">
          <span class="badge">${badge}</span>
        </div>
      </div>
    </article>
  `).join("");
  observeReveals();
}

function renderBest() {
  bestTrack.innerHTML = menuItems
    .filter((item) => bestNames.has(item[1]))
    .map(([cat, name, , price, , image]) => `
      <article class="best-card reveal">
        <img src="${image}" alt="${name}" loading="lazy" />
        <div>
          <span>${cat} • ${price}</span>
          <h3>${name}</h3>
        </div>
      </article>
    `).join("");
}

function observeReveals() {
  const revealNodes = document.querySelectorAll(".reveal:not(.observed)");
  revealNodes.forEach((node) => node.classList.add("observed"));
  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in-view");
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealNodes.forEach((node) => observer.observe(node));
}

renderPills();
renderMenu();
renderBest();
iconize();
observeReveals();

categoryPills.addEventListener("click", (event) => {
  const pill = event.target.closest(".pill");
  if (!pill) return;
  categoryPills.querySelectorAll(".pill").forEach((node) => node.classList.remove("active"));
  pill.classList.add("active");
  renderMenu(pill.dataset.category);
});
