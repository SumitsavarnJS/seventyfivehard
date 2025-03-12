import Navbar from "./components/Navbar"; // ✅ Import Client Component

export const metadata = {
  title: "75-Day Coding Challenge",
  description: "Showcase daily coding problems with solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ✅ Move interactive UI to Client Component */}
        {children}
      </body>
    </html>
  );
}
