// app/layout.js
import AppBarTop from '../components/AppBar';
import BreadcrumbsNav from '../components/BreadcrumbsNav';
import { CssBaseline, Container } from '@mui/material';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <AppBarTop /> {/* This is your top navigation with section links */}
        <Container sx={{ mt: 10 }}>
          <BreadcrumbsNav />
          {children}
        </Container>
      </body>
    </html>
  );
}
