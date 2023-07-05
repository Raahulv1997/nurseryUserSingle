import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../logo192.png";
import Profile from "../css-js/images/user.png";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./nav";
import Cart from "./cart";
import { useState } from "react";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import { MdAccountCircle } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineLogin } from "react-icons/hi";
import { AiTwotoneShop } from "react-icons/ai";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { fetchcartdata } from "../api/api";
import { FiFilter } from "react-icons/fi";
import { Dropdown } from "react-bootstrap";

const Header = (
  props
  // cartqty,
  // setCartQty,
  // productapicall,
  // setproductapicall,
  // onFilterClick
) => {
  let path = window.location.pathname;

  const bb = path.includes("/");
  const cc = path.includes("/shop");
  const [Showtextbox, setShowTextBox] = useState(false);
  const [ShowAlert, setShowAlert] = useState(false);
  const [searchbox, setSearchBox] = useState("");

  const [showcart, setShowcart] = useState(false);

  const [count_cart, SetCount_cart] = useState("");

  const navigate = useNavigate();

  const user_token = localStorage.getItem("user_token");
  const user_name = localStorage.getItem("user_fname");
  const OnLogoutClick = () => {
    if (user_token !== null && bb === true) {
      setShowAlert(true);
    } else {
      alert("not logout");
    }
  };

  const SeacrhValueHandler = (e) => {
    setSearchBox(e.target.value);

    // if (searchbox.length === 0) {
    //   navigate("/shop");
    // }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    navigate(`/shop?search=${searchbox}`);
  };
  const showTextBoxHandler = () => {
    setShowTextBox(true);
    if (Showtextbox === true && searchbox === "") {
      setShowTextBox(false);
    } else if (Showtextbox === true && searchbox !== "") {
      navigate(`/shop?search=${searchbox}`);
    }
  };
  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    if (user_token) {
      const response = await fetchcartdata();

      if (response) {
        SetCount_cart(response.length);
      }

      props.setCartQty(false);
    } else {
      SetCount_cart("");
    }
  };

  function cart_list_hide_fun() {
    // console.log("______________________________cart_list_hide");
    setShowcart(false);
  }

  function cart_count_fun(count) {
    // console.log("header________________________________37" + count)
    SetCount_cart(count);
  }

  const onConfirmAlert = () => {
    // props.setCartQty(true);
    return Promise.resolve(setShowAlert(false));
  };

  const onCancelAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="header_page">
      <SweetAlert
        show={ShowAlert}
        title="Logout Message"
        text={"Are you sure logout "}
        onConfirm={() =>
          onConfirmAlert().then(() => {
            props.setproductapicall(true);
            localStorage.removeItem("sign_up_email");
            localStorage.removeItem("productID");
            localStorage.removeItem("user_fname");
            localStorage.removeItem("orderid");
            localStorage.removeItem("userid");
            localStorage.removeItem("orderId");
            localStorage.removeItem("user_type");
            localStorage.removeItem("user_token");
            navigate("/");
          })
        }
        showCancelButton={true}
        onCancel={onCancelAlert}
      />
      <header className="header-part">
        <div className="container">
          <div className="header-content">
            <div className="header-media-group ">
              <button className="header-user">
                <img src={Profile} alt="user" />
              </button>
              <Link to="/">
                <img src={Logo} alt="logo" width={"100px"} />
              </Link>
              {Showtextbox === true ? (
                <input
                  type="text"
                  defaultValue={searchbox}
                  className="mobile_search_bar"
                  placeholder="Search anything..."
                  onChange={SeacrhValueHandler}
                />
              ) : null}

              <button className="header-src" onClick={showTextBoxHandler}>
                <i className="fas fa-search"></i>
              </button>
              {cc === true ? (
                <button
                  className="search-filter  "
                  onClick={props.onFilterClick}
                >
                  <FiFilter />
                </button>
              ) : null}
            </div>
            <Link to="/">
              <img
                className="screen_logo"
                src={Logo}
                alt="logo"
                height={"100px"}
              />
            </Link>
            {/* <img src={Profile} alt="user" /> */}

            <form className="header-form">
              <input
                type="text"
                placeholder="Search anything..."
                onChange={SeacrhValueHandler}
              />
              <button onClick={submitHandler}>
                <i className="fas fa-search"></i>
              </button>
            </form>
            <Nav />
            <div className="header-widget-group">
              {/* <Link to="" className="header-widget" title="Compare List">
                <i className="fas fa-random"></i>
                <sup>0</sup>
              </Link> */}
              {/* <Link to="" className="header-widget" title="Wishlist">
                <i className="fas fa-heart"></i>
                <sup>0</sup>
              </Link> */}
              {user_token === null ? null : (
                <li className="navbar-item dropdown profile_nav_dropdown">
                  <Link
                    className="navbar-link text-nowrap dropdown-arrow"
                    to="/"
                  >
                    {user_name ? user_name : "username"}
                  </Link>
                  <ul className="dropdown-position-list">
                    <li>
                      <Link
                        className="header-widget justify-content-start"
                        to={"/profile"}
                      >
                        <i className="">
                          <MdAccountCircle />
                        </i>
                        <span>My Account</span>
                      </Link>
                    </li>
                    <li>
                      {user_token !== null ? (
                        <Link className="header-widget justify-content-start">
                          <i className="">
                            <HiOutlineLogout />
                          </i>
                          <span onClick={OnLogoutClick}>Logout</span>
                        </Link>
                      ) : null}
                    </li>
                  </ul>
                </li>
              )}
              <button
                onClick={() => {
                  setShowcart(true);
                }}
                className="header-widget header-cart"
                title="Cartlist"
              >
                <i className="fas fa-shopping-basket"></i>
                {count_cart ? <sup>{count_cart}</sup> : null}
                {/* <span>
                  total price<small>$345.00</small>
                </span> */}
              </button>

              {user_token !== null ? null : (
                <Link to="/login" className="header-widget" title="Wishlist">
                  <i className="">
                    {" "}
                    <HiOutlineLogin />
                  </i>

                  <span>Login</span>
                </Link>
              )}

              {/* <Link
                to="/DriverLogin"
                className="header-widget"
                title="Wishlist"
              >
                <i className="fas fa-login"></i>
                <span>Driver Login</span>
              </Link>
              <Link
                to="/sellerlogin"
                className="header-widget"
                // title="Wishlist"
              >
                <i className="fas fa-login"></i>
                <span> seller Login</span>
              </Link> */}

              {/* {user_token === null ? null : (
                <Link className="header-widget" to={"/profile"}>
                  <i className="">
                    <MdAccountCircle />
                  </i>
                  <span>My Account</span>
                </Link>
              )}
              {user_token !== null ? (
                <Link className="header-widget">
                  <i className="">
                    <HiOutlineLogout />
                  </i>
                  <span onClick={OnLogoutClick}>Logout</span>
                </Link>
              ) : null} */}
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-menu">
        <Link to="/">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </Link>
        <Link to={"/shop"} className="cate-btn" title="Category List">
          <AiTwotoneShop />
          <span>Shop</span>
        </Link>
        {/* <button className="cate-btn" title="Category List">
          <i className="fas fa-list"></i>
          <span>category</span>
        </button> */}

        <button
          className="cart-btn"
          title="Cartlist"
          onClick={() => {
            setShowcart(true);
          }}
        >
          <RiShoppingBasket2Line />

          <span>cartlist</span>
          {count_cart ? <sup>{count_cart}</sup> : null}
        </button>

        {user_token !== null ? null : (
          <Link to="/login" className="cate-btn" title="login">
            {" "}
            <HiOutlineLogin />
            <span>Login</span>
          </Link>
        )}
        {user_token === null ? null : (
          <Dropdown className="my-custom-dropdown">
            <Dropdown.Toggle
              className="my-custom-toggle"
              variant="success"
              id="dropdown-basic"
            >
              <MdAccountCircle />
              <span>Account</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="my-custom-menu">
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/order_list">Your Order</Dropdown.Item>
              <Dropdown.Item onClick={OnLogoutClick}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}

        {/* <Link to="">
          <i className="fas fa-heart"></i>
          <span>wishlist</span>
          <sup>0</sup>
        </Link> */}
        {/* <Link to="">
          <i className="fas fa-random"></i>
          <span>compare</span>
          <sup>0</sup>
        </Link> */}
      </div>

      <Cart
        showCartProp={showcart}
        cart_list_hide={cart_list_hide_fun}
        cart_count={cart_count_fun}
        cartapicall={props.productapicall}
        setcartapicall={props.setproductapicall}
      />
    </div>
  );
};

export default Header;
