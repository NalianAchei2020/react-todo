import React from 'react';
import { TextField, Stack, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
const Home = () => {
  return (
    <div>
      <from>
        <Stack spacing={2} width={400}>
          <TextField label="Enter task" variant="outline" />
          <Button variant="contained">Add</Button>
        </Stack>
      </from>
    </div>
  );
};

export default Home;
