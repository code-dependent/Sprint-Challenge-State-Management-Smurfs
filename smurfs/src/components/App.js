import React, { Component } from "react";
import "./App.css";
import {fetchSmurfs, postSmurf} from '../store/actions/index'
import {connect} from 'react-redux';

const initFormState = {
  name:'',
  age:'',
  height:''
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      name:'',
      age:'',
      height:''
    }
  }
  componentWillMount(){
    this.props.fetchSmurfs()
  }
  componentWillUpdate(prevProps, prevState){
    if(this.props.smurfs !== prevProps.smurfs){
      this.props.fetchSmurfs()

    }

  }
  
  handleChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  submitHandle = (e)=>{
    e.preventDefault()
    this.props.postSmurf(this.state)
    this.setState(initFormState)
    
  }
  
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div style={{width:'20%'}}>
          <form onSubmit={this.submitHandle}>
            <input
              type='text'
              name='name'
              placeholder='Enter name'
              value={this.state.name}
              onChange={this.handleChange}/>
            <input
              type='text'
              name='age'
              placeholder='Enter age'
              value={this.state.age}
              onChange={this.handleChange}/>
            <input
              type='text'
              name='height'
              placeholder='Enter height in "cm"'
              value={this.state.height}
              onChange={this.handleChange}/>
              <button onClick={this.submitHandle}></button>
          </form>
          <div>
            {console.log(this.props)}
            {this.props.smurfs && this.props.smurfs.map(
              smurf=>{
                return(
                  <li>{smurf.name}</li>
                )
              }
            )}
          </div>
        </div>
        
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  console.log(state)
  return{
    ...state

  }
}

export default connect(mapStateToProps,{fetchSmurfs,postSmurf})(App);
