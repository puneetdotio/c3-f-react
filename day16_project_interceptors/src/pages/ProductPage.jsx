import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axiosInstance'
import ProductCard from '../components/ProductCard'

const ProductPage = () => {
  const [productsData, setProductsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  let getProductsData = async () => {
    try {
      let res = await axiosInstance.get("/products")
      setProductsData(res.data)
      setIsLoading(false)
    } catch (error) {
      console.log("Error while products api call", error)
    }
  }

  useEffect(() => {getProductsData()}, [])

  if (isLoading) {
    return <h1 className='text-6xl'>Loading Products</h1>
  }
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
      {productsData.map((val) => {
        return <ProductCard key={val.id} product={ val} />
      })}
    </div>
  )
}

export default ProductPage