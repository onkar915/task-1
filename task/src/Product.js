import React from 'react'
import "./Product.css"

{/**product take props like id ,title,prcie,rating */}
{/*props*/}
function Product({id,title,image,price,rating}) {
    //1. accees to store
 
   
        
    
    
    
    
    
    
    
    return (
        <div className="product">
            <div className ="product__info">

    <p>{title}</p>
    <p className="product__price">
    <small>Euro</small>
    <strong>{price}</strong>

    </p>
    <div className="product__rating">
{
    Array(rating) //5 array creted
    .fill() //fill with empaty values
    .map((_,i)=> ( // map through 5 times
        <p>⭐</p>
    ))
}
            </div>
            </div>


<img src={image} alt=""/>

    </div>
    
            
       
    )
}

export default Product
