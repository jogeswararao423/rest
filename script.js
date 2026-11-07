// Savoria Luxury Restaurant - Main Interactive JavaScript Controller
// =============================================================================
// 1. DATASETS: 24 VEGETARIAN + NON-VEGETARIAN DISHES (UNIQUE DSLR PHOTOS)
// =============================================================================

// 24 Vegetarian Dishes (6 rows × 4 food cards = 24 items)
const vegDishes = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    price: 380,
    rating: 4.9,
    type: "veg",
    desc: "Fresh cottage cheese simmered in a silky tomato, cashew cream and fenugreek gravy finished with churned butter.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Mysore Masala Dosa",
    price: 180,
    rating: 4.9,
    type: "veg",
    desc: "Crispy golden fermented rice crepe layered with spicy red garlic chutney and spiced potato masala.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Amritsari Chole Bhature",
    price: 220,
    rating: 4.9,
    type: "veg",
    desc: "Spiced overnight simmered chickpeas tempered with dry pomegranate, served with fluffy hot bhature.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Dal Makhani Grand Royale",
    price: 320,
    rating: 5.0,
    type: "veg",
    desc: "Slow-simmered black lentils cooked overnight on charcoal embers with churned butter and dairy cream.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Shahi Malai Kofta",
    price: 390,
    rating: 4.8,
    type: "veg",
    desc: "Melt-in-mouth cottage cheese and mawa dumplings served in an exquisite velvety cashew-saffron sauce.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Steamed Idli Sambar Platter",
    price: 140,
    rating: 4.8,
    type: "veg",
    desc: "Soft, fluffy steamed rice cakes served with aromatic drumstick lentil sambar and freshly ground chutneys.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Tandoori Paneer Tikka",
    price: 340,
    rating: 4.9,
    type: "veg",
    desc: "Marinated cottage cheese cubes chargrilled over tandoor with bell peppers, onion petals and chaat masala.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Crispy Hara Bhara Kabab",
    price: 290,
    rating: 4.7,
    type: "veg",
    desc: "Pan-seared spinach, green peas and paneer patties spiced with royal cardamom, roasted cumin and cashew nuts.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Mumbai Pav Bhaji",
    price: 210,
    rating: 4.9,
    type: "veg",
    desc: "Mashed seasonal vegetable medley cooked on a flat iron tawa with special house spices and buttered pav.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Jeera & Ghee Basmati Rice",
    price: 190,
    rating: 4.8,
    type: "veg",
    desc: "Fragrant aged Basmati rice tempered with roasted cumin seeds, bay leaves and melted desi cow ghee.",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Kadhai Paneer Peshawari",
    price: 370,
    rating: 4.8,
    type: "veg",
    desc: "Cottage cheese wok-tossed with freshly crushed coriander seeds, bell peppers, tomatoes and whole spices.",
    image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Greek Quinoa & Paneer Salad",
    price: 260,
    rating: 4.7,
    type: "veg",
    desc: "Organic garden greens, grilled cottage cheese, cherry tomatoes, kalamata olives and herb lemon vinaigrette.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    name: "Cream of Roasted Tomato & Basil",
    price: 190,
    rating: 4.8,
    type: "veg",
    desc: "Vine-ripened plum tomatoes roasted with garlic and basil, finished with fresh dairy cream and herb croutons.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Truffle Fettuccine Alfredo",
    price: 410,
    rating: 4.9,
    type: "veg",
    desc: "Fresh handmade ribbon pasta tossed in rich parmesan cream sauce scented with wild Italian black truffle.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    name: "Crispy Dahi Ke Kabab",
    price: 310,
    rating: 4.8,
    type: "veg",
    desc: "Delicate shallow-fried patties of hung yoghurt, green chilies, coriander and crushed pink peppercorn.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    name: "Wok-Tossed Veg Hakka Noodles",
    price: 250,
    rating: 4.7,
    type: "veg",
    desc: "Springy wheat noodles wok-tossed on high flame with shredded crunchy vegetables and aromatic sesame soy.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17,
    name: "Garlic Butter Tandoori Naan",
    price: 110,
    rating: 4.9,
    type: "veg",
    desc: "Traditional clay oven leavened bread brushed with melted garlic butter and sprinkled with fresh coriander.",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    name: "Woodfired Margherita Pizza",
    price: 380,
    rating: 4.9,
    type: "veg",
    desc: "Hand-stretched sourdough crust with San Marzano tomato sauce, fresh buffalo mozzarella and sweet basil.",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 19,
    name: "Punjabi Samosa Chaat",
    price: 170,
    rating: 4.8,
    type: "veg",
    desc: "Crushed golden potato samosas drizzled with whisked yoghurt, mint-coriander chutney and tangy tamarind glaze.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20,
    name: "Savoria Gourmet Veg Burger",
    price: 260,
    rating: 4.8,
    type: "veg",
    desc: "Artisanal grilled vegetable and lentil patty with aged cheddar, caramelized onions, crisp lettuce and house sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 21,
    name: "Sweet Corn & Vegetable Chowder",
    price: 180,
    rating: 4.7,
    type: "veg",
    desc: "Rich, creamy velvety sweet corn soup simmered with fine diced garden vegetables and cracked white pepper.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 22,
    name: "Veg Manchurian Gravy",
    price: 280,
    rating: 4.7,
    type: "veg",
    desc: "Crispy minced vegetable dumplings tossed in a savoury ginger, garlic, dark soy and scallion reduction.",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 23,
    name: "Kesar Pista Rasmalai Platter",
    price: 220,
    rating: 5.0,
    type: "veg",
    desc: "Spongy cottage cheese patties poached in condensed cardamom saffron milk, garnished with pistachio slivers.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 24,
    name: "Warm Gulab Jamun with Rabri",
    price: 190,
    rating: 5.0,
    type: "veg",
    desc: "Golden fried milk dough dumplings soaked in saffron sugar syrup, accompanied by chilled rich rabri.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80"
  }
];

