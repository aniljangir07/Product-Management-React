import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/cards/ProductCard'
import { AllProduct } from '../../services/product.service'

const HomePage = () => {
  const [ProductList, setProductList] = useState([])

  const GetProductList = async() => {
    const res = await AllProduct();
    if(res) {
      setProductList(res)
    }
  }

  useEffect(() => {
    GetProductList()
  },[])

  return (
    <div className='m-4 d-flex flex-wrap gap-4'>
      {ProductList && ProductList.length > 0 && ProductList.map((item, i)=> (
          <ProductCard key={i} data={item} />
      ))}
    </div>
  )
}

export default HomePage