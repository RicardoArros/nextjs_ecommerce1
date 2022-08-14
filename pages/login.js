import React, { useEffect } from "react";

import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

import { useRouter } from "next/router";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

import Layout from "../components/Layout/Layout";
import {
  Form,
  FormForgot,
  FormItem,
  FormSubmit,
} from "../components/Login/LoginStyled";
import { ButtonCompany } from "../components/Button/ButtonStyled";

import { getError } from "../utils/error";

const Login = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const { redirect } = router.query;

  //
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  //
  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  //
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Login">
      <Form onSubmit={handleSubmit(submitHandler)}>
        <h2>Login</h2>

        <FormItem>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: " Debes ingresar un email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                message: "Debes ingresar un email válido",
              },
            })}
            id="email"
            autoFocus
          />
          {errors.email && <p>{errors.email.message}</p>}
        </FormItem>

        <FormItem>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Debes ingresar una contraseña",
              minLength: {
                value: 6,
                message: "Contraseña debe tener al menos 6 caracteres",
              },
            })}
            id="password"
            autoFocus
          />
          {errors.password && <p>{errors.password.message}</p>}
        </FormItem>

        <FormSubmit>
          <ButtonCompany primary>Login</ButtonCompany>
        </FormSubmit>

        <FormForgot>
          No tienes una cuenta? &nbsp;
          <Link href="register">Registrate</Link>
        </FormForgot>
      </Form>
    </Layout>
  );
};

export default Login;