// Non-Vegetarian Signature Dishes (Top 8 dishes for Non-Veg view: 2 rows × 4 food cards = 8 items)
const nonVegDishes = [
  {
    id: 101,
    name: "Dum Hyderabadi Chicken Biryani",
    price: 440,
    rating: 5.0,
    type: "non-veg",
    desc: "Aged long-grain Basmati rice and marinated chicken cooked on 'Dum' with saffron, brown onions and fresh mint.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 102,
    name: "Old Delhi Butter Chicken",
    price: 460,
    rating: 5.0,
    type: "non-veg",
    desc: "Tender tandoori chicken cooked in rich satin-smooth tomato gravy with churned butter and dried fenugreek.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 103,
    name: "Nizami Mutton Dum Biryani",
    price: 560,
    rating: 4.9,
    type: "non-veg",
    desc: "Tender young mutton cuts marinated in Awadhi spices, layered with fragrant saffron rice and kewra essence.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 104,
    name: "Bhatinda Tandoori Chicken",
    price: 490,
    rating: 4.9,
    type: "non-veg",
    desc: "Whole chicken marinated overnight in mustard oil, roasted garlic and house spices, roasted in clay oven.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 105,
    name: "Amritsari Crispy Fish Fry",
    price: 480,
    rating: 4.8,
    type: "non-veg",
    desc: "Fresh water fish fillets coated in seasoned carom seed gram flour batter, fried to golden crispness.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 106,
    name: "Kashmiri Mutton Rogan Josh",
    price: 580,
    rating: 5.0,
    type: "non-veg",
    desc: "Slow-braised tender goat meat cooked with ratan jot, Kashmiri chilies, fennel powder and aromatic cloves.",
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 107,
    name: "Coastal Malabar Prawn Curry",
    price: 590,
    rating: 4.9,
    type: "non-veg",
    desc: "Plump tiger prawns simmered in fragrant coconut milk, kudampuli tamarind and tempered mustard seeds.",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 108,
    name: "Crispy Barbecue Chicken Wings",
    price: 390,
    rating: 4.8,
    type: "non-veg",
    desc: "Juicy chicken wings double-tossed in smoky hickory barbecue glaze, toasted sesame seeds and fresh scallions.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80"
  },
  // Additional Non-Veg Delicacies for library & All-Dishes balance:
  {
    id: 109,
    name: "Chicken Schezwan Fried Rice",
    price: 360,
    rating: 4.8,
    type: "non-veg",
    desc: "Aromatic jasmine rice wok-tossed with spicy Schezwan chili paste, tender shredded chicken and fresh scallions.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 110,
    name: "Fiery Andhra Chicken 65",
    price: 380,
    rating: 4.8,
    type: "non-veg",
    desc: "Crispy bite-sized chicken morsels tossed with curry leaves, cracked mustard seeds and green chili paste.",
    image: "https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 111,
    name: "Chicken Shawarma Roll",
    price: 290,
    rating: 4.8,
    type: "non-veg",
    desc: "Marinated slow-roasted rotisserie chicken wrapped in Lebanese bread with creamy toum garlic sauce and pickles.",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 112,
    name: "Lucknowi Galouti Mutton Kebab",
    price: 510,
    rating: 4.9,
    type: "non-veg",
    desc: "Royal melt-in-mouth smoked lamb patties infused with 16 exotic Awadhi herbs, served on saffron sheermal.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 113,
    name: "Golden Butter Garlic Prawns",
    price: 580,
    rating: 4.9,
    type: "non-veg",
    desc: "Juicy ocean prawns sautéed in garlic-infused Normandy butter, freshly cracked black pepper and parsley.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 114,
    name: "Tandoori Lamb Chops",
    price: 640,
    rating: 5.0,
    type: "non-veg",
    desc: "Prime lamb cutlets infused with nutmeg, mace and raw papaya, grilled over glowing charcoal embers.",
    image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=600&q=80"
  }
];

