# DhruvMart E-Commerce

A modern e-commerce frontend built with React.js, Tailwind CSS, and the FakeStoreAPI.

![DhruvMart Screenshot](./src/assets/screenshot.png)
![DhruvMart Screenshot](./src/assets/screenshot-1.png)

## Features

- Responsive home page with hero section
- Product listing page with search and filtering
- Shopping cart functionality
- Mini cart dropdown
- Full cart page with quantity adjustment
- Collections, About, and Contact pages
- Dark mode toggle
- Cart persistence using localStorage

## Technologies Used

- React.js (Vite)
- Tailwind CSS
- React Router
- Axios
- Heroicons
- FakeStoreAPI

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/dhruvjaiswal2981/dhruvmart-ecommerce.git
```

2. Install dependencies:
```bash
cd dhruvmart-ecommerce
npm install
```

3. Start the development server:
```bash
npm run dev
```
- Open your browser to http://localhost:5173

## Approach
1. Component Architecture:
    - Created reusable components (ProductCard, Header, Footer)
    - Organized pages and components logically
    - Used compound components where appropriate

2. State Management:
    - Implemented CartContext using React Context API
    - Managed cart state with localStorage persistence
    - Handled loading and error states

3. Styling:
    - Used Tailwind CSS for utility-first styling
    - Implemented responsive design principles
    - Added smooth transitions and hover effects

4. Routing:
    - Set up React Router for navigation
    - Created protected routes where needed
    - Implemented 404 handling

## File Structure
```bash
src/
    ├── assets/
    ├── components/
    │   ├── Cart/
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   ├── ProductCard.jsx
    │   └── index.js
    ├── context/
    │   └── CartContext.jsx
    ├── pages/
    │   ├── AboutPage.jsx
    │   ├── CartPage.jsx
    │   ├── CollectionsPage.jsx
    │   ├── ContactPage.jsx
    │   ├── HomePage.jsx
    │   ├── ProductPage.jsx
    │   └── index.js
    ├── App.jsx
    └── main.jsx
```

## 🚀 Deployment

- Frontend Deployment
    - Live Demo: The application is hosted on Netlify.
    - Access it here: https://dhruv-mart.netlify.app/

## Live Demo
    - Demo Video Link : https://drive.google.com/file/d/1vBDE5ZiIwOS8eCHBXThmKCDR0Jf9TOBC/view?usp=sharing

## 📌 Author
- 💻 Developed by Dhruv Jaiswal
- 🚀 Happy Coding! 🎉