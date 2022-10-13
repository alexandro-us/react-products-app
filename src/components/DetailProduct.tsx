import React from 'react';
import { Product } from '../interfaces/interfaces';

interface props{
    product: Product
}
export const DetailProduct = ({product}: props) => {

    let description = (product.description && product.description !== '') ? product.description.substring(3, product.description.length - 4) : '';
  return (
    <div className='container card-detail'>
        <img 
            src={`${product.img}`} 
            className="img-promo-detail"
            alt={product.title}
        />
        <div className='text-start mt-4'>
            <p><span className='fw-bold'>Nombre: </span> {product.title}</p>
            <p><span className='fw-bold'>SKU: </span> {product.sku}</p>
            <p><span className='fw-bold'>Descripcion: </span> {description}</p>
            <p><span className='fw-bold'>Descripcion: </span> {product.description}</p>
            <p><span className='fw-bold'>Precio: </span> ${product.price}</p>
        </div>
    </div>
  )
}
