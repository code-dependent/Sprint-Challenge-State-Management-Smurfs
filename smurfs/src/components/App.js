import React, { Component } from "react";
import "./App.css";
import {fetchSmurfs, postSmurf,updateSmurf} from '../store/actions/index'
import {connect} from 'react-redux';
import {
  Card,
  CardText, 
  CardBody,
  CardTitle} from 'reactstrap'

const initFormState = {
  id:'',
  name:'',
  age:'',
  height:''
}
const modForm = {
  id:'',
  modname:'',
  modage:'',
  modheight:''
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      id:null,
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
          <h2>Add a Smurf to Village</h2>
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
              <button onClick={this.submitHandle}> add!</button>
          </form>
          {/* <h2>Edit Smurf</h2>
          <form onSubmit={(e)=>{
              e.preventDefault()
              this.props.updateSmurf(this.state)
              this.setState(initFormState)
              
            }}>
            <input
              type='text'
              name='id'
              placeholder='ID of smurf to edit'
              value={modForm.id}/>
            <input
              type='text'
              name='modname'
              placeholder='Enter name'
              value={modForm.name}
              onChange={this.handleChange}/>
            <input
              type='text'
              name='modage'
              placeholder='Enter age'
              value={modForm.age}
              onChange={this.handleChange}/>
            <input
              type='text'
              name='modheight'
              placeholder='Enter height in "cm"'
              value={modForm.height}
              onChange={this.handleChange}/>
              <button onClick={this.submitHandle}></button>
          </form> */}
          </div>
          <div style={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
            {console.log(this.props)}
            {this.props.smurfs && this.props.smurfs.map(
              smurf=>{
                return(
                  <Card style={{ margin:'3%',width:'35%'}}>
                    <CardBody>
                      <CardText>
                        <span>name:</span>&nbsp; {smurf.name}<br/>
                        <span>age:</span>&nbsp; {smurf.age}<br/>
                        <span>height:</span>&nbsp; {smurf.height}<br/>


                      </CardText>
                    </CardBody>
                  </Card>
                )
              }
            )}
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

export default connect(mapStateToProps,{updateSmurf,fetchSmurfs,postSmurf})(App);
