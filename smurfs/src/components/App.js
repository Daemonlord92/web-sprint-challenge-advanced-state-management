import React, { useEffect } from "react";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import { getData } from "../actions";
import { connect } from 'react-redux'

import { addSmurf } from "../actions";

import "./App.css";
const App = (props) => {

    useEffect(() => {
        props.getData()
    }, [])

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
          <ol>
              { props.smurfs.map(smurf => <SmurfList name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id}/> )}
          </ol>
          <SmurfForm addSmurf = {props.addSmurf}/>
      </div>
    );
}

function mapStateToProps(state) {
    return {
        smurfs: state.smurfs,
        isDataLoading: state.isLoading,
        dataError: state.err
    }
}

export default connect(
    mapStateToProps,
    { getData, addSmurf }
) (App);