export const metadata = {
  title: "Productivity Islands",
  description: "Build a better island by doing meaningful work."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
