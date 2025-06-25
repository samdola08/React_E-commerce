import React from 'react';
import ProductCard from '../productCard';
import Banner5 from '../../assets/images/banner5.png';
import Banner6 from '../../assets/images/banner6.png';
import Banner7 from '../../assets/images/banner7.png';
import Banner8 from '../../assets/images/banner8.png';

const products = [
  {
    id: 1,
    imgSrc: Banner5,
    title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    countdown: '2025/03/25 00:00:00',
    ratingWidth: '90%',
    ratingText: '4.0',
    brand: 'NestFood',
    price: 32.85,
    oldPrice: 33.8,
    
  },
    {
    id: 1,
    imgSrc: Banner6,
    title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    countdown: '2025/03/25 00:00:00',
    ratingWidth: '90%',
    ratingText: '4.0',
    brand: 'NestFood',
    price: 32.85,
    oldPrice: 33.8,
    
  },
  
    {
    id: 1,
    imgSrc: Banner7,
    title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    countdown: '2025-07-01T00:00:00',
    ratingWidth: '90%',
    ratingText: '4.0',
    brand: 'NestFood',
    price: 32.85,
    oldPrice: 33.8,
    
  },
  
    {
    id: 1,
    imgSrc: Banner8,
    title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    countdown: '2025-07-01T00:00:00',
    ratingWidth: '90%',
    ratingText: '4.0',
    brand: 'NestFood',
    price: 32.85,
    oldPrice: 33.8,
    
  },
  
  

];

const ProductGrid = () => {
  return (
    <div className="row">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
