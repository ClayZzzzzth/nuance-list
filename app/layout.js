import './globals.css';

export const metadata = {
  title: 'Nuance List Demo',
  description: 'Demo app bootstrapped for product iteration',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
