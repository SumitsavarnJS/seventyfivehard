// components/ProblemMenu.js
"use client";

import { Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function ProblemMenu({ anchorEl, open, onClose, problemId }) {
  const router = useRouter();

  const handleDemo = () => {
    onClose();
    router.push(`/problems/${problemId}?tab=demo`);
  };

  const handleCode = () => {
    onClose();
    router.push(`/problems/${problemId}?tab=code`);
  };

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      <MenuItem onClick={handleDemo}>Demo</MenuItem>
      <MenuItem onClick={handleCode}>Code</MenuItem>
    </Menu>
  );
}
