import React from 'react';
//@ts-ignore
import {LoopCircleLoading} from 'react-loadingg'; 
import '../styling/App.css';
import ContactGrid from './ContactGrid';
import ContactFormNew from './ContactFormNew';
import {API} from '../Constants';
import {Contact, NewContact, UsState, ContactMethod, ContactFrequency}from '../Interfaces';


export interface Props {}

interface State {
  view : View;
  contacts: Contact[];
  isLoading: boolean;
  stateSelections: UsState[];
  contactMethods: ContactMethod[];
  contactFrequencies: ContactFrequency[];
  existingContact: Contact| null;
}

type View = 'contact grid' | 'contact form' | 'edit form'
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
      contactFrequencies: [],
      existingContact: null
    };
  }

  updateStateName (contact: Contact|NewContact, style: 'abbreviation'|'fullName'): void {
    let stateName: string|undefined;

    if (style === 'abbreviation') {
      stateName = this.state.stateSelections.find((stateData:UsState) => stateData.abbreviation === contact.state)?.fullName;
    }
    if (style === 'fullName') {
      stateName = this.state.stateSelections.find((stateData:UsState) => stateData.fullName === contact.state)?.abbreviation;
    }
    
    contact.state = stateName!;
  }

  //view handlers
  newContactClickHandler = (): void => {
    if (this.state.view !== 'contact form' || this.state.existingContact != null ) {
      this.setState({view: 'contact form', existingContact: null});
    }
  } 

  gridViewHandler = (): void => {
    if (this.state.view !== 'contact grid') {
      this.setState({view: 'contact grid'});
    }
  } 

  editContactHandler = (contact: Contact): void => {
    if (this.state.view !== 'contact form') {
      this.setState({view: 'contact form', existingContact: contact});
    }
  } 

 //not sure how to get around this TypeScript Index Signature issue, need to investigate further
  sortContacts = (dataPoint:string, sort: 'asc'|'desc') => {
    let sortedList: Contact[] = [...this.state.contacts];
    if ( sort === 'asc') {
      //@ts-ignore
      sortedList.sort((a,b) => a[dataPoint] > b[dataPoint] ? 1 : b[dataPoint] > a[dataPoint] ? -1 : 0);
    } else {
      //@ts-ignore
      sortedList.sort((a,b) => a[dataPoint] < b[dataPoint] ? 1 : b[dataPoint] < a[dataPoint] ? -1 : 0);
    }
    this.setState({contacts: sortedList})
  }

  deleteContact = (id: number): void => {
    fetch(API + 'contacts/' + id, {
      method: 'DELETE'
    }).then(() => {
      let updatedContactList = this.state.contacts.filter(contact => contact.id !== id);
      this.setState({contacts: updatedContactList});
    })
  }

  editContact = (contact: Contact): void => {
    this.updateStateName(contact, 'fullName');

    fetch(API + 'contacts/' + contact.id, {
      method: 'PUT',
      body: JSON.stringify(contact),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
    .then(contact => {
      let newState = [...this.state.contacts];
      this.updateStateName(contact, 'abbreviation');
      let contactIndex = newState.findIndex(e => e.id === contact.id);
      newState[contactIndex] = contact;
      this.setState({contacts: newState})
    })
  }

  addContact = (contact: NewContact): void => {
    this.updateStateName(contact, 'fullName');

    fetch(API + 'contacts', {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
    .then(contact => {
      let newState = [...this.state.contacts];
      this.updateStateName(contact, 'abbreviation');
      newState.push(contact);
      this.setState({contacts: newState })
    })
  }

  //contact population and state name population
  async getStateInfoAndContacts () {
  await fetch(API + "states")
    .then(response => response.json())
    .then(data => this.setState({stateSelections: data}));

  await fetch(API + "contacts")
    .then(response =>response.json())
    .then(contacts => {
      contacts.forEach((contact: Contact) => {
        this.updateStateName(contact, 'abbreviation');
      });
      this.setState({contacts: contacts, isLoading: false})
    });
  }

  async componentDidMount () {
    //loading
    this.setState({isLoading: true})

    //fetch dropdown selection data
    fetch(API + "contactMethods")
    .then(response => response.json())
    .then(data => this.setState({contactMethods: data}));

    fetch(API + "contactFrequencies")
    .then(response => response.json())
    .then(data => this.setState({contactFrequencies: data}));

    //fetch contacts and US states
    this.getStateInfoAndContacts();
  }

  render () {
    let gridProps = {
      contacts: this.state.contacts,
      sortContacts: this.sortContacts,
      deleteContact: this.deleteContact,
      editContactHandler: this.editContactHandler
    };

    let contactFormProps = {
      stateSelections: this.state.stateSelections,
      contactMethods: this.state.contactMethods,
      contactFrequencies: this.state.contactFrequencies,
      existingContact: this.state.existingContact,
      gridViewHandler: this.gridViewHandler,
      addContact: this.addContact,
      editContact: this.editContact
    }

    let mainViewComponent;
    let headerButton;

    if (this.state.isLoading) {
      mainViewComponent = <LoopCircleLoading />;
      headerButton = <span onClick={this.newContactClickHandler} >New Contact</span>
    } else if (this.state.view === 'contact form'){
      mainViewComponent = <ContactFormNew {...contactFormProps} />;
      headerButton = <span onClick={this.gridViewHandler}>All Contacts</span>
    } else {
      mainViewComponent = <ContactGrid {...gridProps}/>;
      headerButton = <span onClick={this.newContactClickHandler} >New Contact</span>
    }

    return (
        <div className="App-Container">
          <header className="App-header">
            {headerButton}
          </header>
          {mainViewComponent}
        </div>
    );
  }
}

export default App;
