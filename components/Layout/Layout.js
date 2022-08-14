import React, { useContext, useEffect, useState } from "react";

import { signOut, useSession } from "next-auth/react";

import Cookies from "js-cookie";

import { IoIosCart } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  NavAccount,
} from "./LayoutStyled";

import DropdownMenu from "../DropdownMenu/DropdownMenu";
import DropdownLink from "../DropdownMenu/DropdownLink";

const Layout = ({ title, children }) => {
  //
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [open, setOpen] = useState(false);

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

  const logoutClickHandler = () => {
    Cookies.remove("cart");

    dispatch({ type: "CART_RESET" });

    signOut({ callbackUrl: "/login" });
  };

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

              <NavAccount>
                {status === "loading" ? (
                  "Loading"
                ) : session?.user ? (
                  <div className="accountIcon" onClick={() => setOpen(!open)}>
                    <FaUserCircle />

                    {open && (
                      <DropdownMenu>
                        <DropdownLink href="/profile">Perfil</DropdownLink>

                        <DropdownLink href="/order-history">
                          Ver historial
                        </DropdownLink>

                        <DropdownLink href="#" onClick={logoutClickHandler}>
                          Logout
                        </DropdownLink>
                      </DropdownMenu>
                    )}
                  </div>
                ) : (
                  <Link href="/login">
                    <NavLinks>Login</NavLinks>
                  </Link>
                )}
              </NavAccount>
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
