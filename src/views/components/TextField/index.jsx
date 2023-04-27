import React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

const TextFields = ({ required, value, onChange, type, width = '600px', height = '40px', label }) => {
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
          label={label}
        />
      </Box>
    </div>
  );
};

export default TextFields;