// 24 Items in "All Dishes" (6 rows × 4 cards = 24 items, containing both Veg & Non-Veg dishes)
const allDishes = [
  // Row 1 (Items 1-4)
  nonVegDishes[0],  // 1. Dum Hyderabadi Chicken Biryani (Non-Veg)
  vegDishes[0],     // 2. Paneer Butter Masala (Veg)
  nonVegDishes[1],  // 3. Old Delhi Butter Chicken (Non-Veg)
  vegDishes[1],     // 4. Mysore Masala Dosa (Veg)

  // Row 2 (Items 5-8)
  nonVegDishes[3],  // 5. Bhatinda Tandoori Chicken (Non-Veg)
  vegDishes[2],     // 6. Amritsari Chole Bhature (Veg)
  nonVegDishes[2],  // 7. Nizami Mutton Dum Biryani (Non-Veg)
  vegDishes[3],     // 8. Dal Makhani Grand Royale (Veg)

  // Row 3 (Items 9-12)
  nonVegDishes[4],  // 9. Amritsari Crispy Fish Fry (Non-Veg)
  vegDishes[4],     // 10. Shahi Malai Kofta (Veg)
  nonVegDishes[5],  // 11. Kashmiri Mutton Rogan Josh (Non-Veg)
  vegDishes[5],     // 12. Steamed Idli Sambar Platter (Veg)

  // Row 4 (Items 13-16)
  nonVegDishes[6],  // 13. Coastal Malabar Prawn Curry (Non-Veg)
  vegDishes[16],    // 14. Garlic Butter Tandoori Naan (Veg)
  nonVegDishes[8],  // 15. Chicken Schezwan Fried Rice (Non-Veg)
  vegDishes[15],    // 16. Wok-Tossed Veg Hakka Noodles (Veg)

  // Row 5 (Items 17-20)
  nonVegDishes[7],  // 17. Crispy Barbecue Chicken Wings (Non-Veg)
  vegDishes[17],    // 18. Woodfired Margherita Pizza (Veg)
  nonVegDishes[11], // 19. Lucknowi Galouti Mutton Kebab (Non-Veg)
  vegDishes[19],    // 20. Savoria Gourmet Veg Burger (Veg)

  // Row 6 (Items 21-24)
  nonVegDishes[9],  // 21. Fiery Andhra Chicken 65 (Non-Veg)
  vegDishes[9],     // 22. Jeera & Ghee Basmati Rice (Veg)
  nonVegDishes[12], // 23. Golden Butter Garlic Prawns (Non-Veg)
  vegDishes[23]     // 24. Shahi Gulab Jamun with Rabri (Veg)
];

// Unified library of all food items for cart lookups
const allFoodLibrary = [...vegDishes, ...nonVegDishes];

// =============================================================================
// 2. STATE MANAGEMENT
// =============================================================================
let activeMenuCategory = "all"; // 'all', 'veg', 'non-veg'
let currentSearchQuery = "";
let currentSort = "featured";
let cart = [];

// =============================================================================
// 3. INITIALIZATION ON DOM READY
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Systems
  setupStickyHeader();
  setupNavigation();
  setupMobileDrawer();
  setupCart();
  setupReservation();
  setupMenuEventListeners();

  // Render initial menu (All Items, exactly 24 dishes)
  renderMenu();

  // Reservation date defaults
  const dateInput = document.getElementById("res-date");
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split("T")[0];
    dateInput.min = new Date().toISOString().split("T")[0];
  }

  // Newsletter form
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector("input[type='email']").value;
      showToast(`Welcome to the Savoria Circle! We've sent a welcome gift to ${email}.`);
      newsletterForm.reset();
    });
  }
});

