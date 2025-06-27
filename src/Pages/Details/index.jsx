import React, { useRef, useState } from 'react';
import './style.css';
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Rating from "@mui/material/Rating";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import Slider from "react-slick";

// 👉 Thumbnails & default image
import Product1 from '../../assets/images/pro1.webp';
import Product2 from '../../assets/images/pro2.webp';
import Product3 from '../../assets/images/pro3.jpg';
import Product4 from '../../assets/images/pro4.webp';
import Product5 from '../../assets/images/pro5.webp';
import Product6 from '../../assets/images/pro6.webp';
import Product7 from '../../assets/images/pro7.webp';
import Product8 from '../../assets/images/pro8.webp';
import Product9 from '../../assets/images/pro9.webp';
import Vendor18 from '../../assets/images/vendor-18.svg';
import Author1 from '../../assets/images/author-2.png';

import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
// import "./counter.css";
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import Sidebar from '../../components/Sidebar';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Typography from '@mui/material/Typography';
import Product from '../../components/product';



const DetailsPage = () => {
  const zoomSlider = useRef(null);
  const [qty, setQty] = useState(1);
  const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
  const [SmlImageSize, setSmlImageSize] = useState([150, 150]);

  const thumbnails = [Product3, Product2, Product1, Product4, Product5, Product6, Product7, Product8, Product9];
const progressValues = [50, 25, 65, 45, 95];
const labels = ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'];

  const [activeSize, setActiveSize] = useState(0);

  const [activeTabs, setActiveTabs] = useState(3);


  const [currentImage, setCurrentImage] = useState(Product1);
  const mainSlider = useRef(null);     
  const thumbSlider = useRef(null); 

    const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  const goto = (index) => {
  const selectedImage = thumbnails[index];
  setCurrentImage(selectedImage);

  
  setTimeout(() => {
    setZoomImage(selectedImage); 
  }, 5000);

  if (zoomSlider.current) {
    zoomSlider.current.slickGoTo(index);
  }
};

   var reletad = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true
    };

  const ratingText = '4.5';

  return (
    <section className="detailsPage">
      {/* 🔗 Breadcrumb */}
      <div className='breadcrumbWrapper'>
        <div className='container-fluid'>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">
                  <HomeIcon style={{ verticalAlign: 'middle', position: 'relative', top: '-3px', marginRight: '4px' }} /> Home
                </Link>
              </li>
              <li className="breadcrumb-item"><Link to="/library">Vegetables & tubers</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Seeds of Change Organic</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className='container-fluid detailsContainer'>
        <div className='row'>
          <div className='col-lg-9 col-md-12 part1'>
            <div className='row'>
              {/* 🔍 Zoom Section */}
              <div className='col-lg-4 col-md-6 col-12 mb-3'>
                <div className='productZoom' style={{ maxWidth: 500 }}>
                <Slider {...settings2} className="zoomSlider thumbSlider" ref={mainSlider} afterChange={(idx) => setCurrentImage(thumbnails[idx])} >
                    {thumbnails.map((img, i) => (
                        <div key={i} className="item">
                          <InnerImageZoom
                            src={img}
                            zoomSrc={img}
                            zoomScale={2}
                            zoomType="hover"
                            zoomPreload
                            alt={`Product ${i}`}
                            style={{ width: "100%" }}
                          />
                        </div>
                      ))}
                  </Slider>
                </div>

                {/* 📷 Thumbnail Slider */}
               <Slider {...settings} className="zoomSlider mainSlider"style={{border:'none'}} ref={thumbSlider}> {thumbnails.map((thumb, idx) => (
                  <div key={idx} className="item">
                    <img
                      src={thumb}
                      alt="Thumbnail"
                      className={`w-100 ${currentImage === thumb ? "active-thumb" : ""}`}
                      onClick={() => {
                        setCurrentImage(thumb);
                        mainSlider.current?.slickGoTo(idx); // 🔄 বড়​ ছবিটি বদলাও
                      }}
                    />
                  </div>
                    ))}
                </Slider>
              </div>

              {/* ℹ️ Product Info */}
              <div className='col-lg-8 col-md-6 col-12 productInfo'>
                <h1>Ching's Schezwan Noodles 240 gm</h1>
                <div className='d-flex align-items-center mb-2'>
                  <Rating size='small' readOnly value={Number(ratingText) || 0} />
                  <span className='ms-2'>({ratingText})</span>&nbsp;
                  <span className='ms-2 text-muted'>(32 reviews)</span>
                </div>
                <div className='priceSec d-flex align-items-center mb-3'>
                  <span className='text-g priceLarge'>$37</span>
                  <div className='ms-3 d-flex flex-column'>
                    <span className='text-org'>26% Off</span>
                    <span className='text-muted' style={{ textDecoration: 'line-through' }}>$52</span>
                  </div>
                </div>
                <p style={{ color: '#7E7E7E' }}>
                  Hydrate and rejuvenate your skin with this lightweight, fast-absorbing moisturizer enriched with natural ingredients.
                </p>

                <div className="productSize">
                  <span className="text">Size / Weight:</span>
                  <ul className="list list-inline mb-0 pl-4">
                    {["50g", "60g", "80g", "100g", "150g"].map((size, idx) => (
                      <li key={idx} className="list-inline-item">
                        <a className={`tag ${activeSize === idx ? 'active' : ''}`} onClick={() => setActiveSize(idx)} >
                          {size}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>


                  {/* product contunter eitkhan hteke shuru */}
                
                <div className="addCartSectio pt-4 d-flex align-items-center mr-2">
                    <div className="counterSec">
                      <input type="number" value={qty} min = "1" onChange={(e) => setQty(Math.max(1, +e.target.value))} />

                      
                      <span className="arrow up" onClick={() => setQty((p) => p + 1)}>
                        <ArrowDropUpOutlinedIcon fontSize="small" />
                      </span> 

                     <span className="arrow dwn" onClick={() => setQty((p) => Math.max(1, p - 1))} >
                        <ArrowDropDownOutlinedIcon fontSize="small" />
                      </span>
                    </div>
                     <button className="shopBtn"> <AddShoppingCartOutlinedIcon style={{ verticalAlign: 'middle', marginLeft: '8px' }} /> &nbsp;Add to Cart&nbsp;&nbsp;</button>
                     <button className="btn-border"> <FavoriteBorderOutlinedIcon  /></button>
                     <button className="btn-border"> <ShuffleOutlinedIcon /></button>

                    
                </div>


              </div>
            </div>


            <div className="card mt-5 p-5 detailsPageTabs">
              <div className='customTabs '>
                    <ul className='pb-5'>
                      <li className='list list-inline'>
                        <li className='list-inline-item'>
                          <Button onClick={()=>setActiveTabs(0)}>Descripiton</Button>
                        </li>
                         <li className='list-inline-item'>
                          <Button onClick={()=>setActiveTabs(1)}>Additional Info</Button>
                        </li>
                         <li className='list-inline-item'>
                          <Button onClick={()=>setActiveTabs(2)}>Vendor</Button>
                        </li>
                         <li className='list-inline-item'>
                          <Button onClick={()=>setActiveTabs(3)}>Reviews (3)</Button>
                        </li>
                      </li>
                    </ul>

                    {
                      activeTabs === 0 &&
                    

                      <div className='tabContent'>
                        <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
                        <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
                        <ul className="product-more-infor mt-50">
                            <li><span>Type Of Packing</span> Bottle</li>
                            <li><span>Color</span> Green, Pink, Powder Blue, Purple</li>
                            <li><span>Quantity Per Case</span> 100ml</li>
                            <li><span>Ethyl Alcohol</span> 70%</li>
                            <li><span>Piece In One</span> Carton</li>
                        </ul>
                        <hr />
                        <p>Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.</p>
                        <div> <br />
                            <h5>Packaging & Delivery</h5>
                            <hr />
                            <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
                            <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
                        </div> <br />
                        <div>
                            <h5>Suggested Use</h5> <br />
                            <ul className='proinfo'>
                                  <li>Refrigeration not necessary.</li>
                                  <li>Stir before serving</li>
                            </ul>
                            
                        </div> <br />
                          <div>
                            <h5>Other Ingredients</h5> <br />
                            <ul className='proinfo'>
                                  <li>Organic raw pecans, organic raw cashews.</li>
                                  <li>This butter was produced using a LTG (Low Temperature Grinding) process</li>
                                  <li>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</li>
                            </ul> <br />
                            
                        </div>
                          <div>
                            <h5>Warnings</h5> <br />
                            <ul className='proinfo'>
                                  <li>Oil separation occurs naturally. May contain pieces of shell.</li>
                                  
                            </ul>
                            
                        </div>
                      </div>
                    }

                    {
                      activeTabs === 1 &&
                      <div className='tabContent'>
                        <div className="table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr className="stand-up">
                                    <th>Stand Up</th>
                                    <td>
                                        <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                    </td>
                                </tr>
                                <tr className="folded-wo-wheels">
                                    <th>Folded (w/o wheels)</th>
                                    <td>
                                        <p>32.5″L x 18.5″W x 16.5″H</p>
                                    </td>
                                </tr>
                                <tr className="folded-w-wheels">
                                    <th>Folded (w/ wheels)</th>
                                    <td>
                                        <p>32.5″L x 24″W x 18.5″H</p>
                                    </td>
                                </tr>
                                <tr className="door-pass-through">
                                    <th>Door Pass Through</th>
                                    <td>
                                        <p>24</p>
                                    </td>
                                </tr>
                                <tr className="frame">
                                    <th>Frame</th>
                                    <td>
                                        <p>Aluminum</p>
                                    </td>
                                </tr>
                                <tr className="weight-wo-wheels">
                                    <th>Weight (w/o wheels)</th>
                                    <td>
                                        <p>20 LBS</p>
                                    </td>
                                </tr>
                                <tr className="weight-capacity">
                                    <th>Weight Capacity</th>
                                    <td>
                                        <p>60 LBS</p>
                                    </td>
                                </tr>
                                <tr className="width">
                                    <th>Width</th>
                                    <td>
                                        <p>24″</p>
                                    </td>
                                </tr>
                                <tr className="handle-height-ground-to-handle">
                                    <th>Handle height (ground to handle)</th>
                                    <td>
                                        <p>37-45″</p>
                                    </td>
                                </tr>
                                <tr className="wheels">
                                    <th>Wheels</th>
                                    <td>
                                        <p>12″ air / wide track slick tread</p>
                                    </td>
                                </tr>
                                <tr className="seat-back-height">
                                    <th>Seat back height</th>
                                    <td>
                                        <p>21.5″</p>
                                    </td>
                                </tr>
                                <tr className="head-room-inside-canopy">
                                    <th>Head room (inside canopy)</th>
                                    <td>
                                        <p>25″</p>
                                    </td>
                                </tr>
                                <tr className="pa_color">
                                    <th>Color</th>
                                    <td>
                                        <p>Black, Blue, Red, White</p>
                                    </td>
                                </tr>
                                <tr className="pa_size">
                                    <th>Size</th>
                                    <td>
                                        <p>M, S</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                      </div>
                    }

                    {
                      activeTabs === 2 &&
                      <div className='tabContent'>
                         <div className='venInfo'>
                            <div className='d-flex' style={{gap:"15px"}}>
                                <img src={Vendor18} alt="" />
                                  <div>
                                      <h6>Noodles Co.</h6>
                                      <Rating size="small" readOnly value={Number(ratingText) || 0} />
                                      <span style={{ fontSize: "12px", position: "relative", top: "-5px", marginLeft: "4px", color: "#7E7E7E" }}>
                                        (10) Review
                                      </span>
                                  </div>
                                  <div>
                                    
                                  </div>

                            </div>
                         </div>
                         <div className='pt-3'>
                              <p><FmdGoodOutlinedIcon className="Icon"  sx={{  fontSize: 20 }} /> &nbsp; <strong>Address :</strong> &nbsp; 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>                          
                              <p><SupportAgentIcon  className="Icon" sx={{  fontSize: 20 }}/>&nbsp;<strong>Contact Seller :</strong>  &nbsp; (+91) - 540-025-553 </p>                          
                         </div >

                          <div className="stats-box pt-3">
                              <div>
                                <p>Rating</p>
                                <h4>92%</h4>
                              </div>
                              <div>
                                <p>Shopping</p>
                                <h4>100%</h4>
                              </div>
                              <div>
                                <p>Chat response</p>
                                <h4>89%</h4>
                              </div>
                          </div>
                          <p>
                            Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C.
                          </p>
                      </div>
                    }

                      {
                      activeTabs === 3 &&
                      <div className='tabContent'>
                         <div className="row">
                          <div className='col-md-8'> 
                             <h4 className='pb-4'>Customer questions & answers</h4> <br />
                              <div className="card p-4 reviewCard flex-row">
                                <div className='image'>
                                    <div className='round-circle'>
                                        <img src={Author1} alt="" />
                                    </div>
                                    <span className='text-g d-block text-center'>Sienna</span>
                                </div>
                                <div className='reInfo'>
                                   <div className="text-light">
                                    <div className='d-flex align-items-center justify-content-between'>
                                      <h5>December 4, 2024 at 3:12 pm</h5>
                                      <Rating size="small" readOnly value={Number(ratingText) || 0} />
                                    
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</p>
                                        <span className="reply-btn">Reply</span>
                                   </div>
                                    <p></p>
                                </div>                                
                              </div>

                               <div className="card p-4 reviewCard flex-row mid-shift">
                                <div className='image'>
                                    <div className='round-circle'>
                                        <img src={Author1} alt="" />
                                    </div>
                                    <span className='text-g d-block text-center'>Sienna</span>
                                </div>

                                <div className='reInfo'>
                                   <div className="text-light">
                                    <div className='d-flex align-items-center justify-content-between'>
                                      <h5>December 4, 2024 at 3:12 pm</h5>
                                      <Rating size="small" readOnly value={Number(ratingText) || 0} />
                                    
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</p>
                                      <span className="reply-btn">Reply</span>
                                   </div>
                                    <p></p>
                                </div>
                                
                              </div>

                               <div className="card p-4 reviewCard flex-row">
                                <div className='image'>
                                    <div className='round-circle'>
                                        <img src={Author1} alt="" />
                                    </div>
                                    <span className='text-g d-block text-center'>Sienna</span>
                                </div>

                                <div className='reInfo'>
                                   <div className="text-light">
                                    <div className='d-flex align-items-center justify-content-between'>
                                      <h5>December 4, 2024 at 3:12 pm</h5>
                                      <Rating size="small" readOnly value={Number(ratingText) || 0} />
                                    
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</p>
                                          <span className="reply-btn">Reply</span>
                                   </div>
                                    <p></p>
                                </div>
                                
                              </div>
                               <div className="card p-4 reviewCard flex-row mid-shift">
                                <div className='image'>
                                    <div className='round-circle'>
                                        <img src={Author1} alt="" />
                                    </div>
                                    <span className='text-g d-block text-center'>Sienna</span>
                                </div>

                                <div className='reInfo'>
                                   <div className="text-light">
                                    <div className='d-flex align-items-center justify-content-between'>
                                      <h5>December 4, 2024 at 3:12 pm</h5>
                                      <Rating size="small" readOnly value={Number(ratingText) || 0} />
                                    
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</p>
                                      <span className="reply-btn">Reply</span>
                                   </div>
                                    <p></p>
                                </div>
                                
                              </div>


                              <br />

                              <br />



                              <form className='reviewForm'>
                                  <h4>Add a review</h4>                                  
                                  <Rating name="no-value" value={null}   sx={{ fontSize: "18px" }} />
                                 <br /> <br />
                                  <div className='form-group'>
                                        <textarea name="" id="" placeholder='Write Comment'></textarea>
                                  </div>
                              
                                  <div className='row'>
                                      <div className='col-md-6'>
                                         <div className='form-group'>
                                          <input type="text"  className='form-control' placeholder='Name' />
                                         </div>
                                      </div>

                                      <div className='col-md-6'>
                                         <div className='form-group'>
                                          <input type="text"  className='form-control' placeholder='Email' />
                                         </div>
                                      </div>


                                       <div className='form-group'>
                                          <input type="text"  className='form-control' placeholder='Website' />
                                        </div>

                                       

                                        <div className='from-group '>
                                          <Button className='btn-g mt-5'>Submit Review</Button>
                                        </div>
                                  </div>
                              
                              
                              
                              
                              </form>




                             
                          </div> 




                          <div className='col-md-4 ps-5'> 
                              <h4>Customer reviews</h4>
                              <div className='d-flex align-items-center'>
                                <Rating  name="half-rating-read" value={4} precision={0.5} readOnly  sx={{ fontSize: "16px" }}  /> &nbsp;&nbsp;&nbsp;&nbsp;
                                <strong className='str'>
                                  4.8 out of 5
                                </strong>
                              </div>
                              

                              <br /><br />
                              {progressValues.map((progress, index) => (
                                    <div key={index} className='progressBarBox d-flex align-items-center mb-4' style={{ marginBottom: '10px' }}>
                                      <span style={{ marginRight: '2rem', fontSize: '14px', width: '20%' }}>
                                        {labels[index]}
                                      </span>
                                      <div className="progress" style={{ width: '85%', height: '20px' }}>
                                        {progress > 0 && (
                                          <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${progress}%` }}
                                            aria-valuenow={progress}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                          >
                                            {progress}%
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  ))}

                                  <br /><br />


                                  <p></p>
                          </div>
                         </div>
                      </div>
                      }


              </div>
            </div>
 <br /><br />
            <div className='relatedProducts pt-5 '>
                        <h4>Related products</h4>
                         <Slider {...reletad} className="prodSlider">
                                          
                            <div className='item'>  <Product  tag="sale"/> </div>
                            <div className='item'>  <Product  tag="hot"/> </div>
                            <div className='item'>  <Product  tag="sale"/> </div>
                            <div className='item'>  <Product  tag="new"/> </div>
                            <div className='item'>  <Product  tag="sale"/> </div>
                            <div  className='item'>  <Product  tag="hot"/> </div>
                                                
                        </Slider>
                    </div>
          </div>

          {/* 🛎️ Sidebar */}
          <div className='col-lg-3 col-md-12 part2 mt-4 mt-lg-0'>
            {/* Sidebar content */}
                  <Sidebar/>
          </div>
        </div>      

      </div>
    </section>
  );
};

export default DetailsPage;