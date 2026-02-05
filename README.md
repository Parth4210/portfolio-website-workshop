# Portfolio Website

A modern, responsive portfolio website built with React and React Router to showcase projects, skills, and professional experience.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Available Scripts](#available-scripts)
- [Pages & Routes](#pages--routes)
- [Project Structure Details](#project-structure-details)
- [Contributing](#contributing)

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Client-Side Routing** - Smooth navigation between pages using React Router
- **Projects Showcase** - Dedicated page to display your portfolio of work
- **About Section** - Tell your story and highlight your background
- **Contact Page** - Easy way for visitors to get in touch
- **Experience Section** - Showcase your professional background
- **Modern UI** - Clean and professional design

## 🛠 Tech Stack

- **React** - v19.2.4 (JavaScript library for building user interfaces)
- **React Router DOM** - v7.13.0 (Client-side routing)
- **React Scripts** - v5.0.1 (Build and test scripts)
- **CSS3** - For styling and responsive layouts
- **Node.js** - Runtime environment

### Testing & Quality Assurance

- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities
- **ESLint** - Code quality and consistency

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html              # Main HTML file
├── src/
│   ├── App.js                  # Main App component
│   ├── App.css                 # App styling
│   ├── index.js                # React entry point
│   ├── index.css               # Global styles
│   ├── reportWebVitals.js      # Performance monitoring
│   ├── setupTests.js           # Test configuration
│   │
│   ├── Common/
│   │   └── Header.js           # Navigation header component
│   │
│   ├── Components/             # Reusable UI components (expandable)
│   │
│   └── Pages/                  # Page components for routing
│       ├── Home.js             # Home page
│       ├── About.js            # About/Biography page
│       ├── Projects.js         # Projects showcase page
│       └── Contact.js          # Contact form page
│
├── package.json                # Project dependencies
├── README.md                   # This file
└── .gitignore                  # Git ignore file
```

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio_website/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🚀 Running the Project

### Development Mode

Start the development server with hot reloading:

```bash
npm start
```

The application will open at `http://localhost:3000` in your browser.

### Production Build

Create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 📜 Available Scripts

### `npm start`
- Runs the app in development mode
- Open [http://localhost:3000](http://localhost:3000) to view in browser
- Page reloads when you make changes
- Shows lint errors in the console

### `npm run build`
- Builds the app for production to the `build` folder
- Correctly bundles React in production mode
- Optimizes the build for the best performance

### `npm test`
- Launches the test runner in interactive watch mode
- Tests are written using Jest and React Testing Library

### `npm run eject`
- **Note: this is a one-way operation. Once you eject, you can't go back!**
- Exposes all configuration files and dependencies

## 🗺 Pages & Routes

The portfolio includes the following pages:

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Landing page with introduction |
| **About** | `/about` | Personal background and skills |
| **Projects** | `/projects` | Showcase of your work and portfolio projects |
| **Experience** | `/experience` | Professional experience and timeline |
| **Contact** | `/contact` | Contact form for visitors to reach out |

*Routes are configured through React Router DOM in the App.js component*

## 🏗 Project Structure Details

### Common/
- **Header.js** - Navigation component with links to all main pages

### Pages/
- **Home.js** - Main landing page
- **About.js** - Profile and background information
- **Projects.js** - Portfolio and project showcase
- **Contact.js** - Contact form and information

### Components/
- Currently empty, but ready for reusable UI components
- Add shared components here (buttons, cards, modals, etc.)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request with a clear description

## 📝 Notes

- All CSS styling is managed in `App.css` and individual component CSS files
- For better performance, consider code-splitting pages using React.lazy() and Suspense
- Add environment variables in a `.env` file for any API endpoints

## 📄 License

This project is open source and available under the appropriate license.

## 📧 Contact

For inquiries or questions about this portfolio, please visit the Contact page within the application.

---

**Last Updated**: February 2026