// =============================================================================
// 4. MENU CATEGORY SWITCHING & FILTER ENGINE
// =============================================================================
function switchMenuCategory(categoryKey) {
  activeMenuCategory = categoryKey;

  const btnAll = document.getElementById("menu-btn-all");
  const btnVeg = document.getElementById("menu-btn-veg");
  const btnNonVeg = document.getElementById("menu-btn-non-veg");

  // Reset inactive buttons
  const baseInactive = "menu-category-btn px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2.5 bg-[#181c24] text-gray-300 hover:text-white border border-gray-800 hover:border-[#d4af37]/50 cursor-pointer";
  const vegInactive = "menu-category-btn px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2.5 bg-[#181c24] text-gray-300 hover:text-white border border-gray-800 hover:border-emerald-500/50 hover:bg-[#1a2322] cursor-pointer";
  const nonVegInactive = "menu-category-btn px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2.5 bg-[#181c24] text-gray-300 hover:text-white border border-gray-800 hover:border-rose-500/50 hover:bg-[#26171d] cursor-pointer";

  if (btnAll) btnAll.className = baseInactive;
  if (btnVeg) btnVeg.className = vegInactive;
  if (btnNonVeg) btnNonVeg.className = nonVegInactive;

  // Highlight active button with gold gradient
  const activeClass = "menu-category-btn active px-8 py-3.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2.5 shadow-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] text-black ring-2 ring-[#d4af37]/60 cursor-pointer";
  
  if (categoryKey === "all" && btnAll) {
    btnAll.className = activeClass;
  } else if (categoryKey === "veg" && btnVeg) {
    btnVeg.className = activeClass;
  } else if (categoryKey === "non-veg" && btnNonVeg) {
    btnNonVeg.className = activeClass;
  }

  // Update Category text indicator badge (NO numbers)
  const displayEl = document.getElementById("active-category-display");

  if (displayEl) {
    const titles = {
      "all": "Category: All Items",
      "veg": "Category: Veg",
      "non-veg": "Category: Non-Veg"
    };
    displayEl.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
      <span>${titles[categoryKey] || "Category: All Items"}</span>
    `;
  }

  // Smooth render
  renderMenu();
}

function setupMenuEventListeners() {
  const searchInput = document.getElementById("menu-search-input");
  const clearBtn = document.getElementById("menu-search-clear");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        if (currentSearchQuery.length > 0) {
          clearBtn.classList.remove("hidden");
        } else {
          clearBtn.classList.add("hidden");
        }
      }
      renderMenu();
    });
  }
}

function clearMenuSearch() {
  const searchInput = document.getElementById("menu-search-input");
  const clearBtn = document.getElementById("menu-search-clear");
  if (searchInput) searchInput.value = "";
  if (clearBtn) clearBtn.classList.add("hidden");
  currentSearchQuery = "";
  renderMenu();
}

function handleMenuSort() {
  const sortSelect = document.getElementById("menu-sort-select");
  if (sortSelect) {
    currentSort = sortSelect.value;
    renderMenu();
  }
}

function resetMenuFilters() {
  clearMenuSearch();
  switchMenuCategory("all");
  const sortSelect = document.getElementById("menu-sort-select");
  if (sortSelect) sortSelect.value = "featured";
  currentSort = "featured";
  renderMenu();
}

// Reusable Compact Dish Card Generator (4-Column Layout, Equal Heights)
function renderDishCard(item) {
  const isVeg = item.type === "veg";
  const typeBadge = isVeg
    ? `<div class="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-[#0b0c10]/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-emerald-500/40 shadow-sm">
         <span class="veg-indicator"></span>
         <span class="text-[9px] text-emerald-400 font-bold tracking-wider uppercase">VEG</span>
       </div>`
    : `<div class="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-[#0b0c10]/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-rose-500/40 shadow-sm">
         <span class="non-veg-indicator"></span>
         <span class="text-[9px] text-rose-400 font-bold tracking-wider uppercase">NON-VEG</span>
       </div>`;

  return `
    <div class="menu-food-card glass-card rounded-xl overflow-hidden flex flex-col justify-between group border border-gray-800/80 hover:border-[#d4af37]/50 bg-[#161a22] transition-all duration-300 shadow-md h-full">
      
      <!-- Compact Food Photograph Container (Aspect 16:10 for smaller, consistent height) -->
      <div class="relative overflow-hidden aspect-[16/10] bg-[#0e1117] flex-shrink-0">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95" 
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#161a22] via-transparent to-transparent opacity-75"></div>
        
        <!-- Veg / Non-Veg Indicator -->
        ${typeBadge}

        <!-- Star Rating -->
        <div class="absolute top-2.5 right-2.5 bg-[#0b0c10]/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#d4af37]/30 flex items-center gap-1 text-[10px] font-bold text-[#f5d77f] shadow-sm">
          <i data-lucide="star" class="w-2.5 h-2.5 fill-[#d4af37] text-[#d4af37]"></i>
          <span>${item.rating.toFixed(1)}</span>
        </div>
      </div>

      <!-- Food Details Card Body (Compact & Uniform Height) -->
      <div class="p-3.5 sm:p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 class="font-serif text-sm sm:text-base font-bold text-white mb-1 line-clamp-1 group-hover:text-[#f5d77f] transition-colors leading-snug" title="${item.name}">
            ${item.name}
          </h3>
          <p class="text-[11px] sm:text-xs text-gray-400 line-clamp-2 leading-relaxed mb-3 h-[2rem] sm:h-[2.25rem] overflow-hidden" title="${item.desc}">
            ${item.desc}
          </p>
        </div>

        <!-- Price & Add to Cart Action -->
        <div class="mt-auto pt-2.5 border-t border-gray-800/80 flex items-center justify-between gap-2">
          <div>
            <span class="text-[9px] text-gray-500 uppercase tracking-wider block font-semibold">Price</span>
            <span class="font-serif font-bold text-base sm:text-lg text-[#f5d77f] leading-none">₹${item.price}</span>
          </div>

          <button 
            onclick="addToCartById(${item.id})" 
            class="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b38e22] text-black font-bold text-xs flex items-center gap-1.5 shadow-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            title="Add ${item.name} to Cart"
          >
            <i data-lucide="plus" class="w-3.5 h-3.5 stroke-[2.5]"></i>
            <span>Add</span>
          </button>
        </div>

      </div>

    </div>
  `;
}

// Reusable Menu Category Block Generator (Compact 4-Column Grid)
function renderBlockHTML(title, subtitle, tagText, tagClass, tagIconHtml, items, blockId) {
  if (items.length === 0) return "";

  return `
    <div id="${blockId}" class="menu-category-block space-y-4 sm:space-y-5">
      
      <!-- Block Header with Title & Badge -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-gray-800/80">
        <div>
          <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${tagClass} mb-1.5">
            ${tagIconHtml}
            <span>${tagText}</span>
          </div>
          <h3 class="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
            ${title}
          </h3>
          <p class="text-xs text-gray-400 mt-0.5 max-w-2xl leading-relaxed">
            ${subtitle}
          </p>
        </div>
      </div>

      <!-- Food Items Grid: Exactly 4 cards per row on desktop (lg), 2 on tablet, 1 on mobile -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        ${items.map(item => renderDishCard(item)).join("")}
      </div>

    </div>
  `;
}

function renderMenu() {
  const container = document.getElementById("menu-food-grid");
  const emptyState = document.getElementById("menu-empty-state");
  const countEl = document.getElementById("menu-results-count");
  const dimensionsEl = document.getElementById("menu-grid-dimensions");
  if (!container) return;

  // Process list with search query & sort order
  const processList = (rawList) => {
    let list = [...rawList];
    if (currentSearchQuery) {
      list = list.filter(item => {
        const matchName = item.name.toLowerCase().includes(currentSearchQuery);
        const matchDesc = item.desc.toLowerCase().includes(currentSearchQuery);
        return matchName || matchDesc;
      });
    }
    if (currentSort === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (currentSort === "rating-desc") {
      list.sort((a, b) => b.rating - a.rating);
    }
    return list;
  };

  const processedAll = processList(allDishes);
  const processedVeg = processList(vegDishes);
  const processedNonVeg = processList(nonVegDishes.slice(0, 8));

  let blocksHTML = "";
  let totalVisible = 0;

  if (activeMenuCategory === "all") {
    // Show all 3 blocks: All Items Block, Veg Block, and Non-Veg Block
    const allBlock = renderBlockHTML(
      "All Items Block",
      "Our signature selection of 24 popular dishes featuring both vegetarian and non-vegetarian masterworks (6 rows × 4 columns).",
      "Signature Selection",
      "bg-[#d4af37]/15 text-[#f5d77f] border border-[#d4af37]/30",
      `<i data-lucide="sparkles" class="w-3.5 h-3.5 text-[#d4af37]"></i>`,
      processedAll,
      "block-all-items"
    );

    const vegBlock = renderBlockHTML(
      "Veg Block",
      "24 authentic pure vegetarian delicacies made with fresh ingredients, rich gravies, and royal spices (6 rows × 4 columns).",
      "Pure Vegetarian",
      "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
      `<span class="veg-indicator"></span>`,
      processedVeg,
      "block-veg"
    );

    const nonVegBlock = renderBlockHTML(
      "Non-Veg Block",
      "8 signature non-vegetarian specialties including royal biryanis, roasted tandoori chicken, and coastal curries (2 rows × 4 columns).",
      "Artisanal Non-Vegetarian",
      "bg-rose-500/15 text-rose-400 border border-rose-500/30",
      `<span class="non-veg-indicator"></span>`,
      processedNonVeg,
      "block-non-veg"
    );

    blocksHTML = allBlock + vegBlock + nonVegBlock;
    totalVisible = processedAll.length + processedVeg.length + processedNonVeg.length;

    if (countEl) countEl.textContent = "All Items, Veg & Non-Veg";
    if (dimensionsEl) dimensionsEl.textContent = "(Compact 4-Column Grid)";

  } else if (activeMenuCategory === "veg") {
    // Show Veg Block only
    blocksHTML = renderBlockHTML(
      "Veg Block",
      "24 authentic pure vegetarian delicacies made with fresh ingredients, rich gravies, and royal spices (6 rows × 4 columns).",
      "Pure Vegetarian",
      "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
      `<span class="veg-indicator"></span>`,
      processedVeg,
      "block-veg"
    );
    totalVisible = processedVeg.length;

    if (countEl) countEl.textContent = "Pure Veg Dishes";
    if (dimensionsEl) dimensionsEl.textContent = "(6 rows × 4 columns)";

  } else if (activeMenuCategory === "non-veg") {
    // Show Non-Veg Block only
    blocksHTML = renderBlockHTML(
      "Non-Veg Block",
      "8 signature non-vegetarian specialties including royal biryanis, roasted tandoori chicken, and coastal curries (2 rows × 4 columns).",
      "Artisanal Non-Vegetarian",
      "bg-rose-500/15 text-rose-400 border border-rose-500/30",
      `<span class="non-veg-indicator"></span>`,
      processedNonVeg,
      "block-non-veg"
    );
    totalVisible = processedNonVeg.length;

    if (countEl) countEl.textContent = "Non-Veg Specialties";
    if (dimensionsEl) dimensionsEl.textContent = "(2 rows × 4 columns)";
  }

  // Empty state handling
  if (totalVisible === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");
  container.innerHTML = blocksHTML;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// =============================================================================
// 5. SHOPPING CART ENGINE (With Indian Rupees ₹ & Live Calculation)
// =============================================================================
function setupCart() {
  const openCartBtn = document.getElementById("open-cart-btn");
  const closeCartBtn = document.getElementById("close-cart-btn");
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-drawer-backdrop");

  const openCart = () => {
    if (!drawer) return;
    drawer.classList.remove("translate-x-full");
    if (backdrop) backdrop.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    if (!drawer) return;
    drawer.classList.add("translate-x-full");
    if (backdrop) backdrop.classList.add("hidden");
    document.body.style.overflow = "";
  };

  if (openCartBtn) openCartBtn.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if (backdrop) backdrop.addEventListener("click", closeCart);
}

function addToCartById(dishId) {
  const dish = allFoodLibrary.find(i => i.id === dishId);
  if (!dish) return;

  const existing = cart.find(i => i.id === dishId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...dish, quantity: 1 });
  }

  updateCartUI();
  showToast(`Added ${dish.name} (₹${dish.price}) to your cart!`);
}

function orderDish(name, price) {
  const dish = allFoodLibrary.find(i => i.name.toLowerCase() === name.toLowerCase()) || { id: Date.now(), name, price, quantity: 1 };
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...dish, quantity: 1 });
  }
  updateCartUI();
  showToast(`Added ${name} (₹${price}) to your cart!`);
}

function updateCartQuantity(dishId, delta) {
  const item = cart.find(i => i.id === dishId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== dishId);
  }
  updateCartUI();
}

function removeFromCart(dishId) {
  cart = cart.filter(i => i.id !== dishId);
  updateCartUI();
}

function updateCartUI() {
  const container = document.getElementById("cart-items-container");
  const emptyMsg = document.getElementById("cart-empty-message");
  const checkoutSec = document.getElementById("cart-checkout-section");
  const subtotalEl = document.getElementById("cart-subtotal");
  const taxEl = document.getElementById("cart-tax");
  const totalEl = document.getElementById("cart-total");
  const counterPill = document.getElementById("cart-counter-pill");

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);

  if (counterPill) {
    counterPill.textContent = totalItems;
    if (totalItems > 0) {
      counterPill.classList.remove("hidden");
    } else {
      counterPill.classList.add("hidden");
    }
  }

  if (!container) return;

  if (cart.length === 0) {
    if (emptyMsg) emptyMsg.classList.remove("hidden");
    if (checkoutSec) checkoutSec.classList.add("hidden");
    container.innerHTML = "";
    return;
  }

  if (emptyMsg) emptyMsg.classList.add("hidden");
  if (checkoutSec) checkoutSec.classList.remove("hidden");

  container.innerHTML = cart.map(item => `
    <div class="flex items-center gap-3 bg-[#181c24] p-3 rounded-2xl border border-gray-800">
      <img src="${item.image || 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80'}" alt="${item.name}" class="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
      <div class="flex-grow min-w-0">
        <h4 class="font-medium text-white text-xs sm:text-sm truncate">${item.name}</h4>
        <span class="text-xs text-[#d4af37] font-semibold">₹${item.price} each</span>
        <div class="flex items-center gap-2 mt-2">
          <div class="flex items-center bg-[#0b0c10] rounded-lg border border-gray-700">
            <button onclick="updateCartQuantity(${item.id}, -1)" class="px-2 py-0.5 text-gray-400 hover:text-white font-bold text-xs">-</button>
            <span class="px-2 text-xs font-semibold text-white">${item.quantity}</span>
            <button onclick="updateCartQuantity(${item.id}, 1)" class="px-2 py-0.5 text-gray-400 hover:text-white font-bold text-xs">+</button>
          </div>
          <button onclick="removeFromCart(${item.id})" class="text-[11px] text-red-400 hover:text-red-300 ml-1">Remove</button>
        </div>
      </div>
      <span class="font-serif font-bold text-sm text-white flex-shrink-0">₹${item.price * item.quantity}</span>
    </div>
  `).join("");

  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const gst = Math.round(subtotal * 0.05); // 5% GST on Restaurant Services in India
  const total = subtotal + gst;

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (taxEl) taxEl.textContent = `₹${gst}`;
  if (totalEl) totalEl.textContent = `₹${total}`;
}

function completeCheckout() {
  if (cart.length === 0) return;
  const orderId = "SAV-IND-" + Math.floor(100000 + Math.random() * 900000);
  const totalAmount = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const totalWithTax = totalAmount + Math.round(totalAmount * 0.05);

  cart = [];
  updateCartUI();

  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-drawer-backdrop");
  if (drawer) drawer.classList.add("translate-x-full");
  if (backdrop) backdrop.classList.add("hidden");
  document.body.style.overflow = "";

  showToast(`Order #${orderId} for ₹${totalWithTax} placed successfully! Kitchen is preparing your dishes.`);
}

// =============================================================================
// 6. STICKY HEADER & SCROLLSPY CONTROLLERS
// =============================================================================
function setupStickyHeader() {
  const header = document.getElementById("site-header");
  const navInner = document.getElementById("nav-inner");
  if (!header || !navInner) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("nav-scrolled");
      navInner.classList.remove("h-20");
      navInner.classList.add("h-16");
    } else {
      header.classList.remove("nav-scrolled");
      navInner.classList.remove("h-16");
      navInner.classList.add("h-20");
    }
  });
}

