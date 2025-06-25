import React from 'react';
import './style.css';
import './slider.css';

import Category1 from "../../assets/images/category-1.svg";

import Category3 from "../../assets/images/category-3.svg";
import Category4 from "../../assets/images/category-4.svg";
import Category6 from "../../assets/images/category-6.svg";
import Category7 from "../../assets/images/category-7.svg";
import Button from '@mui/material/Button';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import thumbnail1 from '../../assets/images/thumbnail1.jpg';
import Banner11 from "../../assets/images/banner-11.png";

import Rating from "@mui/material/Rating";

import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function valuetext(value) {
  return `${value}৳`;
}

const Sidebar = () => {
  const [value, setValue] = React.useState([500, 3000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='sidebar'>
 
      <div className="card">
        <h2>Category</h2>
        <div className="catList">
          <div className="catItem">
            <span> <img src={Category6} alt="" width={35} /> </span>
            <h5>Milks & Dairies</h5>
            <span className='catItemcir'>2</span>
          </div>
          <div className="catItem">
            <span> <img src={Category3} alt="" width={35} /> </span>
            <h5>Clothing</h5>
            <span className='catItemcir'>0</span>
          </div>
          <div className="catItem">
            <span> <img src={Category4} alt="" width={35} /> </span>
            <h5>Pet Foods</h5>
            <span className='catItemcir'>30</span>
          </div>
          <div className="catItem">
            <span> <img src={Category1} alt="" width={35} /> </span>
            <h5>Baking Material</h5>
            <span className='catItemcir'>50</span>
          </div>
          <div className="catItem">
            <span> <img src={Category7} alt="" width={35} /> </span>
            <h5>Fresh Fruit</h5>
            <span className='catItemcir'>16</span>
          </div>
        </div>
      </div>


      <div className="card">
        <h2>Fill by price</h2>
        <Box sx={{ width: '100%', mt: 2 }}>
          <Slider className="customSlider"
            getAriaLabel={() => 'Price range'}
            value={value}
            onChange={handleChange}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            min={0}
            max={5000}
           />
          <div className='priceRange' style={{  }}>
            <span>From: ৳{value[0]}</span>
            <span>To: ৳{value[1]}</span>
          </div>
        </Box>
        <div className='filters'>
            <h5>Color</h5>
        
            <div className="filter-option scrollable-filter">
                <label className="checkbox-container">
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    Red (56)
                </label>

                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Green (78)
                </label>

                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Blue (54)
                </label>
                <label className="checkbox-container">
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    Yellow (56)
                </label>

                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Pink (78)
                </label>

                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Purple (54)
                </label>
                <label className="checkbox-container">
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    Black (56)
                </label>

                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    White (78)
                </label>

                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Gray (54)
                </label>
                <label className="checkbox-container">
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    Brown (56)
                </label>

                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Green (78)
                </label>

                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Maroon (54)
                </label>
            </div>

        </div>

         <div className='filters'>
            <h5>Item Condition</h5>
        
            <div className="filter-option scrollable-filter">
                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    New (15)
                </label>

                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    User (38)
                </label>

                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Refurbished (22)
                </label>
                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Open Box (12)
                </label>

                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    For Parts or Not Working (4)
                 </label>

                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Like New (18)
                </label>

                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Very Good (18)
                </label>

                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Used - Good (18)
                </label>
                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Minor Defects (18)
                </label>
                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                   Demo Unit (18)
                </label>
                 <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                   Customized/Modified (18)
                </label>

            </div>

        </div>

        <Button className='shopBtn'><FilterAltOutlinedIcon/> &nbsp;  Filter</Button>

      </div>

      <div className="card newProducts sidebar">
        <h2>New products</h2>

        <div className="productList">
          <div className="productItem">
            <div className="image">
              <img src={thumbnail1} alt="Chen Cardigan" />
            </div>

            <div className="details">
              <h5>Chen Cardigan</h5>
              <p>$89.5</p>
              <Rating className="rating" />
            </div>
          </div>
          <div className="productItem">
            <div className="image">
              <img src={thumbnail1} alt="Chen Cardigan" />
            </div>

            <div className="details">
              <h5>Chen Cardigan</h5>
              <p>$89.5</p>
              <Rating className="rating" />
            </div>
          </div>
          <div className="productItem">
            <div className="image">
              <img src={thumbnail1} alt="Chen Cardigan" />
            </div>

            <div className="details">
              <h5>Chen Cardigan</h5>
              <p>$89.5</p>
              <Rating className="rating" />
            </div>
          </div>
          <div className="productItem">
            <div className="image">
              <img src={thumbnail1} alt="Chen Cardigan" />
            </div>

            <div className="details">
              <h5>Chen Cardigan</h5>
              <p>$89.5</p>
              <Rating className="rating" />
            </div>
          </div>
         
        </div>
      </div>
    <div className="imageBox bannerCard">
     
      <p className="image-subtitle">Organic</p>

      <h5 className="image-title">
        Save 17% on <span style={{ color: "#29a56c" }}>Organic</span> Juice
      </h5>

     
      <img src={Banner11} alt="Organic juice" className="image-banner" />
    </div>


    </div>
  );
};

export default Sidebar;
