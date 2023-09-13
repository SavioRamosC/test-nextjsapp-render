import { ChildrenArrayProps } from '@/types/children-props';

export default function HomeGrid({ children }: ChildrenArrayProps) {
  return <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 min-h-screen py-20 px-20">{children}</main>;
}
