// components/DemoComponent.js
"use client";

import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function DemoComponent({ problemId }) {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Interactive Demo for {problemId}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Count: {count}
      </Typography>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </Box>
  );
}
