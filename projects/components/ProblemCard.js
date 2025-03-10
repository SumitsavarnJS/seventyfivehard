// components/ProblemCard.js
"use client";

import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ProblemMenu from './ProblemMenu.js';
import { useState } from 'react';

export default function ProblemCard({ problem }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ maxWidth: 345, position: 'relative' }}>
      <CardMedia
        component="img"
        height="140"
        image={problem.thumbnail} // path from public/images/...
        alt={problem.title}
      />
      <CardContent>
        <Typography variant="h6">{problem.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {problem.section}
        </Typography>
      </CardContent>
      <IconButton
        sx={{ position: 'absolute', top: 8, right: 8 }}
        onClick={handleMenuClick}
      >
        <MoreVertIcon />
      </IconButton>
      <ProblemMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        problemId={problem.id}
      />
    </Card>
  );
}
