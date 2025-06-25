
import Slider from "react-slick";
import "./style.css";
import React, { useState } from "react";

const CatSlider = () => {


    const [itemBg, setItemBg] = useState([
        '#e0e0ff',
        '#fffceb',
        '#ecffec',
        '#feefea',        
        '#e1e6e9',
        '#fff3eb',
        '#fff3ff',
        '#ecffec',
        '#fffceb', 
        '#f2fce4',        
        '#feefea',  
        '#fff3eb',
        '#e0e0ff',
       '#e1e6e9',
        '#fff3ff',
        '#fffceb',        
        '#ecffec',
        '#feefea',
        '#fff3ff',
        '#f2fce4',        
        '#fff3eb',
        '#feefea',
        '#fffceb',
        '#e1e6e9',
        '#ecffec',
    ]);


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
      centerPadding: '40px',
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode:true,
  };

  
  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Featured Categories</h2>
          <Slider {...settings} className="cat_slider_Main" id="cat_slider_Main">
                  
               {
                itemBg.length !==0 && itemBg.map((item,index)=>{
                    return (
                        <div className="item" >
                            <div className="info" style={{background:item}}>
                                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                                <h5>Peach</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                    )
                })   
            }



            
             {/* <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png" alt="" />
                    <h5>Snack</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-1.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-2.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-9.png" alt="" />
                    <h5>Red Apple</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div>
             <div className="item">
                <div className="info">
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Peach</h5>
                    <p>26 items</p>
                </div>
            </div> */}
            
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CatSlider;
