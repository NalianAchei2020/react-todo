import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Stack, Button } from '@mui/material';

const Home = () => {
  const form = useForm();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;
  return (
    <div>
      <form>
        <Stack spacing={2} width={400}>
          <TextField
            label="Enter task"
            variant="outlined"
            type="text"
            {...register('task')}
          />
          <Button variant="contained">Add</Button>
        </Stack>
      </form>
    </div>
  );
};

export default Home;
