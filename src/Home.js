import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div className="home__container">

        
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/FireTV/Hero---3000x1200_1x._CB404225190_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product 
          id = {1}
          title = 'Ikigai: The Japanese secret to a long and happy life'
          price = {400} 
          image = {"https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg"}
          rating = {5}
          />
          <Product title = "Zotac Gaming GeForce RTX 2060 Mini 6GB GDDR6 Graphics Card"
          id = {6}
          price = {30000}
          image = {"https://m.media-amazon.com/images/I/51ZzSL+ZxUL._AC_UY327_FMwebp_QL65_.jpg"}
          rating = {4}
          />
        </div>

        <div className="home__row">
            <Product 
            id = {2}
            title = "Jackson JS Series King V JS32 Right Handed Electric Guitar without Case"
            price = {33472}
            image = {"https://cdn10.bigcommerce.com/s-qi8morjp0s/products/257/images/3684/2910123572-BLK-WHT-BVL_fron__95662.1558097654.1280.1280.png?c=2"}
            rating = {4}
            />
            <Product 
            id = {3}
            title = "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation) "
            price = {127299}
            image = {"https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg"}
            rating = {5}
            />
            <Product 
            id = {4}
            title = "Logitech Artemis Spectrum G633 Gaming Headphones"
            price = {15000}
            image = {"https://m.media-amazon.com/images/I/81IPIyw+2JL._AC_UY327_QL65_.jpg"}
            rating = {4}
            />
        </div>

        <div className="home__row">
            <Product 
            id = {5}
            title = "(Renewed) Samsung Galaxy Note 10 (Aura Red, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
            image = {"https://m.media-amazon.com/images/I/710H5rWYI0L._AC_UL480_FMwebp_QL65_.jpg"}
            price  = {62000}
            rating = {4}
            />
            </div>
      </div>
    </div>
  );
}

export default Home;
