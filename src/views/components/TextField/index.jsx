import React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

const TextFields = ({ required, value, onChange, type, width = '600px', height = '40px', placeholder }) => {
  return (
    <div className='text-base font-barlow font-medium'>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { width: width, height: height, marginTop: '20px' }
        }}
        autoComplete='off'
      >
        <TextField
          size='small'
          value={value}
          onChange={onChange}
          required={required ?? null}
          type={type}
          placeholder={placeholder}
        />
      </Box>
    </div>
  );
};

export default TextFields;
