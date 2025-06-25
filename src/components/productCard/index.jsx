import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "./style.css";

const ProductCard = ({
  id,
  imgSrc,
  title,
  countdown,
  ratingWidth,
  ratingText,
  brand,
  price,
  oldPrice,
}) => {
  /* …useState + useEffect একই রকম… */

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 photoCard">
      <div className="product-cart-wrap">
        {/* ---------- Thumb ---------- */}
        <div className="product-img-action-wrap">
          <div className="product-img">
            <Link to={`/product/${id}`}>
              <img src={imgSrc} alt={title} />
            </Link>

            {/* overlay icons */}
            
          </div>

         
        </div>

        <div className="product-content-wrap">
          <h2>
            <Link to={`/product/${id}`}>{title}</Link>
          </h2>

          {/* rating */}
          <div className="product-rate-cover">
            <div className="product-rate d-inline-block">
              <div className="product-rating" style={{ width: ratingWidth }} />
            </div>
            <span className="font-small ml-5 text-muted">
              <Rating size="small" readOnly value={Number(ratingText) || 0} /> ({ratingText})
            </span>
          </div>

          {/* brand */}
          <span className="font-small text-muted">By {brand}</span>

          {/* price + cart */}
          <div className="product-card-bottom">
            <div className="product-price">
              <span>${price}</span>
              <span className="old-price">${oldPrice}</span>
            </div>
            <Button component={Link} to="/shop-cart" className="transition ml-auto">
              <ShoppingCartIcon /> &nbsp;Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
