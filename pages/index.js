import Layout from "../components/Layout.js/Layout";
import ProductItem from "../components/Product/ProductItem";

import { ProductsCont } from "../components/Product/ProductStyled";

import data from "../utils/data";

export default function Home() {
  return (
    <>
      <Layout title="Home Page">
        <ProductsCont>
          {data.products.map((product) => (
            <ProductItem product={product} key={product.slug} />
          ))}
        </ProductsCont>
      </Layout>
    </>
  );
}
