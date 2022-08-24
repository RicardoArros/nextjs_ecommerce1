import React from "react";

import Link from "next/link";

import {
  ProductCardImage,
  ProductCardInfo,
  ProductCardWrap,
} from "./ProductStyled";

import { ButtonCompany } from "../Button/ButtonStyled";

const ProductItem = ({ product, addToCartHandler }) => {
  return (
    <ProductCardWrap>
      <Link href={`/product/${product.slug}`}>
        <a>
          <ProductCardImage src={product.image} alt={product.name} />
        </a>
      </Link>

      <ProductCardInfo>
        <Link href={`/product/${product.slug}`}>
          <h2>{product.name}</h2>
        </Link>

        <p>{product.brand}</p>
        <p>${product.price}</p>

        <ButtonCompany
          type="button"
          primary
          onClick={() => addToCartHandler(product)}
        >
          Añadir al carrito
        </ButtonCompany>
      </ProductCardInfo>
    </ProductCardWrap>
  );
};

export default ProductItem;
