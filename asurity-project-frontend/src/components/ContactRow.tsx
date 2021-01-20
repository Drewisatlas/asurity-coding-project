import Button from 'react-bootstrap/Button';
import {Contact} from '../Interfaces';
import '../styling/ContactRow.css';

interface RowProps {
    contact: Contact;
    deleteContact: (id: number) => void;
    editContactHandler: (contact: Contact) => void;
}

const ContactRow: React.FC<RowProps> = (props) => {
    let deleteCallback = () => props.deleteContact(props.contact.id);
    let editContactCallback = () => props.editContactHandler(props.contact);

    return (
        <div className="Contact-Row">
            <div className="Column-Name First-Name">{props.contact.firstName}</div>
            <div className="Last-Name">{props.contact.lastName}</div>
            <div className="City">{props.contact.city}</div>
            <div className="State">{props.contact.state}</div>
            <div className="Phone-Number">{props.contact.phoneNumber}</div>
            <div className="button-container">
                <Button onClick={editContactCallback}>Edit</Button>
                <Button onClick={deleteCallback}>Delete</Button>
            </div>
        </div>
    )
}

export default ContactRow;