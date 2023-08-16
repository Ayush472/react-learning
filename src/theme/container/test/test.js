import React, { useState,useRef } from "react";

export default function Test() {
  const [inputValue, setInputValue] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [result, setResult] = useState([]);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

//    const handleOptionChange = (event) => {
   
//     const selectedOption3 = event.target.value;
//     const ayush = ` {{${selectedOption3}: } }`
//     console.log(` { {${selectedOption3}: }}`);
//     setSelectedOption(selectedOption3);
//     let result
//     if (inputValue.length > 0 ) {
//         result = inputValue.concat(ayush)
//     //   result = [...inputValue, selectedOption3];
//     } else {
//       result = [ayush];
//     }
//     setInputValue(result);
//   };
  const handleOptionChange = () => {
    const optionText = `{${selectedOption}: }`;
    const cursorPosition = inputRef.current.selectionStart;
    const newValue = inputValue.slice(0, cursorPosition) + optionText + inputValue.slice(cursorPosition);
    console.log(newValue);
    setInputValue(newValue);
    inputRef.current.focus();
    inputRef.current.setSelectionRange(cursorPosition + optionText.length, cursorPosition + optionText.length);
  };

  const handleSubmit = () => {
    console.log(inputValue);
  };

  return (
    <div className="test">
      <input
        className="inputtest"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <select className="slect-test" onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="First Name">First Name</option>
        <option value="Last Name">Last Name</option>
        <option value="Date">Date</option>
        <option value="On">On</option>
        <option value="Mail Send Form">Mail Send Form</option>
      </select>
      <span className="span massage">41 Characters Remaining</span>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
