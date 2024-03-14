import "./globals.css";
import Header from "./(components)/Header";

export const metadata = {
  title: "TicketApp",
  description: "TicketApp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen max-h-screen">
          <Header />
          <div className="overflow-y-auto flex-grow bg-page text-default-text">
            {" "}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
