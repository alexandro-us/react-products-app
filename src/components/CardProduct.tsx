import React from 'react';
import { Product } from '../interfaces/interfaces';
import './style.css'

interface props {
    product: Product
}

export const CardProduct = ({product}: props) => {
  return (
    <div className="row mb-4" key={product.id}>
        <div className='col-auto'>
            <div className='card-img-promo'>
                <img 
                    src={`${product.img}`} 
                    className="img-promo"
                    alt={product.title}
                />
                <p className='title'>
                    {product.title}
                </p>
            </div>
        </div>
    </div>
  )
}
