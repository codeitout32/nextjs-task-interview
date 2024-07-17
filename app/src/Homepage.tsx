'use client';
import Image from 'next/image';
import PermanentDrawerLeft from './drawer';
import { Box, Paper, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import Dashboard from './Dashboard';
import Eggs from './Eggs';

export default function HomePage() {
  const [page, setPage] = useState('');
  return (
    <Box
      className="flex min-h-screen  justify-between "
      sx={{ backgroundColor: 'whitesmoke' }}
    >
      <PermanentDrawerLeft setPage={setPage} />
      {page == 'Dashboard' && <Dashboard />}

      {page == 'Eggs' && <Eggs />}
    </Box>
  );
}
