import Button from 'react-bootstrap/Button';
import '../styling/ContactRow.css';

interface RowProps {
    contact: Contact;
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

const ContactRow: React.FC<RowProps> = (props) => {

    return (
        <div className="Contact-Row">
            <div className="Column-Name First-Name">{props.contact.firstName}</div>
            <div className="Last-Name">{props.contact.lastName}</div>
            <div className="City">{props.contact.city}</div>
            <div className="State">{props.contact.state}</div>
            <div className="Phone-Number">{props.contact.phoneNumber}</div>
            <div className="button-container">
                <Button variant="light" className="mr-1">Edit</Button>
                <Button variant="danger">Delete</Button>
            </div>
        </div>
    )
}

export default ContactRow;