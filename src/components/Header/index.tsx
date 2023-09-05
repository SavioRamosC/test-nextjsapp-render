import { useState } from 'react';
import HeaderMenu from '../HeaderMenu';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-primary text-white py-3">
      <ul className="flex">
        <li className="ml-auto transition duration-300 hover:bg-secondary py-2 px-12 rounded-lg cursor-pointer">
          <Link className="w-full h-full" href="/">
            Home
          </Link>
        </li>
        <li className="m-auto transition duration-300 hover:bg-secondary py-2 px-12 rounded-lg cursor-pointer">
          <Link className="w-full h-full" href="/">
            Posts
          </Link>
        </li>
        <li className="mr-auto transition duration-300 hover:bg-secondary py-2 px-12 rounded-lg cursor-pointer">
          <Link className="w-full h-full" href="/about">
            About
          </Link>
        </li>
        <li
          className="top-3 right-6 absolute transition duration-300 hover:bg-secondary py-2 px-2 rounded-lg cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
          <HeaderMenu isOpen={isMenuOpen} />
        </li>
      </ul>
    </header>
  );
}
