import React, { useState } from "react";

import styled from "styled-components";
const Content = styled.div`
  margin: 50px;
  text-align: center;
  font-family: "Roboto Condensed", sans-serif;
`;
const Title = styled.p`
  font-size: 22px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  border: 0;
  padding: 10px;
  font-size: 18px;
  background-color: #ffa;
  margin: 10px;
`;
const Button = styled.button`
  background: purple;
  color: white;
  font-size: 20px;
`;

function TextTransform() {
  const [res, setRes] = useState("");
  const [textInput, setTextInput] = useState("");

  const handleChangeText = (event) => {
    setTextInput(event.target.value);
  };

  const check = () => {
    let str = textInput;

    let strArray = str.split("");
    let finalStr = strArray.map((char) => {
      if (/[a-z]/.test(char)) {
        char = char.toUpperCase();
      } else {
        char = char.toLowerCase();
      }
      return char;
    });
    finalStr = finalStr.join("");
    setRes(finalStr);
  };
  return (
    // <div>
    <Content>
      <Div>
        <Title>Text Transform App</Title>
        <Input
          type="text"
          name="textInput"
          placeholder="Input Your Text Here"
          onChange={handleChangeText}
        />
        <Button type="button" onClick={check}>
          Enter
        </Button>
      </Div>

      <h1>{res}</h1>
    </Content>

    // </div>
  );
}
export default TextTransform;
