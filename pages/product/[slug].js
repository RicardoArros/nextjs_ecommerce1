import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import data from "../../utils/data";

import Layout from "../../components/Layout.js/Layout";
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
  const { query } = useRouter();

  const { slug } = query;

  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

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

              <ButtonCompany primary isHalfWidth>Añadir al carrito</ButtonCompany>
            </ProductDetailCTA>

          </ProductDetailInfo>

        </ProductDetailContent>
      </ProductDetailWrap>
    </Layout>
  );
};

export default ProductDetail;
