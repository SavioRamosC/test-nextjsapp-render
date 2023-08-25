export default function Header() {
  return (
    <header className="bg-primary text-white py-4">
      <ul className="flex">
        <li className="ml-auto transition duration-300 hover:bg-secondary py-4 px-12 rounded-lg">
          <a href="/">Home</a>
        </li>
        <li className="m-auto transition duration-300 hover:bg-secondary py-4 px-12 rounded-lg">
          <a href="/">Posts</a>
        </li>
        <li className="mr-auto transition duration-300 hover:bg-secondary py-4 px-12 rounded-lg">
          <a href="/about">About</a>
        </li>
      </ul>
    </header>
  );
}
