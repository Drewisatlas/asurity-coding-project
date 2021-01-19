import React from 'react';
import ContactRow from './ContactRow';
import SortButton from './SortButton';
import '../styling/ContactGrid.css';
import '../styling/ContactRow.css';
//import Contact from './App';

interface GridProps {
    contacts: Contact[];
    sortContacts: (dataPoint:string, sort: 'asc'|'desc') => void;
    deleteContact: (id:number) => void;

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

class ContactGrid extends React.Component<GridProps> {
    constructor(props: GridProps){
        super(props);
    }

    
    render () {
        const contacts = this.props.contacts;

        return(
            <div className="Grid-Outline">
                <div className="Column-Titles">
                    <div className="Column-Name">First Name <SortButton sortContacts={this.props.sortContacts} sortBy='firstName' /> </div>
                    <div className="Column-Name">Last Name <SortButton sortContacts={this.props.sortContacts} sortBy='lastName' /> </div>
                    <div className="Column-Name">City <SortButton sortContacts={this.props.sortContacts} sortBy='city' /> </div>
                    <div className="Column-Name">State <SortButton sortContacts={this.props.sortContacts} sortBy='state' /> </div>
                    <div className="Column-Name">Phone Number<SortButton sortContacts={this.props.sortContacts} sortBy='phoneNumber' /> </div>
                </div>
                {contacts.map(contact => <ContactRow key={contact.id} contact={contact} deleteContact={this.props.deleteContact}/>)}
            </div>
        )
    }
    
}

export default ContactGrid;