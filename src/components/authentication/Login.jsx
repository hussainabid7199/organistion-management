import React, { useState } from 'react'
// import axios from "axios";
import { useFormik, Form, Field, Formik } from 'formik';
import Notify from '../partials/Notify';
import { Success, Error, Warn, Info, Spinner } from '../partials/Notify';
import * as Yup from "yup";


const initialValues = {
  email: "",
  password: ""
}

const onSubmit = async (values) => {
  // e.preventDefault();
  const userLogin = await fetch("https://college-erp-server.vercel.app/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values, null, 2)
  })

  try {
    const login = await userLogin.json();
    const loginStatus = userLogin.status;

    if (loginStatus === 400 || !login) {
      Error("Invalid User")
      console.log("Invalid User");
      return;
    } else if (login) {
      Success("Login Successfull")
      console.log("Login Successfull");
    }
    console.log("Form Data", values);
  } catch (error) {
    console.log(error);
  }

}

const validationSchema = Yup.object({
  email: Yup.string().email(Warn("Invalid email format!")).required(Info("Email required!")),
  password: Yup.string().required(Info("Password required!"))
})




export default function Login() {
  // const [online, setOnline] = useState();

    // const internetStatus = navigator.onLine;
    // console.log(`Internet Status ${internetStatus}`);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });



  return (
    <>
      <Formik>
        <div className="bg-gradient-to-r from-sky-600 to-indigo-500 flex justify-center h-screen w-screen">
          <div className="login-form bg-gradient-to-r from-rose-100 to-rose-200  rounded-md shadow-md flex justify-center pt-16 my-auto xsm:mx-2 sm:mx-1 md:mx-1" style={{ width: "25rem", height: "20rem" }}>

            <Form onSubmit={formik.handleSubmit}>
              <div className="formik-userid">
                <Field type="email" name="email" id="email" {...formik.getFieldProps("email")} className='py-3 rounded-md shadow-md my-2 text-center' placeholder='Email' style={{ width: "21rem" }} />
              </div>

              <div className="formik-password" style={{ width: "21rem" }}>
                <Field type="password" name="password" id="password" {...formik.getFieldProps("password")} className=' py-3 rounded-md my-2 shadow-md text-center w-full' placeholder='Password' />
              </div>
              {/* {formik.touched.email && formik.errors.email || formik.touched.password && formik.errors.password  ? Info("email or password require !!") : false} */}
              <div className="flex justify-center mt-5">
                <button type="submit" className='px-16 py-2 bg-indigo-400 rounded-md text-slate-200 shadow-md'>Login</button>
              </div>
            </Form>
          </div>
        </div>
      </Formik>
      <Notify />
    </>
  )
}
