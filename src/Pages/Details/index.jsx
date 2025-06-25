import React from 'react';
import './style.css';
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";



const DetailsPage = () => {
    return (
        <>
            <section className='detailsPage'>

                <div className='breadrumbWrapper'>
                   <div className='container-fluid'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                              <li className="breadcrumb-item"><Link to="/"> <HomeIcon style={{ verticalAlign: 'middle', position: 'relative', top: '-3px', marginRight: '4px' }} /> Home</Link></li>
                              <li className="breadcrumb-item"><Link to="/library"> Vegetables & tubers </Link></li>
                              <li className="breadcrumb-item" aria-current="page">Seeds of Change Organic</li>
                            </ol>
                        </nav>
                    </div>
                </div>


                <div className='container-fluid'>
                    <div className='col-md-9 part1'>
                        <div className="row">

                            {/* product zoom start here */}
                            <div className='col-md-3 productZoom'>

                            </div>

                            {/* product zoom end here */}


                            {/* product info start here */}

                            <div className='col-md-9  productInfo'>

                            </div>

                            
                            {/* product info end here */}

                        </div>
                    </div>
                     <div className='col-md-3 part2 '>

                    </div>
                </div>


            </section>
        </>
    )

}



export default DetailsPage;