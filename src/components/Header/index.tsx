import { useState } from 'react';
import HeaderMenu from '../HeaderMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-primary text-white py-3">
      <ul className="flex">
        <li className="ml-auto transition duration-300 hover:bg-secondary py-2 px-12 rounded-lg cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="m-auto transition duration-300 hover:bg-secondary py-2 px-12 rounded-lg cursor-pointer">
          <a href="/">Posts</a>
        </li>
        <li className="mr-auto transition duration-300 hover:bg-secondary py-2 px-12 rounded-lg cursor-pointer">
          <a href="/about">About</a>
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
