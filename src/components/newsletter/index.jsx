import React from 'react';
import './style.css';
import Button from '@mui/material/Button';
import 'font-awesome/css/font-awesome.min.css';





const Newsletter = () => {
    return (
        <>
            <div className=''>
                <div className='container-fluid'>
                       <div className="newsLetterBanner">
                            <i className="fa-solid fa-paper-plane myicon"></i>
                            <input type="text" placeholder="Your email address" />
                            <Button className="bg-g">Subscribe</Button>

                        </div>
                </div>
            </div>
        </>
    )

}



export default Newsletter;