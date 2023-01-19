import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <>

            <Link to={"/"}> <button> Back to Product Page </button> </Link>

            <Helmet>

                <title> This is  Add and LoginPage </title>

            </Helmet>

            <Formik
                initialValues={{ description: '', name: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    description: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),

                })}
                onSubmit={(values) => {
                    axios.post("http://localhost:3000/categories", values)
                }}
            >
                <Form>
                    <label htmlFor="description">First Name</label>
                    <Field name="description" type="text" />
                    <ErrorMessage name="description" />

                    <label htmlFor="name">Last Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <button type="submit">Submit</button>


                </Form>
            </Formik>

        </>
    )
}

export default LoginPage