
## 👇 Full Stack Project:-

---

## 🍽️ Hotel-Management-System

🚀 Hotel Management System web app built with HTML, CSS, JavaScript, PHP, and MySQL.
Features include an interactive dashboard, dynamic food menu, add-to-cart system, order placement, and real-time order storage in MySQL. It also includes an order receipt popup and an admin order viewer for easy management.

---

## ✨ Features

* 🚀 **Start Page** → Welcome screen with entry point
* 🏠 **Dashboard** → Choose Menu or Cart
* 📋 **Dynamic Menu** → Categories: Dessert, Fast Food, Punjabi, Gujarati, Kathiyawadi, Chinese
* 🛒 **Cart System** → Add, remove, and clear items
* ✅ **Place Order** → Saves order to MySQL via PHP
* 🧾 **Order Receipt Popup** → Shows purchased items & total
* 📂 **Order Viewer (Admin)** → View all saved orders in a table

---

## 🛠️ Tech Stack

* **Frontend**: HTML, CSS, JavaScript
* **Backend**: PHP
* **Database**: MySQL (phpMyAdmin / XAMPP)
* **Server**: Apache (via XAMPP)

---

## 📂 Project Structure

```
hotel-management-system/
│
├── index.html          # Main UI
├── style.css           # Styling
├── script.js           # Menu & cart logic
├── db.php              # Database connection
├── save_order.php      # Saves order to MySQL
├── view_orders.php     # Admin view orders
```

---

## ⚙️ Installation & Setup

1. Install [XAMPP](https://www.apachefriends.org).
2. Start **Apache** and **MySQL** from XAMPP Control Panel.
3. Copy project folder into:

   ```
   C:/xampp/htdocs/hotel/
   ```
4. Create database in phpMyAdmin:

   * Open [http://localhost/phpmyadmin](http://localhost/phpmyadmin)
   * Create DB: `hotel_db`
   * Run SQL:

     ```sql
     CREATE TABLE orders (
         id INT AUTO_INCREMENT PRIMARY KEY,
         items JSON NOT NULL,
         total DECIMAL(10,2) NOT NULL,
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```
5. Open site in browser:

   ```
   http://localhost/hotel/index.html
   ```
6. To view all orders:

   ```
   http://localhost/hotel/view_orders.php
   ```

---

## 🚀 Future Improvements

* User login & authentication
* Online payment integration
* Separate admin dashboard with analytics
* Responsive design for mobile

---

## 🤝 Contributing

1. Fork this repo
2. Create a feature branch (`feature-new`)
3. Commit changes
4. Push branch & submit PR

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 👍 Credit & Details

   My Project-

1. Full Stack Devloped Website- "Hotel Management System"

2. Created- The Smit Prajapati

3. From- Anand,Gujarat,india

4. Created Date- 29-09-2025 | Monday

5. Time- 8:00PM - Evening

6. Use IDE - VS Code

7. Core Layer- Frontend, Database, Backend

---

👉 Thank You.
