import React, { useContext, useEffect, useState } from "react";

import { IoIosCart } from "react-icons/io";

import Head from "next/head";
import Link from "next/link";

import { Store } from "../../utils/Store";

import {
  LayoutWrap,
  Nav,
  NavLinks,
  NavAction,
  NavCart,
  NavCartCount,
  Main,
  Footer,
} from "./LayoutStyled";

const Layout = ({ title, children }) => {
  //
  const [cartItemsCount, setCartItemsCount] = useState(0);

  //
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  //
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));

    return () => {};
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{title ? title + " - Ecommerce" : "Ecommerce"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutWrap>
        <header>
          <Nav>
            <Link href="/">
              <a>Ecommerce</a>
            </Link>

            <NavAction>
              <NavCart>
                <Link href="/cart">
                  <NavLinks>
                    <div className="cartIcon">
                      <IoIosCart />

                      {cartItemsCount > 0 && (
                        <NavCartCount>{cartItemsCount}</NavCartCount>
                      )}
                    </div>
                  </NavLinks>
                </Link>
              </NavCart>

              <Link href="/login">
                <NavLinks>Login</NavLinks>
              </Link>
            </NavAction>
          </Nav>
        </header>

        <Main>{children}</Main>

        <Footer>
          <p>Copyright &copy; 2022 Ecommerce</p>
        </Footer>
      </LayoutWrap>
    </>
  );
};

export default Layout;
