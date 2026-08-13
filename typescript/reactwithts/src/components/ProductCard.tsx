import type { Product } from "../types"


const ProductCard = ({product}: {product: Product}) => {
    console.log(product)
  return (
      <section>
          {/* product image */}
          <div><img src={product.image} alt={product.title} /></div>

          {/* card content */}
          <div><span>{product.category}</span>
              <h2>{product.title}</h2>
              <p>{ product.description}</p>

              {/* rating */}
              <div><span>₹{ product.price}</span></div>

              {/* button */}
              <button>Add to Cart</button>
          </div>
    </section>
  )
}

export default ProductCard