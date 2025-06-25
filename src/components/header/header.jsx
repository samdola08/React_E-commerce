import React, { useEffect, useRef, useState } from "react";
import "../header/header.css";

import Logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDrop/select";
import axios from 'axios';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import iconCompare from '../../assets/images/icon-compare.svg';
import iconCart from '../../assets/images/icon-cart.svg';
import iconHeart from '../../assets/images/icon-heart.svg';
import iconUser from '../../assets/images/icon-user.svg';
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Nav from './nav/nav';
import '@fontsource/roboto'; 
import TopHeader from "../topheader";








const Header = () => {

  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const headerRef = useRef();






  const [categories, setcategories] = useState([
    'Milks and Dairies',
    'Clothing & Beauty',
    'Fast Food','Baking meterial',
    'Vegetables',
    'Fresh SeaFood',
    'Noodles & Rice',
    'Ice Cream',
    'Bread & Juice'
  ]);


  const [countryList, setCountryList] = useState([]);


  useEffect(()=>{
    getCountry('http://dola.intelsofts.com/laravel/l_ecommerce/public/api/countries');
  }, []);

  const getCountry = async (url) => {
    try {
      const res = await axios.get(url);
      console.log("API Data:", res.data);
      
      if (res && res.data) {
        setCountryList(res.data);
      }
    } catch (error) {
      console.error('Error fetching countries:', error.message);
    }
  };

useEffect(() => {
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 100) {
      headerRef.current.classList.add('fixed');
    } else {
      headerRef.current.classList.remove('fixed');
    }
  };

  window.addEventListener("scroll", handleScroll);


  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);



  return (
    <>
      <div className="headerWraper" ref={headerRef}>
          <header >
            <div className="container-fluid">
              <TopHeader />
          
              {/* Row Start */}

             <div className="row" style={{ paddingTop: '20px' }}>

                <div className="col-sm-2">
                  <img src={Logo} alt="Logo" />
                </div>

                {/* headerSearch Start */}

                <div className="col-sm-5">
                  <div className="headerSearch d-flex align-items-center">
                    <Select data={categories} placeholder={ 'All Categories'} icon={false}/>

                    <div className="search">
                      <input type="text" placeholder="Search for items..." />
                      <SearchIcon className="searchIcon cursor" />
                    </div>
                  </div>
                </div>
                {/* headerSearch End */}

                <div className="col-sm-5 d-flex align-items-center ;">
                <div style={{marginLeft: '0px'}} className="d-flex align-items-center"> 
                    <div className="countryWrapper">
                      <Select data={countryList} placeholder={ 'Your Location'} icon={    <AddLocationAltOutlinedIcon style={{opacity:'0.7'}}/>}/> 
                    </div>

                    <ul className="list list-inline mb-0 header-tabs">
                      <li className="list-inline-item ">
                        <span className="" style={{fontWeight:"bolder"}}>
                          <img src={iconCompare} alt="" width={25} />
                          <span className="badge bg-success rounded-circle">3</span>
                          Compare
                        </span>
                      </li>
                        <li className="list-inline-item">
                        <span style={{fontWeight:"bolder"}}>
                          <img src={iconHeart} alt="" width={25} />
                          <span className="badge bg-success rounded-circle">3</span>
                          Wishlist
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span style={{fontWeight:"bolder"}}>
                          <img src={iconCart} alt="" width={25} />
                          <span className="badge bg-success rounded-circle">3</span>
                          Cart
                        </span>
                      </li>
                    <li className="list-inline-item position-relative">
                        <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
                          <div>
                            <span onClick={() => setisOpenDropDown(!isOpenDropDown)} style={{fontWeight:"bolder"}}>
                              <img src={iconUser} alt="" width={25} />
                              Account
                            </span>

                            {isOpenDropDown && (
                              <ul className="dropdownMenu">
                                <li><Button><PersonOutlineOutlinedIcon /> My Account</Button></li>
                                <li><Button><LocationOnOutlinedIcon className="mr-10" /> Order Tracking</Button></li>
                                <li><Button><FavoriteBorderOutlinedIcon /> My Wishlist</Button></li>
                                <li><Button><SettingsOutlinedIcon /> Setting</Button></li>
                                <li><Button><ExitToAppOutlinedIcon /> Sign out</Button></li>
                              </ul>
                            )}
                          </div>
                        </ClickAwayListener>
                      </li>

                    </ul>

                </div>

                </div>
              </div>

              {/* Row End */}
            </div>
          </header>


          <Nav/>
        </div>
     </>
  );
};

export default Header;
