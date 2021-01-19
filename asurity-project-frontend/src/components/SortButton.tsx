import { ReactSVGElement } from "react";

interface SortButtonProps {
    sortContacts: (dataPoint:string, sort: 'asc'|'desc') => void;
    sortBy: string;
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


const SortButton: React.FC<SortButtonProps> = (props) => {
    let sortAscCallback = () => props.sortContacts(props.sortBy, "asc");
    let sortDescCallback = () => props.sortContacts(props.sortBy, "desc");
    
    return(
        <span>
            <button onClick ={sortAscCallback}>▲</button>
            <button onClick ={sortDescCallback}>▼</button>
        </span>
    );
}

export default SortButton;