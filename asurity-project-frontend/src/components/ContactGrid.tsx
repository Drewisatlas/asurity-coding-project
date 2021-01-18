import ContactRow from './ContactRow';
import SortButton from './SortButton';
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
            <div className="Column-Titles">
                <div className="Column-Name">First Name <SortButton /> </div>
                <div className="Column-Name">Last Name <SortButton /> </div>
                <div className="Column-Name">City <SortButton /> </div>
                <div className="Column-Name">State <SortButton /> </div>
                <div className="Column-Name">Phone Number</div>
            </div>
            <ContactRow />
        </div>
    );
}

export default ContactGrid;