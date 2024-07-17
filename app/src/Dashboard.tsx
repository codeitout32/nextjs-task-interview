import { Box, Paper, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';

export default function Dashboard() {
  return (
    <Paper sx={{ margin: '0 24px', width: '100%', padding: '24px' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h5" component="div">
          Current Stats
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

      <Stack sx={{ my: 1 }} direction="row" justifyContent="space-between">
        {[
          { name: 'Eggs', color: 'red', count: '3755' },
          { name: 'Spices', color: 'green', count: '3755' },
          { name: 'Nest', color: 'blue', count: '3755' },
          { name: 'Nursary', color: 'orange', count: '3755' },
        ].map((o) => (
          <Paper sx={{ display: 'flex' }}>
            <Box>
              <InboxIcon />
            </Box>
            <Box>
              <Typography variant="h6" component="div" sx={{ color: o.color }}>
                {o.count}
              </Typography>
              <Typography variant="h6" component="div">
                Total {o.name}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Paper>
  );
}