function setupNavigation() {
  const desktopLinks = document.querySelectorAll(".nav-item-link");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  const sections = [
    { id: "home", navKey: "home" },
    { id: "about-us", navKey: "about-us" },
    { id: "menu", navKey: "menu" },
    { id: "specialities", navKey: "specialities" },
    { id: "gallery", navKey: "gallery" },
    { id: "reservations", navKey: "reservations" },
    { id: "offers", navKey: "offers" },
    { id: "reviews", navKey: "reviews" },
    { id: "contact-us", navKey: "contact-us" }
  ];

  function setActiveNav(navKey) {
    desktopLinks.forEach(link => {
      if (link.getAttribute("data-nav") === navKey) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    mobileLinks.forEach(link => {
      if (link.getAttribute("data-nav") === navKey) {
        link.classList.add("active", "text-[#d4af37]", "font-semibold", "bg-[#1a1f29]/70");
        link.classList.remove("text-gray-300");
      } else {
        link.classList.remove("active", "text-[#d4af37]", "font-semibold", "bg-[#1a1f29]/70");
        link.classList.add("text-gray-300");
      }
    });
  }

  // Smooth scroll click handler
  [...desktopLinks, ...mobileLinks].forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetSection = document.querySelector(href);
        if (targetSection) {
          if (href === "#home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            const headerHeight = 70;
            const targetPos = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({ top: targetPos, behavior: "smooth" });
          }
          const navKey = link.getAttribute("data-nav");
          if (navKey) setActiveNav(navKey);
          if (window.closeDrawer) window.closeDrawer();
        }
      }
    });
  });

  // IntersectionObserver for Scrollspy
  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -65% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const found = sections.find(s => s.id === entry.target.id);
        if (found) {
          setActiveNav(found.navKey);
        }
      }
    });
  }, observerOptions);

  sections.forEach(s => {
    const el = document.getElementById(s.id);
    if (el) observer.observe(el);
  });
}

