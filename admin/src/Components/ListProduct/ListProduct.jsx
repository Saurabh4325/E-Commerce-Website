import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cart_cross_icon.png'

const ListProduct = () => {
  const [allproducts,setAllproducts] = useState([])

  const fetchInfo = async()=>{
    await fetch('http://localhost:4000/allproduct')
    .then((response)=>{response.json()})
    .then((data)=>{setAllproducts(data)})
  }
  const remove_product = async(e)=>{
    await fetch('http://localhost:4000/removeproduct')
    .then((response)=>{response.json()})
    .then((data)=>{})
  }


  useEffect(()=>{
    fetchInfo()
  },[])
  return (
    <div className='listproduct'>
      <h1>All product List</h1>
      <div className='listproduct_format_main'>
        <p>Products</p>
        <p>title</p>
        <p>old price</p>
        <p>new price </p>
        <p>category</p>
        <p>remove</p>
      </div>
      <div className='listproduct_allproduct'>
        <hr />
        {allproducts.map((product, index)=>{
          return <div key={index} className="listproduct_format_main listproduct_format ">
            <img src={product.image} alt="" className="listproduct_product_icon" />
            <p>{product.name}</p>
            <p>{product.old_price}</p>
            <p>{product.new_price}</p>
            <p>{product.category}</p>
            <img src={cross_icon} className='listproduct_remove_img' alt="" />
          </div>
        })}
      </div>
    </div>
  )
}

export default ListProduct
