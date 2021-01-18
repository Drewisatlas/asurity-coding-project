import React from 'react';
//@ts-ignore
import {LoopCircleLoading} from 'react-loadingg'; 
import '../styling/App.css';
import ContactGrid from './ContactGrid';
import ContactFormNew from './ContactFormNew';

const API: string = "https://localhost:5001/api/";

export interface Props {}

interface State {
  view : View;
  contacts: Contact[];
  isLoading: boolean;
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

class App extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = { 
      view: 'contact form',
      isLoading: false,
      //error: null,
      contacts: [],

    }
  }

  componentDidMount () {
    //loading
    this.setState({isLoading: true})
    //fetch contacts
    fetch(API + "contacts") //can we make this a variable someplace
    .then(response =>response.json())
    .then(data => this.setState({contacts: data, isLoading: false}))
  }

  
  render () {
    let mainViewComponent;
    if (this.state.isLoading) {
      mainViewComponent = <LoopCircleLoading />;
    } else if (this.state.view === 'contact form'){
      mainViewComponent = <ContactFormNew />;
    } else {
      mainViewComponent =<ContactGrid />;
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
