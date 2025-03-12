"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import counterCode from "./code";
import BreadcrumbsNav from "@/components/BreadcrumbsNav";
import { Button, Dialog, DialogTitle, DialogContent } from "@mui/material";

const CounterDemo = dynamic(() => import("./demo"), { ssr: false });

export default function CounterPage() {
  const [openDemo, setOpenDemo] = useState(false);
  const [openCode, setOpenCode] = useState(false);

  return (
    <div>
      <BreadcrumbsNav />
      <h1>Counter App</h1>
      <p>A simple counter using React useState.</p>

      {/* Buttons for Demo & Code */}
      <Button variant="contained" color="primary" onClick={() => setOpenDemo(true)}>View Demo</Button>
      <Button variant="outlined" color="secondary" onClick={() => setOpenCode(true)} style={{ marginLeft: 10 }}>View Code</Button>

      {/* Demo Dialog */}
      <Dialog open={openDemo} onClose={() => setOpenDemo(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Live Demo</DialogTitle>
        <DialogContent>
          <CounterDemo />
        </DialogContent>
      </Dialog>

      {/* Code Dialog */}
      <Dialog open={openCode} onClose={() => setOpenCode(false)} maxWidth="md" fullWidth>
        <DialogTitle>Code</DialogTitle>
        <DialogContent>
          <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{counterCode}</pre>
        </DialogContent>
      </Dialog>
    </div>
  );
}
