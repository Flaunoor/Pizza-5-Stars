import "./App.scss";
import aboutAsPic from "./images/the-restaurant-inside.png";
import coffee from "./images/breakfast.jpeg";
import sweet from "./images/sweet2.jpeg";
import meal from "./images/meal1.jpg";

import reviewPic from "./images/review22.jpeg";
import chef_1 from "./images/chef1.png";
import chef_2 from "./images/chef2.png";

import pizza_1 from "./pizzaPics/pizza1.png";
import pizza_2 from "./pizzaPics/pizza2.png";
import pizza_3 from "./pizzaPics/pizza3.png";
import pizza_4 from "./pizzaPics/pizza4.png";
import pizza_5 from "./pizzaPics/pizza5.png";
import pizza_6 from "./pizzaPics/pizza6.png";
import ice from "./pizzaPics/icecream.jpeg";

import logo_pic from "./pizzaPics/logo.png";

import bestSeller from "./pizzaPics/best-seller.jpg";
import { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 50);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="App">
      <header className={`header ${isVisible ? "" : "hidden"}`}>
        <div className="logo-div">
          <img src={logo_pic} alt="logo" />

          <a href="#">
            <p className="headline-2 logo">5 Stars</p>
          </a>
        </div>

        <input type="checkbox" id="check" />

        <label htmlFor="check" className="icons">
          <i class="bx bx-menu-alt-left" id="open-menu"></i>
          <i class="bx bx-x-circle" id="close-menu"></i>
        </label>

        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link ">
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a href="#aboutUS" className="navbar-link ">
                About us
              </a>
            </li>

            <li className="navbar-item">
              <a href="#menu" className="navbar-link ">
                Menu
              </a>
            </li>

            <li className="navbar-item">
              <a href="reviews" className="navbar-link ">
                Reviews
              </a>
            </li>

            <li className="navbar-item">
              <a href="contact" className="navbar-link ">
                Reservation
              </a>
            </li>
          </ul>
          <button className="btn">Find a table</button>
        </nav>
      </header>

      <section className="app__home-sec flex-center section" id="home">
        <h1 className="hero-title">
          Bringing People Together, One Slice at a Time!
        </h1>
        <h2 className="hero-text">Dive into Our Mouth-Watering Pizza Menu!</h2>
        <a href="#menu-section" className="btn">
          View our menu
        </a>
      </section>

      <section className="app__aboutus-sec flex-center section" id="aboutUS">
        <div className="container flex-center">
          <div className="story-container flex-center">
            <h1 className="section-title">Our story</h1>
            <p className="p-text">
              At <span>5 starts</span>, our passion for pizza runs deep. Founded
              by a group of pizza enthusiasts, we set out to create the perfect
              slice that brings people together. Each pizza is crafted with love
              ...
            </p>
            <button className="btn">Read More</button>
          </div>

          <div className="selling-points flex-center">
            <h2 className="p-title">Selling Points</h2>
            <p className="p-text">
              45 Frères Menaï Street, El Madania, Algiers, Algeria
            </p>
            <p className="p-text">
              10 Mills Street, El Madania, Algiers, Algeria10 Mills Street, El
              Madania, Algiers, Algeria
            </p>
            <p className="p-text">
              32 Republic Boulevard, El Harrach, Algiers, Algeria
            </p>
          </div>

          <div className="restaurant-owners flex-center">
            <h2 className="p-title">Owners</h2>
            <div className="owners-div">
              <div className="owner flex-center">
                <div className="img">
                  <img src={chef_1} alt="chef" />
                </div>
                <p className="p-text">Emy LU</p>
              </div>
              <div className="owner flex-center">
                <div className="img">
                  <img src={chef_2} alt="chef" />
                </div>
                <p className="p-text">Farah Salem</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-us-pic">
          <img src={aboutAsPic} alt="inside-restaurant" />
        </div>
      </section>

      <section className="app__meals-sec flex-center section">
        <h2 className="section-title">Weekend Specials</h2>
        <p className="p-text">
          Join us for our Weekend Specials! Enjoy delicious breakfast,
          delightful dinners, and mouth-watering sweets crafted just for you.{" "}
          <br /> Treat yourself and your loved ones to a memorable dining
          experience every weekend!
        </p>
        <div className="meals-container">
          <div className="meal-card">
            <div className="pic-div">
              <img src={coffee} alt="breakfast" width="285" height="336" />
            </div>

            <h2>Breakfast</h2>
            <p className="p-text">view menu</p>
            <div className="line"></div>
          </div>

          <div className="meal-card">
            <div className="pic-div">
              <img src={sweet} alt="sweet" width="285" height="336" />
            </div>
            <h2>Sweets</h2>
            <p className="p-text">view menu</p>
            <div className="line"></div>
          </div>

          <div className="meal-card">
            <div className="pic-div">
              <img src={meal} alt="meal" width="285" height="336" />
            </div>
            <h2>Artful Platters</h2>
            <p className="p-text">view menu</p>
            <div className="line"></div>
          </div>

          <div className="meal-card">
            <div className="pic-div">
              <img src={ice} alt="meal" width="285" height="336" />
            </div>
            <h2>Ice cream</h2>
            <p className="p-text">view menu</p>
            <div className="line"></div>
          </div>
        </div>
      </section>

      <section className="app__menu_sec flex-center section" id="menu">
        <h1 className="section-title">Our regular menu</h1>
        <div className="menu-container flex-center">
          <div className="menu-card">
            <img src={pizza_1} alt="" />

            <h2 className="p-title">Pepperoni Pizza</h2>
            <p className="p-text">
              A favorite featuring a tomato base topped with mozzarella cheese
              and pepperoni slices.
            </p>
            <div className="order-price">
              <p className="p-text">$15.50</p>
              <button className="btn-order">Order online</button>
            </div>
          </div>

          <div className="menu-card">
            <img src={pizza_2} alt="" />

            <h2 className="p-title">Vegetarian Pizza</h2>
            <p className="p-text">
              Loaded with a variety of vegetables like bell peppers, onions,
              mushrooms, and olives.
            </p>
            <div className="order-price">
              <p className="p-text">$12.50</p>
              <button className="btn-order">Order online</button>
            </div>
          </div>

          <div className="menu-card">
            <img src={pizza_3} alt="" />

            <h2 className="p-title">Margherita Pizza</h2>
            <p className="p-text">
              Classic pizza topped with fresh mozzarella, tomatoes, basil, and
              olive oil.
            </p>
            <div className="order-price">
              <p className="p-text">$10.50</p>
              <button className="btn-order">Order online</button>
            </div>
          </div>

          <div className="menu-card">
            <img src={pizza_4} alt="" />

            <h2 className="p-title">BBQ Chicken Pizza</h2>
            <p className="p-text">
              Topped with barbecue sauce, grilled chicken, red onions, and
              cilantro, often with cheese.
            </p>
            <div className="order-price">
              <p className="p-text">$21.50</p>
              <button className="btn-order">Order online</button>
            </div>
          </div>

          <div className="menu-card">
            <img src={pizza_5} alt="" />

            <h2 className="p-title">Hawaiian Pizza</h2>
            <p className="p-text">
              A sweet and savory mix of ham, pineapple, and cheese on a tomato
              base.
            </p>
            <div className="order-price">
              <p className="p-text">$5.50</p>
              <button className="btn-order">Order online</button>
            </div>
          </div>

          <div className="menu-card">
            <img src={pizza_6} alt="" />

            <h2 className="p-title">Meat Lovers Pizza</h2>
            <p className="p-text">
              Packed with multiple meats such as pepperoni, sausage, ham, and
              bacon, topped with cheese.
            </p>
            <div className="order-price">
              <p className="p-text">$5.50</p>
              <button className="btn-order">Order online</button>
            </div>
          </div>
        </div>
      </section>

      <section className="app__best-seller flex-center">
        <div className="container">
          <div className="best-seller-pic">
            <img src={bestSeller} alt="best-seller" />
          </div>

          <div className="description flex-center">
            <h2 className="section-title">Pizza Pepperoni</h2>
            <h4 className="p-title">Best Seller - Special Offer</h4>
            <p className="p-text">
              Indulge in our delicious Pepperoni Pizza at a special price! For a
              limited time, savor the perfect blend of zesty pepperoni and gooey
              cheese on a freshly baked crust, all at a fantastic discount.
            </p>
            <p className="p-text">
              {" "}
              <span>$15.50</span> $11.00
            </p>
            <button className="btn">Order Now</button>
          </div>
        </div>
      </section>

      <section className="app__review-sec flex-center" id="reviews">
        <div className="review-container flex-center">
          <div className="quote">”</div>
          <p className="p-text">
            I had the Margherita pizza, and it was fantastic! The crust was
            perfectly crispy, and the fresh mozzarella and tomatoes were
            delicious.
          </p>
          <div className="review-pic">
            <img src={reviewPic} alt="review pic" />
          </div>
          <p className="p-text">Bereen Saat</p>
        </div>
      </section>

      <section className="app__res-contact-sec flex-center" id="contact">
        <form action="" className="form-reservation flex-center">
          <h1 className="section-title">Online reservation</h1>
          <h2 className="p-title">Welcome to our restaurant</h2>
          <h4 className="p-text">
            Booking request +213 368 978 01 or fill out the order form
          </h4>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Your Name"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input-field"
            />
          </div>

          <div className="input-wrapper1">
            <select name="person" className="input-field">
              <option value="1-person"> 1 Person</option>
              <option value="2-person"> 2 Person</option>
              <option value="3-person"> 3 Person</option>
              <option value="4-person"> 4 Person</option>
              <option value="5-person"> 5 Person</option>
              <option value="6-person"> 6 Person</option>
            </select>

            <input
              type="date"
              name="reservation-date"
              className="input-field"
            />

            <select name="person" class="input-field">
              <option value="08:00am">08 : 00 am</option>
              <option value="09:00am">09 : 00 am</option>
              <option value="010:00am">10 : 00 am</option>
              <option value="011:00am">11 : 00 am</option>
              <option value="012:00am">12 : 00 am</option>
              <option value="01:00pm">01 : 00 pm</option>
              <option value="02:00pm">02 : 00 pm</option>
              <option value="03:00pm">03 : 00 pm</option>
              <option value="04:00pm">04 : 00 pm</option>
              <option value="05:00pm">05 : 00 pm</option>
              <option value="06:00pm">06 : 00 pm</option>
              <option value="07:00pm">07 : 00 pm</option>
              <option value="08:00pm">08 : 00 pm</option>
              <option value="09:00pm">09 : 00 pm</option>
              <option value="10:00pm">10 : 00 pm</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Message"
            autocomplete="off"
            className="input-field"
          ></textarea>

          <button type="submit" class="btn btn-secondary">
            Book A Table
          </button>
        </form>
      </section>

      <section className="app__footer-sec">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link p-text">
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a href="#abouUS" className="navbar-link p-text">
                About us
              </a>
            </li>

            <li className="navbar-item">
              <a href="#menu" className="navbar-link p-text">
                Menu
              </a>
            </li>

            <li className="navbar-item">
              <a href="reviews" className="navbar-link p-text">
                Reviews
              </a>
            </li>

            <li className="navbar-item">
              <a href="contact" className="navbar-link p-text">
                Reservation
              </a>
            </li>
          </ul>
        </nav>

        <div className="contact-us flex-center">
          <h2 className="section-title"> Contact us</h2>

          <p className="p-title">Lunch time</p>
          <p className="p-text">
            Monday to Sunday <br />
            11.00 am - 4.30pm
          </p>

          <p className="p-title">Dinner time</p>
          <p className="p-text">
            Monday to Sunday <br />
            06.00 pm - 12.30am
          </p>

          <p className="p-title">Booking Request</p>
          <p className="p-text">+213 368 978 01</p>
        </div>

        <div className="social-media">
          <div className="h-line"></div>
          <ul className="flex-center">
            <li className="p-text">
              <a href="">Facebook</a>
            </li>
            <li className="p-text">
              <a href="">Twitter</a>
            </li>
            <li className="p-text">
              <a href="">Instagram</a>
            </li>
            <li className="p-text">
              <a href="">Youtube</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
