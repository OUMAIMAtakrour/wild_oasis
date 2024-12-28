import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "the wild oasis",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo></Logo>
        </header>
        <Navigation />
        <main>{children}</main>
        <footer>copyright</footer>
      </body>
    </html>
  );
}
