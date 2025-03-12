import dynamic from "next/dynamic";
import { Box } from "@mui/material";

export default function DemoBlock({ problemId }) {
  let Component;
  try {
    Component = dynamic(() => import(`../problems/${problemId}.js`));
  } catch {
    return <Box>No demo available</Box>;
  }
  return <Component />;
}
