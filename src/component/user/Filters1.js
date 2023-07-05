import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchfilter } from "../api/api";
import shop_img from "../css-js/images/promo/shop/01.jpg";
let selectRatingData = [];
let selectBrandData = [];
let selectCategoryData = [];
const Filters1 = ({ handleClick, showfilter, setShowfilter }) => {
  const navigate = useNavigate();
  const [brandData, setBrandData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [pricefilter, setpricefilter] = useState({
    to_product_price: "",
    from_product_price: "",
  });

  //rating filer state start here
  const [checkboxfilter, setcheckboxfilter] = useState(false);
  const [ratingfilter, setratingfilter] = useState([]);
  //rating filer state END here

  //brand checkbox state start here
  const [brandCheckboxfilter, setBrandCheckboxfilter] = useState(false);
  const [brandfilter, setBrandfilter] = useState([]);

  //brand checkbox state end here
  // category checkbox state start here
  const [categoryCheckboxfilter, setCategoryCheckboxfilter] = useState(false);
  const [categoryfilter, setCategoryfilter] = useState([]);

  // category checkbox state End here
  const filterPriceHandler = (e) => {
    setpricefilter({ ...pricefilter, [e.target.name]: e.target.value });
    // setapicall(false);
  };

  const priceSubmitHandler = (e) => {
    e.preventDefault();

    navigate(
      `/shop?Fromprice=${pricefilter.from_product_price}&&Toprice=${pricefilter.to_product_price}`
    );
    setShowfilter(false);
  };

  const priceReset = (e) => {
    e.preventDefault();
    // setcheckboxfilter(false);
    setpricefilter({
      to_product_price: "",
      from_product_price: "",
    });

    handleClick("true", "Pricereset");
    // console.log("rating aray---", selectRatingData);
    navigate(`/shop`);
    setShowfilter(false);
  };

  // const ratingReset = (e) => {
  //   e.preventDefault();
  //   setcheckboxfilter(false);
  //   selectRatingData = [];
  //   handleClick("true", "ratingReset");
  //   // console.log("rating aray---", selectRatingData);
  //   navigate(`/shop`);
  // };

  // const BrandReset = (e) => {
  //   e.preventDefault();
  //   setBrandCheckboxfilter(false);

  //   navigate(`/shop`);
  // };

  // const CategoryReset = (e) => {
  //   e.preventDefault();
  //   setCategoryCheckboxfilter(false);

  //   navigate(`/shop`);
  // };
  const onRatingFilterAdd = (e) => {
    // const value =
    //   e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (e.target.checked === true) {
      setratingfilter((ratingfilter, index) => [
        setcheckboxfilter(index, true),
        ...ratingfilter,
        e.target.value,
      ]);
      selectRatingData.push(e.target.value);
    } else {
      setratingfilter(ratingfilter.filter((item) => item !== e.target.value));
      // setcheckboxfilter(false);
      const index = selectRatingData.indexOf(e.target.value);
      if (index > -1) {
        // only splice array when item is found
        selectRatingData.splice(index, 1); // 2nd parameter means remove one item only
      }
    }

    handleClick(selectRatingData, "rating");
    // console.log("rating aray---", selectRatingData);
    navigate(`/shop`);
    setShowfilter(false);
  };

  const onBrandFilterAdd = (e) => {
    // const value =
    //   e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (e.target.checked === true) {
      setBrandfilter((brandfilter, index) => [
        setBrandCheckboxfilter(index, true),
        ...brandfilter,
        e.target.value,
      ]);
      selectBrandData.push(e.target.value);
    } else {
      setBrandfilter(brandfilter.filter((item) => item !== e.target.value));
      // setcheckboxfilter(false);
      const index = selectBrandData.indexOf(e.target.value);
      if (index > -1) {
        // only splice array when item is found
        selectBrandData.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    handleClick(selectBrandData, "brand");
    navigate(`/shop`);
    setShowfilter(false);
  };

  const onCategoryFilterAdd = (e) => {
    // const value =
    //   e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (e.target.checked === true) {
      setCategoryfilter((categoryfilter, index) => [
        setCategoryCheckboxfilter(index, true),
        ...categoryfilter,
        e.target.value,
      ]);
      selectCategoryData.push(e.target.value);
    } else {
      setCategoryfilter(
        categoryfilter.filter((item) => item !== e.target.value)
      );
      // setcheckboxfilter(false);
      const index = selectCategoryData.indexOf(e.target.value);
      if (index > -1) {
        // only splice array when item is found
        selectCategoryData.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    handleClick(selectCategoryData, "category");
    navigate(`/shop`);
    setShowfilter(false);
  };

  useEffect(() => {
    fetchfilterdata();
  }, []);

  const fetchfilterdata = async () => {
    const data = await fetchfilter();

    const { brand_data, category_data } = data;

    if (brand_data) {
      const filterUnwanted = (arr) => {
        const required = arr.filter((el) => {
          return el.brand;
        });
        return required;
      };

      setBrandData(filterUnwanted(brand_data));
    }

    if (category_data) {
      const filterUnwanted = (arr) => {
        const required = arr.filter((el) => {
          return el.category;
        });
        return required;
      };

      setCategoryData(filterUnwanted(category_data));
    }
  };

  return (
    <>
      <div
        className={
          showfilter
            ? "col-lg-3 shop_filter  shop_filter_show"
            : "col-lg-3  shop_filter_show "
        }
      >
        <div className="shop-widget-promo shop_filter_img">
          <Link to="#">
            <img src={shop_img} alt="promo" />
          </Link>
        </div>
        <div className="shop-widget">
          <h6 className="shop-widget-title border-0">Filter by Price</h6>
          <form>
            <div className="shop-widget-group">
              <input
                type="text"
                placeholder="Min - "
                name={"from_product_price"}
                value={pricefilter.from_product_price}
                onChange={filterPriceHandler}
              />
              <input
                type="text"
                placeholder="Max - "
                name={"to_product_price"}
                value={pricefilter.to_product_price}
                onChange={filterPriceHandler}
              />
            </div>
            <button className="shop-widget-btn" onClick={priceSubmitHandler}>
              <i className="fas fa-search"></i>
              <span>search</span>
            </button>
            <button className="shop-widget-btn mt-2" onClick={priceReset}>
              <i className="far fa-trash-alt"></i>
              <span>clear filter</span>
            </button>
          </form>
        </div>
        <div className="shop-widget">
          <h6 className="shop-widget-title">Filter by Rating</h6>
          <form>
            <ul className="shop-widget-list">
              <li>
                <div className="shop-widget-content">
                  <input
                    type="checkbox"
                    id="feat1"
                    defaultValue={"5"}
                    name="rating"
                    checked={checkboxfilter}
                    onChange={(e) => onRatingFilterAdd(e)}
                  />
                  <label htmlFor="feat1">
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                  </label>
                </div>
                <span className="shop-widget-number">(5)</span>
              </li>
              <li>
                <div className="shop-widget-content">
                  <input
                    type="checkbox"
                    id="feat2"
                    defaultValue={"4"}
                    name="rating"
                    checked={checkboxfilter}
                    onChange={(e) => onRatingFilterAdd(e)}
                  />
                  <label htmlFor="feat2">
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star"></i>
                  </label>
                </div>
                <span className="shop-widget-number">(4)</span>
              </li>
              <li>
                <div className="shop-widget-content">
                  <input
                    type="checkbox"
                    id="feat3"
                    defaultValue={"3"}
                    name="rating"
                    checked={checkboxfilter}
                    onChange={(e) => onRatingFilterAdd(e)}
                  />
                  <label htmlFor="feat3">
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </label>
                </div>
                <span className="shop-widget-number">(3)</span>
              </li>
              <li>
                <div className="shop-widget-content">
                  <input
                    type="checkbox"
                    id="feat4"
                    defaultValue={"2"}
                    name="rating"
                    checked={checkboxfilter}
                    onChange={(e) => onRatingFilterAdd(e)}
                  />
                  <label htmlFor="feat4">
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </label>
                </div>
                <span className="shop-widget-number">(2)</span>
              </li>
              <li>
                <div className="shop-widget-content">
                  <input
                    type="checkbox"
                    id="feat5"
                    defaultValue={"1"}
                    name="rating"
                    checked={checkboxfilter}
                    onChange={(e) => onRatingFilterAdd(e)}
                  />
                  <label htmlFor="feat5">
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </label>
                </div>
                <span className="shop-widget-number">(1)</span>
              </li>
            </ul>

            {/* <button className="shop-widget-btn mt-2" onClick={ratingReset}>
              <i className="far fa-trash-alt"></i>
              <span>clear filter</span>
            </button> */}
          </form>
        </div>
        {/* <div className="shop-widget">
          <h6 className="shop-widget-title">Filter by Tag</h6>
          <form>
            <ul className="shop-widget-list">
              <li>
                <div className="shop-widget-content">
                  <input type="checkbox" id="tag1" />
                  <label htmlFor="tag1">new items</label>
                </div>
                <span className="shop-widget-number">(13)</span>
              </li>
              <li>
                <div className="shop-widget-content">
                  <input type="checkbox" id="tag2" />
                  <label htmlFor="tag2">sale items</label>
                </div>
                <span className="shop-widget-number">(28)</span>
              </li>
              <li>
                <div className="shop-widget-content">
                  <input type="checkbox" id="tag3" />
                  <label htmlFor="tag3">rating items</label>
                </div>
                <span className="shop-widget-number">(35)</span>
              </li>
              <li>
                <div className="shop-widget-content">
                  <input type="checkbox" id="tag4" />
                  <label htmlFor="tag4">feature items</label>
                </div>
                <span className="shop-widget-number">(47)</span>
              </li>
              <li>
                <div className="shop-widget-content">
                  <input type="checkbox" id="tag5" />
                  <label htmlFor="tag5">discount items</label>
                </div>
                <span className="shop-widget-number">(59)</span>
              </li>
            </ul>
            <button className="shop-widget-btn">
              <i className="far fa-trash-alt"></i>
              <span>clear filter</span>
            </button>
          </form>
        </div> */}
        <div className="shop-widget">
          <h6 className="shop-widget-title" style={{ marginTop: "-22px" }}>
            Filter by Brand
          </h6>
          <form>
            {/* <input
              className="shop-widget-search"
              type="text"
              placeholder="Search..."
            /> */}
            <ul className="shop-widget-list shop-widget-scroll">
              {brandData.map((item, i) => {
                return (
                  <>
                    <li key={i}>
                      <div className="shop-widget-content" key={i}>
                        <input
                          key={i}
                          type="checkbox"
                          id="brand1"
                          defaultValue={item.brand}
                          name="brand"
                          checked={brandCheckboxfilter}
                          onChange={(e) => onBrandFilterAdd(e)}
                        />
                        <label htmlFor="brand1">{item.brand}</label>
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
            {/* <button className="shop-widget-btn mt-2" onClick={BrandReset}>
              <i className="far fa-trash-alt"></i>
              <span>clear filter</span>
            </button> */}
          </form>
        </div>
        <div className="shop-widget">
          <h6 className="shop-widget-title" style={{ marginTop: "-80px" }}>
            Filter by Category
          </h6>
          <form>
            {/* <input
              className="shop-widget-search"
              type="text"
              placeholder="Search..."
            /> */}
            <ul className="shop-widget-list shop-widget-scroll">
              {categoryData.map((item, i) => {
                return (
                  <>
                    <li key={i}>
                      <div className="shop-widget-content" key={i}>
                        <input
                          key={i}
                          type="checkbox"
                          id="category1"
                          name="category"
                          defaultValue={item.category}
                          checked={categoryCheckboxfilter}
                          onChange={(e) => onCategoryFilterAdd(e)}
                        />
                        <label htmlFor="category1">{item.category}</label>
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
            {/* <button className="shop-widget-btn mt-2" onClick={CategoryReset}>
              <i className="far fa-trash-alt"></i>
              <span>clear filter</span>
            </button> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Filters1;
