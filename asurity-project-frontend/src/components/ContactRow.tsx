export interface Props {
    contact: Contact;
}

type Contact = Readonly<{
id: number
}>

function ContactRow () {

    return (
        <div className="contact-row">
            <div className="first-name">firstName</div>
            <div className="Last-name">lastName</div>
            <div className="city">city</div>
            <div className="state">state</div>
            <button>Edit</button>
        </div>
    )
}

export default ContactRow;