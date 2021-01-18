import React from 'react';
import '../styling/ContactForm.css';

interface Props {}

interface State {
  firstName: string;
}

//dropdown menu interfaces and variables
interface PreferredContactMethod {
    id: number;
    method: string;
}

interface ContactFrequency {
    id: number;
    Frequency: string;
}

interface UsState {
    id: number;
    abbreviation: string;
    fullName: string;
}

const contactMethodValues: PreferredContactMethod[] = [];
const contactFrequencyValues: ContactFrequency[] = [];
const usStateDropdownValues: UsState[] = [];

//validation functions
const emailValidation = (email:string): string|null => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email,
    )
  ) {
    return null;
  }
  if (email.trim() === '') {
    return 'Email is required';
  }
  return 'Please enter a valid email';
};

const stringLengthValidator = (fieldName: string, fieldValue: string, maxLength: number): string|null => {
    if (fieldValue.trim() === '') {
        return `${fieldName} is required`;
    }
    if (fieldValue.trim().length > maxLength) {
        return `${fieldName} has a max of ${maxLength} characters`;
    }
    return null;
}

//key is the field name, value is a function  
const validate = {
  firstName: (value:string) => stringLengthValidator('First Name', value, 20),
  lastName: (value:string) => stringLengthValidator('Last Name', value, 20),
  email: emailValidation,
  streetAddress: (value:string) => stringLengthValidator('Last Name', value, 100),
  city: (value:string) => stringLengthValidator('Last Name', value, 50)
};

class ContactForm extends React.Component<Props, State> {
    constructor(props: Props) {
       super(props);
       this.state = {
            firstName: '',

       } 
       
    }

    // change event handler
    //const handleTextChange = (event: KeyboardEvent) => {
    //const { name, value: newValue, type } = event.target;

    //handleSubmit(event: MouseEvent) {
    //    alert('A name was submitted: ' + this.state.firstName);
    //    event.preventDefault();
    //}

    render() {
        return (
            <div className="Contact-Form-View">
                    <form className="Contact-Form-Container">
                        <div className="Form-Group">
                        <label>
                            Last Name
                            <input 
                            type="text" 
                            name="firstName" 
                            className="Text-Input" 
                            placeholder="First Name" 
                            value={this.state.firstName} 
                            //onChange={this.handleTextChange} 
                            //onBlur={handleBlur}
                            required
                            />
                            {/* {touched.firstName && errors.firstName} */}
                        </label>
                        <label>
                            Last Name <input type="text" name="lastName" className="Text-Input"/>
                        </label>
                        </div>

                        <div className="Form-Group">
                        <label>
                            Street Address <input type="text" name="lastName" className="Text-Input"/>
                        </label>
                        </div>

                        <div className="Form-Group">
                        <label>
                            City <input type="text" name="lastName" className="Text-Input"/>
                        </label>
                        <label>
                            State <select> </select>
                        </label>
                        <label>
                            Zipcode <input type="text" name="zipcode" className="Text-Input"/>
                        </label>
                        </div>

                        <div className="Form-Group">
                        <label>
                            Email <input type="text" name="email" className="Text-Input"/>
                        </label>
                        <label>
                            Phone <input type="text" name="lastName" className="Text-Input"/>
                        </label>
                        </div>

                        <div className="Form-Group">
                        <label>
                            Preferred Contact Method <select> </select>
                        </label>
                        </div>

                        <div className="Form-Group">
                         <label>
                            Contact Frequency <select> </select>
                        </label>
                        </div>

                        <div>
                            <button type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
            </div>
    );
  }
}

export default ContactForm;