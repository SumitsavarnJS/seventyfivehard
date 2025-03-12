import { useState } from "react";
import { Button, Typography } from "@mui/material";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Typography variant="h4">{count}</Typography>
      <Button variant="contained" onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
}
