import './global.css';
import { Montserrat } from 'next/font/google';

export const metadata = {
  title: 'Welcome to kg-admin',
  description: 'Generated by create-nx-workspace',
};
const Monst = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Monst.className}>
      <body>{children}</body>
    </html>
  );
}