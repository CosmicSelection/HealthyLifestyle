import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Navigation';
import NotFoundPage from './pages/NotFound';
import Users from './components/User';
import Contact from './components/Contact';
import RecipeDetail from './components/FoodRecipe';
import Category from './components/Category';
import Nutrition from './components/Nutrition';
import Search from './components/Search';
const routing = (
  <Router>
    <div>
      <Header />
      <Routes>
        <Route exact path="/index" element={<App />} />
        <Route exact path="users" element={<Users />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/recipe/:foodName" element={<RecipeDetail />} />
        <Route exact path="/category/:categoryName" element={<Category />} />
        <Route exact path="/nutrition/:ingredientName" element={<Nutrition />} />
        <Route exact path="search/:searchMeal" element={<Search />} />
        <Route element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
