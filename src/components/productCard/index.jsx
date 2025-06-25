import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "./style.css"; // Make sure your CSS (from above) is imported

const ProductCard = ({
  id,
  imgSrc,
  title,
  countdown, // Pass a countdown date string, e.g. "2025-12-31T23:59:59"
  ratingText,
  brand,
  price,
  oldPrice,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    if (!countdown) return;

    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(countdown);
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 photoCard">
      <div className="product-cart-wrap">
        {/* Image + Countdown */}
        <div className="product-img-action-wrap">
          <div className="product-img">
            <Link to={`/product/${id}`}>
              <img src={imgSrc} alt={title} />
            </Link>

            {/* Countdown Timer Overlay */}
            {countdown && (
              <div className="deals-countdown-wrap">
                <div className="deals-countdown">
                  <div className="countdown-section">
                    <span className="countdown-amount">{days}</span>
                    <span className="countdown-period">d</span>
                  </div>
                  <div className="countdown-section">
                    <span className="countdown-amount">{hours}</span>
                    <span className="countdown-period">h</span>
                  </div>
                  <div className="countdown-section">
                    <span className="countdown-amount">{minutes}</span>
                    <span className="countdown-period">m</span>
                  </div>
                  <div className="countdown-section">
                    <span className="countdown-amount">{seconds}</span>
                    <span className="countdown-period">s</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="product-content-wrap">
          <h2>
            <Link to={`/product/${id}`}>{title}</Link>
          </h2>

          <div className="product-rate-cover">
            <span className="font-small ml-5 text-muted">
              <Rating size="small" readOnly value={Number(ratingText) || 0} /> (
              {ratingText})
            </span>
          </div>

          <span className="font-small text-muted">By {brand}</span>

          <div className="product-card-bottom">
            <div className="product-price">
              <span>${price}</span>
              {oldPrice && <span className="old-price">${oldPrice}</span>}
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
