# 🍽️ Savoria — Modern Bistro & Artisanal Bar

A luxury, fully-responsive, interactive modern restaurant web application built with HTML5, Tailwind CSS, Lucide Icons, and Vanilla JavaScript.

---

## 🌟 Key Features

### 1. **Hero & Brand Ambiance**
- High-definition gastronomic photography with smooth radial dark vignette overlays.
- Michelin Guide 2026 distinction badge.
- Instant CTA buttons to book a table, explore the seasonal menu, and order online.
- Key highlights counter (Zero-waste organic sourcing, 450+ curated cellar wines, A5 Wagyu certification).

### 2. **Interactive Seasonal Menu & Online Ordering**
- **Dynamic Category Filtering**: All, Starters & Crudo, Signature Mains, Decadent Desserts, Handcrafted Cocktails & Reserve Wines.
- **Dietary & Signature Badges**: Chef's Signature, Plant-Based/Vegan, Gluten-Free.
- **Add to Order Tray**: Instant addition to shopping cart with real-time feedback toast notifications.
- **Chef's Grand Degustation Banner**: Highlighting the 7-course omakase tasting menu with sommelier pairings.

### 3. **Slide-Over Cart & Instant Checkout**
- Slide-over drawer with item quantity adjustments (`+` / `-` / `Remove`).
- Dining method toggle: **Dine-In**, **Curbside Pickup**, or **White Glove Delivery**.
- Automatic calculation of subtotal, sales tax (8.25%), and delivery fees.
- Realistic Checkout modal presenting an instant order reference code (`SAV-XXXXXX`), estimated kitchen prep time (25-35 mins), and item breakdown.

### 4. **Table Reservation System**
- Complete reservation booking engine:
  - Guest party size selector (1 to 10+ guests).
  - Seating area selection (Main Dining Hall, Garden Veranda Terrace, Chef's Counter, Private Wine Cellar Suite).
  - Date picker (pre-set to tomorrow with minimum date restriction).
  - Time slot selector with Lunch and Dinner seatings.
  - Special occasions and allergy/dietary notes field.
- Instant luxury table reservation ticket modal with booking confirmation code (`RES-XXXX`).

### 5. **Atmospheric Photo Gallery with Lightbox**
- Filterable gallery tabs (Dining Rooms, Culinary Craft, Cocktail & Wine Lounge).
- Hover zoom animations and full-screen lightbox preview modal.

### 6. **Dining Etiquette & Concierge Information**
- Smart elegant dress code guidelines, grace period policies, and complimentary valet info.
- Operating hours breakdown for weekdays, weekends, and Sunday brunch.
- Styled map preview card with interactive directions CTA and transportation notes.

### 7. **Customer Reviews & Accolades**
- Verified critic quotes from the Michelin Guide, Food & Wine, and dinner patrons.
- Five-star rating visualizations.

### 8. **Responsive Mobile Navigation**
- Glassmorphic top navigation with mobile drawer menu, cart indicator badge, and direct booking buttons.

---

## 🚀 How to Run & Preview

Since the application uses pure client-side web technologies and modern CDN libraries (Tailwind CSS, Lucide Icons, Google Fonts), **no build step, npm, or server is required**.

### Option 1: Open Directly in Browser
Double-click `index.html` or right-click `index.html` and choose **Open with > Chrome / Edge / Brave / Firefox**.

### Option 2: Live Server (VS Code / Antigravity)
If you have the "Live Server" extension installed, right-click `index.html` and click **"Open with Live Server"**.

---

## 📁 Project Structure

```text
restaurant-website/
├── index.html       # Complete semantic HTML layout, sections, and modals
├── styles.css       # Custom luxury typography, glassmorphism, buttons, animations
├── script.js        # Menu dataset, cart management, reservations, and UI handlers
└── README.md        # Documentation and guide
```

---

## 🎨 Customization Tips

- **Change Restaurant Name / Branding**: Search and replace `SAVORIA` across `index.html`.
- **Update Menu Items**: Open `script.js` and modify the `menuItems` array with your own dish names, prices, descriptions, and photo URLs.
- **Change Colors**: Modify `--color-primary: #d4af37` in `styles.css` to change the gold accent color to any palette of your preference (e.g., emerald green, rose gold, or copper).
