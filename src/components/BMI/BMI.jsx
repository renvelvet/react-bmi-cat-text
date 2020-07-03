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

function BMI() {
  const [result, setresult] = useState("");
  const [bmi, setbmi] = useState({
    height: 0,
    weight: 0,
  });

  const handleChange = (event) => {
    setbmi({ ...bmi, [event.target.name]: event.target.value });
  };
  const calculate = () => {
    let res = bmi.weight / (Math.pow(bmi.height, 2) * 0.0001);
    if (res < 17.0) {
      setresult("Kurus, kekurangan berat badan berat");
    } else if (res >= 17.0 && res <= 18.4) {
      setresult("Kurus, kekurangan berat badan ringan");
    } else if (res > 18.4 && res <= 25.0) {
      setresult("Normal");
    } else if (res > 25.0 && res <= 27.0) {
      setresult("Gemuk, kelebihan berat badan tingkat ringan");
    } else if (res > 27) {
      setresult("Gemuk, kelebihan berat badan tingkat berat");
    }
  };

  return (
    <Content>
      <Div>
        <Title>BMI Calculator</Title>
        <Input
          type="number"
          name="height"
          placeholder="Height in cm"
          onChange={handleChange}
        />
        <Input
          type="number"
          name="weight"
          placeholder="Weight in kg"
          onChange={handleChange}
        />
        <Button onClick={calculate}>Enter</Button>
      </Div>

      <h1>{result}</h1>
    </Content>
  );
}

export default BMI;
