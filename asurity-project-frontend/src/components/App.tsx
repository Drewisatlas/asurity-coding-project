import React from 'react';
//@ts-ignore
import {LoopCircleLoading} from 'react-loadingg'; 
import '../styling/App.css';
import ContactGrid from './ContactGrid';
import ContactFormNew from './ContactFormNew';
import * as Constants from '../Constants';


export interface Props {}

interface State {
  view : View;
  contacts: Contact[];
  isLoading: boolean;
  stateSelections: UsState[];
  contactMethods: ContactMethod[];
  contactFrequencies: ContactFrequency[];
  //error: string | null;
}

type View = 'contact grid' | 'contact form' | 'edit form'

export interface Contact {
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
export interface UsState {
  id: number,
  fullName: string,
  abbreviation: string
}
export interface ContactMethod {
  id: number,
  method: string
}

export interface ContactFrequency {
  id: number,
  frequency: string
}
class App extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = { 
      view: 'contact grid',
      isLoading: false,
      //error: null,
      contacts: [],
      stateSelections: [],
      contactMethods: [],
      contactFrequencies: []
    };
  }

  updateStateName (contact: Contact): void {
    let stateFullName = this.state.stateSelections.find((stateData:UsState) => stateData.abbreviation === contact.state)?.fullName;
    contact.state = stateFullName!;
  }

  async getStateInfoAndContacts () {
  await fetch(Constants.API + "states")
    .then(response => response.json())
    .then(data => this.setState({stateSelections: data}));

  await fetch(Constants.API + "contacts")
    .then(response =>response.json())
    .then(contacts => {
      contacts.forEach((contact: Contact) => {
        this.updateStateName(contact);
      });
      this.setState({contacts: contacts, isLoading: false})
    });
  }

  async componentDidMount () {
    //loading
    this.setState({isLoading: true})
    //fetch dropdown selection data

    fetch(Constants.API + "contactMethods")
    .then(response => response.json())
    .then(data => this.setState({contactMethods: data}));

    fetch(Constants.API + "contactFrequencies")
    .then(response => response.json())
    .then(data => this.setState({contactFrequencies: data}));

    //fetch contacts
    this.getStateInfoAndContacts();
  }
  
  render () {
    let gridProps = {contacts: this.state.contacts};
    let mainViewComponent;
    if (this.state.isLoading) {
      mainViewComponent = <LoopCircleLoading />;
    } else if (this.state.view === 'contact form'){
      mainViewComponent = <ContactFormNew />;
    } else {
      mainViewComponent = <ContactGrid {...gridProps}/>;
    }
    return (
        <div className="App-Container">
          <header className="App-header">
            <span>All Contacts</span>
            <span>New Contact</span>
          </header>
          {mainViewComponent}
        </div>
    );
  }
}

export default App;
