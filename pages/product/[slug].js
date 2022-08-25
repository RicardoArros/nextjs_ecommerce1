import React, { useContext } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { toast } from "react-toastify";

import axios from "axios";

// import data from "../../utils/data";

import { Store } from "../../utils/Store";
import db from "../../utils/db";

import Product from "../../models/Product";

import Layout from "../../components/Layout/Layout";

import {
  ProductDetailContent,
  ProductDetailCTA,
  ProductDetailCTAItem,
  ProductDetailImg,
  ProductDetailInfo,
  ProductDetailWrap,
} from "../../components/Product/ProductStyled";

import { ButtonCompany } from "../../components/Button/ButtonStyled";


const ProductDetail = (props) => {
  //
  const { product } = props;

  //
  const { state, dispatch } = useContext(Store);

  //
  const router = useRouter();

  //
  //const { query } = useRouter();
  //const { slug } = query;
  //const product = data.products.find((x) => x.slug === slug);

  //
  if (!product) {
    return (
      <Layout>
        <Link href="/">Volver a productos</Link>
        <h2>Producto no encontrado</h2>
      </Layout>
    );
  }

  //
  const addToCartHandler =  async () => {
    //
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);

    //
    const quantity = existItem ? existItem.quantity + 1 : 1;

    // Send ajax request and check content stock in the db
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error("Lo sentimos. el producto esta fuera de stock");
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });

    router.push("/cart");
  };

  return (
    <Layout title={product.name}>
      <ProductDetailWrap>
        <Link href="/">Volver a productos</Link>

        <ProductDetailContent>
          <ProductDetailImg>
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              layout="responsive"
            ></Image>
          </ProductDetailImg>

          <ProductDetailInfo>
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>

              <li>Categoría: {product.category}</li>

              <li>Marca: {product.brand}</li>

              <li>
                {product.rating} of {product.numReviews} reviews
              </li>

              <li>Descripción: {product.description}</li>
            </ul>

            <ProductDetailCTA>
              <ProductDetailCTAItem>
                <div>Precio</div>
                <div>${product.price}</div>
              </ProductDetailCTAItem>

              <ProductDetailCTAItem>
                <div>Status</div>
                <div>{product.countInStock > 0 ? "En stock" : "Sin stock"}</div>
              </ProductDetailCTAItem>

              <ButtonCompany primary isHalfWidth onClick={addToCartHandler}>
                Añadir al carrito
              </ButtonCompany>
            </ProductDetailCTA>
          </ProductDetailInfo>
        </ProductDetailContent>
      </ProductDetailWrap>
    </Layout>
  );
};

// Get data from the db.
// Get the context. From the context get the params in the url and from the params get the slug.
export async function getServerSideProps(context) {
  //
  const { params } = context;
  const { slug } = params;

  // Connect to the db 
  await db.connect();

  // use findOne() method on the Product Model and filter products base the slug in the url. 
  // Then use lean() method to convert to js object.
  const product = await Product.findOne({ slug }).lean();

  // Disconnect from th db
  await db.disconnect();

  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}

export default ProductDetail;
