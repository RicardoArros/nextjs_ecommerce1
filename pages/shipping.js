import React, { useContext, useEffect } from "react";

import { useRouter } from "next/router";

import { useForm } from "react-hook-form";

import Cookies from "js-cookie";

import { Store } from "../utils/Store";

import Layout from "../components/Layout/Layout";

import CheckoutWizard from "../components/Checkout/CheckoutWizard";

import {
  CheckoutForm,
  CheckoutFormItem,
  CheckoutFormSubmit,
  CheckoutFormTitle,
} from "../components/Checkout/CheckoutStyled";

import { ButtonCompany } from "../components/Button/ButtonStyled";

const Shipping = () => {
  // Initialize react hook form
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  // Initialize router
  const router = useRouter();

  // Initialize context
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;

  //
  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
    setValue("city", shippingAddress.city);
    setValue("postalCode", shippingAddress.postalCode);
    setValue("country", shippingAddress.country);
  }, [setValue, shippingAddress]);

  //
  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, address, city, postalCode, country },
    });

    //
    Cookies.set(
      "cart",
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          country,
        },
      })
    );

    router.push("/payment");
  };

  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />

      <CheckoutForm onSubmit={handleSubmit(submitHandler)}>
        <CheckoutFormTitle>
          <h2>Shipping Address</h2>
        </CheckoutFormTitle>

        <CheckoutFormItem>
          <label htmlFor="fullName">Nombre Completo</label>
          <input
            id="fullName"
            autoFocus
            {...register("fullName", {
              required: "Por favor ingrese el nombre completo",
            })}
          />
          {errors.fullName && <p>{errors.fullName.message}</p>}
        </CheckoutFormItem>

        <CheckoutFormItem>
          <label htmlFor="address">Dirección</label>
          <input
            id="address"
            {...register("address", {
              required: "Por favor ingrese una dirección",
              minLength: {
                value: 3,
                message: "Dirección debe tener más de 2 caracteres",
              },
            })}
          />
          {errors.address && <p>{errors.address.message}</p>}
        </CheckoutFormItem>

        <CheckoutFormItem>
          <label htmlFor="city">Ciudad</label>
          <input
            id="city"
            {...register("city", {
              required: "Por favor ingrese una ciudad",
            })}
          />
          {errors.city && <p>{errors.city.message}</p>}
        </CheckoutFormItem>

        <CheckoutFormItem>
          <label htmlFor="postalCode">Código Postal</label>
          <input
            id="postalCode"
            {...register("postalCode", {
              required: "Por favor ingrese un código postal",
            })}
          />
          {errors.postalCode && <p>{errors.postalCode.message}</p>}
        </CheckoutFormItem>

        <CheckoutFormItem>
          <label htmlFor="country">País</label>
          <input
            id="country"
            {...register("country", {
              required: "Por favor ingrese un país",
            })}
          />
          {errors.country && <p>{errors.country.message}</p>}
        </CheckoutFormItem>

        <CheckoutFormSubmit>
          <ButtonCompany primary isHalfWidth>
            Siguiente
          </ButtonCompany>
        </CheckoutFormSubmit>
      </CheckoutForm>
    </Layout>
  );
};

Shipping.auth = true;

export default Shipping;
