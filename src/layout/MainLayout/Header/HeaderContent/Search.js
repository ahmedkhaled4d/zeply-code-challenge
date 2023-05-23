// material-ui
import { Box, Typography, FormControl, InputAdornment, OutlinedInput, CircularProgress } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    console.log(text);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setError(`invalid search for ${text}`);
    }, 1000);
  };

  return (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
      {loading && <CircularProgress />}
      <FormControl sx={{ width: { xs: '100%', md: 500 } }}>
        <OutlinedInput
          size="small"
          id="header-search"
          startAdornment={
            <InputAdornment position="start" sx={{ mr: -0.5 }}>
              <SearchOutlined />
            </InputAdornment>
          }
          value={text}
          aria-describedby="header-search-text"
          inputProps={{
            'aria-label': 'weight'
          }}
          onChange={handleChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
          placeholder="Search for Transactions, Addresses and Blocks ...."
        />
        {error && (
          <Typography color="error" variant="h5">
            {error}
          </Typography>
        )}
      </FormControl>
    </Box>
  );
};

export default Search;
