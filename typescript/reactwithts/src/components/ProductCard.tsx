import type { Product } from "../types"


const ProductCard = ({product}:{product: Product}) => {

    console.log(product)
  return (
      <div>
          <div><img src={product.image} alt="" /></div>
    </div>
  )
}

export default ProductCard