// =============================================================================
// 7. RESPONSIVE MOBILE DRAWER
// =============================================================================
function setupMobileDrawer() {
  const toggleBtn = document.getElementById("mobile-toggle-btn");
  const closeBtn = document.getElementById("close-drawer-btn");
  const drawer = document.getElementById("mobile-drawer");
  const backdrop = document.getElementById("mobile-drawer-backdrop");

  if (!toggleBtn || !drawer) return;

  window.openDrawer = function() {
    toggleBtn.classList.add("hamburger-active");
    toggleBtn.setAttribute("aria-expanded", "true");
    drawer.classList.remove("translate-x-full");
    if (backdrop) {
      backdrop.classList.remove("opacity-0", "pointer-events-none");
      backdrop.classList.add("opacity-100", "pointer-events-auto");
    }
    document.body.style.overflow = "hidden";
  };

  window.closeDrawer = function() {
    toggleBtn.classList.remove("hamburger-active");
    toggleBtn.setAttribute("aria-expanded", "false");
    drawer.classList.add("translate-x-full");
    if (backdrop) {
      backdrop.classList.remove("opacity-100", "pointer-events-auto");
      backdrop.classList.add("opacity-0", "pointer-events-none");
    }
    document.body.style.overflow = "";
  };

  toggleBtn.addEventListener("click", () => {
    if (drawer.classList.contains("translate-x-full")) {
      openDrawer();
    } else {
      closeDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !drawer.classList.contains("translate-x-full")) {
      closeDrawer();
    }
  });
}

