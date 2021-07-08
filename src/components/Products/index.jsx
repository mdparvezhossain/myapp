import React from 'react';
import clases from './Products.module.css';

const Products=()=>{
    return(
        <div className={clases.products}>
           <h2 className={clases.title}>Our Frist Product</h2>
           <p className={clases.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           <a className={clases.btn} href="#">Buy Now</a>
        </div>
    );
}
export default Products;
