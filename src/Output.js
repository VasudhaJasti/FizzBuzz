import React from "react";

const Output = ({ inputArr }) => {  //Input Array prop from App.js
  const outputArr = []; //Initialization of output array
  inputArr.forEach((val) => {   //For loop for input array based on conditions and push to the output array
    if (isNaN(val) || !val) {   //if value is empty or it is not a number
      outputArr.push("Invalid Item");   
    } else if (val % 15 === 0) {    //If divided by both 3 and 5
      outputArr.push("FizzBuzz");
    } else if (val % 5 === 0) {     //If divided by 5
      outputArr.push("Buzz");
    } else if (val % 3 === 0) {     //If divided by 3
      outputArr.push("Fizz");
    } else {                        // If none of the conditions satisfy, means it is a number which is not divided either by 3 or 5
      outputArr.push(`Divided ${val} by 3`);    
      outputArr.push(`Divided ${val} by 5`);
    }
  });
  return (
    <div className="output-wrapper">
      <h2>Output</h2>
      <div>
          {/* looping of iutput message strings */}
        {outputArr.map((val, i) => (
          <div key={i.toString()} className="list-item">{val}</div>
        ))}
      </div>
    </div>
  );
};
export default Output;
