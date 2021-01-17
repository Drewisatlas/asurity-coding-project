import React from 'react';
import '../styling/App.css';
import { convertTypeAcquisitionFromJson, TypeOfTag } from 'typescript';
import ContactGrid from './ContactGrid';
import ContactForm from './ContactForm';

export interface Props {}

interface State {
  view : View;
  //contacts: Contact[];
}

type View = 'contact grid' | 'contact form'
//export interface Contact {
//id: number
//}

class App extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = { 
      view: 'contact grid',
      //contacts: []
    }
  }
  render () {
    let mainViewComponent;
    if (this.state.view === 'contact form') {
            mainViewComponent = <ContactForm />;
          } else {
            mainViewComponent =<ContactGrid />;
          }

    return (
        <div className="App">
          <header className="App-header">
            <span>Contacts</span>
            <span>New Contact</span>
          </header>
          {mainViewComponent}
        </div>
    );
  }
}

export default App;
