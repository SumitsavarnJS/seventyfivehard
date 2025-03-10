// components/BreadcrumbsNav.js
"use client";

import Link from 'next/link';
import { Breadcrumbs, Typography, Link as MUILink } from '@mui/material';
import { usePathname } from 'next/navigation';

export default function BreadcrumbsNav() {
  const pathname = usePathname(); // e.g., "/problems/html-1"
  const pathSegments = pathname.split('/').filter((seg) => seg);

  let cumulativePath = '';
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      <MUILink component={Link} href="/" underline="hover" color="inherit">
        Home
      </MUILink>
      {pathSegments.map((segment, index) => {
        cumulativePath += `/${segment}`;
        const isLast = index === pathSegments.length - 1;
        // Format the segment (e.g., replace dashes with spaces)
        const formattedSegment = segment.replace(/-/g, ' ');
        return isLast ? (
          <Typography key={cumulativePath} color="text.primary">
            {formattedSegment}
          </Typography>
        ) : (
          <MUILink
            key={cumulativePath}
            component={Link}
            href={cumulativePath}
            underline="hover"
            color="inherit"
          >
            {formattedSegment}
          </MUILink>
        );
      })}
    </Breadcrumbs>
  );
}
