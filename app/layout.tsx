import "./globals.css";

export const metadata = {
  title: "Easy Todo App",
  description: "Easy Todo App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
