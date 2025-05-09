import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import IonIcon from '@reacticons/ionicons';
import NumberStepper from '../components/NumberStepper';
import StockStatus from '../components/StockStatus';
import DetailAndFeedback from '../components/Product/DetailAndFeedback';
import RelevantProduct from '../components/Product/RelevantProduct';

const ProductDetails = () => {

  function getRelevantProducts(productList, currentProduct, limit = 5) {
      return productList
        .filter(
          (sp) =>
            sp.category === currentProduct.category && sp.id !== currentProduct.id
        )
        .slice(0, limit);
    }

  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  
  
  useEffect(() => {
      fetch('/productData.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(() => {
      return () => {
        sessionStorage.setItem("scroll-position", window.scrollY.toString());
      };
    }, []);
    const { slug } = useParams();

    const product = products.find(p=>p.slug === slug);
    if(!product){
      return(
        <div className='page-container'>
          <h2>Không tìm thấy sản phẩm</h2> 
        </div>
       
      )
    }

    const recommended = getRelevantProducts(products, product);

  return (
    
    <div className='flex page-container font-content justify-center'>
      <div>
      <div className='flex md:flex-row flex-col items-center md:items-start gap-8 md:mx-10 mx-5 mt-5'>
        <div>
            <img src={product.image} alt={product.name} className='w-[400px] h-[600px] object-scale-down object-top' />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-2xl'>{product.name}</h1>
          <div className='flex'>
            <p>3.6</p>
            <Rating
              name="text-feedback"
              value={3.6}
              readOnly
              precision={0.5}
            />
            <p>(1000 ratings)</p>
          </div>
          
          <strong className='text-2xl py-3'>${product.price}</strong>
          <div className='flex items-center pb-5'>
            <IonIcon name='storefront-outline'></IonIcon>
            <p>Shipping from <span className='font-semibold underline'>{'Dong Nai'}</span> </p>
          </div>
          <div className='mb-3'>
            <StockStatus quantity={product.quantity}></StockStatus>
          </div>
          <div className='flex items-center gap-15 pb-10'>
            <p>Quantity</p>
            <NumberStepper value={quantity} setValue={setQuantity} min={1} max={99} ></NumberStepper>
          </div>
          <div >
            <button className='md:w-50 w-full h-10 bg-yellow-300 rounded-full cursor-pointer hover:opacity-80 md:mr-5 mb-2'>Add to cart</button>
            <button className='md:w-50 w-full h-10 bg-orange-400 rounded-full cursor-pointer hover:opacity-80'>Buy now</button>
          </div>
        </div>
        
      </div>
      <RelevantProduct recommended={products}></RelevantProduct>
      <DetailAndFeedback></DetailAndFeedback>
      </div>
    </div>
  )
}

export default ProductDetails