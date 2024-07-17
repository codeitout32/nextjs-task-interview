import { Box, Paper, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';

export default function Eggs() {
  return (
    <Paper sx={{ margin: '0 24px', width: '100%', padding: '24px' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h5" component="div">
          Egg list
        </Typography>

        <Box sx={{ display: 'flex' }}>
          <TextField
            id="outlined-basic"
            label="Search"
            type="search"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
      </Stack>
    </Paper>
  );
}
