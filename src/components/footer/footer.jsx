import React from "react";
import "./footer.css";
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import Icon4 from '../../assets/images/icon-4.svg';
import Icon5 from '../../assets/images/icon-5.svg';
import Logo from '../../assets/images/logo.svg';
import {Link} from 'react-router-dom';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import appStore from '../../assets/images/app-store.jpg';
import googlePlay from '../../assets/images/google-play.jpg';
import payment from '../../assets/images/money2.png';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import Banner9 from '../../assets/images/banner-9.png';
import Newsletter from '../../components/newsletter';



const Footer = () => {
  return (
    <>

     <section className='newsLetterSection'>
          <div className='container-fluid'>
              <div className='box d-flex align-items-center'>
                  <div className='info'>
                      <h1>Stay home & get your daily needs from our shop</h1>
                      <p>Start You'r Daily Shopping with <span style={{color:'#3bb77e'}}>Nest Mart</span></p>
                      <Newsletter/>
                  </div>
                  <div className='img'>
                      <img src={Banner9} alt="" className='w-100' />
                  </div>
              </div>
          </div>
      </section>


      <div className="footerWrapper">
        <div className="footerBoxes">
          <div className="container-fluid">
            <div className="row">

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span><img src={Icon1} alt="icon1" /></span>
                  <div className="info">
                    <h5>Best prices & offers</h5>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span><img src={Icon2} alt="icon2" /></span>
                  <div className="info">
                    <h5>Free delivery</h5>
                    <p>On all orders</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span><img src={Icon3} alt="icon3" /></span>
                  <div className="info">
                    <h5>Great daily deal</h5>
                    <p>Save up to 25%</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100 ">
                  <span><img src={Icon4} alt="icon4" /></span>
                  <div className="info">
                    <h5>Wide assortment</h5>
                    <p>Megastore selection</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span><img src={Icon5} alt="icon5" /></span>
                  <div className="info">
                    <h5>Easy returns</h5>
                    <p>Within 30 days</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>



        <footer className="footer">
          <div className="container-fluid">
              <div className="row">
                <div className="col-md-3 part1">
                  <Link><img src={Logo} alt="" /></Link> <br /><br />
                  <p style={{fontSize:'18px'}}>Great products. Great prices. <br /> Delivered to your door.</p>
                  <p> <AddLocationOutlinedIcon/> <strong>Address : </strong> 175/A, Borogram, MainRoad, Kamrangirchar, Dhaka-1211 </p>
                  <p> <HeadsetMicOutlinedIcon/> <strong>Call Us : </strong>(+880)-151-650-2114</p>
                  <p> <AttachEmailOutlinedIcon/> <strong>Email : </strong>sale@Nest.com</p>
                  <p> <AvTimerOutlinedIcon/> <strong>Hours : </strong>24/7</p>
                </div>
                <div className="col-md-7 part2">
                  <div className="row">
                    <div className="col">
                      <h3>Company</h3>
                      <ul className="footer-list mb-sm-5 mb-md-0">
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">Delivery Information</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Terms &amp; Conditions</Link></li>
                        <li><Link to="#">Contact Us</Link></li>
                        <li><Link to="#">Support Center</Link></li>
                        <li><Link to="#">Careers</Link></li>
                      </ul>
                    </div>

                    <div className="col">
                      <h3>Account</h3>
                      <ul className="footer-list mb-sm-5 mb-md-0">
                        <li><a href="#">Sign In</a></li>
                            <li><Link to="#">View Cart</Link></li>
                            <li><Link to="#">My Wishlist</Link></li>
                            <li><Link to="#">Track My Order</Link></li>
                            <li><Link to="#">Help Ticket</Link></li>
                            <li><Link to="#">Shipping Details</Link></li>
                            <li><Link to="#">Compare products</Link></li>
                      </ul>
                    </div>

                    <div className="col">
                      <h3>Corporate</h3>
                      <ul className="footer-list mb-sm-5 mb-md-0">
                       <li><a href="#">Become a Vendor</a></li>
                            <li><Link to="#">Affiliate Program</Link></li>
                            <li><Link to="#">Farm Business</Link></li>
                            <li><Link to="#">Farm Careers</Link></li>
                            <li><Link to="#">Our Suppliers</Link></li>
                            <li><Link to="#">Accessibility</Link></li>
                            <li><Link to="#">Promotions</Link></li>
                      </ul>
                    </div>

                    <div className="col">
                      <h3>Popular</h3>
                      <ul className="footer-list mb-sm-5 mb-md-0">
                         <li><a href="#">Milk &amp; Flavoured Milk</a></li>
                            <li><Link to="#">Butter and Margarine</Link></li>
                            <li><Link to="#">Eggs Substitutes</Link></li>
                            <li><Link to="#">Marmalades</Link></li>
                            <li><Link to="#">Sour Cream and Dips</Link></li>
                            <li><Link to="#">Tea &amp; Kombucha</Link></li>
                            <li><Link to="#">Cheese</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 part3">
                  <h3>Install App</h3> 
                  <p>From App Store or Google Play</p>
                  <div className="d-flex g-2">
                    <Link><img src={appStore} alt="" width={125}  className="my-3"/></Link>
                    <Link><img src={googlePlay} alt="" width={125} className="mx-2 my-3"/></Link>
                                      </div> <br />
                <p>Secured Payment Gateways</p> <br />
               <img src={payment} alt="payment" width={300} />
                </div>

              </div>

              <hr />

              <div className="row lastStrip">
                <div className="col-md-3">
                  <p>© 2025  — “Delivering happiness, one order at a time.” All rights reserved.</p>

                </div>
                <div className="col-md-6 part4" >
                    <div className="phNo d-flex align-items-center ">
                        <span><AddIcCallOutlinedIcon /></span>&nbsp;&nbsp;
                        <div className="info ml-3"> 
                            <h3 className="text-g mb-0" > +8801995 - 555555 </h3>
                            <p className="mb-0">Working 8:00 - 22:00</p>
                        </div>
                    </div>
                    <div className="phNo d-flex align-items-center ">
                        <span><AddIcCallOutlinedIcon /></span>&nbsp;&nbsp;
                        <div className="info ml-3">
                            <h3 className="text-g mb-0" > +8801995 - 555555 </h3>
                            <p className="mb-0">24/7 Support Center</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 part5">
                  <div className="d-flex align-items-center">
                    <h5>Follow us</h5>
                    <ul className="list list-inline">
                      <li className="list-inline-item">
                          <Link to={'https://www.facebook.com/samdola8/'}><i className="fa-brands fa-facebook social-icon"></i></Link>
                      </li>
                       <li className="list-inline-item">
                          <Link to={'https://www.instagram.com/nhr_dola/'}> <i className="fa-brands fa-instagram social-icon"></i></Link>
                      </li>
                       <li className="list-inline-item">
                          <Link to={'https://x.com/Samsun_nahar_'}><i className="fa-brands fa-twitter social-icon"></i></Link>
                      </li>
                       <li className="list-inline-item">
                          <Link to={'https://github.com/samdola08'}><i className="fa-brands fa-github social-icon"></i></Link>
                      </li>
                       <li className="list-inline-item">
                          <Link to={''}><i className="fa-brands fa-youtube social-icon"></i></Link>
                      </li>
                       
                    </ul>
                  </div>
                    <p className="mt-4">Up to 15% discount on your first subscribe</p>
                </div>
              </div>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Footer;
