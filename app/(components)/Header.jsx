import Link from "next/link";
import { FaHome, FaTicketAlt } from "react-icons/fa";
const Header = () => {
  return (
    <header className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FaHome className="icon" />
        </Link>
        <Link href="/ticket-page/new">
          <FaTicketAlt className="icon" />
        </Link>
      </div>

      <div>
        <p className="text-default-text">Ahmet</p>
      </div>
    </header>
  );
};

export default Header;
