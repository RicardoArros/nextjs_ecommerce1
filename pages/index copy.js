import Layout from "../components/Layout/Layout";
import ProductItem from "../components/Product/ProductItem";
import { ProductsCont } from "../components/Product/ProductStyled";

import Product from "../models/Product";

import data from "../utils/data";
import db from "../utils/db";

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

export async function getServerSideProps() {
  await db.connect();

  const products = await Product.find().lean();

  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}

export default Home;
