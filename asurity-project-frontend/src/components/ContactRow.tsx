import '../styling/ContactRow.css';

export interface Props {
    contact: Contact;
}

type Contact = Readonly<{
id: number
}>

function ContactRow () {

    return (
        <div className="Contact-Row">
            <div className="First-Name">firstName</div>
            <div className="Last-Name">lastName</div>
            <div className="City">city</div>
            <div className="State">state</div>
            <div className="Phone-Number">Phone Number</div>
            <button>Edit</button>
        </div>
    )
}

export default ContactRow;