
"use client";

import { Breadcrumbs, Link, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

export default function BreadcrumbsNav({ currentTitle }) {
  const pathnames = usePathname().split("/").filter((x) => x);
  return (
    <Breadcrumbs>
      <Link href="/">Home</Link>
      {pathnames.map((name, index) => {
        const href = `/${pathnames.slice(0, index + 1).join("/")}`;
        return index === pathnames.length - 1 ? (
          <Typography key={name}>{currentTitle}</Typography>
        ) : (
          <Link key={name} href={href}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
