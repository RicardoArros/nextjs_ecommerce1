import React, { useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";

import { toast } from "react-toastify";

import { Store } from "../utils/Store";

import {
  CheckoutForm,
  CheckoutFormSubmit,
  CheckoutFormTitle,
  CheckoutPayments,
} from "../components/Checkout/CheckoutStyled";

import CheckoutWizard from "../components/Checkout/CheckoutWizard";

import Layout from "../components/Layout/Layout";

import { ButtonCompany } from "../components/Button/ButtonStyled";
import Cookies from "js-cookie";

const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress, paymentMethod } = cart;

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!selectedPaymentMethod) {
      toast.error("Payment method is required");
    }

    dispatch({ type: "SAVE_PAYMENT_METHOD", payload: selectedPaymentMethod });

    Cookies.set(
      "cart",
      JSON.stringify({ ...cart, paymentMethod: selectedPaymentMethod })
    );

    router.push("/placeorder");
  };

  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push("/shipping");
    }

    setSelectedPaymentMethod(paymentMethod || "");

    return () => {};
  }, [paymentMethod, router, shippingAddress.address]);

  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2} />
      <CheckoutForm onSubmit={submitHandler}>
        <CheckoutFormTitle>
          <h2>Método de pago</h2>
        </CheckoutFormTitle>

        {["PayPal", "Stripe", "CashOnDelivery"].map((payment) => (
          <CheckoutPayments key={payment}>
            <input
              name="paymentMethod"
              id={payment}
              type="radio"
              checked={selectedPaymentMethod === payment}
              onChange={() => setSelectedPaymentMethod(payment)}
            />

            <label htmlFor={payment}>{payment}</label>
          </CheckoutPayments>
        ))}

        <CheckoutFormSubmit>
          <ButtonCompany onClick={() => router.push("/shipping")} type="button">
            Atrás
          </ButtonCompany>
          <ButtonCompany primary>Siguiente</ButtonCompany>
        </CheckoutFormSubmit>
      </CheckoutForm>
    </Layout>
  );
};

export default Payment;
