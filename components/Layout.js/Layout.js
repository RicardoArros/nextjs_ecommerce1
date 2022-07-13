import React from "react";

import Head from "next/head";

import Link from "next/link";

import { Nav, NavLinks, LayoutWrap, Main, Footer } from "./LayoutStyled";

const Layout = ({ title, children }) => {
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

            <div>
              <Link href="/cart">
                <NavLinks>Cart</NavLinks>
              </Link>

              <Link href="/login">
                <NavLinks>Login</NavLinks>
              </Link>
            </div>
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
