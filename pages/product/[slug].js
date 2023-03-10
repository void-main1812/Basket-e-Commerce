import React from 'react'
import { client, urlFor } from '../../lib/client'

const ProductDetails = ({ product, products }) => {
  const { name, image, details, price } = product;
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} alt="" />
          </div>
          {/* <div className="small-images-container">
            {
              image?.map((item, i) => (
                <img src={urlFor(item)} className="" onMouseEnter="" alt="" />
              ))
            }
          </div> */}
        </div>
        <div className="product-details-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
    slug{
        current
    }
  }`
  const product = await client.fetch(query);
  const paths = product.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }))
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}' ][0]`;
  const productQuery = '*[_type == "product"]'
  const product = await client.fetch(query);
  const products = await client.fetch(productQuery)

  return {
    props: { product, products }
  }
}


export default ProductDetails
