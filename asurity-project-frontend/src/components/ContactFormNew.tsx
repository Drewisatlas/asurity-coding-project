 import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import TextInput from './formInputs/TextInput';
 import '../styling/ContactForm.css';

 function ContactFormNew () {

    //the formik component accepts a a function as its child (a render prop)
     return (
         <Formik 
            initialValues = {{
                firstName: '',
                lastName: '',
                streetAddress: '',
                email: ''
            }}
            validationSchema = { Yup.object({
                firstName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
                lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
                streetAddress: Yup.string().max(100, "Must be 100 characters or less").required("Required"),
                city: Yup.string().max(50, "Must be 100 characters or less").required("Required"),
                email: Yup.string().email("Invalid email address").required("Required"),
            })}
            onSubmit = { (values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
         > 
            { formik => (
                <Form>
                    <div className="Form-Group">
                        <TextInput
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                        />
                        <TextInput
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>

                    <div className="Form-Group">
                        <TextInput
                            name="streetAddress"
                            type="text"
                            placeholder="Street Address"
                        />
                    </div>

                    <div className="Form-Group">
                        <TextInput
                            name="city"
                            type="text"
                            placeholder="City"
                        />

                        <Field as="select" id="state" name="state">
                            <option value="phone">State</option>

                        </Field>
                        <ErrorMessage name ="state" />

                        <TextInput
                            name="zipcode"
                            type="text"
                            placeholder="Zipcode"
                        />
                    </div>

                    <div className="Form-Group">
                        <TextInput
                            name="phone"
                            type="phone"
                            placeholder="Phone Number"
                        />
                        <TextInput
                            name="email"
                            type="email"
                            placeholder="E-mail"
                        />
                    </div>

                    <div className="Form-Group">
                        <Field as="select" id="contactFrequency" name="contactFrequency">
                            <option value="">When can we contact you?</option>

                        </Field>
                        <Field as="select" id="contactMethod" name="contactMethod">
                            <option value="">Preferred contact method</option>

                        </Field>
                    </div>


                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
}

export default ContactFormNew;
