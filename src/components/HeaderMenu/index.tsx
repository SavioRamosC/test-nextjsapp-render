interface MenuOptionsProps {
  isOpen: boolean;
}

export default function HeaderMenu({ isOpen }: MenuOptionsProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="h-1/4w-1/6">
      <ul className="absolute top-8 right-0 bg-tertiary border border-gray-300 rounded-md shadow-md">
        <li className="py-2 px-4 hover:bg-secondary rounded-t-md">Option 1</li>
        <li className="py-2 px-4 hover:bg-secondary ">Option 2</li>
        <li className="py-2 px-4 hover:bg-secondary rounded-b-md">Option 3</li>
      </ul>
    </div>
  );
}
