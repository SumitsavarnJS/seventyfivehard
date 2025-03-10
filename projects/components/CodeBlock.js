// components/CodeBlock.js
"use client";

import { Box, Typography } from '@mui/material';

export default function CodeBlock({ problemId }) {
  // Replace this with your actual code for the problem.
  const code = `// Example code for problem ${problemId}
function greet() {
  console.log("Hello, world!");
}

greet();`;

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 2, overflowX: 'auto' }}>
      <Typography variant="body2" component="pre" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
        {code}
      </Typography>
    </Box>
  );
}
