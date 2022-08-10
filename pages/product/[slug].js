import React, { useContext } from "react";

import { Router, useRouter } from "next/router";

import Link from "next/link";

import Image from "next/image";

import data from "../../utils/data";

import { Store } from "../../utils/Store";

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

const ProductDetail = () => {
  //
  const { state, dispatch } = useContext(Store);

  //
  const router = useRouter();

  //
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  //
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  //
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);

    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Sorry. Product is out of stock");

      return;
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

export default ProductDetail;
