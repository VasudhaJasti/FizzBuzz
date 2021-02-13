import React, { useState } from "react";
import "./App.css";
import Output from "./Output";

class App extends React.Component {
  state = {
    inputArr: [], //stores all input arrays given by user
    inputTxt: "", //stores input value temperorily before add
  };

  onAddToArray = () => {
    //Adding input text to array
    this.setState((prevState) => ({
      inputArr: [...prevState.inputArr, prevState.inputTxt],
      inputTxt: "", //Empty the input after add the value into array
    }));
  };

  render() {
    const {inputArr, inputTxt} = this.state;
    return (
      <div className="container">
        <div className="input-wrapper">
          <h2>Enter Input here...</h2>
          {/* Visual Representaion of input array for user */}
          <p className="visual-array">
            [{inputArr.length > 0 ? inputArr.join(", ") : "Fill the Array"}]
          </p>
          {/* a form to handle input data which prevents default submit */}
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-box">
              {/* input elemrnt for adding array element */}
              <input
                onChange={(e) => this.setState({ inputTxt: e.target.value })}
                placeholder="Enter Array element one by one"
                value={inputTxt}
              />
              {/* button for adding input text to array */}
              <button onClick={this.onAddToArray}>Add value to Array</button>
            </div>
          </form>
        </div>
        {/* output and conditional strings for input will be in Output Component */}
        <Output inputArr={inputArr} />
      </div>
    );
  }
}

export default App;
