import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SingleDropdown = ({ value, width = 120, size='small', handleChange, mt = 2 }) => {
  return (
    <FormControl sx={{mt: mt, minWidth: width }} size={size}>
      <InputLabel>Size</InputLabel>
      <Select value={value} label='Size' onChange={handleChange}>
        <MenuItem value={1}>50ml</MenuItem>
        <MenuItem value={2}>100ml</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SingleDropdown;