// =============================================================================
// 8. TABLE RESERVATIONS
// =============================================================================
function setupReservation() {
  const form = document.getElementById("reservation-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("res-name").value;
    const phone = document.getElementById("res-phone").value;
    const guests = document.getElementById("res-guests").value;
    const seating = document.getElementById("res-seating").value;
    const date = document.getElementById("res-date").value;
    const time = document.getElementById("res-time").value;
    const notes = document.getElementById("res-notes").value;

    const bookingRef = "RES-" + Math.floor(1000 + Math.random() * 9000);

    const modalContent = document.getElementById("res-modal-content");
    if (modalContent) {
      modalContent.innerHTML = `
        <div class="text-center mb-6">
          <div class="w-16 h-16 bg-[#d4af37]/20 border border-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-3 text-[#d4af37]">
            <i data-lucide="check" class="w-8 h-8"></i>
          </div>
          <h3 class="font-serif text-2xl font-bold text-white">Table Reserved!</h3>
          <p class="text-gray-300 text-sm mt-1">We look forward to hosting you, ${name}.</p>
          <div class="mt-3 px-3 py-1 bg-[#0b0c10] rounded-full border border-[#d4af37]/30 text-xs inline-block">
            <span class="text-gray-400">Confirmation Code:</span> 
            <span class="font-mono text-[#f5d77f] font-bold ml-1">${bookingRef}</span>
          </div>
        </div>

        <div class="space-y-2 bg-[#0b0c10] p-4 rounded-xl border border-gray-800 text-xs">
          <div class="flex justify-between">
            <span class="text-gray-400">Date & Time:</span>
            <span class="font-medium text-white">${date} at ${time}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Party Size:</span>
            <span class="font-medium text-white">${guests} Guests</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Seating Area:</span>
            <span class="font-medium text-white">${seating}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Contact:</span>
            <span class="font-medium text-white">${phone}</span>
          </div>
          ${notes ? `
          <div class="pt-2 border-t border-gray-800 text-gray-400">
            <span class="text-gray-300 font-medium">Notes:</span> ${notes}
          </div>
          ` : ''}
        </div>
      `;
    }

    const modal = document.getElementById("reservation-modal");
    if (modal) modal.classList.remove("hidden");
    if (window.lucide) window.lucide.createIcons();

    form.reset();
  });
}

