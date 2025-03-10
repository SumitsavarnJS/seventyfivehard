// components/AppBar.js
"use client";

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

const sections = [
  { label: 'HTML', href: '/sections/html' },
  { label: 'CSS', href: '/sections/css' },
  { label: 'JS', href: '/sections/js' },
  { label: 'React', href: '/sections/react' },
  { label: 'DOM', href: '/sections/dom' },
];

export default function AppBarTop() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          75 Days Challenge
        </Typography>
        {sections.map((section) => (
          <Button key={section.label} color="inherit" component={Link} href={section.href}>
            {section.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
