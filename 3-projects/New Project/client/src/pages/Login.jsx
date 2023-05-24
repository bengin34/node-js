import React from "react";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import useAuthCall from "../hooks/useAuthCall";


export const loginScheme = object({
  username: string()
  .max(150, "User name should be lesser than 150 char.")
  .required(),
  password: string()
    .required("password can not be blank")
    .min(8, "password should be at least 8 characters")
    .max(20, "Password can not be more than 20 characters")
    .matches(/\d+/, "Password requires at least one number")
    .matches(/[a-z]/, "Password requires at least one lowercase letter")
    .matches(/[A-Z]/, "Password requires at least one uppercase letter")
    .matches(
      /[!,?{}><%&$#£+-.]+/,
      "Password requires at least one special letter"
    ),
});

const Login = () => {
  const {login} = useAuthCall()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-red-600 text-center">
        Login Form
      </h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={loginScheme}
        onSubmit={ (values,actions) => {
          login(values)
          actions.resetForm()
          actions.setSubmitting(false)
        } }
      >
        <Form className="container mx-auto py-8">
          <div className="w-full max-w-sm mx-auto bg-red-200 p-8 rounded-md shadow-md">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <Field
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                type="text"
                id="username"
                name="username"
                placeholder="John Doe"
              />
               
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <Field
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                type="password"
                id="password"
                name="password"
                placeholder="********"
              />
            </div>

            <button
              className="w-full bg-red-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
