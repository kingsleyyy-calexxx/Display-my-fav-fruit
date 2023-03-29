import React from "react";
import {
  TextField,
  InputLabel,
  Select,
  Button,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  const Name = (event) => {
    setName(event.target.value);
  };

  const Fruit = (event) => {
    setFruit(event.target.value);
  };

  const DisplayMsg = (event) => {
    event.preventDefault();
    alert(`Hi ${name}! I'm happy that you love ${fruit}`);
  };
  return (
    <div>
      <h1>Choose your Favorite Fruit:</h1>
      <TextField
        id="inp"
        placeholder="Enter your Name:"
        label="Name"
        onChange={Name}
        value={name}
      ></TextField>
      <br/>
      <br/>
      <FormControl fullWidth>
        <InputLabel id="fruit">Choose your most Favorite fruit:</InputLabel>
        <Select labelId="fruit" id="fruit1" value={fruit} onChange={Fruit} variant='outlined'>
          <MenuItem disabled value="">
            Choose your most Favorite fruit:
          </MenuItem>
          <MenuItem value="Apple">Apple</MenuItem>
          <MenuItem value="Banana">Banana</MenuItem>
          <MenuItem value="Cherry">Cherry</MenuItem>
          <MenuItem value="Durian">Durian</MenuItem>
          <MenuItem value="Elderberry">Elderberry</MenuItem>
        </Select>
      </FormControl>
      <br/>
      <br/>
      <Button type="submit" onClick={DisplayMsg}>
        Submit
      </Button>
    </div>
  );
}