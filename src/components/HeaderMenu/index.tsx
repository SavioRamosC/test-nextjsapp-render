interface MenuOptionsProps {
  isOpen: boolean;
}

export default function HeaderMenu({ isOpen }: MenuOptionsProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <ul className="w-64 flex flex-col absolute top-8 right-0 bg-tertiary border border-gray-300 rounded-md shadow-md">
      <li className="py-2 px-4 hover:bg-secondary rounded-t-md">My Account</li>
      <li className="py-2 px-4 hover:bg-secondary ">Privacy</li>
      <li className="py-2 px-4 hover:bg-secondary rounded-b-md">Settings</li>
    </ul>
  );
}
