import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextInput from './formInputs/TextInput';
import '../styling/ContactForm.css';
import { Contact, NewContact, UsState, ContactMethod, ContactFrequency } from '../Interfaces';

 interface FormProps {
    stateSelections: UsState[];
    contactMethods: ContactMethod[];
    contactFrequencies: ContactFrequency[];
    existingContact: Contact|null;
    gridViewHandler: () => void;
    addContact: (contact: NewContact) => void; 
    editContact: (contact: Contact) => void
 }

 interface SubmissionValue{
    id?: number;
    firstName: string;
    lastName: string;
    streetAddress: string;
    city: string;
    state: string;
    zipcode: string;
    phoneNumber: string;
    email: string;
    contactFrequency: React.ReactText;
    contactMethod: React.ReactText;
}

class ContactForm extends React.Component<FormProps> {

    newContactDataMapper = (value: SubmissionValue):NewContact => {
        let newContact: NewContact = {
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email,
            phoneNumber: value.phoneNumber,
            streetAddress: value.streetAddress,
            city: value.city,
            state: value.state,
            zipcode: value.zipcode,
            contactFrequency: Number(value.contactFrequency),
            contactMethod: Number(value.contactMethod)
        }

        return newContact;
    }

    existingContactDataMapper = (value: SubmissionValue):Contact => {
        let updatedContact: Contact = {
            id: this.props.existingContact!.id,
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email,
            phoneNumber: value.phoneNumber,
            streetAddress: value.streetAddress,
            city: value.city,
            state: value.state,
            zipcode: value.zipcode,
            contactFrequency: Number(value.contactFrequency),
            contactMethod: Number(value.contactMethod)
        }

        return updatedContact;
    }

    render () {
        const contact = this.props.existingContact;
        const title = contact ? <h1>Edit Contact</h1> : <h1>New Contact</h1> ;
        return (
            <Formik 
                initialValues = {
                    {
                    firstName: contact ? contact.firstName : '',
                    lastName: contact ? contact.lastName : '',
                    streetAddress: contact ? contact.streetAddress : '',
                    city: contact ? contact.city : '',
                    state: contact ? contact.state : '',
                    zipcode: contact ? contact.zipcode : '',
                    phoneNumber: contact? contact.phoneNumber : '',
                    email: contact ? contact.email : '',
                    contactFrequency: contact ? contact.contactFrequency : '',
                    contactMethod: contact ? contact.contactMethod : '',
                    }
                }
                validationSchema = { Yup.object({
                    firstName: Yup.string()
                        .max(20, "Must be 20 characters or less")
                        .required("Required"),
                    lastName: Yup.string()
                        .max(20, "Must be 20 characters or less")
                        .required("Required"),
                    streetAddress: Yup.string()
                        .max(100, "Must be 100 characters or less")
                        .required("Required"),
                    city: Yup.string()
                        .max(50, "Must be 50 characters or less")
                        .required("Required"),
                    state: Yup.string()
                        .required("Required"),
                    zipcode: Yup.string()
                        .min(5,"Zipcode must be at least 5 characters")
                        .max(10, "Zipcode must be less than 10 characters")
                        .required("Required"),
                    phoneNumber: Yup.string()
                        .min(10,"Phone number must be at least 10 characters")
                        .required("Required"),
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                    contactFrequency: Yup.number()
                        .required("Required"),
                    contactMethod: Yup.number()
                        .required("Required")
                })}
                onSubmit = { (values, {setSubmitting}) => {
                    if (this.props.existingContact === null) {
                        let newContact: NewContact = this.newContactDataMapper(values);
                        this.props.addContact(newContact);
                        this.props.gridViewHandler();
                    } else {
                        let updatedContact: Contact = this.existingContactDataMapper(values);
                        this.props.editContact(updatedContact);
                        this.props.gridViewHandler();
                    }
                }}
            > 
                {formik => (
                    <Form>
                        {title}
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
                                <option value="">State</option>
                                {this.props.stateSelections.map(e => <option key={e.id} value={e.fullName}>{e.fullName}</option>)}
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
                                name="phoneNumber"
                                type="phoneNumber"
                                placeholder="Phone Number"
                            />
                            <TextInput
                                name="email"
                                type="email"
                                placeholder="E-mail"
                            />
                        </div>

                        <div className="Form-Group">
                            <Field type="number" as="select" id="contactFrequency" name="contactFrequency" >
                                <option value="">Contact Frequency</option>
                                {this.props.contactFrequencies.map(e => <option key={e.id} value={e.id}>{e.frequency}</option>)}
                            </Field>
                            <ErrorMessage name ="contactFrequency" />
                            <Field type="number" as="select" id="contactMethod" name="contactMethod" >
                                <option value="">Preferred Contact Method</option>
                                {this.props.contactMethods.map(e => <option key={e.id} value={e.id}>{e.method}</option>)}
                            </Field>
                            <ErrorMessage name ="contactMethod" />
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
    )};
}

export default ContactForm;
