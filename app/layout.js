import "./globals.css";

export const metadata = {
  title: "Nextcent",
  description: "A community management platform for growing organizations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
