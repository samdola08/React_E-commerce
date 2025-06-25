import React from 'react';
import SliderBanner from './slider/index';
import CatSlider from '../../components/catSlider';
import Banners from '../../components/banners';
import './style.css'
import Product from '../../components/product';
import Banner4 from '../../assets/images/banner4.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from "react-slick";
import ProductGrid from '../../components/productGrid'; 
import TopProducts from './topProducts';

import Footer from '../../components/footer/footer';

const Home = () => {

    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true
    };



    return (
        <>
            <div className=''>
                <SliderBanner />
                <CatSlider />

                <Banners />

                <section className='homeProducts'>
                    <div className="container-fluid">
                       <div className='d-flex align-items-center mb-0'>
                           <h2 className='hd'>
                            Popular Products
                           </h2>
                           <ul className='list list-inline  ms-auto filterTab '>
                                <li className='list-inline-item'>
                                    <a className='cursor'>All</a>
                                </li>
                                <li className='list-inline-item'>
                                    <a className='cursor'>Milks & Dairies</a>
                                </li>
                                <li className='list-inline-item'>
                                    <a className='cursor'>Coffes & Teas</a>
                                </li>
                                <li className='list-inline-item'>
                                    <a className='cursor'>Meats</a>
                                </li>
                                <li className='list-inline-item'>
                                    <a className='cursor'>Vegetables</a>
                                </li>
                                <li className='list-inline-item'>
                                    <a className='cursor'>Fruits</a>
                                </li>
                                <li className='list-inline-item'>
                                    <a className='cursor'>Pet Foods</a>
                                </li>
                           </ul>
                       </div>


                        <div className=" productRow">
                            <div className="item">
                                <Product  tag="sale"/>
                            </div>
                            <div className="item">
                                <Product  tag="hot"/>
                            </div>
                            <div className="item">
                                <Product  tag="new"/>
                            </div>
                            <div className="item">
                                <Product  tag="best"/>
                            </div>
                            <div className="item">
                                <Product  tag="sale"/>
                            </div>
                              <div className="item">
                                <Product />
                            </div>
                            <div className="item">
                                <Product  tag="new"/>
                            </div>
                            <div className="item">
                                <Product />
                            </div>
                            <div className="item">
                                <Product  tag="hot"/>
                            </div>
                            <div className="item">
                                <Product  tag="new"/>
                            </div>
                        </div>

                        
                    </div>
                </section>



                 <section className='homeProductsRow2 pt-0'>
                    <div className="container-fluid">
                       <div className='d-flex align-items-center mb-0'>
                           <h2 className='hd'>
                           Daily Best Sells
                           </h2>
                           <ul className='list list-inline  ms-auto filterTab'>
                                <li className='list-inline-item'>
                                    <a className='cursor'>Featured</a>
                                </li>
                                <li className='list-inline-item'>
                                    <a className='cursor'>Popular</a>
                                </li>
                                <li className='list-inline-item'>
                                    <a className='cursor'>New added</a>
                                </li>
                           </ul>
                       </div>
<br />
                        <div className='row'>
                            <div className='col-md-3 '>
                                <div className='col'>
                                    <div className="box">
                                        <img src={Banner4} alt="" className='w-100 transition' />
                                        <div className="info">
                                            <h2 className='mb-4'>
                                               Bring nature into your home
                                            </h2>
                                            <button className="shopBtn">Shop Now <ArrowForwardIcon style={{ verticalAlign: 'middle', marginLeft: '8px' }} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-9'>
                                <Slider {...settings} className="prodSlider">
                               
                                <div className='item'>  <Product  tag="sale"/> </div>
                                <div className='item'>  <Product  tag="hot"/> </div>
                                <div className='item'>  <Product  tag="sale"/> </div>
                                <div className='item'>  <Product  tag="new"/> </div>
                                <div className='item'>  <Product  tag="sale"/> </div>
                                <div  className='item'>  <Product  tag="hot"/> </div>
                                    
                                </Slider>
                            </div>
                        </div>
                       

                        <ProductGrid />
                    </div>
                 </section>


                <section className='topProductSection'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>                       
                                <TopProducts title="Top Selling"/>
                            </div>
                             <div className='col'>                             
                                <TopProducts title="Tranding Products"/>
                            </div>
                             <div className='col'>                             
                                <TopProducts title="Recently Added"/>
                            </div>
                             <div className='col'>                         
                                <TopProducts title="Top Rated"/>
                            </div>
                        </div>
                    </div>
                </section>


               
                
                {/* <Footer/> */}
                
            </div>
        </>
    )

}



export default Home;