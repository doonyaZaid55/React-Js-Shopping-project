

import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import './Shop.css'

export const Shop = () => {
  return (
    <div className='Shop'>
        <div className='shopTitle'>
            <h1>3la allah team shop</h1>
        </div>

        <div className="products">
            {PRODUCTS.map( (product)=> <Product data={product} />  )}
        </div>
    </div>
  )
}
