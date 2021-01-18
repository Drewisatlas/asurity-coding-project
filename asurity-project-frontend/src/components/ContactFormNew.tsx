 import React from 'react';
 import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import '../styling/ContactForm.css';

 function ContactFormNew () {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            streetAddress: '',
            email: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
            lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
            streetAddress: Yup.string().max(100, "Must be 100 characters or less").required("Required"),
            city: Yup.string().max(50, "Must be 100 characters or less").required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="Form-Group">
                <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    {...formik.getFieldProps('lastName')}
                />
                {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
            </div>

            <div className="Form-Group">
                <input
                    id="streetAddress"
                    type="text"
                    placeholder="Street Address"
                    {...formik.getFieldProps('streetAddress')}
                />
                {formik.touched.streetAddress && formik.errors.streetAddress ? <div>{formik.errors.streetAddress}</div> : null}
            </div>
            <div className="Form-Group">
                <input
                    id="city"
                    type="text"
                    placeholder="City"
                    {...formik.getFieldProps('city')}
                />
                {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

                {/* <select 
                    id=""
                >

                </select> */}
            </div>

            <div className="Form-Group">
            <input
                id="email"
                type="email"
                placeholder="Email"
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <button type="submit">Submit</button>
        </form>
    );

 }

 export default ContactFormNew;
