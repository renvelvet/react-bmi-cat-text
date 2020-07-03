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

function CatAge() {
  const [res, setRes] = useState(0);
  const [age, setAge] = useState(0);

  const handleChangeCat = (event) => {
    setAge(event.target.value);
    console.log(age);
  };

  const calAge = () => {
    if (age === "1") {
      setRes(15);
      console.log(res);
    } else if (age === "2") {
      setRes(24);
    } else if (age >= 3) {
      setRes(24 + (age - 2) * 4);
    }
  };

  return (
    // <div>
    <Content>
      <Div>
        <Title>Cat Age Conversion</Title>
        <Input
          type="number"
          name="age"
          placeholder="Cat Age"
          onChange={handleChangeCat}
        />
        <Button type="button" onClick={calAge}>
          Enter
        </Button>
      </Div>

      <h1>{res}</h1>
    </Content>

    // </div>
  );
}
export default CatAge;
