import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // or whatever your file name is

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://cdn.dribbble.com/userupload/12917879/file/original-4a98a6b431707902127b8e7fd7a35c6a.png?resize=500x"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCart = () => {  
    return (
        <div className="res-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2026/3/22/a2ac06fc-4d5a-45e0-b6e2-efab7a1b768a_439982c6-b583-43ef-822d-910fd64c8b87.jpg"
            className="restaurant-image"
            />
            <div className="restaurant-details">
            <h3 className="restaurant-name">Meghana Foods</h3>
            <p className="restaurant-cuisine">Biryani, South Indian</p>
            <p className="restaurant-rating">Rating: 4.5</p>
            <p className="waiting-period">Waiting Period: 30 mins</p>
            </div>
        </div>
    );
}

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for food items..."
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="restaurant-list">
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
         <RestaurantCart />
        <RestaurantCart />
         <RestaurantCart />
        <RestaurantCart />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
