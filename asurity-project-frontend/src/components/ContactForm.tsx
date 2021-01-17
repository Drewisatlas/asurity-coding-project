import React from 'react';

interface Props {}

interface State {
  //firstName: string;
}

class ContactForm extends React.Component<Props, State> {
    constructor(props: Props) {
       super(props);
       this.state = {
            //firstName: ''
       } 
       
    }

/*     handleChange(event) {
        this.setState({firstName: event.target.value})
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.firstName);
        event.preventDefault();
    } */

    render() {
        return (
            <p>This is a form</p>
    );
  }
}

export default ContactForm;