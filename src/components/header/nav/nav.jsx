// Nav.jsx (React component)
import React from "react";
import "./nav.css";

import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import CategoryPanel from "./CategoryPanel";

const Nav = () => {
  return (
    <div className="nav d-flex align-items-center">
      <div className="container-fluid">
        <div className="row position-relative align-items-center">
          {/* Left Category Panel */}
          <div className="col-lg-2 col-md-3 col-6 catTab">
            <CategoryPanel />
          </div>

          {/* Center Menu */}
          <div className="col-lg-8 col-md-6 d-none d-md-block part2">
            <nav>
              <ul className="list list-inline mb-0 d-flex flex-wrap justify-content-center">
                {/* <li className="list-inline-item"><Button><Link><strong>Deals</strong></Link></Button></li> */}
                <li className="list-inline-item"><Button><Link to="/" className="list-link"><strong>Home</strong> <KeyboardArrowDownIcon /></Link></Button></li>
                <li className="list-inline-item"><Button><Link to="/list" className="list-link"><strong>List</strong></Link></Button></li>
                <li className="list-inline-item"><Button><Link to="product/details"><strong>Product Details</strong></Link></Button></li>
                <li className="list-inline-item position-relative">
                  <Button><Link><strong>Shop</strong> <KeyboardArrowDownIcon /></Link></Button>
                  <div className="dropdown-menu">
                    <ul>
                      <li><Button><Link to="/about">About Us</Link></Button></li>
                      <li><Button><Link to="/about">Contact</Link></Button></li>
                      <li><Button><Link to="/about">My Account</Link></Button></li>
                    </ul>
                  </div>
                </li>
                <li className="list-inline-item"><Button><Link><strong>Vendors</strong> <KeyboardArrowDownIcon /></Link></Button></li>
                <li className="list-inline-item position-static">
                  <Button><Link><strong>Mega Menu</strong> <KeyboardArrowDownIcon /></Link></Button>
                  <div className="dropdown-menu megaMenu w-100">
                    <div className="row">
                      <div className="col">
                        <h4 className="text-g"><strong>Fruit & Vegetables</strong></h4>
                        <ul>
                          <li><Link to="">Meat & Poultry</Link></li>
                          <li><Link to="">Fresh Vegetables</Link></li>
                          <li><Link to="">Herbs & Seasonings</Link></li>
                          <li><Link to="">Cuts & Sprouts</Link></li>
                          <li><Link to="">Exotic Fruits & Veggies</Link></li>
                          <li><Link to="">Packaged Produce</Link></li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4 className="text-g"><strong>Breakfast & Dairy</strong></h4>
                        <ul>
                          <li><Link to="">Milk & Flavoured Milk</Link></li>
                          <li><Link to="">Butter and Margarine</Link></li>
                          <li><Link to="">Marmalades</Link></li>
                          <li><Link to="">Eggs Substitutes</Link></li>
                          <li><Link to="">Sour Cream</Link></li>
                          <li><Link to="">Cheese</Link></li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4 className="text-g"><strong>Meat & Seafood</strong></h4>
                        <ul>
                          <li><Link to="">Breakfast Sausage</Link></li>
                          <li><Link to="">Dinner Sausage</Link></li>
                          <li><Link to="">Chicken</Link></li>
                          <li><Link to="">Sliced Deli Meat</Link></li>
                          <li><Link to="">Crab and Shellfish</Link></li>
                          <li><Link to="">Wild Caught Fillets</Link></li>
                        </ul>
                      </div>
                      <div className="col">
                        <img src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-menu.png" alt="Banner" className="w-100" />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item position-relative">
                  <Button><Link><strong>Blog</strong> <KeyboardArrowDownIcon /></Link></Button>
                  <div className="dropdown-menu">
                    <ul>
                      <li><Button><Link to="/about">About Us</Link></Button></li>
                      <li><Button><Link to="/about">Contact</Link></Button></li>
                      <li><Button><Link to="/about">My Account</Link></Button></li>
                      <li><Button><Link to="/about">Login</Link></Button></li>
                      <li><Button><Link to="/about">Register</Link></Button></li>
                    </ul>
                  </div>
                </li>
                <li className="list-inline-item position-relative">
                  <Button><Link><strong>Pages</strong> <KeyboardArrowDownIcon /></Link></Button>
                  <div className="dropdown-menu">
                    <ul>
                      <li><Button><Link to="/about">About Us</Link></Button></li>
                      <li><Button><Link to="/about">Contact</Link></Button></li>
                      <li><Button><Link to="/about">My Account</Link></Button></li>
                      <li><Button><Link to="/about">Login</Link></Button></li>
                      <li><Button><Link to="/about">Register</Link></Button></li>
                      <li><Button><Link to="/about">Forgot Password</Link></Button></li>
                      <li><Button><Link to="/about">Purchase Guide</Link></Button></li>
                      <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                      <li><Button><Link to="/about">Terms of Service</Link></Button></li>
                    </ul>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button><Link><strong>Contact</strong></Link></Button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Support Info */}
          <div className="col-lg-2 col-md-3 col-6 part3 text-end">
            <div className="phNo d-flex align-items-center justify-content-lg-end justify-content-center">
              <span className="me-1"><HeadsetMicOutlinedIcon /></span>
              <div className="info ps-1 text-lg-end text-center">
                <h3 className="text-g mb-0 fs-6">+88199 - 5555</h3>
                <p className="mb-0 small">24/7 Support Center</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Nav;
