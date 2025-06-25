import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import flagFr from '../../assets/images/flag-fr.png';
import flagDt from '../../assets/images/flag-dt.png';
import flagRu from '../../assets/images/flag-ru.png';


const TopHeader = () => {
  return (
   <div className="topheader">
    <div className='container-fluid'>
        <div className="row align-items-center">
            <div className="col-sm-3">
                <div className="header-info">
                <ul>
                    <li><Link>About Us</Link></li>
                    <li><Link>My Account</Link></li>
                    <li><Link>Wishlist</Link></li>
                    <li><Link>Order Tracking</Link></li>
                </ul>
                </div>
            </div>

            <div className="col-sm-6 text">
                <div className="text-center">
                    <div id="news-flash">
                        <ul>
                            <li>100% Secure delivery without contacting the courier</li>
                            <li>Big Discounts on Grocery!</li>
                            <li>Free Delivery on orders over $50</li>
                        </ul>
                        </div>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="header-info-two header-info-right">
                <ul>
                    <li>
                        Need help? Call Us: <strong className="text-brand">+ 880 1*******</strong>
                    </li>
                     <li>
                        <a className="language-dropdown-active" href="#">
                            English <i className="fi-rs-angle-small-down"></i>
                        </a>
                        <ul className="language-dropdown">
                            {/* <li><a href="#"><img src={flagFr} alt="Français" /> Français</a></li>
                            <li><a href="#"><img src={flagDt} alt="Deutsch" /> Deutsch</a></li>
                            <li><a href="#"><img src={flagRu} alt="Russian" /> Pусский</a></li> */}
                        </ul>
                    </li>
                    <li>
                    <a className="language-dropdown-active" href="#">
                        USD <i className="fi-rs-angle-small-down"></i>
                    </a>
                    <ul className="language-dropdown">
                        {/* <li><a href="#"><img src={flagFr} alt="INR" /> INR</a></li>
                        <li><a href="#"><img src={flagDt} alt="MBP" /> MBP</a></li>
                        <li><a href="#"><img src={flagRu} alt="EU" /> EU</a></li> */}
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
   </div>
  );
};

export default TopHeader;
