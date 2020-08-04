import React from 'react';
import './App.css';
import axios from 'axios'
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      advice: ''
    }
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip
        this.setState({
          advice: advice
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="advice">{ advice }</h1>
        </div> 
          <Button variant="contained" color="primary" className="button" onClick={this.fetchAdvice}>
            Generate Advice
          </Button>
      </div>
    )
  }
}

export default App;
