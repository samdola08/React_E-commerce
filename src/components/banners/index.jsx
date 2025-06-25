import React from 'react';
import Banner1 from '../../assets/images/banner1.png';
import Banner2 from '../../assets/images/banner2.png';
import Banner3 from '../../assets/images/banner3.png';
import './style.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';





const Banners = () => {
    return (
        <>
            <div className='bannerSection'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <div className="box">
                                <img src={Banner1} alt="" className='w-100 transition' />
                                <div className="info">
                                    <h4 className='mb-4'>
                                        Everyday Fresh &amp; <br />Clean with Our<br />
                                        Products
                                    </h4>
                                     <button className="shopBtn">Shop Now <ArrowForwardIcon style={{ verticalAlign: 'middle', marginLeft: '8px' }} /></button>
                                </div>
                            </div>
                        </div>
                          <div className='col'>
                            <div className="box">
                                <img src={Banner2} alt="" className='w-100 transition ' />
                                <div className="info">
                                    <h4>
                                        Make your Breakfast<br/>
                                        Healthy and Easy
                                    </h4>
                                     <button className="shopBtn" style={{ marginTop: "47px"}}>Shop Now <ArrowForwardIcon style={{ verticalAlign: 'middle', marginLeft: '8px' }} /></button>
                                </div>
                            </div>
                        </div>
                          <div className='col'>
                            <div className="box">
                                <img src={Banner3} alt="" className='w-100 transition' />
                                <div className="info">
                                    <h4>The best Organic <br />Products Online</h4>
                                    <button className="shopBtn" style={{ marginTop: "47px"}}>Shop Now <ArrowForwardIcon style={{ verticalAlign: 'middle', marginLeft: '8px' }} /></button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )

}



export default Banners;