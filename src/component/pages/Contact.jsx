import React from 'react'
import ProductList from '../productlist/ProductList'
import ProductDetail from './ProductDetail'
const Contact = () => {
  return (
    <> 
      <ProductList categoryName="category" bannerName="categoryBanners" />
      <ProductDetail/>
     </>
  )
}

export default Contact