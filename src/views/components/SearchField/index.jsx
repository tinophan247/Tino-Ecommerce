import { FormControl, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchField = () => {
  return (
    <div>
      <FormControl
        sx={{
          '& .MuiTextField-root': { width: 700, backgroundColor: 'white' }
        }}
      >
        <TextField
          variant='outlined'
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
          placeholder='Tìm kiếm...'
        />
      </FormControl>
    </div>
  );
};

export default SearchField;
