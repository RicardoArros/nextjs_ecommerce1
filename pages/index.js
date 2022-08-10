import Layout from "../components/Layout/Layout";

import ProductItem from "../components/Product/ProductItem";

import { ProductsCont } from "../components/Product/ProductStyled";

import data from "../utils/data";

const Home = () => {
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
};

export default Home;
