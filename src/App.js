import React, { Component } from 'react';
import './App.css';
import ReactPlayer from 'react-player'
import axios from "axios"
import List from "./List"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: [],
    }
    //this.getDataFromApi= this.getDataFromApi.bind(this)
  }


  componentDidMount(){
    this.getDataFromApi()
  }

getDataFromApi = () => {
  axios.get('https://swapi.co/api/people/')
  .then((response)=> {
    // handle success
    console.log(response.data.results);
    this.setState({ people : response.data.results}, ()=> {
      console.log(this.state.people)
     })
  })
  .catch((error)=>{
    // handle error
    console.log(error);
  })
}


  render() {
    
    const {people} = this.state;
    return (
    
      <div className="App">
      <List people = {people} />
      <ReactPlayer className="embed-responsive" url='https://www.youtube.com/watch?v=_D0ZQPqeJkk' playing /> 
      </div>
    );
  }
}

export default App;
