import React, { useContext, useEffect, useState } from "react";

import { useSession } from "next-auth/react";

import { IoIosCart } from "react-icons/io";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
  const { status, data: session } = useSession();

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

      <ToastContainer position="bottom-center" limit={1} />

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

              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                session.user.name
              ) : (
                <Link href="/login">
                  <NavLinks>Login</NavLinks>
                </Link>
              )}
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
