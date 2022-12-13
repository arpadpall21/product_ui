import React from 'react';
import './Product.css'
import { Product } from '../helper/types';


export default function ProductComponent(prop: { product: Product }) {
  const { title, description, discountPercentage, price, thumbnail, id } = prop.product;
  const viewWidth = window.innerWidth;      // to addapt view size

  return (
    <div className='productContainer' style={{ width: (viewWidth / 100) * 23 }}>
      <div>
        <div className="thumbnailContainer">
          <span className='discountPercentage'> {-discountPercentage} % </span>
          <img className='thumbnail' src={thumbnail} alt='product thumbnail'></img>
        </div>
        <div className="productTitle"> 
          <span>{price} $</span>
          <p style={{ width: (viewWidth / 100) * 16 }} title={title}> {title} </p>
        </div>
        <div className="description">
          {description}
        </div>
        <a href={`http://localhost:3000/product/${id}`} className="detailsButton"> See details </a>
      </div>
    </div>
  )
}
