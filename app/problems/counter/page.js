"use client";

import dynamic from "next/dynamic";
import counterCode from "./code";
import BreadcrumbsNav from "@/components/BreadcrumbsNav";

const CounterDemo = dynamic(() => import("./demo"), { ssr: false });

export default function CounterPage() {
  return (
    <div>
      <BreadcrumbsNav />
      <h1>Counter App</h1>
      <p>A simple counter using React useState.</p>

      <h2>Demo</h2>
      <CounterDemo />

      <h2>Code</h2>
      <pre>{counterCode}</pre>
    </div>
  );
}
