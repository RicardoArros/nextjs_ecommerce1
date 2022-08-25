import { useContext } from "react";

import axios from "axios";

import { toast } from "react-toastify";

import Layout from "../components/Layout/Layout";
import ProductItem from "../components/Product/ProductItem";
import { ProductsCont } from "../components/Product/ProductStyled";

import Product from "../models/Product";

//import data from "../utils/data";

import db from "../utils/db";
import { Store } from "../utils/Store";

const Home = ({ products }) => {
  //
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  //
  const addToCartHandler = async (product) => {
    //
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);

    //
    const quantity = existItem ? existItem.quantity + 1 : 1;

    //
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error("Lo sentimos. el producto esta fuera de stock");
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });

    toast.success("Producto añadido al carrito");

    //router.push("/cart");
  };

  return (
    <>
      <Layout title="Home Page">
        <ProductsCont>
          {products.map((product) => (
            <ProductItem
              product={product}
              key={product.slug}
              addToCartHandler={addToCartHandler}
            />
          ))}
        </ProductsCont>
      </Layout>
    </>
  );
};

// This funct runs before rendering the component and provides data for the component
// Provides the products data from the db to the component
export async function getServerSideProps() {
  // Connect to the db
  await db.connect();

  // Get products from Product Model. Then use lean() method to convert to js object.
  const products = await Product.find().lean();

  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}

export default Home;
