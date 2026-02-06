# ⚡ Parth's Portfolio Website

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

> A premium, modern, and responsive developer portfolio featuring a deep navy theme, glassmorphism UI, and smooth animations.

---

## 🎨 Design & Features

This portfolio is crafted with a focus on aesthetics and user experience, inspired by modern "Premium Dark" developer themes.

- **🌌 Immersive Dark Theme** - Deep Navy background (`#0a192f`) with Teal (`#64ffda`) accents.
- **✨ Glassmorphism UI** - Frosted glass effects on the Navbar and cards.
- **🎭 Smooth Animations** - Staggered entry, scroll-triggered reveals, and hover effects using **Framer Motion**.
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile viewing.
- **🧭 Smart Navigation** - Navbar that hides on scroll-down and reveals on scroll-up.
- **📌 Interactive Projects** - Detailed project cards with direct GitHub and deployment links.
- **📬 Easy Contact** - Integrated contact form (UI) and social media links.

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Core** | React v19, React Router v7 |
| **Styling** | Vanilla CSS3 (Variables, Flexbox, Grid) |
| **Animations** | Framer Motion |
| **Icons** | React Icons (Feather, FontAwesome) |
| **Runtime** | Node.js v14+ |

---

## 🏗 Project Structure

```bash
frontend/
├── public/
│   ├── index.html          # Entry HTML
│   └── images/             # Static assets (dice-game.png, etc.)
├── src/
│   ├── App.js              # Main Layout Wrapper
│   ├── index.css           # Global Variables & Reset
│   │
│   ├── Components/
│   │   ├── Layout/
│   │   │   ├── Layout.js   # Main Page Wrapper
│   │   │   └── Sidebars.js # Fixed Socials & Email
│   │   └── Navbar/         # Smart Scroll Navbar
│   │
│   └── Pages/
│       ├── Home.js         # Hero Section with Animations
│       ├── Projects.js     # Portfolio Grid with Links
│       ├── Experience.js   # Professional Timeline
│       └── Contact.js      # Contact Form
└── package.json            # Dependencies
```

---

## � Getting Started

### Prerequisites

- **Node.js**: v14.0.0 or higher
- **npm**: v6.0.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Parth4210/Portfolio_website.git
   cd Portfolio_website/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`.

---

## 🌟 Contributing

Contributions are welcome! If you'd like to improve the site or add new features:

1. Fork the project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## � License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/Parth4210">Parth Wadhwa</a>
</p>
