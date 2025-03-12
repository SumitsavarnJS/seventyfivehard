"use client"; // ✅ Required for interactive UI

import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = ["html", "css", "js", "react", "dom"];

export default function Navbar() {
  const pathname = usePathname(); // ✅ Get current route
  const currentTab = sections.findIndex((s) => pathname.includes(s));

  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <Tabs value={currentTab >= 0 ? currentTab : false} textColor="inherit">
          {sections.map((section) => (
            <Tab 
              key={section} 
              label={section.toUpperCase()} 
              component={Link} 
              href={`/${section}`} 
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
    </>
  );
}
