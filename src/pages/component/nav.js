import React, { useState, useEffect, useRef } from "react";
import debounce from "lodash.debounce";
import Image from "next/image";
import Link from "next/link";
import Styles from "./styles/nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredRecommendations, setFilteredRecommendations] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchRef = useRef(null);

  const examplesuggestionlist = [
    "hazelnut chocolate cake",
    "hazelnut cake",
    "hazelnut birthday chocolate cake",
    "hazelnut chocolate croissant",
    "hazelnut chocolate cruffin",
    "rakhi hampur",
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Peach",
    "Pineapple",
    "Strawberry",
  ];

  const exampleproductlist = [
    {
      id: 1,
      name: "Assorted Cruffin Pack of 6",
      price: "Rs. 749.00",
      originalPrice: "Rs. 799.00",
      image: "/image/card1.webp",
    },
    {
      id: 2,
      name: "Assorted Pack of 6 (with Mango) Cruffins",
      price: "Rs. 599.00",
      originalPrice: "Rs. 699.00",
      image: "/image/card2.webp",
    },
    {
      id: 3,
      name: "Hazelnut Donuts Set of 4",
      price: "Rs. 429.00",
      originalPrice: "Rs. 499.00",
      image: "/image/card3.webp",
    },
    {
      id: 4,
      name: "Healthy Jaggery Cookies (2 Boxes)",
      price: "Rs. 429.00",
      originalPrice: "Rs. 499.00",
      image: "/image/image1.webp",
    },
  ];

  const examplerecomendedlist = [
    {
      id: 1,
      name: "Assorted Cruffin Pack of 6",
      price: "Rs. 749.00",
      originalPrice: "Rs. 799.00",
      image: "/image/card1.webp",
    },
    {
      id: 2,
      name: "Hazelnut Donuts Set of 4",
      price: "Rs. 429.00",
      originalPrice: "Rs. 499.00",
      image: "/image/card3.webp",
    },
  ];

  // Debounced function for fetching suggestions
  const fetchSuggestions = debounce(async (searchTerm) => {
    const filteredSuggestions = examplesuggestionlist.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredProductList = exampleproductlist.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredRecomList = examplerecomendedlist.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
    setFilteredProducts(filteredProductList);
    setFilteredRecommendations(filteredRecomList);
  }, 300);

  // Fetch suggestions whenever the query changes
  useEffect(() => {
    if (query.length > 0) {
      fetchSuggestions(query);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [query, fetchSuggestions]);

  const handleSelectSuggestion = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
  };

  // Function to handle clicks outside the search bar, suggestion list, and the hamburger menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setQuery(""); // Clear the input field
        setShowSuggestions(false); // Hide the suggestions list
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  return (
    <>
      {/* navbar */}
      <div className={Styles.navbody}>
        <div className={Styles.icondiv}>
          <div className={Styles.hamburger} onClick={toggleMenu}>
            <i
              className={`material-icons ${Styles.icons}`}
              aria-label="Toggle menu"
            >
              menu
            </i>
          </div>
          <div className={Styles.profilecart}>
            <Link href="/account">
            <i
              className={`material-icons ${Styles.icons}`}
              aria-label="Profile"
            >
              account_circle
            </i></Link>
            <Link href="/cart">
            <i className={`material-icons ${Styles.icons}`} aria-label="Cart">
              local_mall
            </i>
            </Link>
          </div>
        </div>
        <div className={Styles.searchdiv}>
          <input
            type="text"
            name="search"
            placeholder="Search your item"
            className={Styles.searchbar}
            value={query}
            onChange={(e) => {
              e.preventDefault();
              setQuery(e.target.value);
            }}
          />
          <i
            className={`material-icons ${Styles.searchicons}`}
            aria-label="Search"
          >
            search
          </i>
        </div>
      </div>

      {/* suggestion list */}
      {showSuggestions &&
        (suggestions.length > 0 ||
          filteredProducts.length > 0 ||
          filteredRecommendations.length > 0) && (
          <div className={Styles.suggestionlist} ref={searchRef}>
            <div className={Styles.suggestionproduct}>
              {/* Show Suggestions List if there are matches */}
              {suggestions.length > 0 && (
                <div className={Styles.suggestion}>
                  <div className={Styles.title}>Suggestion List</div>
                  <div className={Styles.bar}></div>
                  <ul>
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className={Styles.suggestionItem}
                        onClick={() => handleSelectSuggestion(suggestion)}
                      >
                        <Link href="#">{suggestion}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Show Products List if there are matches */}
              {filteredProducts.length > 0 && (
                <div className={Styles.product}>
                  <div className={Styles.title}>Product List</div>
                  <div className={Styles.bar}></div>
                  <ul>
                    {filteredProducts.map((product) => (
                      <li key={product.id} className={Styles.productItem}>
                        <a href="#">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={100}
                            height={100}
                          />
                          <div className={Styles.details}>
                            <div className={Styles.productname}>
                              {product.name}
                            </div>
                            <div className={Styles.productamount}>
                              <div className={Styles.oldrate}>
                                {product.originalPrice}
                              </div>
                              <div className={Styles.newrate}>
                                {product.price}
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Show Recommendations List if there are matches */}
            {filteredRecommendations.length > 0 && (
              <div className={Styles.recommendations}>
                <div className={Styles.bar}></div>
                <div className={Styles.title}>Recommendations</div>
                <ul>
                  {filteredRecommendations.map((recommendation) => (
                    <li key={recommendation.id} className={Styles.productItem}>
                      <a href="#">
                        <Image
                          src={recommendation.image}
                          alt={recommendation.name}
                          width={100}
                          height={100}
                        />
                        <div className={Styles.details}>
                          <div className={Styles.productname}>
                            {recommendation.name}
                          </div>
                          <div className={Styles.productamount}>
                            <div className={Styles.oldrate}>
                              {recommendation.originalPrice}
                            </div>
                            <div className={Styles.newrate}>
                              {recommendation.price}
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={Styles.bar}></div>
            <div className={Styles.searchtext}>
              <a href="#">
                <div className={Styles.text}>search for "{query}"</div>
                <i className={`material-icons ${Styles.icons}`}>
                  arrow_right_alt
                </i>
              </a>
            </div>
          </div>
        )}

      {/* Hamburger menu */}
      <div className={`${Styles.hamburgermenu} ${isOpen ? Styles.open : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <div className={Styles.socialmedia}>
          <div className={Styles.text}>Follow us on</div>
          <div className={Styles.iconsdiv}>
            <a href="#" aria-label="Facebook">
              <i className={`material-icons ${Styles.icons}`}>facebook</i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
