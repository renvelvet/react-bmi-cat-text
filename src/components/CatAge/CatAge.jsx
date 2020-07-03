import React, { useState } from "react";

import styled from "styled-components";
const Content = styled.div`
  margin: 150px;
  text-align: center;
  font-family: "Roboto Condensed", sans-serif;
`;
const Title = styled.p`
  font-size: 22px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
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

function CatAge() {
  const [result, setresult] = useState(0);
  const [age, setage] = useState(0);

  const handleChange = (event) => {
    setage(event.target.value);
  };
  const calculate = () => {
    if (age === 1) {
      setresult(15);
    } else if (age === 2) {
      setresult(24);
    } else if (age >= 3) {
      setresult(24 + (age - 2) * 4);
    }
  };

  return (
    // <div>
    <Content>
      <Div>
        <Title>Cat Age Conversion</Title>
        <Input
          type="text"
          name="age"
          placeholder="Cat Age"
          onChange={handleChange}
        />
        <Button onClick={calculate}>Enter</Button>
      </Div>

      <h1>{result}</h1>
    </Content>

    // </div>
  );
}
export default CatAge;