function closeReservationModal() {
  const modal = document.getElementById("reservation-modal");
  if (modal) modal.classList.add("hidden");
}

// =============================================================================
// 9. CHEF PHOTO SWITCHER, LIGHTBOX & TOAST NOTIFICATIONS
// =============================================================================
function switchChefPhoto(mode) {
  const img = document.getElementById("chef-action-img");
  const subtitle = document.getElementById("chef-action-subtitle");
  const hearthBtn = document.getElementById("chef-photo-hearth-btn");
  const platingBtn = document.getElementById("chef-photo-plating-btn");

  if (!img) return;

  if (mode === "hearth") {
    img.src = "chef-action.jpg";
    img.alt = "Professional Executive Chef searing fresh ingredients in a hot pan in a moody, low-light kitchen with warm golden-hour sunlight and rising steam";
    if (subtitle) subtitle.textContent = "Chef Antoine Laurent Searing at the Range";
    if (hearthBtn) {
      hearthBtn.className = "px-2.5 py-1 rounded-lg bg-[#d4af37] text-black font-bold transition-all";
    }
    if (platingBtn) {
      platingBtn.className = "px-2.5 py-1 rounded-lg text-gray-300 hover:text-white font-medium transition-all";
    }
  } else if (mode === "plating") {
    img.src = "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85";
    img.alt = "Chef Antoine Laurent delicately microplaning truffles onto a signature dish under heat lamps";
    if (subtitle) subtitle.textContent = "Chef Antoine Laurent Finishing Black Truffle Plating";
    if (platingBtn) {
      platingBtn.className = "px-2.5 py-1 rounded-lg bg-[#d4af37] text-black font-bold transition-all";
    }
    if (hearthBtn) {
      hearthBtn.className = "px-2.5 py-1 rounded-lg text-gray-300 hover:text-white font-medium transition-all";
    }
  }
}

function openLightbox(src, title) {
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const titleEl = document.getElementById("lightbox-title");

  if (!modal || !img) return;
  img.src = src;
  if (titleEl) titleEl.textContent = title;
  modal.classList.remove("hidden");
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (modal) modal.classList.add("hidden");
}

function openDiscoverModal() {
  const modal = document.getElementById("discover-modal");
  if (modal) modal.classList.remove("hidden");
}

function closeDiscoverModal() {
  const modal = document.getElementById("discover-modal");
  if (modal) modal.classList.add("hidden");
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "flex items-center gap-3 bg-[#181c24] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-[#d4af37]/50 animate-fade-in transition-all duration-300 max-w-sm pointer-events-auto";
  toast.innerHTML = `
    <div class="text-[#d4af37] flex-shrink-0">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    </div>
    <span class="text-xs sm:text-sm font-medium leading-snug">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3500);
}
