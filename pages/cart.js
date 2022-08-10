import React, { useContext } from "react";

import { useRouter } from "next/router";

import Link from "next/link";

import Image from "next/image";

import { Store } from "../utils/Store";

import Layout from "../components/Layout/Layout";

import {
  CartContent,
  CartTableCont,
  CartTable,
  CartTitleCont,
  CartWrap,
  CartTableAction,
  CartCheckoutCont,
} from "../components/Cart/CartStyled";

import { TiTimes } from "react-icons/ti";
import { ButtonCompany } from "../components/Button/ButtonStyled";

const Cart = () => {
  const { state, dispatch } = useContext(Store);

  const router = useRouter();

  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const checkoutRouteHandler = () => {
    router.push("/shipping");
  };

  return (
    <Layout title="Shopping Cart">
      <CartWrap>
        <CartTitleCont>
          <h2>Carro de compras</h2>
        </CartTitleCont>

        {cartItems.length === 0 ? (
          <>
            <p>el carrito está vacío</p>
            <Link href="/">Ir a ver productos</Link>
          </>
        ) : (
          <>
            <CartContent>
              <CartTableCont>
                <CartTable>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th className="textRight">Cantidad</th>
                      <th className="textRight">Precio</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item) => {
                      console.log(item);

                      return (
                        <tr key={item.slug}>
                          <td>
                            <Link href={`/product/${item.slug}`}>
                              <a>
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  width={50}
                                  height={50}
                                ></Image>
                                &nbsp;
                                {item.name}
                              </a>
                            </Link>
                          </td>

                          <td className="textRight">{item.quantity}</td>

                          <td className="textRight">${item.price}</td>

                          <td className="textCenter">
                            <CartTableAction>
                              <div onClick={() => removeItemHandler(item)}>
                                <TiTimes />
                              </div>
                            </CartTableAction>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </CartTable>
              </CartTableCont>

              <CartCheckoutCont>
                <ul>
                  <li>
                    <div>
                      Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}){" "}
                      : $
                      {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                    </div>
                  </li>
                  <li>
                    <ButtonCompany onClick={checkoutRouteHandler}>
                      Check Out
                    </ButtonCompany>
                  </li>
                </ul>
              </CartCheckoutCont>
            </CartContent>
          </>
        )}
      </CartWrap>
    </Layout>
  );
};

export default Cart;
