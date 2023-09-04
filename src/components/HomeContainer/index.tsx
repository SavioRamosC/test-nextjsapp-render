import { ChildrenArrayProps } from '@/types/children-props';

export default function HomeContainer({ children }: ChildrenArrayProps) {
  return <main className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3 min-h-screen py-20 px-20">{children}</main>;
}

{
  /* <main className="m-auto grid grid-cols-2  gap-4 py-20 px-64">{children}</main> */
}
