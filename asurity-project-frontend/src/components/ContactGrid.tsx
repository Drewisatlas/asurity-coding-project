import React from 'react';
import ContactRow from './ContactRow';
import SortButton from './SortButton';
import '../styling/ContactGrid.css';
import '../styling/ContactRow.css';
//import Contact from './App';

interface GridProps {
    contacts: Contact[];
}
interface Contact {
id: number,
firstName: string,
lastName: string,
email: string,
phoneNumber: string,
streetAddress: string,
city: string,
state: string,
zipcode: string,
contactFrequency: number,
contactMethod: number
}

//type Contact = Readonly<{
//id: number
//}>

class ContactGrid extends React.Component<GridProps> {
    constructor(props: GridProps){
        super(props);
    }

    
    render () {
        const contacts = this.props.contacts;

        return(
            <div className="Grid-Outline">
                <div className="Column-Titles">
                    <div className="Column-Name">First Name <SortButton /> </div>
                    <div className="Column-Name">Last Name <SortButton /> </div>
                    <div className="Column-Name">City <SortButton /> </div>
                    <div className="Column-Name">State <SortButton /> </div>
                    <div className="Column-Name">Phone Number</div>
                </div>
                {contacts.map(contact => <ContactRow key={contact.id} contact={contact}/>)}
            </div>
        )
    }
    
}

export default ContactGrid;