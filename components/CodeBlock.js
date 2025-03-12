import { Box, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ problemId }) {
  try {
    const code = require(`../problems/${problemId}.js`).default.toString();
    return (
      <Box>
        <Typography variant="h6">Code:</Typography>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {code}
        </SyntaxHighlighter>
      </Box>
    );
  } catch {
    return <Box>No code available</Box>;
  }
}
