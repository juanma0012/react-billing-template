import React, { Component } from 'react';
import InvoiceRevision from './components/InvoiceRevision'
import InvoiceCanvas from './components/InvoiceCanvas'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { invoice: {} };
  }
  componentDidMount() {
    /**
     * Here should be the API call to get the Invoice data.
     */
    fetch("/mock/data.json")
      .then(res => res.json())
      .then(
      (result) => {
        this.setState({
          invoice: result
        });
        console.log(result);
      },
      (error) => {
        this.setState({
          error
        });
      }
      )
  }
  render() {
    return (
      <div className="App">
        <InvoiceRevision invoice={this.state.invoice}/>
        <InvoiceCanvas invoice={this.state.invoice}/>
      </div>
    );
  }
}

export default App;
