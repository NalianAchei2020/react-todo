/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { TextField, Stack, Button } from '@mui/material';

const Home = () => {
  const form = useForm();
  const {
    register,
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
            {...register('task', {
              required: { value: true, message: 'Task is Required' },
            })}
          />
          <p className="error">{errors.task?.message}</p>
          <Button variant="contained">Add</Button>
        </Stack>
      </form>
    </div>
  );
};

export default Home;
