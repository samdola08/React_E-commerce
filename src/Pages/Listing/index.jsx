
import React, { useState } from "react"; 
import "./style.css";
import HeaderBg from "../../assets/images/header-bg.png";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Sidebar from "../../components/Sidebar";
import ProductGrid from "../../components/productGrid";
import Product from "../../components/product";
import ProductRow from "../../components/productCard/ProductRow";
import { colors } from "@mui/material";
import Button from '@mui/material/Button';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';



const Listing = () => {
    const [isOpenDropDownShow, setIsOpenDropDownShow] = useState(false);
  const [isOpenDropDownSort, setIsOpenDropDownSort] = useState(false);
  return (
    <>
      <section>
        <div className="listingPage">
          <div className="container-fluid">
            <div className="breadcrumb  d-flex flex-column" >
              <div className="info">
                <h1>Snack</h1>
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <Link to={""}>
                      {" "}
                      <HomeIcon
                        fontSize="small"
                        style={{ position: "relative", top: "-2px" }}
                      />{" "}
                      Home
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={""}>
                      <KeyboardArrowRightIcon fontSize="smaller" /> &nbsp;Shop
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={""}>
                      {" "}
                      <KeyboardArrowRightIcon fontSize="smaller" /> &nbsp; Snack
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="img">
                <img src={HeaderBg} alt="" className="w-100" />
              </div>
            </div>

            <div className="listingData">
              <div className="row">
                <div className="sidebarWrapper col-md-3">
                  <Sidebar />
                </div>
                <div className=" rightContent col-md-9">

                  <div className="topStrip d-flex align-items-center justify-content-between">
                    <p>We Found <span style={{color:'#29a56c'}}>29</span> items for you!</p>
                    
                     <div className="d-flex align-items-center gap-5">
      
                        <div className="tab_ position-relative">
                          <Button className="btn" onClick={() => { setIsOpenDropDownShow(!isOpenDropDownShow); setIsOpenDropDownSort(false);  }} >
                            <WidgetsOutlinedIcon /> &nbsp; Show : 50
                          </Button>
                          {isOpenDropDownShow && (
                            <ul className="dropdownMenu">
                              <li>
                                <Button className="align-items-center" onClick={() => setIsOpenDropDownShow(false)} > 50 </Button>
                              </li>
                              <li>
                                <Button className="align-items-center" onClick={() => setIsOpenDropDownShow(false)} > 100</Button>
                              </li>
                              <li>
                                <Button className="align-items-center" onClick={() => setIsOpenDropDownShow(false)} > 200</Button>
                              </li>
                              <li>
                                <Button className="align-items-center" onClick={() => setIsOpenDropDownShow(false)} > 500</Button>
                              </li>
                              <li>
                                <Button className="align-items-center" onClick={() => setIsOpenDropDownShow(false)} > All</Button>
                              </li>
                            </ul>
                          )}
                        </div>

                        <div className="tab_ position-relative">
                          <Button
                            className="btn"
                            onClick={() => {
                              setIsOpenDropDownSort(!isOpenDropDownSort);
                              setIsOpenDropDownShow(false);
                            }}
                          >
                            <VerticalSplitOutlinedIcon /> &nbsp; Sort by: Featured
                          </Button>
                          {isOpenDropDownSort && (
                            <ul className="dropdownMenu2">
                              <li>
                                <Button className="align-items-center" onClick={() => setIsOpenDropDownSort(false)} > Featured</Button>
                              </li>
                              <li>
                                <Button className="align-items-center" onClick={() => setIsOpenDropDownSort(false)} >
                                  Price: Low to High
                                </Button>
                              </li>
                              <li>
                                <Button className="align-items-center" onClick={() => setIsOpenDropDownSort(false)} >
                                  Price: High to Low
                                </Button>
                              </li>
                              <li>
                                <Button className="align-items-center" onClick={() => setIsOpenDropDownSort(false)} > Release Date
                                </Button>
                              </li>
                              <li>
                                <Button className="align-items-center" onClick={() => setIsOpenDropDownSort(false)} > Avg. Rating
                                </Button>
                              </li>
                            </ul>
                          )}
                        </div>
                      </div>

                  </div>




                  <div className="productRow" >
                    <div className="item">
                      <Product tag="best"  />
                    </div>
                      <div className="item">
                      <Product tag="new"  />
                    </div>
                     <div className="item">
                      <Product tag="new"  />
                    </div>
                     <div className="item">
                      <Product tag="best"  />
                    </div>
                     <div className="item">
                      <Product tag="hot"  />
                    </div>
                     <div className="item">
                      <Product tag="best"  />
                    </div>
                    <div className="item">
                      <Product tag="hot"  />
                    </div>
                    <div className="item">
                      <Product tag="new"  />
                    </div>
                    <div className="item">
                      <Product tag="best"  />
                    </div>
                    <div className="item">
                      <Product  />
                    </div>
                    <div className="item">
                      <Product tag=""  />
                    </div>
                    <div className="item">
                      <Product  />
                    </div>
                    <div className="item">
                      <Product  />
                    </div>
                    <div className="item">
                      <Product   />
                    </div>
                    <div className="item">
                      <Product tag="hot"  />
                    </div>
                    <div className="item">
                      <Product tag="best"  />
                    </div>
                    <div className="item">
                      <Product />
                    </div>
                    <div className="item">
                      <Product />
                    </div>
                    <div className="item">
                      <Product  />
                    </div>
                    <div className="item">
                      <Product tag="hot"  />
                    </div>
                    <div className="item">
                      <Product tag="new"  />
                    </div>
                    <div className="item">
                      <Product tag="hot"  />
                    </div>
                    <div className="item">
                      <Product  />
                    </div>
                    <div className="item">
                      <Product tag="best"  />
                    </div>
                    <div className="item">
                      <Product tag="new"  />
                    </div>
                   <ProductRow />
                  </div>

                  <div className="photoCard ">
                    <div className="product-cart-wrap">
                      <ProductGrid />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
