import React from "react";
import "./nav.css";

import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { Link } from "react-router-dom";
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import CategoryPanel from "./CategoryPanel";
import { useNavigate } from 'react-router-dom';




const Nav = () => {
  return (
    <>
      <div className="nav d-flex align-items-center">
        <div className="container-fluid">
          <div className="row position-relative">
            <div className="col-sm-2 part1 d-flex align-itens catTab">
                <CategoryPanel/>
            </div>

            <div className="col-sm-8 part2 position-static">
              <nav>
                <ul className="list list-inline mb-0" >
                  <li className="list-inline-item">
                    <Button>
                      <Link><strong> Deals </strong></Link>
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button>                
                      <Link to="/" className="list-link"> <strong> Home </strong> <KeyboardArrowDownIcon /> </Link>
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button >
                      <Link to="/list" className="list-link"><strong> List </strong></Link>
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link> <strong> About </strong> </Link>
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link> <strong> Shop </strong> <KeyboardArrowDownIcon /> </Link>
                    </Button>

                    <div className="dropdown-menu">
                        <ul>
                            <li><Button><Link to="/about"> About Us </Link></Button></li>
                            <li><Button><Link to="/about"> Contact </Link></Button></li>
                            <li><Button><Link to="/about"> My Account </Link></Button></li>
                          
                        </ul>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link> <strong> Vendors </strong> <KeyboardArrowDownIcon /> </Link>
                    </Button>
                  
                  </li>
                  <li className="list-inline-item position-static ">
                    <Button>
                      <Link> <strong> Mega Menu  </strong> <KeyboardArrowDownIcon /> </Link>
                    </Button>
                      <div className="dropdown-menu megaMenu w-100">
                        <div className="row ">
                            <div className="col">
                                <h4 className="text-g"> <strong>Fruit & Vegetables</strong></h4>
                                <ul className="mt-4 mb-0">
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
                                <ul className="mt-4 mb-0">
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
                                <ul className="mt-4 mb-0">
                                  <li><Link to="">Breakfast Sausage</Link></li>
                                  <li><Link to="">Dinner Sausage</Link></li>
                                  <li><Link to="">Chicken</Link></li>
                                  <li><Link to="">Sliced Deli Meat</Link></li>
                                  <li><Link to="">Crab and Shellfish</Link></li>
                                  <li><Link to="">Wild Caught Fillets</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-menu.png" alt="" className="w-100" />
                            </div>
                        </div>
                      </div>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link> <strong> Blog </strong> <KeyboardArrowDownIcon /> </Link>
                    </Button>
                    <div className="dropdown-menu">
                        <ul>
                            <li><Button><Link to="/about"> About Us </Link></Button></li>
                            <li><Button><Link to="/about"> Contact </Link></Button></li>
                            <li><Button><Link to="/about"> My Account </Link></Button></li>
                            <li><Button><Link to="/about"> Login </Link></Button></li>
                            <li><Button><Link to="/about"> Register </Link></Button></li>
                           
                        </ul>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link> <strong> Pages </strong> <KeyboardArrowDownIcon /> </Link>
                    </Button>

                    <div className="dropdown-menu">
                        <ul>
                            <li><Button><Link to="/about"> About Us </Link></Button></li>
                            <li><Button><Link to="/about"> Contact </Link></Button></li>
                            <li><Button><Link to="/about"> My Account </Link></Button></li>
                            <li><Button><Link to="/about"> Login </Link></Button></li>
                            <li><Button><Link to="/about"> Register </Link></Button></li>
                            <li><Button><Link to="/about"> Forgot Password </Link></Button></li>
                            <li><Button><Link to="/about"> Purchase Guide </Link></Button></li>
                            <li><Button><Link to="/about"> Privacy Policy </Link></Button></li>
                            <li><Button><Link to="/about"> Terms of Service </Link></Button></li>
                        </ul>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link> <strong> Contact </strong> </Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-sm-2 part3 d-flex align-items-center">
                <div className="phNo d-flex align-items-center ">
                    <span><HeadsetMicOutlinedIcon /></span>
                    <div className="info ml-3">
                        <h3 className="text-g mb-0" > +88199 - 5555 </h3>
                        <p className="mb-0">24/7 Support Center</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Nav;
