import ContactRow from './ContactRow';
import '../styling/ContactGrid.css';

export interface Props {
    //contacts: Contact[];
}

//type Contact = Readonly<{
//id: number
//}>

function ContactGrid() {
    //const ContactRows = contacts.map (contact => <ContactRow />)

    return(
        <div className="Grid-Outline">
            <ContactRow />
        </div>
    );
}

export default ContactGrid;