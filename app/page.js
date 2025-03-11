// app/page.js
import { Grid, Typography } from '@mui/material';
import ProblemCard from '../components/ProblemCard.js';

export default function Home() {
  // Example problem data; in a real app this might come from an API or JSON file.
  const problems = [
    {
      id: 'html-1',
      title: 'HTML Problem 1',
      section: 'HTML',
      thumbnail: '/images/html-problem1.png',
    },
    {
      id: 'css-1',
      title: 'CSS Problem 1',
      section: 'CSS',
      thumbnail: '/images/css-problem1.png',
    },
    // ...other problems
  ];

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Problems Overview
      </Typography>
      <Grid container spacing={2}>
        {problems.map((problem) => (
          <Grid item key={problem.id} xs={12} sm={6} md={4}>
            <ProblemCard problem={problem} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
