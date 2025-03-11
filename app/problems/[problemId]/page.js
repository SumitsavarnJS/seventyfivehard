// app/problems/[problemId]/page.js
"use client";

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Box, Tabs, Tab, Typography, Breadcrumbs, Link as MUILink } from '@mui/material';
import Link from 'next/link';
import DemoComponent from '../../../components/DemoComponent.js';
import CodeBlock from '../../../components/CodeBlock.js';

export default function ProblemDetail({ params }) {
  const { problemId } = params;
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') === 'code' ? 1 : 0;
  const [tabIndex, setTabIndex] = useState(initialTab);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <MUILink component={Link} href="/" underline="hover" color="inherit">
          Home
        </MUILink>
        <MUILink component={Link} href="/" underline="hover" color="inherit">
          Problems
        </MUILink>
        <Typography color="text.primary">{problemId}</Typography>
      </Breadcrumbs>
      <Typography variant="h4" gutterBottom>
        {problemId}
      </Typography>
      <Tabs value={tabIndex} onChange={handleChange}>
        <Tab label="Demo" />
        <Tab label="Code" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {tabIndex === 0 && (
          // Render your interactive demo. You can customize DemoComponent per problem.
          <DemoComponent problemId={problemId} />
        )}
        {tabIndex === 1 && (
          // Render your code view. CodeBlock could receive a code snippet (as a string) or fetch it.
          <CodeBlock problemId={problemId} />
        )}
      </Box>
    </Box>
  );
}
